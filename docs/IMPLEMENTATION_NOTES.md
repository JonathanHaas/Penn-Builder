# Implementation Notes

## No Build Step

This project is deliberately framework-free. It can be opened directly or served statically.

## Important Functions

- `loadState()`: loads and migrates saved state
- `render()`: updates controls, structure, inspector, and preview
- `renderInspector()`: adapts fields to the selected section
- `buildSiteHtml(includeHidden)`: builds the preview/export site body
- `buildGroupedSectionsHtml(includeHidden)`: wraps sections by group
- `buildSectionHtml(section)`: renders an individual section
- `buildExportDocument()`: creates standalone HTML output
- `buildZipExport(html)`: packages HTML and images into a ZIP
- `updateParallax()`: updates group parallax image offsets

## URL Defaults

Button URLs, card title URLs, and event title URLs fall back to:

```text
https://www.upenn.edu
```

## Accessibility Notes

- Parallax respects `prefers-reduced-motion`.
- Decorative parallax images use empty alt text and `aria-hidden`.
- Video iframes include titles.
- Resource and footer navigation areas use labels.

## Known Tradeoffs

- The preview is rendered in the same document as the editor, not in an iframe.
- Export CSS is generated inside `script.js`, so style changes often need to be mirrored in `styles.css` and export CSS.
- ZIP creation is implemented directly in browser JavaScript to avoid dependencies.
