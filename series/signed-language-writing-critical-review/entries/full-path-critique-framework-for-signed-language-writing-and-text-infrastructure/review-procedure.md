# Review Procedure for the Full-Path Critique Framework

**A companion manual for applying the Full-Path Critique Framework to signed-language writing systems, notation systems, standards, tools, datasets, and infrastructure claims**

This manual expands the framework essay into a working review instrument.

Use it with:

- *Full-Path Critique Framework for Signed-Language Writing and Text Infrastructure*
- *Reviewer Worksheet for the Full-Path Critique Framework*

The essay states the method and its rationale. This manual shows how to apply it.

Every review should keep two judgments separate:

1. **Layer-level judgment:** Is the source adequate for its stated purpose at the layer where it actually operates?
2. **Full-path judgment:** Is the source adequate as, or as part of, a durable signed-language writing and text-infrastructure path?

Before applying either judgment, name the problem being evaluated. If the problem is signed-language literacy as durable written text, the review should ask whether the source supports a readable, writable, revisitable text pathway. If the source is instead solving notation, annotation, video access, semantic representation, rendering, dataset construction, AI infrastructure, or another adjacent purpose, evaluate it there and do not convert its narrower usefulness into a full-path writing claim.

## Layer Questions

### Layer 1. Language and Modality Target

**Core question:** What signed-language form, structure, or communicative object is being represented?

Ask:

- What signed language, signed-language family, contact setting, or signing context is involved?
- Is the source representing signed language directly, or representing another language through gloss, translation, annotation, or metadata?
- Does the source address lexical signs, phrases, discourse, spatial grammar, nonmanuals, classifier constructions, constructed action, role shift, prosody, pointing, indexing, or broader communicative practice?
- Does it account for visual, tactile, pro-tactile, or mixed access pathways where relevant?
- Does it distinguish language from performance, performance from notation, and notation from writing?

Layer 1 is often where a source's ambition becomes clear. A source that represents only lexical citation forms is not automatically a discourse-writing system. A source that annotates video is not automatically writing signed text. A source that represents gloss translations is not directly representing signed-language writing unless it says how signed-language form is written.

**Layer risk:** confusing signed language with speech-language gloss, translation, video record, linguistic analysis, or semantic abstraction.

### Layer 2. Human Writing-System Layer

**Core question:** What do people read and write?

Ask:

- What is the human-readable form?
- What is the human-writable form?
- Who is expected to read it: Deaf signers, hearing signers, DeafBlind users, children, adult learners, teachers, researchers, developers, machines, or mixed audiences?
- Who is expected to write it?
- Can it support composition, revision, correction, comparison, citation, teaching, publication, and ordinary reuse?
- Is handwriting possible? Is typing possible? Are both required, optional, or unresolved?
- Does the system produce text that users can revisit without returning to video?

A system may support analysis, annotation, display, or synthesis without being a human writing system. That does not make it useless. It means it belongs at a different layer or adjacent-purpose category.

**Layer risk:** treating machine-readable representation, expert notation, gloss labels, videos, or display images as if they were ordinary written text.

**Problem-specific test:** if the source is being proposed as a literacy-supporting writing system, can users read, write, revise, correct, cite, teach, archive, and revisit the text without relying on the adjacent system as the primary object?

### Layer 3. Orthographic / Written-Convention Layer

**Core question:** What stabilizes written forms enough to be shared?

Ask:

- What counts as the same written form?
- What counts as a meaningful contrast?
- What variation is acceptable?
- What variation is an error?
- What can teachers correct?
- What can readers recognize as conventional?
- Are conventions centrally prescribed, use-based, dictionary-supported, classroom-supported, corpus-supported, locally negotiated, or still experimental?
- How does the system handle regional variation, language variation, signer variation, and stylistic variation?
- Does the system distinguish descriptive variation from orthographic norm?

Iconicity can support writing, but iconicity is not sufficient. Writing requires convention: shared constraints that make forms repeatable, teachable, correctable, reusable, and legible.

