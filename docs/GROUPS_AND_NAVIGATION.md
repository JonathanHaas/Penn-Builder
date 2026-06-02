# Groups And Navigation

Groups organize sections into larger page areas. They drive header navigation and optional parallax backgrounds.

## Default Groups

- Overview
- Academics
- Campus Life
- Happening Now

## Group Data

Each group has:

```js
{
  id: "academics",
  label: "Academics",
  navTitle: "Academics",
  visibleInNav: true,
  parallaxImage: "assets/fisher-fine-arts-library.jpg"
}
```

## Section Assignment

Each section has a `groupId`.

```js
{
  id: "research",
  groupId: "academics",
  layout: "feature"
}
```

The inspector includes a Group dropdown for assigning the selected section.

## Preview Markup

Sections render inside group wrappers:

```html
<section class="site-group has-parallax" id="academics">
  <img class="site-group-backdrop" src="assets/fisher-fine-arts-library.jpg" alt="" aria-hidden="true">
  <div class="site-group-content">
    ...
  </div>
</section>
```

## Navigation

Header links point to group anchors:

```html
<a href="#academics">Academics</a>
```

Groups can be hidden from navigation while keeping their sections visible.

## Parallax

If a group has a `parallaxImage`, the group receives:

```html
class="site-group has-parallax"
```

The background image moves subtly on scroll. Motion is skipped when the user prefers reduced motion.
