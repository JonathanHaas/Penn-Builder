const childProcess = require("child_process");
const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const rootDir = __dirname;
const dataDir = path.join(rootDir, "data");
const uploadsDir = path.join(rootDir, "uploads");
const dbPath = path.join(dataDir, "cms.sqlite");
const port = Number(process.env.PORT || 4175);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function ensureStorage() {
  ensureDirectory(dataDir);
  ensureDirectory(uploadsDir);
  runSql([
    "CREATE TABLE IF NOT EXISTS site_state (",
    "  id INTEGER PRIMARY KEY CHECK (id = 1),",
    "  state_json TEXT NOT NULL,",
    "  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP",
    ");",
    "CREATE TABLE IF NOT EXISTS assets (",
    "  id TEXT PRIMARY KEY,",
    "  filename TEXT NOT NULL,",
    "  original_name TEXT,",
    "  mime_type TEXT,",
    "  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP",
    ");"
  ].join("\n"));
}

function ensureDirectory(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
  }
}

function runSql(sql) {
  return childProcess.execFileSync("sqlite3", [dbPath, sql], { encoding: "utf8" });
}

function quoteSql(value) {
  return "'" + String(value).replace(/'/g, "''") + "'";
}

function readRequestBody(request, callback) {
  var chunks = [];
  var size = 0;
  request.on("data", function(chunk) {
    size += chunk.length;
    if (size > 25 * 1024 * 1024) {
      request.destroy();
      return;
    }
    chunks.push(chunk);
  });
  request.on("end", function() {
    callback(Buffer.concat(chunks).toString("utf8"));
  });
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function sendNotFound(response) {
  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Not found");
}

function handleApi(request, response, pathname) {
  if (pathname === "/api/health") {
    sendJson(response, 200, { ok: true, database: "sqlite" });
    return;
  }

  if (pathname === "/api/site" && request.method === "GET") {
    var output = runSql("SELECT state_json FROM site_state WHERE id = 1;");
    var trimmed = output.trim();
    sendJson(response, 200, { state: trimmed ? JSON.parse(trimmed) : null });
    return;
  }

  if (pathname === "/api/site" && request.method === "POST") {
    readRequestBody(request, function(body) {
      try {
        var payload = JSON.parse(body || "{}");
        var stateJson = JSON.stringify(payload.state || payload);
        runSql([
          "INSERT INTO site_state (id, state_json, updated_at)",
          "VALUES (1, " + quoteSql(stateJson) + ", CURRENT_TIMESTAMP)",
          "ON CONFLICT(id) DO UPDATE SET",
          "state_json = excluded.state_json, updated_at = CURRENT_TIMESTAMP;"
        ].join(" "));
        sendJson(response, 200, { ok: true });
      } catch (error) {
        sendJson(response, 400, { ok: false, error: "Invalid site state" });
      }
    });
    return;
  }

  if (pathname === "/api/assets" && request.method === "GET") {
    var rows = runSql("SELECT id, filename, original_name, mime_type, created_at FROM assets ORDER BY created_at DESC;");
    var assets = rows.trim() ? rows.trim().split("\n").map(function(row) {
      var parts = row.split("|");
      return {
        id: parts[0],
        url: "uploads/" + parts[1],
        originalName: parts[2],
        mimeType: parts[3],
        createdAt: parts[4]
      };
    }) : [];
    sendJson(response, 200, { assets: assets });
    return;
  }

  if (pathname === "/api/assets" && request.method === "POST") {
    readRequestBody(request, function(body) {
      try {
        var payload = JSON.parse(body || "{}");
        var dataUrl = String(payload.dataUrl || "");
        var match = dataUrl.match(/^data:([^;,]+)?;base64,(.*)$/);
        if (!match) {
          sendJson(response, 400, { ok: false, error: "Expected base64 dataUrl" });
          return;
        }

        var mimeType = match[1] || "application/octet-stream";
        var extension = mimeType === "image/png" ? "png" : mimeType === "image/webp" ? "webp" : mimeType === "image/gif" ? "gif" : "jpg";
        var id = crypto.randomBytes(12).toString("hex");
        var filename = id + "." + extension;
        fs.writeFileSync(path.join(uploadsDir, filename), Buffer.from(match[2], "base64"));
        runSql([
          "INSERT INTO assets (id, filename, original_name, mime_type)",
          "VALUES (" + quoteSql(id) + ", " + quoteSql(filename) + ", " + quoteSql(payload.name || "") + ", " + quoteSql(mimeType) + ");"
        ].join(" "));
        sendJson(response, 200, { ok: true, id: id, url: "uploads/" + filename });
      } catch (error) {
        sendJson(response, 400, { ok: false, error: "Invalid asset upload" });
      }
    });
    return;
  }

  sendNotFound(response);
}

function serveStatic(request, response, pathname) {
  var safePath = pathname === "/" ? "/index.html" : pathname;
  var filePath = path.normalize(path.join(rootDir, safePath));

  if (filePath.indexOf(rootDir) !== 0) {
    sendNotFound(response);
    return;
  }

  fs.stat(filePath, function(error, stats) {
    if (error || !stats.isFile()) {
      sendNotFound(response);
      return;
    }

    var ext = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": ext === ".html" ? "no-store" : "public, max-age=60"
    });
    fs.createReadStream(filePath).pipe(response);
  });
}

ensureStorage();

http.createServer(function(request, response) {
  var parsed = url.parse(request.url);
  var pathname = decodeURIComponent(parsed.pathname || "/");

  if (pathname.indexOf("/api/") === 0) {
    handleApi(request, response, pathname);
    return;
  }

  serveStatic(request, response, pathname);
}).listen(port, function() {
  console.log("Penn Builder CMS running at http://127.0.0.1:" + port + "/");
});
