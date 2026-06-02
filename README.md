# Penn Builder

Penn Builder is a static website builder prototype for composing a Penn-inspired site from editable sections, themes, typefaces, grouped navigation, parallax backgrounds, and packaged HTML exports.

Run the app locally through the CMS server so the builder saves to SQLite instead of only browser `localStorage`. No build step or framework install is required.

## Requirements

- Any modern browser
- `nvm`
- Node `24.15.0`, pinned in `.nvmrc`
- npm, included with Node
- The system `sqlite3` command

There are currently no npm package dependencies to install.

## Install NVM

If `nvm` is not installed, install it with:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Then restart your terminal, or load it in the current shell:

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

## First-Time Setup

From the project folder:

```sh
cd "/Users/haasj/Documents/Projects/penn-builder"
nvm install
nvm use
node -v
npm -v
sqlite3 --version
```

Expected Node version:

```text
v24.15.0
```

## Run Locally As A CMS

Start the local Node + SQLite CMS server:

```sh
cd "/Users/haasj/Documents/Projects/penn-builder"
nvm use
node server.js
```

The project is pinned to Node `24.15.0` in `.nvmrc`.

Then open:

```text
http://127.0.0.1:4175/
```

When opened through the CMS server, the builder loads and saves state through `/api/site` into `data/cms.sqlite`. `localStorage` remains available as a fallback.

Local CMS files:

```text
data/cms.sqlite
uploads/
```

These are ignored by Git because they are local runtime data.

Useful local checks:

```sh
curl http://127.0.0.1:4175/api/health
curl http://127.0.0.1:4175/api/site
sqlite3 data/cms.sqlite ".tables"
```

Expected health response:

```json
{"ok":true,"database":"sqlite"}
```

## Optional Static Preview

The static preview still works, but it does not use the CMS backend.

```sh
cd "/Users/haasj/Documents/Projects/penn-builder"
python3 -m http.server 4174
```

Then open:

```text
http://127.0.0.1:4174/
```

## Deploy To Cloudflare Pages

This folder includes Cloudflare Pages Functions for `/api/site`, `/api/assets`, and `/api/health`.

Use these GitHub-connected Pages settings:

```text
Root directory: /
Framework preset: None
Build command: exit 0
Build output directory: /
```

For shared CMS storage on Cloudflare, bind a D1 database to the Pages project with the variable name `DB`.

See [Cloudflare Pages Deployment](docs/CLOUDFLARE_PAGES.md).

## What Is Included

- `index.html`: app shell and editor controls
- `styles.css`: studio UI and generated preview styling
- `script.js`: builder state, layout rendering, export, ZIP download, and interactions
- `assets/`: Penn building, campus life, research, and logo images
- `functions/`: Cloudflare Pages API routes for deployed CMS storage
- `docs/`: project documentation

## Key Capabilities

- Brand identity controls
- Theme palette and typeface controls
- Primary and secondary typefaces
- Add, remove, reorder, and group sections
- Group navigation with anchor links
- Optional group parallax images
- Multiple editable layouts
- Per-button and per-item URLs
- External-link icon toggle
- Export HTML
- Download a ZIP containing `index.html` and packaged assets

## Documentation

Start with:

- [Project Brief](docs/PROJECT_BRIEF.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Layouts](docs/LAYOUTS.md)
- [Groups And Navigation](docs/GROUPS_AND_NAVIGATION.md)
- [Export And Assets](docs/EXPORT_AND_ASSETS.md)
- [State Model](docs/STATE_MODEL.md)
- [CMS Backend](docs/CMS_BACKEND.md)
- [Cloudflare Pages Deployment](docs/CLOUDFLARE_PAGES.md)
- [Assets](assets/README.md)
