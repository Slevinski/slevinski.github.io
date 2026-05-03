# Sign Text Layout

**Vertical writing, horizontal writing, lanes, centering, and reading levels**

Sign text layout describes how individual signboxes become readable passages.

Its core claim is simple:

> passage layout must preserve the spatial orientation of written signs

This entry states the layout rules for writing direction, lanes, centering, and reading-level defaults.

The numeric defaults below are implementation profiles, not claims about linguistic difficulty. They give renderers and layout tools a shared starting point so passages can be generated consistently across environments.

These values should be treated as current Sutton SignWriting layout-practice defaults rather than empirically validated reading-level thresholds. Future publication or research profiles may replace them, but they should document their calibration basis and how they differ from SW1-SW4.

## Minimal Vocabulary

| Term | Meaning |
| --- | --- |
| vertical writing | passage layout that flows in vertical columns |
| horizontal writing | passage layout that flows in horizontal rows |
| lane | an offset track used to position signs within the passage flow |
| lane offset | the distance between lane centers, stated in pixels at standard size |
| reading level | one of the SW1-SW4 layout profiles |
| punctuation bottom | default bottom spacing for punctuation in passage layout |

All numeric values in this entry are stated in pixels.

## Common Center

Signs have a center at `500x500`.

That center gives the layout system a shared reference point for alignment. The written sign is not only an image placed on a page. It is a spatial signbox that needs a stable relation to the passage around it.

The `500x500` center supports lane placement, text alignment, and consistent passage layout across rendering systems.

## Writing Directions And Lanes

Vertical writing has three lanes:

- Left
- Middle
- Right

The standard lane offset is `50` pixels. The left lane center is therefore `50` pixels left of the middle lane center, and the right lane center is `50` pixels right of the middle lane center.

In vertical writing, the left and right lanes can represent lateral body shifts in signing space. Punctuation is always centered in the middle lane.

Vertical writing is the default profile for most current Sutton SignWriting passage layout because it preserves a strong column center while allowing lateral shifts to remain visible. It also fits the common SignWriting habit of reading signs as centered spatial compositions rather than as words forced into a horizontal baseline.

Horizontal writing has two lanes:

- Top
- Bottom

The top lane is used for signs with heads. The bottom lane is used for signs without heads and for punctuation.

Horizontal writing is supported when the surrounding document, interface, or bilingual layout requires row-based flow. It should not be treated as a different encoding. It is a passage layout choice applied to the same underlying sign text.

## Choosing Direction And Lane Behavior

An implementer should choose vertical writing when the goal is a native SignWriting passage, a sign-language-first document, or a layout where lateral movement and body-centered composition need to remain visually prominent.

An implementer should choose horizontal writing when the sign text must sit inside a row-based environment such as a bilingual sentence, a table, an inline example, or an interface that cannot support vertical flow well.

Lane choice should come from the sign's role in the passage:

- centered signs usually belong in the middle lane in vertical writing
- lateral shifts use left or right lanes in vertical writing
- signs with heads normally occupy the top lane in horizontal writing
- signs without heads and punctuation normally occupy the bottom lane in horizontal writing

The lane is therefore a layout property of the passage, not a replacement for the signbox itself.

## Centering Rules

Centering keeps a sign aligned with the passage while preserving the sign's internal spatial composition.

This entry applies the centering logic defined in `The Shape of a Sign`, where symbols, tight bounding boxes, `hcenter`, `vcenter`, and the `500x500` normalized center are introduced at the signbox level.

Vertical writing centers on the head and trunk symbols when they are present. This keeps the written body centered in the column and makes the left and right sides of the sign easier to maintain across the passage.

Horizontal writing centers on the head when it is present. This matches the row-based layout problem, where signs with heads occupy the top lane and signs without heads or punctuation occupy the bottom lane.

The layout model therefore uses a hybrid centering strategy:

- the `x` center follows vertical-writing logic, using the head and trunk where available
- the `y` center follows horizontal-writing logic, using the head where available

This keeps vertical and horizontal passage layout compatible while preserving the signbox as structured text.

## Reading Levels

The layout model uses four default reading-level profiles: SW1, SW2, SW3, and SW4.

In the table, `length` and `width` are passage-flow measures whose axis depends on writing direction.

The profiles are practical layout defaults:

- `SW1` favors short passage units, larger padding, and beginner-friendly spacing
- `SW2` gives a moderate passage unit for general reading
- `SW3` supports denser material and longer passage units
- `SW4` supports the longest default passage units with the tightest default padding

The values should be understood as shared implementation defaults. A publication system may define its own typographic profile, but it should document how it differs from these defaults.

The default values are:

| Level | Length | Width | Offset | Padding | Punctuation Bottom |
| --- | ---: | ---: | ---: | ---: | ---: |
| SW1 | 400 | 150 | 50 | 40 | 40 |
| SW2 | 600 | 160 | 50 | 32 | 32 |
| SW3 | 800 | 200 | 50 | 24 | 24 |
| SW4 | 1200 | 230 | 50 | 20 | 20 |

The table columns are interpreted by writing direction:

- `length` is the column length in vertical writing and the row length in horizontal writing
- `width` is measured on the `x` axis in vertical writing and on the `y` axis in horizontal writing
- `offset` is the lane offset for both vertical and horizontal lanes
- `padding` is the default passage padding
- `punctuation bottom` is the default bottom spacing for punctuation

## Passage Example In Words

A simple vertical passage places each signbox by its normalized center. The passage then shifts signs into the left, middle, or right lane while keeping each sign's internal coordinates intact.

A simple horizontal passage places each signbox into the top or bottom lane. Signs with heads normally align in the top lane, while punctuation and signs without heads use the bottom lane.

In both cases, layout never rewrites the sign. It chooses how authored signboxes flow together in a passage.

## Relationship To Rendering

Layout is not the same as rendering.

Layout defines passage structure: writing direction, lanes, centering, and reading-level metrics.

Rendering produces a visible output from that structure.

The distinction matters because the same layout model can be realized through SVG, font-based output, web components, print layout, or other downstream presentation systems.

## Related Platform Routes

- `The Shape of a Sign` explains the signbox and symbol-coordinate model that layout depends on.
- `Rendering Formal SignWriting` explains how layout becomes visible output.
- `Formal SignWriting in Practice` connects these rules to libraries, components, and implementation pathways.