**Layer risk:** assuming that visual resemblance, linguistic accuracy, or technical validity automatically creates orthographic convention.

### Layer 4. Written-Unit Layer

**Core question:** What is the primary written unit, and what can be composed, recognized, cited, copied, corrected, and preserved?

Ask:

- What is the primary written unit: a symbol, letter, feature, glyph, character, written sign, signbox, word, phrase, line, video segment, semantic graph, or passage?
- What do writers compose?
- What do readers recognize as a unit?
- What can be cited, copied, searched, stored, corrected, or reused?
- How are units segmented?
- How are units grouped, ordered, and compared?
- How does the system distinguish written units from database records, dictionary entries, corpus records, or media segments?

For Sutton SignWriting, the primary written unit is the written sign composed in a signbox. Other systems may define a different primary unit. The framework does not require SignWriting's unit structure, but every full-path system must say what its own unit structure is.

**Layer risk:** treating components as complete signs, treating records as text, treating videos as documents, or treating lexical entries as written units.

### Layer 5. Spatial, Sequential, and Compositional Organization Layer

**Core question:** How is the written form organized, and what role do space and sequence play?

Ask:

- Is the writing primarily linear, plane-based, hybrid, tabular, time-aligned, or video-linked?
- Is spatial relation part of authorship, merely display, or both?
- Does linearization preserve the writing or distort it?
- Does the system preserve simultaneity, spatial relation, orientation, and arrangement where those are part of the written form?
- Does the source distinguish storage order from reading structure?
- Does the source distinguish one sign's internal spatial structure from passage-level layout?
- Does the source mistake serialization for the writing system itself?

Spatial composition is not merely a rendering issue when spatial relation is part of the authored written form. For plane-based signed writing, authored spatial relations may be part of the written unit itself.

**Layer risk:** treating one-dimensional storage as proof that the writing system is fundamentally linear, or treating authored spatial composition as a downstream display artifact.

### Layer 6. Technical Text-Model Layer

**Core question:** How is written structure modeled for computation?

Ask:

- Is there a defined text model?
- What units does the model preserve?
- Does it preserve the primary written unit and its internal structure?
- Does it preserve spatial relations where they are part of the written form?
- Does it distinguish canonical text from rendering and style?
- Does it define validity?
- Does it support parsing, comparison, transformation, migration, and preservation?
- Does it allow incomplete, erroneous, draft, or variant forms where such forms are useful?
- Can two implementations agree on whether two texts are the same, related, or different?

A visual image can show a sign without modeling it as text. A character inventory can name symbols without modeling written signs. A full text model must preserve the written structure that matters and do so in a form software can reliably inspect.

**Layer risk:** confusing text model with character inventory, font design, renderer output, image data, or markup convenience.

### Layer 7. Encoding / Serialization Layer

**Core question:** How is the text model stored or transmitted?

Ask:

- Is text represented as characters, strings, code points, markup, coordinate records, binary data, or another format?
- Is the encoding canonical, optional, experimental, historical, bridge-oriented, or tool-specific?
- Can it be round-tripped?
- Does it preserve authored relations or lose them?
- Does it distinguish script identity from encoding strategy?
- Does it support interchange across implementations?
- Does it handle normalization, versioning, unknown symbols, variants, and legacy data?

Encoding is not writing. Encoding preserves writing for storage, transmission, processing, and exchange.

**Layer risk:** treating official character status, serialization, or Unicode inclusion as proof that a complete signed-text infrastructure path has been solved.

### Layer 8. Text-Operations and Interoperability Layer

**Core question:** What can be done with the text once it is modeled and encoded?

Ask:

- Can it be searched?
- Can it be sorted or collated?
- Can it be normalized?
- Can it be validated?
- Can it be converted between formats?
- Can it be indexed?
- Can it be exported and imported?
- Can it migrate across tools without loss?
- Can dictionaries, corpora, editors, renderers, datasets, and APIs interoperate?
- Can old data be read by new tools, and new data be preserved for future tools?

