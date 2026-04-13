# Formal SignWriting

**The two-part word, sign text, and the core model**

Formal SignWriting is a technical model for sign text that can be stored, searched, checked, and processed by software without losing the written form.

Its central idea is simple:

> a sign can be modeled as a two-part word of time and space

In practical terms, a full sign always has a spatial signbox. It may also carry a temporal prefix.

That word therefore contains:

- an optional **temporal prefix**, which preserves a one-dimensional symbol sequence
- a required **spatial signbox**, which preserves a two-dimensional arrangement of writing symbols

The opening task is to define the core model clearly enough that every later layer stays legible.

## Core claim

Formal SignWriting should be understood as:

- a way to write signs as text that software can work with
- a grammar for valid strings
- a bridge between visible writing and software handling
- a framework that supports search, rendering, and transformation
- a long-term implementation record for developers, researchers, and maintainers

## Minimal vocabulary

The core vocabulary is small:

| Term | Meaning |
| --- | --- |
| sign | a required spatial signbox, optionally preceded by a temporal prefix |
| temporal prefix | the optional sequence-preserving part, used mainly for sorting and sometimes for analysis |
| spatial signbox | the required composition-preserving part |
| FSW or SWU | plain-text encodings of the model, with FSW commonly canonical in processing and SWU supported for Unicode-oriented interchange |
| style string | optional presentation markup, not canonical sign text |

If these definitions are clear, the rest of the model becomes much easier to hold in view.

## The two-part word

The core structure is a two-part word:

- an optional **temporal prefix** for sequence-sensitive information
- a required **spatial signbox** for composed written form

That separation matters because it preserves two different aspects of writing at once:

- sequence
- spatial composition

This is not a contradiction.

It is the design solution.

If the model preserved only sequence, too much of the written form would be flattened away. If it preserved only spatial arrangement, too much would become hard to store, search, and process. The two-part word is the move that keeps both.

## A worked example

Consider this FSW sign:

```text
AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475
```

It can be read in two parts:

```text
A S10011 S10019 S2e704 S2e748
M525x535 S2e748483x510 S10011501x466 S2e704510x500 S10019476x475
```

The first line is the **temporal prefix**:

- it begins with `A`
- it preserves a sequence of symbol keys
- it primarily supports sorting
- it can also carry linguistic analysis written according to a theory

The second line is the **spatial signbox**:

- it begins with the signbox marker `M`
- it establishes a signbox coordinate
- it places concrete symbols at concrete coordinates

This example is useful because it makes the architecture visible. The word is still a string, but the string is carrying both sequence and signbox.

## Sequence, sorting, and theory

The temporal prefix should not be described as derivative markup extracted automatically from the signbox.

It is written by an author according to a theory of sorting or analysis.

In current practice, Val's Sign Spelling Guidelines is the most prevalent theory.

That matters because:

- the sequence is primarily used for sorting
- the sequence can also carry linguistic analysis
- the sequence is theory-based rather than mechanically recoverable from two-dimensional space alone
- Formal SignWriting does not force one sorting theory

That theory agnosticism is a strength, but it has a practical consequence:

- if multiple sequence theories are mixed in one collection, sorting can be performed in multiple incompatible ways, which reduces the value of the sort

## Technical consequences

Once the two-part word is accepted, several technical layers become clearer:

- FSW and SWU as plain-text encodings
- character sets and conversion
- symbol and coordinate models
- grammar and token patterns
- search and query language
- rendering and layout
- styling as optional presentation markup
- implementation and maintenance strategy

These layers are easier to teach separately, but they remain consequences of the same model.

The dependency can be stated more compactly:

| Layer | What it receives from the core model |
| --- | --- |
| encoding | one stable text form |
| geometry | one explicit signbox arrangement |
| grammar | one valid structural account |
| search | one searchable text form |
| rendering | one source for visible output |
| practice | one stable implementation target |

That table is useful because it shows that the two-part word is not only a description of signs. It is the starting condition for the entire architecture.

## Why the two-part word comes first

The two-part word is not just one idea among many.

It is the center of the whole technical architecture:

- the encoding layer preserves it
- the spatial model explains it
- the grammar validates it
- the search layer exploits it
- the rendering layer realizes it

If this move is not clear, later layers feel disconnected. If it is clear, the whole model becomes legible.

This is why the model should feel settled at the center even when the ecosystem around it continues to grow.

## Core point

Formal SignWriting works because it lets one textual form preserve two things at once:

- the optional theory-based sequence of symbols
- the spatial composition of the written sign

That is what makes written sign text both faithful to the writing and usable in software.

