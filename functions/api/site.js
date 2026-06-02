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
    "CREATE TABLE IF NOT EXISTS site_state (",
    "  id INTEGER PRIMARY KEY CHECK (id = 1),",
    "  state_json TEXT NOT NULL,",
    "  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP",
    ");"
  ].join("\n")).run();
}

export async function onRequestGet(context) {
  if (!context.env.DB) {
    return json({ state: null, database: "unbound" });
  }

  await ensureSchema(context.env.DB);
  const row = await context.env.DB
    .prepare("SELECT state_json FROM site_state WHERE id = 1;")
    .first();

  return json({
    state: row ? JSON.parse(row.state_json) : null,
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
    const stateJson = JSON.stringify(payload.state || payload);

    await context.env.DB.prepare([
      "INSERT INTO site_state (id, state_json, updated_at)",
      "VALUES (1, ?, CURRENT_TIMESTAMP)",
      "ON CONFLICT(id) DO UPDATE SET",
      "state_json = excluded.state_json, updated_at = CURRENT_TIMESTAMP;"
    ].join(" ")).bind(stateJson).run();

    return json({ ok: true });
  } catch (error) {
    return json({ ok: false, error: "Invalid site state" }, 400);
  }
}
