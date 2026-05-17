# A Layer-Based Evaluation of Signed Language Writing Systems

**A comparative demonstration across Filhol, Grushkin, Thiessen, and Unicode SignWriting**

These four cases do not make the whole field.

They do make one recurring pattern visible.

Each source identifies a real part of the signed-writing problem, but each also shifts the main problem onto a different layer:

- Filhol (2020), where semantic representation and software workflow pressures are central
- Grushkin (2017), where literacy and orthographic prescription are central
- Thiessen (2011), where SignWriting structure is taken seriously but analyzed too low
- Unicode SignWriting, where standardization succeeds at one layer while remaining incomplete at another

Taken together, they show how good insights can still produce incomplete conclusions when writing, encoding, semantic representation, literacy design, and symbol analysis are not kept distinct enough.

This paper is a bounded core comparison, not a total survey of the field.

It can still serve as an orientation piece because a small bounded comparison shows the method quickly; it should not be mistaken for the whole review set.

## Introduction

Work on signed language writing systems, notation, representation, and encoding often identifies real problems while still arriving at incomplete conclusions.

That pattern is not random.

It usually arises because a real insight is placed at the wrong level.

Sometimes the writing problem is replaced by a semantic problem.

Sometimes by a literacy-transfer problem.

Sometimes by a symbol-classification problem.

Sometimes by a character-standardization problem.

All four selected works identify genuine pressures:

- software and queryability
- the need for writing
- SignWriting structure
- standardization and interoperability

The comparison asks stricter questions:

- what layer or adjacent-purpose category the work actually occupies
- what primary unit and representational target it centers
- how it handles space, sequence, text structure, and infrastructure
- which layers it solves, borrows, receives from external practice or infrastructure, assumes, defers, or leaves outside its scope
- what evidence and authority support its claims
- where the layer-level judgment differs from the full-path judgment

The companion matrix offers the compact version of the same argument.

## Method

The governing principle is the same one stated in the framework entry:

> a system must be evaluated at the level it claims to operate on

Applied to signed language writing, it requires distinguishing at least the following:

- language
- writing system
- notation / transcription
- semantic representation
- encoding / text model
- rendering

For each case, the comparison asks:

- what primary layer or adjacent-purpose category the work addresses
- whether it keeps its layers distinct
- what representational target it privileges
- what primary unit it centers
- how it handles spatial and sequential organization
- what sort of text model or technical model it gives
- which layers are solved, borrowed, externally supplied, assumed, deferred, or not in scope
- how well it is grounded in actual Sutton SignWriting practice and infrastructure
- what evidence, maturity, authority, and prior-work engagement support its claims
- where the layer-level judgment and full-path judgment differ

## Why these four cases

Each case highlights a different recurrent displacement.

### 1. Filhol (2020)

This is the semantic and software case. It shows what happens when real software requirements are allowed to collapse into a writing-system argument.

### 2. Grushkin (2017)

This is the literacy and orthography case. It shows what happens when a strong necessity-of-writing argument is followed by an alphabetically biased design recommendation.

### 3. Thiessen (2011)

This is the structure and formalization case. It shows what happens when SignWriting is taken seriously and still analyzed one level too low, through symbols rather than written signs.

### 4. Unicode SignWriting

This is the standardization case. It shows what happens when a real character-level success is later treated as though it completed the entire writing problem.

Together, the four cases produce a compact but still differentiated pattern.

## Results

### 1. Filhol (2020)

Filhol identifies real needs:

- editable signed-language representation
- queryable signed-language representation
- software-integrated signed-language representation
- synthesizable structure connected to avatar pipelines

He is also right that spontaneous user diagrams tend toward:

- plane-based organization
- visually meaningful grouping
- forms that users can read more naturally than raw formal code

Those are real contributions.

The problem begins when those insights are extended into a writing-system comparison without separating layer-level success from full-path adequacy.

Filhol's strongest constructive proposal is really at the semantic plus software-representation layer. AZee was designed to support human-readable, machine-tractable graphical interfaces to formal meaning-bearing structures. That is legitimate and potentially useful.

