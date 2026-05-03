# Official Unicode SignWriting: The Character Problem and the Written-Sign Problem

**A standards review of partial standardization, unresolved text structure, and later over-reading**

The official Unicode SignWriting work solved part of a real problem.

It did not solve the whole problem, and later discussion often treated it as though it had.

The central distinction in this review is between:

- naming characters
- preserving stable writer-selected symbol identity
- encoding complete written signs in a compatible usable way

In SignWriting, the written sign is not just a list of symbols. It is a structured signbox. A standard that names characters without completing a compatible written-sign model has not yet solved SignWriting as text.

## Executive judgment

Layer-specific classification:

- `Correct and Useful` at the character-inventory and public-standardization layer
- `Partially Correct` overall because the written-sign text model remains incomplete and currently non-compatible with the existing Sutton production ecosystem

Refinement:

> Correct at the character-inventory layer, but structurally incomplete and currently non-compatible with the existing production ecosystem at the written-sign layer

The design correctly recognized that SignWriting is a real script and that spatial composition is essential to it.

It did not complete a compatible text model for written signs.

That gap is not only historical.

In current practice it affects:

- symbol identity
- facial composition
- spatial writing
- collation and sorting
- migration from existing data and tools
- production interoperability

## Author position in this standards review

The author of this review is also the developer and steward of Formal SignWriting and related Sutton SignWriting production infrastructure.

That relationship matters most in this entry.

Compatibility with FSW, SWU, and existing Sutton SignWriting data is therefore not presented as a neutral measure of all possible Unicode value. It is an infrastructure criterion: a standard intended to serve an existing writing ecosystem should be judged partly by whether it can preserve and migrate that ecosystem's authored text, symbol identity, sorting behavior, tools, and data.

This review therefore separates two judgments:

- official Unicode SignWriting has real value as a character-standardization outcome
- it is not currently a compatible replacement text model for the existing Sutton SignWriting production stack

Both claims need to remain visible at the same time.

## A standards-review distinction that must stay clear

This review keeps three things separate:

1. what the proposal itself recognized
2. what the standardized outcome actually completed
3. what later readers or implementers assumed had been completed

The Unicode proposal was often more modest than later public interpretation.

The later over-reading is part of the problem.

## I. Layer identification

The Unicode proposal clearly operated at the character-encoding layer.

It also explicitly recognized that SignWriting required a second layer for spatial organization.

That is already better than work that mistakes character inventory for writing-system completion.

The problem is that the accepted path substantially standardized the character layer while leaving the written-sign layer unresolved in a practically compatible form.

Under the critique framework, this is not a case of total layer blindness.

It is a case of:

- correct multi-layer awareness in principle
- incomplete layer completion in practice
- later public over-reading of what had actually been finished

## II. Representation model

The official design is stronger than a mere glyph catalog.

It explicitly recognizes that SignWriting characters combine spatially and that visible composition is part of spelling rather than decoration.

That is an important strength and should be preserved in any fair reading of the record.

But the design still stops short of a full written-sign model.

It names much of the character set.

That is not the same as:

- preserving full symbol identity across the system
- representing the written sign directly as text
- supporting a compatible model of authored spatial composition

So the representation model is:

- character-aware
- spatially aware in principle
- not written-sign complete

## III. Structural unit analysis

This is one of the review's main structural concerns.

At the Unicode layer, the standard naturally speaks in terms of characters and modifiers.

That is understandable.

It is not enough.

The primary written unit of Sutton SignWriting is not merely the symbol.

It is the written sign, modeled as a required spatial signbox with an optional temporal sequence prefix.

Once the standard treats the symbol or character as the fundamental unit, it can succeed at naming the repertoire while still failing to encode the written word.

That is exactly what happened.

Under the framework, this is a form of `Symbol-Centric Modeling` at the standards layer.

## IV. Spatial vs linear organization

The official design deserves credit for not pretending that SignWriting is simply linear.

It explicitly recognized that spatial organization is essential.

But recognition is not completion.

The unresolved issue is not merely how to draw symbol strings.

The unresolved issue is how to encode written signs faithfully, processably, and compatibly as text.

That means the Unicode outcome is:

- strong in acknowledging plane-based writing
- weak in completing plane-based text

This is why the question cannot be reduced to font support or display polish.

Space is part of authorship.

If the text model cannot carry that cleanly, the writing-system problem remains open.

## V. Text model and encoding

The essential distinction here is:

> writing is not encoding  
> encoding is not rendering

The official Unicode design does achieve something important.

