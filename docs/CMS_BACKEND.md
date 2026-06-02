# CMS Backend

The project includes a local CMS backend for SQLite-backed editing.

## Run Locally

```sh
cd "/Users/haasj/Documents/Projects/penn-builder"
nvm use
node server.js
```

Then open:

```text
http://127.0.0.1:4175/
```

## Storage

The backend uses SQLite through the system `sqlite3` command.

Database file:

```text
data/cms.sqlite
```

Uploaded assets:

```text
uploads/
```

These paths are ignored by Git because they are local runtime data.

## Local Checks

```sh
curl http://127.0.0.1:4175/api/health
curl http://127.0.0.1:4175/api/site
sqlite3 data/cms.sqlite ".tables"
```

Expected health response:

```json
{"ok":true,"database":"sqlite"}
```

## API

### Health

```http
GET /api/health
```

### Site State

```http
GET /api/site
POST /api/site
```

The current first version stores the full builder state as JSON in SQLite. That preserves the existing frontend model while moving persistence out of `localStorage`.

### Assets

```http
GET /api/assets
POST /api/assets
```

The asset endpoint accepts JSON with a base64 `dataUrl` and stores the image in `uploads/`. The current editor still stores uploaded images in site JSON, but this endpoint is ready for the next step: switching image uploads from data URLs to file URLs.

## Notes

- The static builder still works from `index.html`, but CMS storage is only active when served through `server.js`.
- When served through `server.js`, the frontend loads/saves through `/api/site`.
- `localStorage` remains as a local fallback.
- Cloudflare Pages deployment uses `functions/api/*` with a D1 binding named `DB`; see `CLOUDFLARE_PAGES.md`.
