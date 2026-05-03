# Formal SignWriting in Practice Technical Notes

**Formal SignWriting in Practice**  
Libraries, datasets, transformations, and implementation pathways

Implementation reference only. Read the companion technical paper for the conceptual account; use these notes when checking implementation details, ecosystem roles, and maintenance cautions.

These technical notes are the implementation-oriented companion to the practice paper. They collect ecosystem details, maintenance cautions, and package-level notes that should stay out of the main stewardship argument.

## 0. Minimal ecosystem sketch

Concrete package examples already give the ecosystem a visible shape:

- `@sutton-signwriting/core`
- `sutton-signwriting-core`
- `sutton-signwriting/core`
- `@sutton-signwriting/font-ttf`
- `@sutton-signwriting/font-db`
- `sutton-signwriting-font`
- `@sutton-signwriting/sgnw-components`
- `@sutton-signwriting/signmaker`

That is enough to show that the model already lives in real software artifacts.

Treat this list as a release-time snapshot. The maintained package inventory should live in the public reference data and library documentation so the paper does not become the only source for ecosystem state.

## I. Practice is part of the argument

Formal SignWriting is more persuasive when its real ecosystem is visible.

That includes:

- code
- datasets
- transformation workflows
- maintenance conventions

The practical record is not separate from the technical argument. It is one of the strongest pieces of evidence for it.

## II. Package and implementation notes belong here

These technical notes are a good place for:

- package reference notes
- implementation examples
- compatibility notes
- software-generation transitions

One recurring practical question is where to keep the canonical form.

The safest answer remains:

- store canonical sign text as FSW or SWU
- derive query forms when needed
- derive rendered output when needed
- attach styling only when presentation requires it

That keeps the main essay readable while preserving useful operational detail.

## III. Canonical and derived layers

The practical distinction can be stated compactly:

| Layer | Typical status |
| --- | --- |
| FSW or SWU text | canonical |
| query forms | derived |
| SVG, PNG, and print output | derived |
| style strings | optional adjunct presentation data |

This distinction does a great deal of maintenance work.

## IV. Package roles at a glance

Concrete package roles also help:

| Package | Typical role |
| --- | --- |
| `@sutton-signwriting/core` | parsing, conversion, search, and general processing |
| `sutton-signwriting-core` | Python processing, conversion, queries, and typed utility functions |
| `sutton-signwriting/core` | PHP processing, conversion, queries, and style-string utilities |
| `@sutton-signwriting/font-ttf` | font-backed SVG and PNG generation |
| `@sutton-signwriting/font-db` | stand-alone graphics from symbol data |
| `sutton-signwriting-font` | Python SVG and PNG generation from Formal SignWriting text |
| `@sutton-signwriting/sgnw-components` | browser-facing components |
| `@sutton-signwriting/signmaker` | browser-based sign editing and embedding |

## V. What future builders need

Future builders still need clear answers to questions like:

- what is canonical?
- what is derived?
- what is stable?
- what can be transformed safely?

## VI. Maintenance depends on clear layers

Maintenance becomes easier when canonical text, derived output, and implementation examples remain clearly separated.

## VII. Appendix note on continuity

Practice is where continuity is tested.

If Formal SignWriting can survive:

- package updates
- library migrations
- rendering changes
- corpus growth

then the technical model has proven its durability in the strongest practical sense.