But once this is treated as though it were also a writing-system replacement argument, several problems appear:

- SignWriting is treated too narrowly as chiefly phonographic
- already-existing writable and queryable SignWriting text is not engaged strongly enough
- novelty claims are made around properties such as plane-based recursive structure without sufficient comparison to existing signed writing practice

So Filhol's paper is not best read as a successful reclassification of signed writing.

It is better read as a prompt toward semantic-layer tooling, graphical interfaces, and software representation.

In declared-dependency terms, the semantic and software layers are the solved or directly addressed layers. Human writing, written convention, public text operations, pedagogy, and stewardship are not supplied by the proposal itself; they become assumed layers only when the paper is read as a writing-system replacement argument.

**Layer-level judgment:** Useful but narrow as semantic, software, and synthesis-oriented representation.

**Full-path judgment:** Misleading when overextended into a writing-system replacement argument, because the proposal does not by itself supply human written units, written convention, durable text operations, public use, and stewardship.

### 2. Grushkin (2017)

Grushkin's article is strongest in its first major claim:

- signed languages benefit from writing

That part of the article remains valuable. Grushkin correctly argues that:

- gloss is inadequate as writing
- video is not a substitute for routine text
- written signed language could support pedagogy, preservation, communication, and internal discourse

These are substantial strengths, and the review series should preserve them.

The problem appears when Grushkin moves from:

- signed languages need writing

to:

- signed languages, especially in alphabetic-majority societies, are best served by alphabetic writing

That second claim is much weaker than the first.

The article's comparative reasoning is governed too heavily by alphabetic expectations:

- compatibility with English biliteracy
- phonological transfer assumptions
- comparison of signed scripts to alphabetic rather than signed-language adequacy

This leads Grushkin to treat SignWriting and related systems too shallowly as "iconographic" and to undervalue their internal structure as writing systems.

So Grushkin's article is not best classified simply as misleading across the board.

It is better described more carefully:

- strong on why signed languages need writing
- less supported, and shaped by alphabetic bias, on what kind of writing follows

The declared dependencies are therefore uneven. Grushkin solves a conceptual and advocacy layer by showing why signed languages need writing. The alphabetic recommendation assumes that transfer into English can govern orthographic design and leaves the signed written unit, spatial composition, text model, infrastructure, and comparative evidence unresolved.

**Layer-level judgment:** Correct and useful as a necessity-of-writing argument for signed languages.

**Full-path judgment:** Not full-path adequate as an orthographic prescription, because the alphabetic recommendation does not account for signed written units, plane-based composition, text modeling, or existing SignWriting infrastructure.

### 3. Thiessen (2011)

Thiessen provides the strongest early engagement with SignWriting among the four cases.

That matters.

Unlike Grushkin, he does not mainly evaluate SignWriting from the outside through orthographic preference. Unlike Filhol, he does not mainly approach it through software or semantic representation. He actually tries to describe how the system works.

He correctly recognizes:

- the signbox
- spatial composition
- non-arbitrary written structure
- the need for a one-dimensional encoding for software use

He also does serious script-internal descriptive work around:

- symbol classes
- fills
- rotations
- handedness
- viewpoints
- movement structure
- placement rules

The problem is not superficial misunderstanding.

The problem is where he places the top-level abstraction.

Thiessen's main route into the problem is symbol-first. The thesis proceeds through symbol categories and only later reaches whole-sign structure and encoding. Even where Chapter 10 begins to move toward underlying sign structure, tree relations, attachment points, and relative positioning, this move remains late and explicitly preliminary.

So Thiessen's limitation is not that he misses structure.

It is that he mislocates the strongest explanatory weight too low:

- in symbol inventory
- in symbol combination
- in a language-like "grammar of SignWriting"

rather than centering the written sign as the primary written unit from the start.

This makes Thiessen a useful case of deferred rather than ignored dependency. The thesis solves much of the script-internal descriptive layer and directly recognizes the need for encoding, but the written-sign text model remains late and preliminary. The missing full-path layer is not invisible; it is not yet governing.

