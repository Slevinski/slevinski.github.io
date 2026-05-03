# A Unified Critique Framework for Signed Language Writing, Encoding, and Representation

**A methodological guide for evaluating literature, proposals, and standards**

This framework is for evaluating work on signed language writing without collapsing different kinds of problems into one another.

It is meant for work on:

- signed language writing
- SignWriting
- notation and transcription
- literacy and biliteracy
- encoding and text models
- computational representation
- technical standards and proposals

Its purpose is direct:

- identify what a source is trying to do
- preserve what it gets right
- separate insight from overreach
- and judge claims at the level where they actually belong

## What this framework is for

This framework is not presented as a method detached from its problem domain.

It was built from recurring problems in the signed-writing literature that become especially visible once signed writing is treated as writing, text, and infrastructure rather than as notation alone.

SignWriting is part of what made those problems hard to ignore, because it is the case that most clearly pressures older habits of comparison:

- collapsing writing into notation
- collapsing symbols into written units
- treating linear serialization as evidence of linear writing
- and treating technical partial solutions as though they completed the whole path

For that reason, this framework is best understood as a tool for evaluating candidate paths to durable signed-language writing and text infrastructure.

It is strongest when the question is:

- what counts as writing
- what counts as text
- what counts as an adequate text model
- and what counts as a real infrastructural path

It is less final when the question is narrower, such as:

- pedagogical bridge use
- handwriting experimentation
- research transcription
- or semantic software representation

That does not make those narrower functions unimportant.

It means they should be judged as narrower functions rather than silently treated as though they answered the entire writing problem.

## Author position and methodological safeguards

The framework is written from inside the Sutton SignWriting and Formal SignWriting project, not from an external neutral position.

That is a strength and a risk.

It is a strength because the framework is grounded in long-running implementation work: alphabets, encodings, fonts, editors, corpora, rendering paths, search behavior, and migration problems. It is a risk because the author is also evaluating work that sometimes competes with, revises, or ignores that infrastructure.

The framework therefore requires several safeguards:

- apply the method to Sutton SignWriting and Formal SignWriting themselves
- separate layer-level success from overall adequacy
- preserve useful contributions from reviewed work even when its broader claims are narrowed
- distinguish incompatibility with an existing production ecosystem from failure in every possible use
- treat prior-work engagement as a general scholarly requirement, not as automatic deference to one system

The framework does not ask readers to accept the author's position as authority.

It asks readers to inspect whether the layer distinctions, evidence boundaries, and classification judgments hold.

## Terminology note

Three recurring terms need stable meanings in the framework.

- `durable signed text` means signed text that persists across time and supports revisiting, revision, citation, search, teaching, and software processing
- `technical infrastructure` means alphabets, encodings, fonts, editors, corpora, datasets, renderers, tools, and platforms
- `human and institutional infrastructure` means the teaching, stewardship, publishing, funding, and institutional conditions that make writing sustainable in practice

The term `pathways` should also be specified where possible:

- `language pathways` for developmental access and expression
- `literacy pathways` for reading and writing routes
- `reading pathways` for the narrower perceptual and cognitive route from text to interpretation

Before the framework itself, four distinctions need to stay clear.

## Four distinctions that make the framework necessary

### 1. Writing system, encoding, and rendering are not the same thing

These three are often collapsed in the literature.

They should not be.

- `writing system`: the readable and writable form used by people
- `encoding`: the text model used to store and process that writing
- `rendering`: the visual display produced on screen or paper

In Sutton SignWriting terms:

- Sutton SignWriting is the writing system
- FSW and SWU are encoding or text model layers
- fonts, layout engines, and SVG output belong to rendering

A source that solves one of these problems has not automatically solved the other two.

### 2. A symbol is not the same thing as a written sign

Many sources describe inventories of hand symbols, arrows, face symbols, or modifiers and stop there.

That is not yet an account of signed writing as writing.

A `symbol` is one component.

A `written sign` is the structured written unit composed in a signbox.

If a paper treats the symbol inventory as the whole writing problem, it is likely stopping one level too low.

### 3. Serialization is not evidence that the writing system itself is linear

A system may need a one-dimensional text form for storage or processing.

That does not mean the writing, as authored and read, is fundamentally line-based.

This matters especially for SignWriting, where spatial composition is part of the written form rather than a later display choice.

### 4. Notation, writing, semantic representation, and software representation are different targets

A source may be:

