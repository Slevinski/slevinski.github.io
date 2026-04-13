# Formal SignWriting in Practice

**Libraries, datasets, and implementation pathways**

Specifications matter most when they support real work.

Its core claim is simple:

> a durable model needs durable stewardship

## Minimal vocabulary

The practice layer also depends on a small vocabulary:

| Term | Meaning |
| --- | --- |
| canonical text | the stored authoritative source |
| derived output | queries, renders, prints, and other generated forms |
| interoperability | clean movement between encodings and workflows |
| maintenance surface | the parts future builders need to keep stable |
| stewardship | the practice of keeping the model legible across time |

If these terms stay explicit, the practice layer stays clear.

## Libraries

The technical model should be understandable not only on paper, but also in code.

That means a mature technical record should point clearly to:

- core processing libraries across languages
- rendering libraries
- browser components and editor tools
- font and database resources

These are not only accessories. They are part of how the model becomes usable for future builders.

Examples in the current ecosystem include:

- `@sutton-signwriting/core`
- `sutton-signwriting-core`
- `sutton-signwriting/core`
- `@sutton-signwriting/font-ttf`
- `@sutton-signwriting/font-db`
- `sutton-signwriting-font`
- `@sutton-signwriting/sgnw-components`
- `@sutton-signwriting/signmaker`

Those package names help make the ecosystem concrete rather than abstract, but the important point is not the inventory by itself. The important point is that the model is already implemented across multiple languages, rendering paths, and user-facing environments.

Their roles divide this way:

| Package | Primary role |
| --- | --- |
| `@sutton-signwriting/core` | parsing, conversion, query, and general processing |
| `sutton-signwriting-core` | Python processing, conversion, queries, and typed utility functions |
| `sutton-signwriting/core` | PHP processing, conversion, queries, and style-string utilities |
| `@sutton-signwriting/font-ttf` | font-backed SVG and PNG generation |
| `@sutton-signwriting/font-db` | standalone graphic generation from symbol data |
| `sutton-signwriting-font` | Python SVG and PNG generation from Formal SignWriting text |
| `@sutton-signwriting/sgnw-components` | browser-facing web components |
| `@sutton-signwriting/signmaker` | browser-based sign editing and embedding |

That division matters because it separates concerns cleanly:

- core libraries parse and transform text across multiple languages
- rendering libraries generate visible output
- browser tools ship interfaces and editing environments
- graphic resources remain reusable rather than trapped in one implementation

That separation is part of stewardship. A legible ecosystem is easier to maintain than a pile of overlapping tools.

## Transformations and interoperability

Practice is where transformations become unavoidable.

Real systems need to move between:

- FSW and SWU
- text and query forms
- text and rendered output
- internal representations across software generations

That makes interoperability one of the central practical questions. A strong implementation path keeps the model transferable.

One simple workflow looks like this:

```text
FSW <-> SWU -> query -> rendering -> interface or archive
```

That is not the only pipeline, but it shows why transformations belong to practice as much as to theory.

Another common practical pattern is:

```text
stored canonical text -> validation -> search or rendering -> user-facing system
```

This pattern keeps canonical storage separate from downstream output.

## Datasets and corpora

Formal SignWriting is especially valuable because it can support durable text workflows rather than only visual display.

That matters for:

- corpora
- lexicons
- annotation
- search
- reproducible technical workflows

That is where the technical model becomes evidence-bearing. A format that supports corpora, lexicons, annotation, and retrieval is much more than a display convention.

Useful dataset practice usually needs:

- stable canonical text
- derived search indexes
- reproducible rendered output
- enough metadata to track provenance and version changes

## Implementation pathways

The long-term technical value of the model depends on making implementation pathways legible for future maintainers.

This includes:

- what is canonical
- what is derived
- what transforms cleanly
- what remains an open implementation question

The central maintenance distinction is:

| Layer | Typical status |
| --- | --- |
| FSW or SWU text | canonical |
| query forms | derived |
| SVG, PNG, and printed output | derived |
| style strings | optional adjunct presentation data |

One practical maintenance rule helps here:

> store canonical text, derive everything else

That single rule reduces long-term ambiguity across tools and generations of software.

It also keeps the center and perimeter in order:

- canonical text stays stable at the center
- tools and outputs can keep evolving at the perimeter

## What future builders need

Future builders need a stable answer to questions like:

- what text form should be stored canonically?
- what outputs are derived?
- what conversions are lossless?
- which libraries or resources are part of the maintenance surface?

They also need to know which transformations are deterministic, which outputs are convenient but non-canonical, and which boundaries must remain explicit between text, rendering, and styling.

## Core claim

Formal SignWriting is not only specifiable. It is implementable, maintainable, and reusable across software and data workflows.

