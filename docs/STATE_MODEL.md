# State Model

All editable data lives in a single JavaScript state object.

## Top-Level State

```js
{
  previewId,
  siteTitle,
  tagline,
  palette,
  font,
  secondaryFont,
  radius,
  externalLinkIcons,
  groups,
  selectedId,
  sections
}
```

## Sections

Sections are ordered. Dragging in Structure changes this order.

Common section fields:

```js
{
  id,
  groupId,
  layout,
  label,
  heading,
  body,
  visible
}
```

Layout-specific fields are added as needed.

Examples:

```js
{
  buttonText,
  buttonUrl,
  heroImage,
  heroImagePosition
}
```

```js
{
  cardColumns,
  cardItems
}
```

```js
{
  eventItems
}
```

## Groups

Groups control navigation and parallax containers.

```js
{
  id,
  label,
  navTitle,
  visibleInNav,
  parallaxImage
}
```

## Migration Helpers

The script includes normalization helpers for older saved state:

- Missing groups are created from defaults.
- Missing section `groupId` values are assigned based on section type.
- Missing button URLs use `https://www.upenn.edu`.
- Old layout labels are normalized.
- Old broken preview images are replaced with local Penn assets.