It names much of the SignWriting character set and offers a standard repertoire that can be referenced publicly.

That is real progress.

But the deeper text model issues remain.

The current official path does not provide a compatible completed model for:

- stable writer-selected symbol identity across the full system
- the two-part written word of sequence and signbox
- direct spatial composition of written signs
- production sorting and collation aligned with current practice
- drop-in migration from existing FSW and SWU ecosystems

Two issues matter especially here.

### Inherent first fill and first rotation

When first fill and first rotation become inherent rather than explicit, the encoding no longer preserves the writer-selected symbol state in the same way.

That is not only a stylistic objection.

It affects:

- explicit symbol identity
- canonical text
- stable sorting
- migration from existing production data

### The missing written-sign model

The current official path standardizes much of the character problem.

It does not solve the written-sign problem in a compatibly completed way from the standpoint of the current production ecosystem.

That is the central standards judgment.

## VI. Human vs machine layers

This is where the facial system becomes especially important.

In the current official model, the facial system does not simply preserve a closed shared inventory of writer-selected facial symbols and their authored placement.

Instead, writers enter facial elements and part of the final symbol formation is mediated through font behavior and interpretation.

That means the line between:

- stored text
- symbol identity
- and rendered outcome

is no longer clean.

Under the critique framework, this is a serious standards problem because rendering is taking on part of the structural job.

That does not merely affect appearance.

It affects whether the same written symbol inventory is being preserved at all.

This is why the current official encoding should not be described as though it solved symbols cleanly and only left writing unresolved.

In at least this part of the system, the symbol layer itself is not fully preserved.

## VII. Empirical grounding

The Unicode proposal was not fantasy.

It emerged from real SignWriting history, real software, and real prior use.

That matters and should be said plainly.

At the same time, the evaluative bar is higher now than it was at proposal time.

The current Sutton SignWriting ecosystem includes:

- real tools
- real fonts
- real websites
- real corpora
- real dictionaries
- real published materials
- real production datasets

So the current question is not only whether Unicode SignWriting was theoretically serious.

The current question is whether it is compatible with living production use.

At present, it does not appear to be compatible in a drop-in practical sense.

## VIII. Claims vs evidence

The Unicode proposal and resulting official design do demonstrate that:

- SignWriting is a real script with a substantial character repertoire
- character-level encoding is possible
- spatial composition is essential to the writing system
- prior SignWriting implementations were serious enough to justify standardization work

They do not demonstrate that the official Unicode design solved:

- stable symbol identity across the full system
- the written-sign problem
- full production compatibility
- clean migration from FSW and SWU ecosystems
- collation adequate to current production workflows

This is where later public interpretation drifted beyond what had actually been proved.

The proposal itself recognized that spatial composition remained a second-stage issue.

Later discussion often behaved as though that second stage had effectively been completed.

It had not.

## IX. Relationship to existing systems

The Unicode effort did try to preserve continuity with prior SignWriting work.

That should be acknowledged.

But partial continuity is not full interoperability.

The current production judgment is still:

- FSW remains the canonical production text
- SWU remains the supported Unicode-oriented isomorphic form
- official Unicode SignWriting is not a drop-in replacement for the Sutton production stack as it currently exists

So this is not a case of:

- Unicode versus no Unicode

It is a case of:

- partial standardization without a compatible replacement of the living ecosystem it was meant to serve

## Main critique categories

- `Level Confusion`
- `Symbol-Centric Modeling`
- `Infrastructure Awareness`
- `Forced Linearization`

The first category matters most in public discussion.

People repeatedly confuse:

- character naming
- symbol identity
- written-sign encoding

That confusion is the main reason the issue keeps returning.

## Relationship to the Unicode dossier

This review does not replace the `Unicode and SignWriting` series.

That series remains the dossier and briefing layer for:

- chronology
- developer notes
- UTC-facing requests
- compatibility details

It does something different.

It interprets the Unicode record through the public critique framework of `Signed Language Writing Critical Review Series`.

## Final assessment

The cleanest judgment is:

> the official Unicode SignWriting design solved much of the character problem, but not the written-sign problem

That means the standardization outcome is real and historically important.

It also means it is still incomplete and currently non-compatible as a production text model for current Sutton SignWriting use.

So the right conclusion is not:

- Unicode failed

and not:

- Unicode solved SignWriting

It is:

> official Unicode SignWriting is a real but incomplete standardization outcome: valuable for naming characters, inadequate as a complete and currently compatible text model for Sutton SignWriting in production use
