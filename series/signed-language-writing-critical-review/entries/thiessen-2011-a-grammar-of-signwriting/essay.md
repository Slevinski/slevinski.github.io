# Thiessen (2011): A Grammar of SignWriting

**A review of real structural insight placed one level too low**

Stuart M. Thiessen's thesis is one of the stronger early engagements with SignWriting because it takes the writing system seriously as writing.

It does not dismiss SignWriting as merely pictorial, merely pedagogical, or merely marginal. It treats it as a writing system with internal structure, recurring units, non-arbitrary composition, and computational consequences.

Thiessen gets much closer than many other writers to the real problem. He recognizes the signbox, takes spatial organization seriously, and sees clearly that SignWriting cannot be handled adequately by simply flattening it into a line of characters and pretending nothing important has been lost.

At the same time, the thesis still organizes its main analysis around symbol inventory, symbol classes, symbol behavior, and symbol combination. It reaches toward sign structure and encoding, especially in its final chapter, but it does so from a symbol-first base and only provisionally.

Layer-specific classification:

- `Correct and Useful` as script-internal descriptive and computational work
- `Partially Correct` overall because the analysis remains too symbol-centered at the top level

Refinement:

`Serious, Structurally Insightful, and Computationally Important, but Still Symbol-Centric at the Top Level`

## The thesis's main project

Thiessen states the project clearly. He argues that SignWriting should be understood as a system with a "grammar," by which he means rules governing how symbols function and combine to form whole written signs.

The thesis presents SignWriting as distinct from Stokoe, HamNoSys, and SignFont in one especially important respect: those systems are treated as largely linear symbol streams, whereas SignWriting uses spatial relationships inside a two-dimensional signbox.

That point matters because it sets up the whole thesis.

It is still worth saying that this contrast does not erase the narrower value of those other systems. Stokoe, HamNoSys, and SignFont each belong more naturally to the history of linguistic notation and formal description than to mature public writing, and they should usually be judged there first.

The thesis does not begin from the assumption that signed writing must look alphabetic in order to count as writing. Instead, it says that a writing system for signed language must represent a different set of articulators and must somehow reduce a three-dimensional signing event into written form.

Thiessen also sees a second problem very clearly:

- SignWriting may be readable as two-dimensional writing
- but software still needs some one-dimensional encoding strategy for storage, sorting, parsing, and related tasks

That computational turn is one of the thesis's major strengths. Thiessen is not only asking what symbols exist. He is asking what kind of formalization would be needed if SignWriting were to function inside general-purpose software.

The abstract and chapter plan make the structure of the thesis explicit. Most of the work proceeds category by category:

- hands
- movement
- head and face symbols
- torso and limb symbols
- dynamic symbols
- punctuation
- SignSpelling notation
- rules for composing signs
- future directions for research

That organization is not incidental. It reveals both the strength and the limit of the thesis. Thiessen is trying to describe real written structure, but his path into that structure runs primarily through the symbol system.

## Where Thiessen is strongest

### 1. It takes SignWriting seriously as writing

Much of the literature on signed language writing begins from some mixture of doubt, marginalization, or inherited alphabetic expectations. Thiessen does not. He treats SignWriting as a serious candidate writing system and assumes that its structure is worth describing on its own terms.

He does not frame the system as a mere classroom convenience. He does not reduce it to a transcription aid for researchers. He does not dismiss it because it does not resemble ordinary alphabetic practice. Instead, he assumes that if SignWriting is being used to write signed languages, then the right question is:

- what kind of structure does this writing system actually have?

That is the right place to begin.

### 2. It correctly treats spatial organization as part of the writing

This is one of Thiessen's clearest strengths as a reader of the script.

He explicitly contrasts SignWriting with more line-based systems and says that SignWriting uses the spatial relationships of symbols in a two-dimensional signbox to represent a sign. That is not a decorative observation. It is a structural one.

The thesis repeatedly shows awareness that SignWriting is not merely a linear symbol string awaiting later formatting. The arrangement of symbols is part of what the writing is.

This comes through in several places:

