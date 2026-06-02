function json(payload, status) {
  return new Response(JSON.stringify(payload), {
    status: status || 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

export function onRequestGet(context) {
  return json({
    ok: true,
    database: context.env.DB ? "d1" : "unbound"
  });
}
