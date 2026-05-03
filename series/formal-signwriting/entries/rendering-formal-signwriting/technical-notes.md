# Rendering Formal SignWriting Technical Notes

**Rendering Formal SignWriting**  
SVG, fonts, layout, and output models

Implementation reference only. Read the companion technical paper for the conceptual account; use these notes when checking implementation details, SVG fragments, and rendering cautions.

These technical notes are the implementation-oriented companion to the rendering paper. They collect practical SVG fragments, font behavior, passage rendering cautions, and boundary rules.

## 0. Minimal rendering example

Example sign:

```text
M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468
```

Possible SVG fragments:

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
  width="36" height="65" viewBox="482 468 36 65">
```

```xml
<g transform="translate(489,515)">...</g>
```

These fragments are enough to show that rendering is a deterministic transformation from encoded structure to visible placement.

Another compact fragment makes the internal logic more explicit:

```xml
<text style="font-size:0%;">M518x533S1870a489x515...</text>
<g transform="translate(489,515)">...</g>
```

This demonstrates two layers inside one output:

- hidden encoded text
- visible positioned graphics

## I. Multiple rendering paths are a strength

Formal SignWriting does not depend on a single output strategy.

That is a strength, not a weakness.

Rendering should be comfortable documenting:

- font-based SVG
- stand-alone SVG
- PNG as derivative output
- browser-facing and server-facing pathways

Those paths differ in implementation, but they do not need to differ in canonical source text.

## II. Hidden text and visible graphics can coexist

One of the elegant features of the rendering model is that visible graphics and copyable encoded text can coexist in the same output.

That matters for:

- usability
- interoperability
- archival practice
- copy and paste workflows

One compact pattern is:

```xml
<svg ...>
  <text style="font-size:0%;">{encoded sign}</text>
  <g transform="translate(...)">...</g>
</svg>
```

That pattern preserves:

- copyable text
- machine-readable payload
- visible output in the same artifact

## III. Layout deserves explicit treatment

Passage rendering is not only a matter of drawing symbols.

It also includes:

- vertical writing behavior
- lane alignment
- centering
- container sizing
- document and print layout

Those are rendering concerns and should stay here rather than being diffused across unrelated entries.

A minimal web-facing pattern might include:

```css
div.signtext {
  writing-mode: vertical-lr;
}
```

That small rule already signals that passage layout is part of rendering, not an afterthought.

## IV. Why the boundary still matters

Rendering can be richly documented without becoming the definition of the text model.

That boundary should remain stable:

- encoding defines the text
- grammar defines valid structure
- rendering realizes visible output
- styling customizes that output

Keeping those layers distinct helps prevent confusion about what should be stored, what should be validated, and what can safely vary across platforms.

## V. Appendix note on passage layout

Rendering a passage is not just rendering many signs.

It also requires decisions about:

- vertical flow
- lane alignment
- container behavior
- print behavior

That is why passage rendering deserves to be treated as a first-class implementation concern.

## VI. Appendix note on fonts

Font-backed rendering remains useful because it can make symbol output compact and portable.

A minimal loading pattern can look like:

```css
@font-face {
  font-family: "SuttonSignWritingLine";
  src: url("...") format("truetype");
}
```

The font families also have different implementation roles:

- `SuttonSignWritingLine` and `SuttonSignWritingFill` descend below the baseline and work well for SVG-oriented output
- that makes them less suitable for plain text-editor alignment
- `SuttonSignWritingOneD` is useful in text editors
- `SuttonSignWritingOneD` is not aligned the same way for SVG use and does not include the second color

That detail belongs here because font loading is not part of canonical text, but it is part of practical rendering infrastructure.