- the signbox as the unit within which symbols are composed
- the discussion of viewpoints and planes
- the treatment of fills, rotations, reflections, and handedness
- the later discussion of placement rules and encoding

Even when Thiessen is still working at the symbol level, he is not blind to space. Many weaker accounts fail before analysis even begins by treating spatiality as secondary display rather than authored written structure.

### 3. It does serious script-internal descriptive work

Thiessen does not merely say that SignWriting is spatial. He tries to describe how the system works internally.

Chapter 1 alone shows this in the treatment of:

- receptive and expressive mode
- normal, side, and top viewpoints
- wall, floor, and side planes
- fills for hands and arrowheads
- rotations and reflections
- synographs and homographs
- handedness
- vertical column directionality
- opacity and z-order
- diacritics

This is real descriptive labor. It is exactly the sort of work a writing-system analysis ought to do when faced with a script whose units and relations do not map neatly onto alphabetic expectations.

The same is true of the broader thesis structure. Thiessen catalogs major symbol classes, tries to distinguish their internal organization, and identifies recurrent regularities in how they combine.

That is not the final theory we need.

It is still competent and valuable work.

### 4. It recognizes the computational problem early and clearly

This is the other major strength of the thesis.

Thiessen sees that the very feature that makes SignWriting readable and structurally apt for signed language also creates a technical challenge. A two-dimensional signbox cannot simply be assumed to fit the storage and rendering expectations inherited from ordinary line-based text systems.

He explicitly connects encoding to practical computational tasks such as:

- spell-checking
- sorting
- parsing
- machine translation

That is a transitional but very important insight. It shows that the thesis is not only descriptive. It is trying to build a bridge from writing-system analysis toward actual technical implementation.

This becomes even clearer in Chapter 10, where Thiessen turns to:

- underlying sign structure
- attachment points
- distances between symbols
- angle relations
- possible linearization strategies

Many papers never get that far.

## Where the thesis stops short

The thesis is serious, useful, and often perceptive. Its weakness is not lack of effort or lack of insight. Its weakness is where it locates the highest level of explanation.

### 1. It overextends the language of "grammar"

Thiessen says that SignWriting has a "grammar" and explicitly draws an analogy to the lexicon, grammatical categories, morphology, and syntax of a natural language.

That move is understandable, especially for a thesis written at the intersection of linguistics and computing. But it is also the place where the analysis begins to drift.

The problem is not that the system lacks rules.

It clearly has rules.

The problem is that "grammar of SignWriting" can easily slide from:

- rule-governed writing structure

into:

- a language-like grammar of symbols

Those are not the same thing.

The more appropriate target is something like:

- a grammar of written sign structure
- a model of how written signs are composed and organized
- and eventually a model of sign text

Thiessen gets near this destination, especially late in the thesis, but the framing language keeps pulling the work back toward a symbol grammar analogous to language grammar.

That is why the thesis feels one level too low even when much of its descriptive work is good.

### 2. Its main analytical route is symbol-first

The chapter structure makes this plain. The thesis proceeds through symbol categories before it reaches whole-sign composition and only later arrives at future directions for encoding.

That sequence is not automatically wrong. For a little-used and technically complex writing system, inventory work may be necessary.

But it has a consequence.

The writing system is primarily explained through:

- hand symbols
- movement symbols
- head and face symbols
- torso and limb symbols
- dynamic symbols
- punctuation
- sorting notation

This means the thesis tends to build upward from components rather than beginning from the written sign as the primary durable unit of text.

The distinction matters. A script can have a richly describable symbol inventory and still require a higher-order model in which the written sign, not the symbol, is the primary unit from which the text model should be derived.

Thiessen does not entirely miss that higher-order problem.

He just does not center it soon enough.

### 3. It reaches sign structure late, and only preliminarily

The best corrective to any unfair reading of the thesis is Chapter 10. Thiessen does not simply remain at the level of symbol cataloging forever. He begins to think about:

- the underlying structure of a written sign
- tree-like relations among elements
- attachment points
- relative distances and angles
- implementation-neutral encoding

That is important, and any competent review should acknowledge it directly.