**Layer-level judgment:** Correct and useful as script-internal descriptive and computational work.

**Full-path judgment:** Structurally incomplete where the analysis treats symbol categories as the main abstraction instead of centering the written sign and authored spatial composition as the primary text structure.

### 4. Unicode SignWriting

The Unicode case is different from the other three because it is not mainly a literature paper. It is a standards case.

That means the evaluative standard must stay very clear.

Unicode SignWriting correctly recognized:

- that SignWriting is a real script
- that a character repertoire needed stable standardization
- that spatial composition is essential to the script

Those are real achievements.

But the standardization outcome was only partial.

At the character layer, the result was meaningful.

At the written-sign layer, it remained incomplete.

That distinction is the whole review.

Unicode SignWriting helps solve:

- character naming
- public referenceability
- part of the interoperability problem

It does not complete:

- a compatible written-sign text model
- direct preservation of full writer-selected symbol state across the system
- clean migration from current Sutton SignWriting production ecosystems
- spatial sign encoding in a way that resolves the written-sign problem

So the Unicode case is not an instance of total level confusion.

It is an instance of:

- correct multi-layer awareness
- partial completion
- and later over-reading by others who treated character encoding as if it had solved writing as text

The declared-dependency pattern is especially clear here. Character repertoire and script recognition are solved layers. Existing SignWriting practice and infrastructure are externally supplied layers the standard attempts to serve. The written-sign text model, stable symbol identity, sorting, migration, and production compatibility remain deferred or assumed layers when the standard is interpreted as a complete production replacement.

**Layer-level judgment:** Correct and useful as character-repertoire standardization and script-recognition work.

**Full-path judgment:** Structurally incomplete as a compatible production replacement, because the written-sign text model, stable writer-selected symbol identity, spatial composition, sorting, migration, and dataset compatibility remain unresolved.

## Cross-case analysis

The strongest comparative pattern is not that every case makes exactly the same mistake.

The stronger and more accurate pattern is this:

> the writing problem is repeatedly displaced

In each case, one real layer of the problem becomes a stand-in for the whole:

- Filhol foregrounds semantic structure and software representation
- Grushkin foregrounds literacy transfer and alphabetic compatibility
- Thiessen foregrounds symbol structure and rule-governed combination
- Unicode foregrounds character inventory and standardization

Each of those is a real part of the larger field.

None of them is the whole writing problem.

Where a writing-system or text model answer is actually needed, the field repeatedly struggles to stabilize the right top-level unit and relation set:

- the written sign as the primary written unit
- authored spatial composition as part of the text
- and a clean distinction among writing, encoding, and rendering

This is why the comparison matters.

It shows that the field's recurring problems are not merely differences of opinion about conclusions.

They are recurrent displacements of the problem itself.

## Scope of this paper

This paper does claim:

- that the four selected cases still form a strong core demonstration set
- that the layer-based method works across multiple kinds of signed-writing problem
- that a recurring comparative pattern can be shown across those cases

The comparison is intentionally bounded.

These four cases do not exhaust the field, replace the fuller series, or reduce every later review to the same pattern.

They show why the layer-based method is useful enough to carry forward.

## Conclusion

The primary recurring problem in signed language writing research is not lack of insight.

It is repeated displacement of insight.

Filhol identifies a real semantic/software problem.

Grushkin identifies a real writing-need problem.

Thiessen identifies a real structural problem.

Unicode identifies a real character-standardization problem.

But in each case, the identified layer is pressed too far toward becoming the whole answer.

A more adequate field-wide model requires:

- recognizing the written sign as the primary written unit
- preserving spatial composition as authored text rather than decoration
- separating writing, encoding, and rendering cleanly
- and evaluating signed writing first on its own structural terms, not only by its compatibility with surrounding spoken-language norms

That is the lasting value of the layer-based method.

It does not merely produce separate reviews.

It makes the recurrent pattern behind them comparable.

## Closing statement

The question is not whether signed language can be written.

It already is.

The question is whether the field is describing that writing at the right level.
