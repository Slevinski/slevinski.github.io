# Rendering Formal SignWriting

**SVG, fonts, layout, and output models**

Formal SignWriting is easier to implement when the rendering layer stays distinct from canonical text.

Its core claim is simple:

> rendering is downstream from canonical text

## Minimal vocabulary

The rendering layer depends on a small vocabulary:

| Term | Meaning |
| --- | --- |
| canonical text | the durable encoded source |
| rendering | a visible realization of that source |
| font-based SVG | rendering that depends on SignWriting fonts |
| stand-alone SVG | rendering assembled from graphic resources rather than installed fonts |
| styling | optional customization applied downstream from canonical text |

If those boundaries stay clear, the rendering layer stays clear.

## Canonical text versus presentation

One distinction governs the whole layer:

- **canonical text** is the durable technical representation
- **rendering** is a chosen visible realization of that representation

If the text model stays stable, multiple rendering strategies can coexist without breaking the architecture.

## Rendering as a technical layer

Rendering is where many people first encounter Formal SignWriting in practice.

They see:

- an SVG image
- a font-based display
- a web component
- a printed page

But those visible outputs are only the surface of a deeper system. A dedicated rendering discussion makes it possible to explain how those outputs are generated without confusing them with encoding or grammar.

## A minimal rendering pipeline

The rendering pipeline can be summarized this way:

```text
Formal SignWriting text -> parsed sign structure -> SVG or font output -> display or print
```

That sequence matters because it keeps the encoded text stable while allowing different output models.

## SVG and fonts

SVG and font-based output remain central implementation pathways.

They matter because they provide:

- scalable visible output
- copyable technical text
- portable display in web environments
- a bridge between symbolic data and readable writing

This is one place where Formal SignWriting shows its maturity as a technical system. It can be rendered in more than one way while preserving a stable underlying representation.

## A compact SVG example

A sign such as:

```text
M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468
```

can produce an SVG header like:

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="36" height="65" viewBox="482 468 36 65">
```

and symbol placement such as:

```xml
<g transform="translate(489,515)">...</g>
<g transform="translate(482,490)">...</g>
```

This is a good example because it shows that rendering is not abstract. It is a practical, repeatable transformation from encoded text into visible structure.

Many outputs also preserve hidden copyable text inside the SVG:

```xml
<text style="font-size:0%;">
M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468
</text>
```

That keeps visible graphics and encoded text together in one output artifact.

## Stand-alone graphics

Font-based rendering is not the only pathway.

Stand-alone SVG assembled from graphic resources is also important because it avoids dependence on installed fonts and can support server-side generation, asset pipelines, and archival output.

That makes rendering more durable across software environments.

## Font loading

A browser-facing rendering path often depends on explicit font loading:

```css
@font-face {
  font-family: "SuttonSignWritingLine";
  src: local('SuttonSignWritingLine'),
       url('https://.../SuttonSignWritingLine.ttf') format('truetype');
}
```

The same pattern applies to:

- `SuttonSignWritingFill`
- `SuttonSignWritingOneD`

These fonts do not do the same job.

- `Line` and `Fill` descend below the baseline and are useful for SVG and two-color output
- that same alignment is not ideal for direct text-editor use
- `OneD` is useful in text editors
- `OneD` is not aligned for SVG in the same way and does not carry the second color

## Layout and lanes

Rendering becomes more interesting when signs are not isolated.

A real written passage requires:

- vertical writing flow
- lane-aware alignment
- sign sizing
- centered layout behavior
- HTML and CSS coordination

This is why rendering cannot be reduced to drawing one sign at a time. The architecture has to support page behavior and text flow as well.

At the document level, the classic browser layout pattern includes:

- `writing-mode: vertical-lr`
- per-sign containers with explicit width and height
- lane offsets through margin or transparent border rules
- print behavior that preserves column flow

## Fonts as implementation infrastructure

The rendering layer is also where font resources become part of the technical stack.

Common implementation pathways include:

- `SuttonSignWritingLine`
- `SuttonSignWritingFill`
- `SuttonSignWritingOneD`

These are not the model itself, but they are important pieces of how the model becomes usable in browsers and applications.

## Styling is related, but separate

Rendering and styling are closely related, but they are not the same topic.

- rendering explains output models
- styling explains customization semantics

Rendering can reference styling without taking over the entire style-string definition.

## Core principle

Rendering should make Formal SignWriting visible without redefining what the encoded text is.