Storage alone is not enough. A system may store forms but still fail at search, sorting, migration, dataset compatibility, or production use.

**Layer risk:** treating stored data as operational text, or treating official status as interoperability without testing migration, search, and conversion.

### Layer 9. Layout and Document-Organization Layer

**Core question:** How do written units become readable passages and documents?

Ask:

- How are signs, words, lines, columns, lanes, pages, sections, or passages organized?
- Is layout part of stored text, document markup, rendering, reading convention, or interface behavior?
- Does layout affect reading order, meaning, emphasis, navigation, citation, or comprehension?
- Does the model distinguish one sign's internal geometry from passage-level layout?
- How are line breaks, column breaks, page breaks, margins, headings, lists, and document structures handled?
- Can passages be copied, quoted, cited, printed, archived, or reflowed?

Layout is not the same as rendering. Rendering makes text visible. Layout organizes written units into readable documents.

**Layer risk:** treating sign-internal space as page layout, treating page layout as rendering only, or ignoring how signed text becomes extended text.

### Layer 10. Rendering / Styling Layer

**Core question:** How does modeled text become visible output?

Ask:

- How is text displayed on screen, paper, or another medium?
- Are fonts, SVG, images, color, style strings, layout engines, web components, or interface widgets involved?
- Does rendering preserve canonical text, or does it decide things that should belong to the text model?
- Is visible output copyable, searchable, accessible, and archival?
- Can output be reproduced across platforms?
- What happens when fonts, renderers, browsers, or interfaces change?
- Are style choices clearly separated from written identity?

Rendering is necessary, but it is downstream from writing and text modeling. Rendering may be decisive for usability, but it should not be credited with solving text structure unless it actually preserves and exposes text structure.

**Layer risk:** treating display output as text identity, or letting renderer convenience redefine the writing system.

### Layer 11. Tooling, Corpus, and Platform Layer

**Core question:** Does the system have usable infrastructure?

Ask:

- Are there editors, keyboards, fonts, renderers, search tools, and layout tools?
- Are there libraries, validators, converters, APIs, and documentation?
- Are there datasets, dictionaries, corpora, archives, and public examples?
- Are there stable websites, repositories, and preservation paths?
- Are there versioning, migration, backup, and maintenance practices?
- Can users create new text without expert intervention?
- Can institutions adopt the tools without depending on a single fragile implementation?

This layer must keep data objects distinct:

- a written sign is not a lexical record
- a lexical record is not a dictionary entry
- a dictionary entry is not a corpus record
- a corpus record is not a dataset item
- a dataset item is not automatically permission for every downstream use

**Layer risk:** treating a prototype, repository, or dataset as sustained infrastructure; or treating public availability as permission, adoption, or stewardship.

### Layer 12. Use, Pedagogy, and Literacy-Practice Layer

**Core question:** Can people actually learn, teach, read, write, revise, correct, and use the system?

Ask:

- Who uses it?
- Who teaches it?
- Who reads it?
- Who writes it?
- What materials exist?
- What training is required?
- What errors do learners make?
- What variations do writers produce?
- What correction practices exist?
- Are there classroom, dictionary, publication, community, or institutional practices?
- Are there reader studies, learner studies, teacher reports, ethnographic accounts, or longitudinal evidence?
- What is known, and what remains untested?

Technical feasibility is not proof of literacy success. A classroom bridge can be useful without becoming full public text infrastructure. A local success can be meaningful without proving global adoption.

**Layer risk:** treating feasibility as learnability, classroom presence as literacy outcome, anecdote as universal adoption, or lack of controlled studies as proof that practice does not exist.

### Layer 13. Governance and Stewardship Layer

**Core question:** Who has authority, and who maintains the system?

Ask:

- Who defines computational validity?
- Who decides spelling conventions?
- Who maintains encodings, tools, corpora, fonts, and documentation?
- Who governs datasets?
- Who has community review authority?
- Who has educational authority?
- Who has standards authority?
- Who has institutional authority?
- Who can update, fork, reject, preserve, or retire part of the system?
- What happens if the original maintainer disappears?
- What are the funding, licensing, succession, and accountability arrangements?

This layer separates authority rather than assigning all authority to one actor.

**Layer risk:** treating technical control as community authority, standards status as educational legitimacy, public data as unrestricted data, or current maintenance as long-term stewardship.

## Evaluation Axes

### Claim Scope

Identify what the source claims: descriptive observation, notation proposal, writing-system proposal, encoding proposal, rendering proposal, standards proposal, software proposal, empirical claim, literacy-outcome claim, adoption claim, infrastructure claim, governance claim, or universal theory claim.

The recurring failure is letting success at one claim scope stand in for success at another.

### Evidence Status

Name evidence without exaggeration.

Useful evidence categories include:

- conceptual argument or plausibility
- illustrative example
- design specification
- implemented prototype
- documented public artifact
- maintained tool
- classroom use
- institutional use
- dictionary use
- corpus use
- community use
- reader or teacher experience
- usability testing
- controlled study
- longitudinal study
- outcome evidence
- negative-case evidence
- replication
- independent verification

A prototype demonstrates feasibility, not adoption. A classroom example demonstrates use, not broad literacy outcomes. A public website demonstrates availability, not necessarily community preference.

### Maturity Level

Use the following scale where relevant.

| Maturity level | Meaning |
| --- | --- |
| **Idea or sketch** | Conceptual proposal with little implementation. |
| **Prototype** | Implemented enough to demonstrate feasibility. |
| **Implemented tool** | Usable artifact exists but may not be maintained or widely used. |
| **Documented practice** | Users, examples, or procedures are documented. |
| **Maintained infrastructure** | Tools, data, documentation, and support are actively sustained. |
| **Institutionally supported infrastructure** | Institutions depend on or support the infrastructure. |
| **Independently studied or replicated infrastructure** | Claims are tested, replicated, or evaluated outside the originating project. |

A system may be mature in rendering, partial in pedagogy, strong in encoding, weak in governance, and untested in literacy outcomes.

### Authority Type

Different claims require different kinds of authority:

- technical validity
- linguistic analysis
- orthographic authority
- signer or community preference
- educational legitimacy
- institutional authority
- legal authority
- standards standing
- dataset governance
- archival authority
- AI deployment authority
- stewardship authority

The recurring failure is treating one kind of authority as another.

### Audience and Use Context

Ask for whom the system is adequate and for what task. A system can be excellent for trained researchers and unsuitable for ordinary writers. It can be useful for beginning learners but insufficient for publication. It can support developers without becoming reader-facing text.

### Completeness at the Claimed Layer

For the layer being reviewed, is the work absent, implied, partial, working, mature, or institutionally sustained?

Judge completeness at the claimed layer before making any full-path judgment.

### Interdependence

Ask which downstream layers depend on the one being reviewed. A partial system should not be treated as complete because its dependencies are hidden or assumed.

Classify required layers as:

- **Solved:** handled directly by the source, system, or stack being reviewed.
- **Borrowed:** handled by another named system, standard, tool, model, or notation that the source adopts as part of its own stack.
- **Externally supplied:** provided by communities, institutions, public practice, corpora, datasets, publications, stewardship arrangements, or infrastructure outside the source's direct control.
- **Assumed:** required by the claim but not specified, evidenced, or assigned to a responsible actor.
- **Deferred:** acknowledged as future work or a later implementation requirement.
- **Not in scope:** intentionally excluded because the source makes a narrower claim.

### Prior-Work Engagement

Prior-work engagement is a methodological requirement, not a demand for deference.

Ask whether the source identifies relevant existing systems, distinguishes what is new from what already exists, describes existing systems accurately, explains why existing infrastructure is inadequate for its purpose, and tests compatibility or migration claims against real data.

