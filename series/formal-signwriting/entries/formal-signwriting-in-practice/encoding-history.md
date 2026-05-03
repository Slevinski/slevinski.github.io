# From Experimental Encodings to Formal SignWriting

**A technical history of how the current encoding model emerged**

This companion document traces how the current Formal SignWriting model emerged through repeated implementation, testing, data migration, and refinement.

It gives technical readers the practical history behind the present architecture:

- why the model looks the way it does
- what each earlier format contributed
- how **FSW** and **SWU** became the stable encodings

## Scope

Three facts define the background:

- Valerie Sutton created SignWriting as a spatial writing system for signed languages
- The International SignWriting Alphabet (ISWA) provided the structured symbol inventory needed for stable software work
- Formal SignWriting carries that visible writing as processable text while preserving the signbox

The central challenge was clear from the beginning.

Signed writing is authored in two-dimensional space.
Software needs one-dimensional text.

The history below shows how that gap was handled in practice.

## The first durable problem

The earliest practical challenge was preserving three things at once:

- the writer's selected symbols
- the written spatial layout
- enough one-dimensional structure for sorting, search, and software processing

An early **build string** carried ISWA symbols together with `x,y` coordinates inside a fixed signbox.

This gave the model its first strong foothold: visible layout could be preserved in text.

It also revealed the next requirement with full clarity: two-dimensional space does not provide an inherent sequence for sorting and comparison.

That pressure led to a second layer.

## Sequence had to be added deliberately

The next important step was the addition of a **SignSpelling Sequence** prefix.

This provided practical software with a stable one-dimensional handle for sorting, indexing, and comparison while leaving the written sign fully spatial.

That separation became one of the model's lasting strengths.

This pattern remained stable even as the concrete encodings changed:

- preserve the signbox
- preserve sequence when needed
- keep both available in one text form

## Early experimental formats

Several formats were explored before the current model stabilized.

Each contributed something important. Together they clarified the requirements the final model would need to meet.

### SWML-Simple

An early human-readable markup export format.

Its main value was diagnostic: it made inspection easier and demonstrated that visible structure could be expressed in structured text.

It also delivered a clear practical lesson: it was not compact or efficient enough to serve as the core encoding for large-scale software and datasets.

### Binary SignWriting

**Binary SignWriting** went through three main versions focused on compactness and performance while preserving full sign structure.

- **BSW v1** aligned with the ISWA 2008 period and used a compact character strategy.
- **BSW v2** tracked the move to ISWA 2010 and introduced a more precise symbol model.
- **BSW v3** delivered one of the most important practical improvements by moving the sequence prefix to the front. This simplified binary comparison and reduced friction in tooling.

Each version followed the same cycle: build real tools, encounter friction at scale, simplify the encoding, and migrate all existing data forward without loss.

### Character SignWriting

**Character SignWriting** mapped the binary model into Unicode Private Use Area code points.

It made the encoding more usable in character-based systems, but private-use mapping remained an experimental bridge rather than a durable public standard.

### Kartesian SignWriting

**Kartesian SignWriting** explored irregular coordinates (centered at 0,0) and multiple display-oriented formats.

It tested alternate approaches to layout and searching, helping expose the design space and sharpen the requirements for a more stable solution.

## What the experiments taught

Across these iterations, four lessons emerged with increasing clarity:

1. **The signbox had to remain explicit.**  
   Visible spatial composition belongs in the text model itself, not as downstream rendering.

2. **Sequence is useful, but not sufficient.**  
   A prefix supports sorting and comparison; the written sign still requires its full spatial form.

3. **Clarity eventually matters more than maximum compression.**  
   Experimental compactness has value, but long-term stewardship needs encodings that future developers can read, debug, and extend.

4. **Migration must be lossless.**  
   Accumulated data cannot be abandoned. Every transition preserved every existing sign intact.

That migration discipline is part of why the later model became trustworthy.

## Convergence on Formal SignWriting

By the early 2010s the ideas had converged into a clean, durable architecture:

> A sign can be modeled as a two-part word of time and space.

- An optional **temporal prefix** (sequence) for sorting and analysis.
- A required **spatial signbox** that preserves the writer's composed layout.

This became **Formal SignWriting (FSW)**:

- a stable ASCII-oriented encoding
- a fixed 500 by 500 signbox centered at `(250,250)`
- a model that preserved both sequence and spatial composition in one text form

It made canonical text directly storable, searchable, and migratable while keeping rendering downstream.

## Why SWU was added later

In 2017, **SignWriting in Unicode (SWU)** was added as an isomorphic Unicode-oriented representation of the same model.

This mattered because it separated two questions cleanly:

- what the formal model is
- how that model is carried in a particular character strategy

FSW and SWU are two encodings of one underlying architecture, allowing stable internal practice with FSW alongside broader Unicode workflows with SWU and clean conversion between the two.

## Why the stable form lasted

The present model has endured because it solves several problems at once without collapsing them:

It kept these distinctions clear:

- visible writing versus encoded text
- sequence versus spatial composition
- canonical text versus derived output
- encoding versus rendering

That clarity made the rest of the technical stack possible:

- grammar
- search
- rendering
- styling
- libraries
- datasets
- long-term maintenance

The practical history and the formal architecture are therefore one story. The history explains why the architecture became, and remains, stable.

## Current position

Today the stable center is intentionally small and clear:

- **Formal SignWriting** is the technical model
- **FSW** and **SWU** are its two canonical plain-text encodings

The earlier formats remain historically valuable as documentation of the path that clarified the final requirements. They are earlier stages in one continuous technical line.

## Why this document belongs with practice

This history belongs with **Formal SignWriting in Practice** because the encoding story is fundamentally a practice story. It shows how implementation pressure, real datasets, and migration needs shaped the model more than abstract theory alone.

That context helps future maintainers, implementers, and researchers understand both what the model is and why it earned its place as the durable foundation.

## Related reading

- [Formal SignWriting](/#series/formal-signwriting/formal-signwriting/primary)
- [FSW and SWU](/#series/formal-signwriting/fsw-and-swu/primary)
- [Formal SignWriting in Practice](/#series/formal-signwriting/formal-signwriting-in-practice/primary)
- [Sutton SignWriting Foundations](/#series/foundations)