- analyzing language
- proposing a notation
- designing a public writing system
- building a semantic representation
- or solving a software problem

All of these can be valuable.

They should not be treated as though they were the same achievement.

## Core principle

The framework begins with a single requirement:

> a system must be evaluated at the level it claims to operate on

Most recurring problems in this literature are violations of that requirement.

## A compact example

Consider a SignWriting sign written in a signbox.

At the writing-system level, the question is:

- what written form did the writer compose and what does the reader read?

At the encoding level, the question is:

- how is that written sign serialized, stored, searched, and segmented as text?

At the rendering level, the question is:

- how is that stored text drawn on screen or paper?

If a source solves character naming, it has not necessarily solved text structure.

If it solves serialization, it has not necessarily described the writing system adequately.

If it draws the sign attractively, it has not necessarily defined a usable text model.

## I. Layer identification

Every source must first be located at the correct layer or layers.

A source may span multiple layers.

It must not collapse them.

### Layers

1. **Language**
   - phonology, morphology, syntax, discourse
   - the structure of signed language itself
2. **Writing system**
   - how language is represented as readable and writable text
   - symbol system plus spatial or sequential composition
3. **Notation / transcription**
   - analytic or research-oriented representations
   - often more detailed than a public writing system
4. **Semantic representation**
   - meaning structures independent of language form
   - graphs, diagrams, interlingua, or semantic-layer systems
5. **Encoding / text model**
   - how writing is stored, serialized, searched, segmented, and processed
   - for example FSW and SWU
6. **Rendering / presentation**
   - visual output
   - fonts, layout, and display behavior

### Evaluation questions

- Which layer does the work explicitly address?
- Which layer does it implicitly assume?
- Does it keep those layers distinct?

### Common failure: level confusion

Examples include:

- treating a writing system as if it were a language
- treating notation as if it were public writing
- treating encoding as if it defined the writing system itself

## II. Representation model

This section asks what the work thinks it is representing.

The central distinction is:

> does the system model form, meaning, or text structure?

### Common orientations

- **Form-based**
  - phonographic or articulatory emphasis
- **Meaning-based**
  - semantic or logographic emphasis
- **Structural**
  - textual or compositional emphasis

These should be treated as dominant orientations, not always as exclusive categories.

They are not mutually exclusive categories, but analytical lenses for identifying what a system prioritizes.

### Evaluation questions

- What is the primary representational target?
- Does the model preserve simultaneity?
- Does it respect spatial structure?
- Does it assume linearity as a default?

### Common failure: alphabetic bias

This appears when a work:

- assumes sequential phonological units are primary
- evaluates signed writing mainly by resemblance to spoken-language orthography
- treats line-based writing as the norm that signed writing must approximate

## III. Structural unit analysis

What does the work treat as the fundamental unit of the system?

Possible units include:

- phoneme-like units
- articulatory features
- symbols
- the sign as a structured written unit
- utterance or discourse

For signed writing systems, confusion at this level is especially consequential, because the written sign is often the primary unit, not the symbol.

### Evaluation questions

- What is the smallest meaningful unit?
- What is the primary compositional unit?
- Is the model symbol-centric or unit-centric?

### Common failure: symbol-centric modeling

This appears when a work:

- focuses on symbol inventory rather than written structure
- decomposes signs into parts but misses the signbox or equivalent unit
- treats a writing system as if it were only a symbol catalog

## IV. Spatial vs linear organization

The key question here is:

> does the system treat space as part of writing, or as something to be flattened?

### Categories

- **Linear**
  - sequence-dominant
- **Planar**
  - spatial composition as part of writing
- **Hybrid**
  - a mixed approach

### Evaluation questions

- Is spatial relation part of authorship?
- Is linearization imposed artificially?
- Is two-dimensional structure preserved in the model?

### Common failure: forced linearization

This appears when a work:

- flattens spatial structure into a sequence
- treats serialization as evidence that the writing system itself is linear
- mistakes technical convenience for writing-system adequacy

## V. Text model and encoding

This is where much of the literature becomes least clear.

The essential distinction is:

> writing is not encoding
> encoding is not rendering
> and rendering is not structure

### Evaluation questions

- Is there a defined text model?
- Does the encoding preserve structure?
- Is the representation editable, searchable, and segmentable?
- Is a canonical form defined?

### Common failure: incomplete infrastructure awareness

This appears when a work:

- assumes signed language lacks writable text
- ignores existing encoding systems
- mistakes visual layout questions for the absence of a text model

## VI. Human vs machine layers

Another required distinction is:

- **human writing**
  - what users compose and read
- **machine encoding**
  - how systems store and process

### Evaluation questions

- Are these layers separated clearly?
- Is serialization mistaken for writing?
- Is rendering mistaken for structure?

### Common failure

This appears when a work:

- treats a user interface as if it were the writing system itself
- designs for machine convenience while ignoring human readability
- treats rendering artifacts as textual units

## VII. Empirical grounding

### Evaluation questions

- Is there real-world usage?
- Are claims based on observation, experiment, or speculation?
- Is community adoption considered?

### Common failure

This appears when a work:

- proposes a system with no user grounding
- dismisses existing communities of practice
- reasons as if actual adoption history were irrelevant

## VIII. Claims vs evidence

### Evaluation questions

- What does the work actually demonstrate?
- What is inferred but not demonstrated?
- Are the conclusions stronger than the evidence?

### Common failure

This appears when a work:

- draws universal conclusions from limited data
- confuses feasibility with superiority
- treats one partial success as evidence for a broader theory

## IX. Relationship to existing systems

### Evaluation questions

- Does the work acknowledge existing systems?
- Does it extend them, ignore them, or mischaracterize them?
- Does it present old solutions as if they were new?

### Common failure: insufficient engagement with prior work

This appears when a work:

- proposes a feature, system, or standard without adequately accounting for relevant existing systems, tools, datasets, or literature
- treats an already-addressed problem as if the design space were empty
- mischaracterizes prior systems strongly enough that the comparison becomes unreliable

In SignWriting-related work, this often includes insufficient engagement with Sutton SignWriting practice or Formal SignWriting infrastructure.

But the criterion is broader than SignWriting.

It is a general scholarly requirement: novelty claims should be made against the actual prior work, not against a simplified absence.

## X. Output classification

Each review in the series should end with a clear classification.

The classification should be layer-specific before it is global.

Many sources are correct and useful at one layer while incomplete or misleading at another. A review should therefore state:

1. where the source is strongest
2. where its claims become incomplete or overstated
3. what overall reading follows from that layer map

### 1. Correct and useful

- valid insight
- correctly placed at the layer being evaluated
- evidence and claim are well matched

### 2. Partially correct

- real observation
- incomplete interpretation, overextended conclusion, or incorrect level placement

### 3. Misleading

- the framing error is strong enough that it leads to bad conclusions
- the work may contain useful observations, but its main frame directs readers toward an unreliable conclusion

### 4. Fundamentally misframed

- the work is built on assumptions that do not match the thing it is describing
- the main target, layer, or unit of analysis is wrong enough that the work cannot be repaired by local qualification alone

## XI. Application to standards and proposals

This framework also extends to technical standards such as Unicode proposals.

### Additional questions

- What layer does the proposal recognize, and what layer does it actually standardize?
- Which parts of the problem are actually solved, and which are deferred, incomplete, or left to external mechanisms?
- Are the proposal, the standardized outcome, and later public interpretation being kept distinct?
- Does the encoding preserve authored structure?
- Are the encoded units atomic glyphs or structured text elements?
- Is the model glyph-based or text-based?
- Does the standard support search and segmentation, or only rendering?

### Common failures at the standards layer

- solving only a character-repertoire problem while later readers assume the writing-system problem is finished
- encoding glyphs rather than text structure
- collapsing composition into rendering
- losing spatial relations in serialization

## XII. Final principle

All critique resolves to one question:

> does this work understand what kind of thing it is describing?

If not, everything built on top of it will drift.

## Closing note

This framework is not tied to any single system.

But it is especially effective in settings where:

- modality differs from spoken language
- writing is not inherently linear
- structure must be preserved across human and machine use

It is intended not only to correct past work, but to make future work clearer.

This framework is intended for direct use in reviewing papers, theses, proposals, and standards.

Each review in this series applies the framework in practice, so readers can see both the method and its results.

## Go Next

- `Signed Language Writing Critical Review Series: Sutton SignWriting and Formal SignWriting Through the Framework` for self-application of the framework
- `Signed Language Writing Critical Review Series: A Layer-Based Evaluation of Signed Language Writing Systems` for the comparative demonstration
- `Signed Language Writing Critical Review Series: From Critique to Construction: Priorities for Signed Language Writing Infrastructure` for the constructive synthesis
