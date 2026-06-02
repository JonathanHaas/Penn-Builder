# Layouts

Each section has a `layout` value. The inspector adapts controls based on that layout.

## Hero

Large opening layout with text, button, image upload, and image-left/image-right controls. On mobile, the image appears above text.

Editable:

- Heading
- Body
- Button text
- Button URL
- Hero image
- Image position

## Text

Full-width body text layout.

Editable:

- Heading
- Body

## Fullbleed

Formerly Feature. Two-column content layout with a button.

Editable:

- Heading
- Body
- Button text
- Button URL

## Split

Two-column content layout with a button and color options.

Editable:

- Heading
- Body
- Button text
- Button URL
- Color: white, blue, red

## Quote

Editorial quote layout with a large curly opening quote mark.

Studio labels:

- Author maps to stored `heading`
- Quote maps to stored `body`

Display order:

1. Quote
2. Author

Editable:

- Author
- Quote
- Color: white, blue, red

## Facts

Formerly Stats. Renders up to three facts from pipe-separated body text.

Example:

```text
1740 Year founded|8:1 Student-faculty ratio|$1.33B Research budget
```

## Image

Full-section image layout. Uploaded image fills the section.

Editable:

- Heading
- Body
- Image

## Accordion

Expandable/collapsible items in the preview with expand-all and collapse-all controls.

Editable:

- Items
- Item titles
- Item body text

## Gallery

Horizontal scroll gallery with add/remove image controls.

Editable:

- Heading
- Body
- Images

## Cards

Card grid with 2-across or 3-across options.

Editable per card:

- Title
- URL
- Body
- Color: white, blue, red
- Image

The card title is the hyperlink.

## Events

Upcoming events layout with editorial event cards.

Editable per event:

- Month
- Calendar number
- Category
- Title
- URL
- Description
- Optional image

The event title is the hyperlink.

## Video

Full-width video layout that accepts YouTube or Vimeo URLs.

Editable:

- Heading
- Body
- Video URL

Preview controls:

- Pause
- Stop
