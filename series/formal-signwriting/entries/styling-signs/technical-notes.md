# Styling Signs Technical Notes

**Styling Signs**  
The style string as light markup for customization and rich presentation

Implementation reference only. Read the companion technical paper for the conceptual account; use these notes when checking implementation details, style-string syntax, and renderer-facing interpretation.

These technical notes are the implementation-oriented companion to the style string paper. They collect syntax details, parsing cautions, and renderer-facing interpretation notes.

## 0. Minimal style example

```text
S10000-CP10G_blue_D_red,Cyan_Z1.1--primary!cursor!
```

This example is useful because it shows that styling can be attached compactly while the encoded symbol remains identifiable.

## I. Not part of canonical text

The style string is not part of canonical sign text.

It is an optional adjunct layer for presentation.

## II. Practical syntax model

A style string can be treated as a compact sequence of renderer directives attached to a target.

The working shape is:

```text
target "-" directives ("--" class-name)? ("!" id-value "!")?
```

For the example:

```text
S10000-CP10G_blue_D_red,Cyan_Z1.1--primary!cursor!
```

the parts are:

| Part | Interpretation |
| --- | --- |
| `S10000` | target symbol or output target |
| `-` | start of style directives |
| `C` | colorize |
| `P10` | padding value |
| `G_blue_` | glyph or line color |
| `D_red,Cyan_` | two-color directive |
| `Z1.1` | scale |
| `--primary` | CSS class hook |
| `!cursor!` | id hook |

Parsers should treat unknown directives conservatively: preserve the canonical sign text, ignore or report unsupported styling, and avoid treating a style parse failure as a failure of the sign text itself.

## III. Why the markup analogy helps

The markup analogy is useful because it separates:

- what the text is
- how the text is presented

That is not a perfect identity with HTML, but it is the right architectural direction.

## IV. What styling is good for

The style string is useful because it gives a compact way to express:

- whole-sign colors, scaling, and padding
- per-symbol color overrides
- whole-sign class and id hooks for downstream rendering

That makes it a practical layer even while it remains optional.

## V. Why the split matters

Separating styling from rendering keeps each layer focused:

- rendering can explain output models
- styling can explain customization semantics

That produces a cleaner and more teachable technical architecture.

## VI. Why this position is worth stating clearly

Readers should not have to infer the architectural status of the style string.

It is better to say it directly:

- style is attached presentation information
- it is not the canonical encoded sign
- it can be important without being foundational

## VII. Appendix note on scope

Styling belongs in the technical record because it is useful and widely practical.

It does not belong at the center of the model.

That is the balance worth preserving.
