# Export And Assets

The app has two output actions.

## Export

The Export button generates a complete HTML document and attempts to copy it to the clipboard. If clipboard access is blocked, the generated HTML is selected in the Output textarea.

## Download

The Download button creates a ZIP file containing:

```text
index.html
assets/
```

The ZIP export packages:

- Local `assets/...` images used in the generated HTML
- Uploaded data-URL images, converted into files such as `assets/uploaded-image-1.jpg`

The generated `index.html` inside the ZIP points to those packaged files.

## Image Handling

Uploaded images are read in the browser. Raster images are resized to a maximum dimension of 1600px and converted to JPEG where possible. SVG and GIF files are preserved as data URLs.

## External Media

YouTube and Vimeo videos remain externally embedded. They are not downloaded into the ZIP.

## External Links

External link icons can be toggled in Identity. The setting applies to preview and export.
