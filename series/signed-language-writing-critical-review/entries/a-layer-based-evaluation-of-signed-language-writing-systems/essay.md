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

The comparison asks four stricter questions:

- what layer is the work actually operating on?
- what does it really establish?
- where is it insightful?
- where does that insight get mislocated?

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

- what primary layer the work addresses
- whether it keeps its layers distinct
- what representational target it privileges
- what structural unit it centers
- how it handles spatial composition
- what sort of text model or technical model it gives
- how well it is grounded in actual Sutton SignWriting practice and infrastructure
- whether its conclusions are stronger than its evidence

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

The problem begins when those insights are extended into a writing-system comparison without sufficient layer discipline.

Filhol's strongest constructive proposal is really at the semantic plus software-representation layer. AZee is being used to build a human-readable, machine-tractable graphical interface to formal meaning-bearing structures. That is legitimate and potentially useful.

But once this is treated as though it were also a writing-system replacement argument, several problems appear:

- SignWriting is treated too narrowly as chiefly phonographic
- already-existing writable and queryable SignWriting text is not engaged strongly enough
- novelty claims are made around properties such as plane-based recursive structure without sufficient comparison to existing signed writing practice

So Filhol's paper is not best read as a successful reclassification of signed writing.

It is better read as a prompt toward semantic-layer tooling, graphical interfaces, and software representation.

**Layer-specific classification:** `Correct and Useful` at the semantic/software pressure layer; `Partially Correct` overall because the writing-system replacement argument is overstated

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
- weak and biased on what kind of writing supposedly follows

**Layer-specific classification:** `Correct and Useful` as a necessity-of-writing argument; `Partially Correct` overall because the orthographic prescription is alphabetically biased

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

So Thiessen's mistake is not that he misses structure.

It is that he mislocates the strongest explanatory weight too low:

- in symbol inventory
- in symbol combination
- in a language-like "grammar of SignWriting"

rather than centering the written sign as the primary written unit from the start.

**Layer-specific classification:** `Correct and Useful` as script-internal descriptive and computational work; `Partially Correct` overall because the analysis remains one abstraction level too low

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

**Layer-specific classification:** `Correct and Useful` at the character-standardization layer; `Partially Correct` overall because the written-sign text model remains incomplete and was later overinterpreted as more complete than it was

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

## What this paper does and does not claim

Because the series has grown, this should be said explicitly.

This paper does claim:

- that the four selected cases still form a strong core demonstration set
- that the layer-based method works across multiple kinds of signed-writing problem
- that a recurring comparative pattern can be shown across those cases

This paper does not claim:

- that these four cases exhaust the field
- that this bounded comparison replaces the fuller series
- that every later review can be reduced without remainder to the same four-case pattern

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

## Go Next

- *A Unified Critique Framework for Signed Language Writing, Encoding, and Representation* for the full method behind this comparison
- *Sutton SignWriting and Formal SignWriting Through the Framework* for the internal baseline
- *From Critique to Construction: Priorities for Signed Language Writing Infrastructure* for the next-step synthesis
