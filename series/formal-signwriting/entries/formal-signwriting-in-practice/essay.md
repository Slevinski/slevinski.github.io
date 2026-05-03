# Formal SignWriting in Practice

**Libraries, datasets, and implementation pathways**

Specifications matter most when they support real work.

The practice layer's core claim is simple:

> a durable model needs durable stewardship

For the technical history behind the model itself, read `From Experimental Encodings to Formal SignWriting` as this entry's historical companion. The encoding story is a practice story because implementation pressure, real datasets, and lossless migration shaped the model more than abstract theory alone.

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

Because package names and roles change faster than the formal model, this list should be treated as a current ecosystem snapshot. The maintained reference inventory belongs in the Sutton SignWriting public reference data and library documentation rather than in this paper alone.

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

Current Sutton SignWriting data already gives that claim scale. The Brazilian Sign Language dictionary alone contains nearly **68,000 signs**, and the broader accumulated dataset across languages contains well over **one million unique signs**. These counts should be refreshed against the current SignPuddle and SignBank data exports before each formal release, but their order of magnitude is already part of the practical argument.

Useful dataset practice usually needs:

- stable canonical text
- derived search indexes
- reproducible rendered output
- enough metadata to track provenance and version changes

If a corpus mixes temporal-prefix theories, the corpus should not pretend that all signs sort under one shared theory.

Practical options include:

- normalize the corpus to one documented sorting theory
- preserve the original prefixes and add metadata naming the theory or source
- store an additional derived sort key for a chosen project-specific ordering

The important rule is that mixed sequence theories should be documented rather than silently combined.

## Tokenization and derived views

The grammar layer defines valid sign-level structure and names the main token roles.

Practice has a different question: what derived views should downstream tasks use?

No single tokenization level should be treated as universally correct for every corpus, NLP, machine-learning, rendering, or translation task. A project may need sign-level tokens, symbol-level tokens, base-fill-rotation features, coordinate features, handshape-focused features, or task-specific derived indexes.

The practical rule is:

> preserve the full canonical sign text, then derive task-specific tokens from it

Derived token streams should remain reproducible from the stored FSW or SWU source.

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

## Maintenance surface

The stable core does not eliminate maintenance work. It makes the work assignable.

| Surface | Primary responsibility |
| --- | --- |
| package inventory and roles | library maintainers |
| corpus conventions and sorting-theory metadata | corpus maintainers and dataset publishers |
| NLP and machine-learning tokenization profiles | research collaborators, with core-library support |
| passage-layout profiles | renderer and publication-tool maintainers |
| legacy compatibility and migration notes | core maintainers and infrastructure stewards |

That division turns open edges into stewardship tasks instead of treating them as weaknesses in the model.

## Core claim

Formal SignWriting is not only specifiable. It is implementable, maintainable, and reusable across software and data workflows.
