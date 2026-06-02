function json(payload, status) {
  return new Response(JSON.stringify(payload), {
    status: status || 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

async function ensureSchema(db) {
  await db.prepare([
    "CREATE TABLE IF NOT EXISTS assets (",
    "  id TEXT PRIMARY KEY,",
    "  url TEXT NOT NULL,",
    "  original_name TEXT,",
    "  mime_type TEXT,",
    "  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP",
    ");"
  ].join("\n")).run();
}

export async function onRequestGet(context) {
  if (!context.env.DB) {
    return json({ assets: [], database: "unbound" });
  }

  await ensureSchema(context.env.DB);
  const result = await context.env.DB
    .prepare("SELECT id, url, original_name, mime_type, created_at FROM assets ORDER BY created_at DESC;")
    .all();

  return json({
    assets: result.results.map(function(asset) {
      return {
        id: asset.id,
        url: asset.url,
        originalName: asset.original_name,
        mimeType: asset.mime_type,
        createdAt: asset.created_at
      };
    }),
    database: "d1"
  });
}

export async function onRequestPost(context) {
  if (!context.env.DB) {
    return json({
      ok: false,
      error: "Cloudflare D1 binding DB is not configured."
    }, 503);
  }

  try {
    await ensureSchema(context.env.DB);
    const payload = await context.request.json();
    const dataUrl = String(payload.dataUrl || "");
    const match = dataUrl.match(/^data:([^;,]+)?;base64,/);

    if (!match) {
      return json({ ok: false, error: "Expected base64 dataUrl" }, 400);
    }

    const id = crypto.randomUUID();
    const mimeType = match[1] || "application/octet-stream";

    await context.env.DB.prepare([
      "INSERT INTO assets (id, url, original_name, mime_type)",
      "VALUES (?, ?, ?, ?);"
    ].join(" ")).bind(id, dataUrl, payload.name || "", mimeType).run();

    return json({ ok: true, id: id, url: dataUrl });
  } catch (error) {
    return json({ ok: false, error: "Invalid asset upload" }, 400);
  }
}
