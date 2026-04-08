# Formal SignWriting Technical Notes

**Formal SignWriting**  
The two-part word, spatial text, and the core model

These technical notes collect a few compact details behind the core model.

## 0. Minimal example

One compact example is enough to show the architecture:

```text
AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475
```

The structure is:

- `A...` for the temporal prefix
- `M525x535...` for the spatial signbox

That is the whole architecture in miniature. The rest of the model simply makes the consequences explicit.

## I. Minimal definitions

The opening layer depends on a few stable definitions:

| Term | Definition |
| --- | --- |
| sign | a required signbox with an optional temporal prefix |
| temporal prefix | the optional sequence-preserving part of the word |
| spatial signbox | the required composition-preserving part of the word |
| FSW and SWU | plain-text encodings of the same model, with FSW commonly canonical in processing and SWU supported for Unicode-oriented interchange |
| style string | optional markup for presentation and customization |

These definitions should remain stable even as later appendices and tools become more detailed.

## II. Validity and sequence

The validity boundary should stay explicit:

- a full sign requires a signbox
- a sequence-only string is only a fragment
- a signbox-only string is a valid sign
- sequence-sensitive sorting is unavailable when no temporal prefix is present

The sequence should also be described carefully:

- it is written by an author
- it is created according to a theory of sorting or analysis
- it is not derivative markup recoverable automatically from the signbox alone
- Val's Sign Spelling Guidelines is the most prevalent current theory
- Formal SignWriting stays theory agnostic, even though mixed theories reduce the value of shared sorting

## III. Technical position

The technical position is:

- Formal SignWriting is a durable technical model for written sign text
- the visible writing and the computational representation are related but distinct layers
- FSW and SWU are plain-text encodings of the same model, with FSW commonly canonical in processing and SWU supported for Unicode-oriented interchange
- the style string is not canonical sign text and should be treated as optional markup for presentation
- the two-part word is the core explanatory move
- search, sorting, rendering, and transformation are consequences of that move

## IV. Why the two-part word belongs first

The two-part word is not only a definitional convenience.

It is the move that lets the rest of the architecture stay coherent:

- encodings can preserve the model
- grammar can describe the model
- search can operate over the model
- rendering can realize the model
- implementation can maintain the model across software generations

Without this opening move, later layers risk feeling like a loose collection of mechanisms.

## V. Minimal example broken apart

The worked sign can be broken apart this way:

```text
A S10011 S10019 S2e704 S2e748
M525x535 S2e748483x510 S10011501x466 S2e704510x500 S10019476x475
```

The first line preserves theory-based sequence data.

The second line preserves spatial composition.

That is enough to show why later layers can treat the same sign as:

- text
- geometry
- grammar
- search target
- rendering source

## VI. Consequences of the opening move

Once the two-part word is accepted, several consequences follow immediately:

- sequence-sensitive handling becomes possible
- sequence theory can vary without changing the formal model
- spatial placement remains visible and processable
- validity can be defined formally
- search can operate on structured text
- rendering can remain downstream from encoding
- implementation can preserve the model across tools and workflows

## VII. Small core, growing perimeter

The core of the model should stay small:

- the two-part word
- canonical encodings
- spatial composition
- valid structure
- downstream rendering and styling boundaries

Around that core, the surrounding record can continue to grow:

- new tooling
- new datasets
- reference appendices
- compatibility notes
- implementation reports

That balance keeps the model readable while letting the reference material expand.