## Recurring Failure Patterns

Use these diagnostic labels only when the evidence supports them.

| Pattern | Review test |
| --- | --- |
| **Level confusion** | What layer is the source actually operating on, and what layer is it claiming to solve? |
| **Full-path overextension** | What remains unresolved after the layer-level success is acknowledged? |
| **Symbol-centric modeling** | Does the source define complete written units and their relations, or only components? |
| **Forced linearization** | Does the model preserve spatial relations as authored written structure or reduce them to rendering? |
| **Character-inventory substitution** | What does character identity solve, and what text-structure problems remain? |
| **Renderer substitution** | Can the visible output be copied, searched, validated, exchanged, and preserved as text? |
| **Alphabetic bias** | Is the source evaluating signed writing on signed-language and signed-text terms, or on inherited alphabetic assumptions? |
| **Incomplete infrastructure engagement** | Does the source engage existing infrastructure accurately, and does it explain migration or replacement costs? |
| **Evidence overextension** | What kind of evidence is present, and what kind of claim is being made? |
| **Authority conflation** | What authority is actually held, and what authority is being implied? |
| **Incomplete prior-work engagement** | Has the source identified relevant prior systems and stated what it adds, changes, rejects, or cannot use? |
| **Data-object collapse** | What object is being stored, what object is being analyzed, and what object is being claimed as text? |

## Review Procedure

Each review should follow these steps in order.

### Step 1. State the Source's Aim

Name what the source is trying to do before judging it.

Use a neutral sentence:

> This source aims to _____.

Then identify whether the aim is explicit, inferred, mixed, or shifting.

### Step 2. Locate the Source

Assign the source to one or more system layers and/or adjacent-purpose categories.

State the primary layer, secondary layers, adjacent-purpose category, and explicit layers. Then classify required layers as solved, borrowed, externally supplied, assumed, deferred, or not in scope.

Do not force a source into the full-path stack if it is plainly doing a narrower job. Do not excuse a full-path claim by pretending it is narrower than it is.

### Step 3. Identify the Primary Unit and Representational Target

Ask what the source treats as basic: symbol, glyph, character, feature, written sign, signbox, word, utterance, video segment, lexical record, dictionary entry, corpus record, semantic graph, dataset item, or something else.

Then identify what the source thinks it is representing: signed-language form, movement, handshape, facial expression, spatial relation, meaning, discourse, performance, written form, text structure, dictionary record, or computational behavior.

### Step 4. Evaluate Spatial, Sequential, and Compositional Organization

Ask whether space is part of the written form, whether sequence belongs to sorting, analysis, rendering, storage, or authorship, whether simultaneous structure is preserved, and whether serialization is being confused with writing.

### Step 5. Evaluate Text Modeling, Encoding, Operations, and Infrastructure

Ask whether there is a text model, encoding, canonical form, validation rule, searchable unit, segmentable unit, migration path, and working infrastructure.

A source that does not claim to solve text modeling should not be faulted for that absence unless later claims depend on it.

### Step 6. Evaluate Evidence, Maturity, and Claim Scope

Ask what the source actually demonstrates and whether the evidence matches the claim scope.

This step prevents evidence overextension.

### Step 7. Identify Authority, Audience, and Governance Boundaries

Ask what authority is claimed, what authority is actually demonstrated, who the intended users are, and what governance questions remain.

This step keeps technical, educational, community, institutional, standards, legal, and data-governance claims separate.

### Step 8. State Both Judgments

Every review should end with two explicit judgments.

**Layer-level judgment:**

> At the layer it actually addresses, this source is _____ because _____.

**Full-path judgment:**

> As a full-path signed-language writing and text-infrastructure claim, this source is _____ because _____.

The final sentence should also say what would be needed next.

## Output Classifications

Classifications are shorthand. They should not replace explanation.

### Layer-Level Classifications

