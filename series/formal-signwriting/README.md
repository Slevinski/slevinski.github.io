# Formal SignWriting

*A technical publication series*

Formal SignWriting is the technical record for written sign text as durable computational text.

Its central claim is simple:

> a sign can be modeled as a two-part word of time and space

In practical terms, a full sign always has a spatial signbox. It may also carry a temporal prefix.

That word therefore contains:

- a **temporal prefix**
- a **spatial signbox**

From that opening move, the rest of the architecture follows:

- FSW and SWU as plain-text encodings
- the signbox as a spatial model
- grammar as valid structure
- search as structured matching
- rendering as downstream visible output
- styling as optional presentation markup
- implementation as long-term maintenance practice

This series documents that architecture.

## Canonical Core

The canonical core is small.

It can be stated in a few propositions:

- a sign is modeled with sequence and signbox, or in broader terms, time and space
- sequence and signbox must both survive in the text model
- FSW and SWU are plain-text encodings of the same model, with FSW commonly used as the canonical internal form and SWU supported for Unicode-oriented interchange
- grammar, search, and rendering are consequences of the model, not substitutes for it
- the style string is optional presentation markup and not canonical sign text

These propositions orient the series.

The entries, technical notes, tools, and future reports elaborate them in more detail.

## Minimal Vocabulary

The series depends on a compact vocabulary:

| Term | Working meaning |
| --- | --- |
| sign | a required spatial signbox, optionally preceded by a temporal prefix |
| temporal prefix | the optional sequence-preserving part of the sign, used mainly for sorting and sometimes for analysis |
| spatial signbox | the required composition-preserving part of the sign |
| FSW | the ASCII-oriented plain-text encoding and the usual canonical internal form |
| SWU | the Unicode-oriented plain-text encoding used for Unicode-facing interchange and workflows |
| style string | optional light markup for customization and presentation |

These definitions should stay stable even as tools, examples, and appendices grow.

## Current Canon and Reading Order

- **Formal SignWriting** — the two-part word, spatial text, and the core model
- **FSW and SWU** — plain-text encodings, character sets, and conversion
- **The Shape of a Sign** — symbols, coordinates, centering, and the signbox
- **Grammar of Formal SignWriting** — token patterns, syntax, and valid structure
- **Searching Signed Text** — query language, ranges, variance, and search logic
- **Rendering Formal SignWriting** — SVG, fonts, layout, and output models
- **Styling Signs** — the style string as optional light markup
- **Formal SignWriting in Practice** — libraries, datasets, transformations, and implementation pathways

Together these entries define the model, its consequences, and its practical maintenance surface.

For most technical readers, this is also the right reading order.

The sequence moves from model to encoding, from encoding to structure, and from structure to search, rendering, styling, and implementation.

## Relationship to The Science of Sutton SignWriting

The two series are complementary.

They form a clear stack:

1. **Formal SignWriting** defines the technical model
2. **The Science of Sutton SignWriting** defines the scientific framing
3. future studies, tools, datasets, and collaborations build evidence and practice on top of both

In short:

- *The Science of Sutton SignWriting* asks why signed writing matters
- *Formal SignWriting* asks how the technical model works

## Relationship to the Internet-Draft

The Internet-Draft remains a historical technical artifact and can still be cited through its DOI.

This series is the current reference-oriented publication set for the same technical area.

## Publication Structure

Individual artifacts remain separately citable.

That means:

- a presentation can stand on its own
- a handout can stand on its own
- technical notes, a report, or a compatibility note can stand on its own
- the series groups them as one technical reference set

The working web edition lives in the repo and public series viewers.

The DOI layer can live in Zenodo or a comparable archival publication home.

## Extension

The canonical core should stay small and stable.

The technical record around it can keep growing.

Reasonable future extensions include:

- query and regex reference material
- tokenization guidance for NLP and tooling
- compatibility and migration notes
- corpus and dataset conventions
- rendering and API reference material
- implementation reports for libraries and software stacks

This is the working balance for the series:

- a clear core
- a growing edge
- one technical record that can keep expanding without losing clarity
