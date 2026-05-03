# The Shape of a Sign

**Symbols, coordinates, centering, and the signbox**

The signbox is where Formal SignWriting becomes visibly spatial and technically precise.

It is also the clearest public handoff from the writing lane into the formal technical model.

Its core claim is simple:

> the signbox is a spatial arrangement carried in text

## Working understanding

A reader should be able to explain:

- what a signbox is
- why symbols belong to technical classes
- how coordinates make spatial writing usable in software
- why normalization matters

## Minimal vocabulary

The spatial layer depends on a small vocabulary:

| Term | Meaning |
| --- | --- |
| signbox | the composition-preserving part of the sign |
| symbol class | a technically distinct range of symbols |
| coordinate | an encoded spatial placement using the top-left of the symbol image |
| tight bounding box | the top-left and bottom-right extent of a symbol or sign |
| normalization | preprocessing that computes tight bounding boxes, centers the sign, and determines maximum coordinates |

If these terms stay clear, the spatial side of the model stays clear.

## The signbox is a spatial arrangement

Formal SignWriting is not only a string format.

The signbox is where writing symbols become an arranged written object. It matters because the system has to preserve visible composition while still working as text in software.

## Symbols

Formal SignWriting depends on defined symbol classes and symbol ranges.

This is not only a matter of cataloging. Different symbol classes play different technical roles in writing, centering, searching, and rendering.

At a glance:

| Class | FSW range | Why it matters |
| --- | --- | --- |
| Writing symbols | `S100` to `S37e` | core sign composition |
| Detailed location | `S37f` to `S386` | sequence and location handling |
| Punctuation | `S387` to `S38b` | sentence and text structure |

These ranges are not merely taxonomic.

They help determine:

- which symbols belong inside ordinary sign composition
- which symbols support more detailed location handling
- which symbols behave as punctuation in larger passages of sign text

Later layers depend on those distinctions. Search, rendering, centering, and filtering all become easier to define when symbol classes are explicit.

Implementations often expose these distinctions through kinds, categories, groups, and named ranges.

Two named ranges matter especially for centering:

- `hcenter` for horizontal centering
- `vcenter` for vertical centering

## Coordinates

The signbox uses coordinates to preserve spatial relation.

These coordinates are not incidental metadata.

They are part of how the written form becomes usable in software.

The normalized sign center used by later layout is `500x500`. That common center lets an authored signbox keep its internal spatial composition while still aligning predictably inside passages, lanes, and rendered output.

For example, the signbox portion of this sign:

```text
M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475
```

contains:

- `M525x535` as the signbox marker and signbox coordinate
- four writing symbols, each with its own coordinate

That is how visible arrangement becomes text software can work with.

At a finer level, each placed symbol follows the same pattern:

```text
S2e748483x510
```

This can be read as:

- `S2e748` the symbol key
- `483x510` the top-left coordinate of that symbol image inside the signbox

The repeated pairing of symbol key plus coordinate is what lets the signbox function as a structured spatial object rather than a loose visual impression.

## Bounding boxes and maximum coordinates

Bounding-box logic matters because written signs do not encode symbol size directly.

Formal SignWriting therefore needs a clear account of:

- symbol bounding boxes
- sign bounding boxes
- maximum coordinate calculations

Those calculations support layout, sizing, and downstream rendering behavior.

The basic logic is:

- each symbol has its own measured width and height
- each placed symbol starts with a symbol key and a top-left coordinate
- preprocessing temporarily expands each symbol into a tight bounding box with top-left and bottom-right coordinates
- the sign bounding box is derived from the extreme left, right, top, and bottom extents across all placed symbols
- maximum-coordinate calculations make the full spatial footprint explicit

That is why a sign can be laid out, centered, printed, and rendered without abandoning its textual form.

In other words, the sign remains text, the text carries its spatial arrangement, and that arrangement can be computed consistently.

## Centering and normalization

Centering is one of the most important technical moves in the system.

It simplifies layout and supports more consistent spatial handling across tools.

It also improves:

- comparison between implementations
- stable sign display in reusable interfaces
- downstream search and rendering workflows
- practical interchange across software generations

The centering logic should be stated more concretely:

- horizontal centering first looks for `hcenter` symbols
- vertical centering first looks for `vcenter` symbols
- if those ranges are absent, centering falls back to all placed symbols
- the midpoint is calculated from the selected minimum and maximum extents
- all symbol coordinates are shifted together
- the resulting maximum `x` and `y` values become part of the preprocessing result
- the temporary bottom-right coordinates are then discarded, leaving normalized sign text

The important point is that normalization requires symbol-size knowledge that is not stored directly in the written sign.

The sign remains text, but its spatial layout has to be computed during preprocessing.

The conceptual point is then clear:

> the sign must be normalized strongly enough to support stable technical use

## Core point

Without this spatial layer, Formal SignWriting risks being misunderstood as only a string format.

With it, the model becomes visibly coherent and usable in software.

## Related Platform Routes

- `Sign Text Layout` explains how centered signboxes become vertical and horizontal passages.
- `Rendering Formal SignWriting` explains how that layout becomes visible output.