| Classification | Use |
| --- | --- |
| **Correct and useful** | The source succeeds at the layer it claims. |
| **Useful but narrow** | The source successfully solves a limited or adjacent-purpose problem. |
| **Strong partial path** | The source addresses several important layers and plausibly supports a broader path while leaving major layers unresolved. |
| **Partially correct** | The source identifies a real issue but handles it incompletely. |
| **Structurally incomplete** | The source is not merely missing evidence but lacks a necessary structural layer for the claim it makes. |
| **Misleading when overextended** | The source is useful at one layer but misleading when treated as solving another. |
| **Fundamentally misframed** | The source's basic category assignment is wrong. |

### Full-Path Classifications

| Classification | Meaning |
| --- | --- |
| **Full-path adequate** | The system or stack accounts for the full path from human writing to durable infrastructure with appropriate evidence and stewardship. This should be used cautiously. |
| **Strong full-path candidate** | The system carries many layers and has a credible route for unresolved layers. |
| **Partial full-path support** | The source supports one or more required layers but is not itself a full path. |
| **Dependent full-path claim** | The source could contribute to a full path only by depending on other systems, tools, institutions, or evidence. |
| **Not a full-path claim** | The source is intentionally narrow and should be judged at its own layer. |
| **Not full-path adequate** | The source lacks necessary layers for the claim it makes. |
| **Full-path misframed** | The source mistakes another category, such as notation, video, rendering, semantic representation, or dataset infrastructure, for full signed-language writing infrastructure. |

## Review Output Template

Use this table for written reviews.

| Review field | Finding |
| --- | --- |
| Source aim |  |
| Explicit claim |  |
| Implied claim |  |
| Primary layer |  |
| Secondary layers |  |
| Adjacent-purpose category |  |
| Declared dependencies | Solved / borrowed / externally supplied / assumed / deferred / not in scope |
| Primary unit |  |
| Representational target |  |
| Spatial / sequential treatment |  |
| Evidence status |  |
| Maturity level |  |
| Authority type claimed |  |
| Authority type demonstrated |  |
| Audience / use context |  |
| Prior-work engagement |  |
| Strongest contribution |  |
| Main layer risk |  |
| Relevant failure pattern |  |
| Layer-level classification |  |
| Full-path classification |  |
| What would be needed next |  |

Short formula:

> This source aims to _____. Its strongest contribution is _____. At the layer it actually addresses, it is _____. The main risk is _____. As a full-path signed-language writing and text-infrastructure claim, it is _____. A stronger claim would require _____.

## Self-Application: Sutton SignWriting and Formal SignWriting

The framework must apply inward as well as outward.

| Layer or axis | Sutton SignWriting / Formal SignWriting self-application |
| --- | --- |
| Human writing | Sutton SignWriting is a human writing system for signed languages; Formal SignWriting is not the human writing system but a technical model and encoding framework. |
| Written unit | The written sign, composed in a signbox, is central. Isolated symbols are components, not the whole writing system. |
| Spatial organization | SignWriting is plane-based at the sign level; serialization preserves authored spatial relations but does not make the writing itself linear. |
| Convention | There are dictionaries, teaching materials, and user practices, but convention varies by language, community, institution, and level of documentation. |
| Text model and encoding | Formal SignWriting, FSW, and SWU provide a production path for structured text, search, sorting, rendering, and interchange. |
| Rendering and layout | Fonts, SVG, and layout tools support visible output, but passage-level layout and broader document conventions remain areas for continued development. |
| Tooling and corpus | Existing tools, dictionaries, corpora, public sites, and libraries demonstrate real infrastructure, though sustainability and institutional support remain uneven. |
| Use and pedagogy | Classroom and community use exist, but broad literacy-outcome claims require stronger empirical evidence, replication, and longitudinal study. |
| Governance | Technical stewardship exists, but long-term institutional succession, community review pathways, data governance, and standards alignment require continuing work. |
| Evidence gaps | The ecosystem is stronger in implementation, feasibility, and documented use than in large-scale outcome studies or universal adoption evidence. |