In fact, Chapter 10 contains some of the strongest material in the thesis because it shows Thiessen trying to move away from raw Cartesian placement and toward a more constrained relational model.

But this part of the work is explicitly preliminary.

Thiessen himself says that only preliminary research was possible on the structure and relationships within a sign because so much effort first had to be spent on the symbol inventory.

That admission is revealing. It confirms the review's main point.

The thesis does begin to approach the sign as a structured written unit.

It simply arrives there late, and in an exploratory rather than governing way.

### 4. The encoding model remains too close to renderer reconstruction

Thiessen clearly knows that a Unicode-style encoding cannot simply preserve arbitrary pixel coordinates. He looks for alternatives and explores attachment points, relational distances, angles, and symbol neighborhoods.

This is an intelligent move.

But the overall direction still tends to imagine the problem as:

- how do we store enough information about symbols and their relations to reconstruct the sign?

That is a meaningful technical question.

It is not yet the fullest writing-theoretical question.

The deeper question is:

- what is the correct text model for SignWriting such that encoding, storage, and rendering can be derived from a stable account of written signs and sign text?

Thiessen moves toward that question, but the thesis does not fully reframe itself around it. The result is a model still oriented more toward symbol relation and renderer recovery than toward a mature top-level account of signed written text.

## What the thesis actually establishes

Thiessen establishes several important things, and these should be stated positively.

The thesis supports at least the following conclusions:

- SignWriting has describable internal structure
- the arrangement of symbols in a sign is not arbitrary
- spatial organization is central, not incidental
- the script contains regular categories and subcategories worth formal analysis
- the system poses a genuine encoding problem that cannot be solved by naive linear assumptions

Those are substantial achievements.

The thesis does not, however, fully establish the strongest version of its own framing.

It does not finally show that the best top-level description of SignWriting is a grammar analogous to the grammar of a natural language. Nor does it yet give a mature model of sign text that cleanly separates:

- writing structure
- encoding
- rendering

The gap is not total failure.

It is a limit of abstraction.

## Review through the critique framework

### Layer identification

This thesis is much better than many review targets because it is not blind to the difference between writing and encoding.

It moves among:

- writing-system description
- symbol analysis
- sign composition
- computational representation

Its problem is not total layer confusion. Its problem is that the language of linguistic grammar is imported too strongly into a writing-system problem, and the symbol layer remains privileged for too long.

### Representation model

Strong.

Thiessen understands that SignWriting is not adequately described by a purely linear model and that the signbox is central to how the writing works.

### Structural unit analysis

Mixed.

The thesis contains a great deal of useful symbol analysis. But the written sign is not established early enough or forcefully enough as the primary unit from which the rest of the model should proceed.

That is the main reason the work remains transitional rather than definitive.

### Spatial vs linear organization

Strong.

The thesis clearly resists forced linearization at the descriptive level. Its limit lies not in ignoring space, but in not yet turning spatially organized written signs into the governing abstraction of the whole theory.

### Text model and encoding

Promising but incomplete.

Chapter 10 is the most forward-looking part of the thesis. It shows that Thiessen can see the need for implementation-neutral structure and constrained relation-based encoding. But it remains exploratory and does not yet deliver a full sign-text model.

## Main critique categories

- `Symbol-Centric Modeling`
- `Level Confusion`

## Final assessment

Thiessen's thesis is one of the stronger early works in the SignWriting literature precisely because it is not easy to dismiss.

It gets important things right:

- it takes SignWriting seriously as writing
- it recognizes the signbox and spatial composition
- it does real script-internal descriptive work
- it sees the computational importance of formalization

Those strengths are real and should be preserved in any fair account of the thesis.

Its weakness is also real.

The thesis correctly identifies that SignWriting is structured, but it locates the main explanatory weight too heavily in the symbol system and reaches the written sign as a higher-order unit only late and provisionally.

So the right verdict is neither dismissal nor celebration.

It is better than much of the surrounding literature.

It is also not the final model it seems to want to be.

The thesis should therefore be read as an important transitional work:

- serious
- useful
- technically aware
- and still one abstraction level too low
