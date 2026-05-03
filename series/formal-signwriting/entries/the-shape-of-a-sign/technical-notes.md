# The Shape of a Sign Technical Notes

**The Shape of a Sign**  
Symbols, coordinates, centering, and the signbox

Implementation reference only. Read the companion technical paper for the conceptual account; use these notes when checking implementation details, symbol ranges, coordinate behavior, and centering rules.

These technical notes are the implementation-oriented companion to the spatial model paper. They focus on symbol ranges, coordinate behavior, centering, and validation consequences that would crowd the main paper.

## 0. Minimal spatial example

```text
M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475
```

This example shows the spatial layer in compact form:

- one signbox marker with coordinate
- multiple symbols
- one coordinate per placed symbol

That is enough to demonstrate that the signbox is a spatial arrangement encoded as text.

## I. Symbol roles and ranges

Three broad ranges are especially important:

| Range | FSW span | Technical role |
| --- | --- | --- |
| Writing symbols | `S100` to `S37e` | ordinary sign composition in the signbox |
| Detailed location | `S37f` to `S386` | more detailed location handling, especially in sequence-oriented contexts |
| Punctuation | `S387` to `S38b` | sentence and passage structure |

Those distinctions matter because later operations often need to isolate one kind of symbol from another.

## II. Kinds, categories, groups, and named ranges

Implementations often expose the symbol inventory through explicit arrays and named ranges:

```js
const kind = [0x100, 0x37f, 0x387];
const category = [0x100, 0x205, 0x2f7, 0x2ff, 0x36d, 0x37f, 0x387];
const group = [0x100, 0x10e, 0x11e, 0x144, 0x14c, 0x186, 0x1a4, 0x1ba, 0x1cd, 0x1f5, 0x205, 0x216, 0x22a, 0x255, 0x265, 0x288, 0x2a6, 0x2b7, 0x2d5, 0x2e3, 0x2f7, 0x2ff, 0x30a, 0x32a, 0x33b, 0x359, 0x36d, 0x376, 0x37f, 0x387];

const ranges = {
  all: [0x100, 0x38b],
  writing: [0x100, 0x37e],
  hand: [0x100, 0x204],
  movement: [0x205, 0x2f6],
  dynamic: [0x2f7, 0x2fe],
  head: [0x2ff, 0x36c],
  hcenter: [0x2ff, 0x36c],
  vcenter: [0x2ff, 0x375],
  trunk: [0x36d, 0x375],
  limb: [0x376, 0x37e],
  location: [0x37f, 0x386],
  punctuation: [0x387, 0x38b]
};

const isType = (key, type) => {
  const base = parseInt(key.slice(1, 4), 16);
  const range = ranges[type];
  return !!range && range[0] <= base && range[1] >= base;
};
```

The important point is not only the catalog.

It is the type of symbol.

Type tests operate on the base symbol and let software ask whether a key belongs to a range such as `hand`, `movement`, `hcenter`, or `vcenter`.

The `hcenter` and `vcenter` ranges are especially important because they determine which symbols anchor centering.

## III. Coordinate pattern

Placed symbols follow a repeated pattern:

```text
S2e748483x510
```

This compactly encodes:

- one symbol key
- one x coordinate
- one y coordinate

That repetition is the core spatial pattern of the signbox.

The coordinate is the top-left of the symbol image.

## IV. Tight bounding-box preprocessing

The spatial model needs tight bounding-box preprocessing because symbols have different widths and heights, and that size information is not stored directly in the written sign.

So the system needs to reason about:

- the tight bounding box of each placed symbol
- the combined tight bounding box of the sign
- the maximum extents reached by the full arrangement

This is what later supports:

- centering
- layout
- scaling
- rendering
- printing

One placed symbol begins as:

```text
S10000450x450
```

Preprocessing looks up the symbol size, keeps the top-left coordinate, and temporarily expands the symbol to include a bottom-right corner as well.

That temporary expansion is what makes later min/max calculations possible.

## V. Centering with `hcenter` and `vcenter`

Centering is not done from a vague overall shape.

It uses explicit symbol types.

The practical logic is:

- expand each placed symbol into a temporary tight bounding box
- for horizontal centering, keep only `hcenter` symbols when present
- for vertical centering, keep only `vcenter` symbols when present
- if those filtered sets are empty, fall back to all placed symbols
- compute the midpoint from the selected minimum and maximum extents
- shift all symbol coordinates together to reach the normalized center

This matters because head symbols anchor horizontal centering, while head and trunk symbols together anchor vertical centering.

## VI. Normalization output

After centering:

- maximum `x` and maximum `y` are scanned from the shifted arrangement
- those values become part of the preprocessing result
- the temporary bottom-right coordinates are removed
- the sign returns to ordinary normalized sign text

So normalization depends on spatial measurements that are computed during preprocessing, not stored directly in the sign.

## VII. Main technical areas

- symbol classes and ranges
- coordinate restrictions and interpretation
- tight bounding-box logic
- maximum-coordinate calculations
- normalized centering strategies

## VIII. Why the spatial layer matters

The signbox needs its own conceptual center:

- symbols are not only tokens
- coordinates are not only metadata
- centering is not only a display convenience

They are part of the technical architecture itself.

## IX. Working aim

The aim is to make the spatial mechanics legible enough that later work on grammar, rendering, and implementation has a stable foundation.

## X. Appendix note on normalization

Normalization should be treated as a technical stabilizer, not as a cosmetic cleanup step.

It helps later layers by making:

- layout more consistent
- search easier to define
- rendering more stable
- implementation comparisons easier to reason about