## Example Layer Judgments

These examples illustrate classification style. They are not substitutes for full reviews.

| Case | Layer-level judgment | Full-path judgment |
| --- | --- | --- |
| Sutton SignWriting | Strong as a human writing system where written signs, signboxes, authored space, convention, and material practice are centered. | Strong full-path candidate when combined with Formal SignWriting and existing infrastructure, but evidence remains uneven for global adoption, literacy outcomes, institutional support, and standards resolution. |
| Formal SignWriting | Strong as a technical text model and encoding framework for preserving Sutton SignWriting as structured text. | Essential to the current Sutton SignWriting production path, but not the writing system itself and not a substitute for community, literacy, educational, or governance evidence. |
| Official Unicode SignWriting | Correct and useful as official character-repertoire standardization and script-recognition work. | Incomplete as a compatible production replacement where stable writer-selected symbol identity, written-sign structure, spatial composition, sorting, migration, and current dataset compatibility are required. |
| HamNoSys or Stokoe-style notation | Useful but narrow as analytic notation where specialist description is the purpose. | Not adequate as ordinary durable signed-language writing unless writing, convention, text-model, pedagogy, tooling, and infrastructure layers are supplied. |
| ELAN, SignStream, or video-linked annotation systems | Useful but narrow as corpus annotation, video-linked documentation, and research infrastructure. | Not a public writing system by itself. Durable metadata about signed video is not the same thing as durable signed text. |
| Semantic or synthesis-oriented representation | Potentially useful as semantic, computational, translation, or synthesis-oriented representation. | Not adequate as a complete human writing system unless it also supports durable readable and writable signed text, written conventions, public use, text operations, and stewardship. |
| Pedagogical bridge systems | Potentially useful as pedagogical bridge, literacy support, or classroom scaffolding. | Not adequate as full signed-language writing infrastructure unless they support direct signed-language text, written units, conventions, technical preservation, and broader use beyond the bridge context. |
| ASLwrite or other non-Sutton signed script practice | Should be evaluated on its own writing-system terms, including handwriting, community practice, written units, conventions, and reader/writer use. | May be legitimate as signed writing even if its technical infrastructure differs from Sutton SignWriting; identify which infrastructure layers are present, partial, absent, or intentionally outside scope. |
| Font or SVG renderer | Correct and useful if it displays modeled signed text accurately, accessibly, and reproducibly. | Useful supporting layer only. A renderer does not define the writing system, text model, encoding, conventions, pedagogy, or governance by itself. |
| Lexical database or dictionary platform | Correct and useful if it stores lexical records, written forms, definitions, examples, metadata, and media in a usable and governed way. | Useful supporting layer. A dictionary platform can support written-language practice but should not be confused with the writing system or with full text infrastructure. |
| AI dataset or recognition system | Potentially useful as dataset infrastructure, recognition support, generation support, search support, or evaluation data. | Incomplete for full path unless it also addresses written units, text preservation, community and data authority, consent or licensing, tool interoperability, and human writing practice. |

## Stress-Testing the Framework

A fair stress test asks:

- Can the framework recognize non-SignWriting systems as successful at their own layer?
- Can it preserve the value of notation, semantic representation, bridge pedagogy, video annotation, rendering, and character encoding?
- Can it criticize Sutton SignWriting and Formal SignWriting using the same standards it applies to competing work?
- Can it distinguish technical adequacy from literacy evidence?
- Can it distinguish community use from community authority?
- Can it distinguish public availability from data permission?
- Can it distinguish full-path adequacy from layer-level success?
- Can it identify what would be needed next rather than merely labeling a source inadequate?

The framework fails if it treats every narrower system as deficient merely because it is narrower.

It also fails if it treats every partial success as if it solved durable signed-language writing.

It succeeds if it can preserve layer-level usefulness while identifying where a claim has been extended beyond the layer it actually solves.
