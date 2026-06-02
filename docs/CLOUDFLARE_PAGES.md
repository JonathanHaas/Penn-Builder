# Cloudflare Pages Deployment

Penn Builder is ready for GitHub-connected Cloudflare Pages deployment.

## Recommended Pages Settings

In Cloudflare Pages, connect the GitHub repository and use these settings:

```text
Production branch: main
Root directory: /
Framework preset: None
Build command: exit 0
Build output directory: /
```

This deploys `index.html`, `styles.css`, `script.js`, `assets/`, and the `functions/` API routes.

## CMS Storage On Cloudflare

The local `server.js` uses SQLite on your computer. Cloudflare Pages cannot run that Node server or write to that local SQLite file.

For deployed CMS storage, use Cloudflare D1:

1. In Cloudflare, create a D1 database, for example `penn-builder-cms`.
2. Open the Pages project.
3. Go to `Settings > Bindings`.
4. Add a D1 database binding.
5. Set the variable name to `DB`.
6. Select the D1 database.
7. Redeploy the Pages project.

The included Pages Functions use the `DB` binding for:

```text
GET  /api/health
GET  /api/site
POST /api/site
GET  /api/assets
POST /api/assets
```

The schema is created automatically on first request.

This project includes a committed `wrangler.toml` with the D1 binding:

```text
binding = "DB"
database_name = "penn-builder-cms"
```

Cloudflare Pages reads that binding on deployment.

## Without D1

The site still deploys and runs without the D1 binding. In that mode, the builder falls back to browser `localStorage`, so the public app works but shared CMS storage is off.

## Faster Deploys

For this project, the fastest GitHub-connected Pages setup is:

```text
Root directory: /
Framework preset: None
Build command: exit 0
Build output directory: /
```

This avoids framework installs and build work because the project is already static HTML, CSS, JavaScript, assets, and Pages Functions.

Cloudflare also offers build caching and Direct Uploads:

- Build caching helps projects with dependency installs or generated output. It is less important here because there is no real build step.
- Direct Upload with Wrangler can be faster for prebuilt assets, but it is a separate deployment workflow from the GitHub integration. Keep the GitHub integration if you want Cloudflare to deploy automatically after every push.

## Local Development Choices

Static-only local preview:

```sh
cd "/Users/haasj/Documents/Projects/penn-builder"
python3 -m http.server 4174
```

Local Node + SQLite CMS:

```sh
cd "/Users/haasj/Documents/Projects/penn-builder"
node server.js
```

Cloudflare-style local preview with Functions requires Wrangler:

```sh
cd "/Users/haasj/Documents/Projects/penn-builder"
npx wrangler pages dev . --d1 DB=<database-id>
```

For image-heavy production CMS usage, Cloudflare R2 is the better long-term home for uploaded image files. The current Cloudflare function keeps API compatibility and stores uploaded asset data in D1 when used.
