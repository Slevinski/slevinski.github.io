# Full-Path Critique Framework for Signed-Language Writing and Text Infrastructure

**A methodological guide for evaluating writing systems, notation systems, encodings, standards, tools, datasets, research proposals, and infrastructure claims**

This framework carries the critical-method claim for the review series: signed-language writing work should be evaluated at the layer it actually claims to solve and against the problem it actually addresses.

The governing principle is:

> A system must be evaluated at the level it claims to operate on.

For this framework, the central full-path problem is signed-language literacy as durable written text: a readable, writable, revisitable text pathway that can support composition, revision, correction, citation, search, teaching, publication, archiving, exchange, and long-term infrastructure. Systems for notation, transcription, semantic representation, corpus annotation, video access, rendering, standards work, datasets, or AI infrastructure may be useful without solving that problem.

The purpose is direct:

- identify what a source is trying to do
- preserve what it gets right
- separate insight from overextension
- distinguish layer-level success from full-path adequacy
- identify what remains unresolved
- and judge claims at the level where they actually belong

The framework evaluates work on signed-language writing without collapsing different kinds of problems into one another.

It is designed for work on:

- signed-language writing systems
- Sutton SignWriting and Formal SignWriting
- notation, transcription, and linguistic description
- orthography, writing-system theory, and written convention
- literacy, biliteracy, pedagogy, and classroom bridge systems
- semantic, computational, synthesis, and avatar-oriented representation
- encoding, serialization, text models, and standards proposals
- rendering, fonts, layout, document structure, and display systems
- dictionaries, corpora, datasets, APIs, and AI infrastructure
- governance, stewardship, institutional support, and public language infrastructure

Most recurring problems in signed-language writing literature come from violating that principle. A source may solve a notation problem without solving a writing problem. It may define characters without defining written signs. It may render signs without preserving authored text. It may support classroom use without proving broad literacy outcomes. It may be useful for semantic representation without becoming public writing infrastructure.

The framework makes those distinctions visible.

Every review must keep two judgments separate:

1. **Layer-level judgment:** Is the source adequate for its stated purpose at the layer where it actually operates?
2. **Full-path judgment:** Is the source adequate as, or as part of, a durable signed-language writing and text-infrastructure path?

A source can succeed at the first without succeeding at the second. That distinction is the center of the framework.

Two companion documents support application of the method: *Review Procedure for the Full-Path Critique Framework* gives the detailed review manual, and *Reviewer Worksheet for the Full-Path Critique Framework* gives the reusable blank worksheet. In a complete packet, the framework essay states the method; the procedure and worksheet switch into application mode.

## What This Framework Is For

This framework is not a neutral bibliography, a detached taxonomy, or a ranking of systems by preference. It is a critical method for evaluating candidate paths to durable signed-language writing and text infrastructure.

Its judgments are problem-specific. A system can be strong for analysis, documentation, translation, synthesis, classroom scaffolding, or machine learning and still be inadequate as a solution to signed-language literacy as written text. That is not a dismissal of the narrower system. It is the reason the framework separates layer-level success from full-path adequacy.

`Durable signed text` means signed text that persists across time and supports revisiting, revision, correction, citation, search, comparison, teaching, publication, archiving, exchange, and software processing. Durability does not make video, live performance, gloss, translation, or linguistic annotation obsolete. It means signed language also has a written pathway capable of functioning as text.

`Full-path adequacy` means that a system, or a coordinated stack of systems, can plausibly support the path from human authorship to durable signed-text infrastructure. A full path includes human writing, written units, written convention, spatial and sequential organization, text modeling, encoding, text operations, layout, rendering, tooling, pedagogy, evidence, governance, and stewardship. A system does not have to solve every layer alone, but a claim that it solves signed-language writing must account for how those layers are handled.

`Layer-level success` means that a system succeeds at a narrower purpose, for example as notation, semantic representation, character encoding, video annotation, rendering, corpus tagging, classroom scaffolding, dictionary infrastructure, AI infrastructure, or linguistic analysis, without thereby becoming a full writing system or full text infrastructure. Layer-level success is real success. It should be preserved in reviews, not treated as failure.

`Technical infrastructure` means alphabets, symbol inventories, character sets, encodings, fonts, editors, renderers, search systems, corpora, dictionaries, datasets, APIs, validators, converters, libraries, repositories, archives, and platforms.

`Human and institutional infrastructure` means teaching practice, reader and writer communities, publication habits, correction practices, documentation, maintenance, funding, governance, policy, standards engagement, institutional support, data rights, and succession planning.

`Pathway` should be specified where possible:

- `language pathways` for routes of language access and expression
- `literacy pathways` for routes of reading and writing
- `reading pathways` for the route from visible or tactile text to perception, recognition, and interpretation
- `infrastructure pathways` for the route by which text becomes maintainable, searchable, citable, reusable, and preservable

The framework is strongest when the question is full-path adequacy:

- What counts as writing?
- What counts as signed text?
- What is the primary written unit?
- What is preserved when text is stored, searched, cited, or exchanged?
- How are spatial relations preserved when they are part of the authored written form?
- What evidence supports claims about usability, adoption, literacy, or infrastructure?
- What authority does the system claim, and what authority does it actually have?
- For whom, and in what context, is the system adequate?

The framework is less final when the question is intentionally narrower:

- research transcription
- sign-language phonological notation
- semantic representation
- synthesis or avatar control
- pedagogical bridge use
- local classroom practice
- corpus annotation
- video-linked documentation
- handwriting experimentation
- prototype software

That does not make narrower work unimportant. It means narrower work should be judged as narrower work rather than silently treated as though it answered the entire writing and infrastructure problem.

## Author Position and Method

This framework is written from inside the Sutton SignWriting and Formal SignWriting project.

That position is a methodological fact.

It grounds the framework in long-running implementation work: symbol inventories, written signs, encodings, fonts, editors, dictionaries, corpora, rendering paths, search behavior, migration problems, public sites, Unicode-facing work, and stewardship requirements.

It also means the framework must be inspectable when it evaluates work that competes with, revises, ignores, mischaracterizes, or attempts to replace parts of that infrastructure.

The method uses these safeguards:

- apply the method to Sutton SignWriting and Formal SignWriting themselves
- separate layer-level success from full-path adequacy
- preserve useful contributions from reviewed work even when broader claims are narrowed
- distinguish incompatibility with an existing production ecosystem from failure in every possible use
- treat prior-work engagement as a general scholarly requirement, not as automatic deference to one system
- distinguish technical validity from linguistic, educational, community, institutional, legal, data-governance, and standards authority
- name evidence gaps in the SignWriting ecosystem as clearly as evidence gaps in competing systems
- allow non-Sutton systems to count as legitimate signed writing when they define their own written units, conventions, use practices, and infrastructure path

Readers do not need to accept the author's position as authority. They can inspect whether the layer distinctions, evidence boundaries, and classification judgments hold.

## Why SignWriting Matters Methodologically

The framework overlaps with SignWriting because SignWriting is a major reference case in which many layers of a signed-language writing and text-infrastructure path have had to be confronted in practice:

- human writing and readable written forms
- written units and written conventions
- symbol inventories and symbol identity
- authored spatial composition
- formal text models
- encoding and serialization strategies
- search, sorting, and query behavior
- fonts, SVG, layout engines, and rendering paths
- passage layout and document organization
- dictionaries, corpora, and public sites
- classroom use and teaching materials
- Unicode pressure and standards-facing claims
- governance, maintenance, and stewardship

That does not mean other systems must become SignWriting.

It means that a whole working signed-language writing and text-infrastructure path must eventually answer questions like these:

- What do people read?
- What do people write?
- What is the primary written unit?
- What conventions stabilize variation?
- How is spatial organization authored, preserved, and displayed?
- How is text stored?
- How is it searched, sorted, normalized, migrated, exchanged, and archived?
- How is it displayed?
- How are passages organized?
- How is it taught and corrected?
- What evidence supports claims about use, literacy, or adoption?
- Who maintains the technical system?
- Who has authority over spelling practice, community review, data use, standards claims, and stewardship?

SignWriting is a reference case for the problem because it has carried enough of the path for these layers to become visible in implementation.

The standard is not:

> be like SignWriting

The standard is:

> account for the layers a whole working signed-language writing system must solve, or state clearly that the system serves a narrower purpose

This series therefore uses SignWriting-derived terminology as reference terminology, not as proprietary terminology.

Sutton SignWriting is the clearest currently documented full-path signed-writing infrastructure available for comparison, and terms such as `written sign`, `signbox`, `plane-based writing`, and `text model` name distinctions that became necessary through actual writing, encoding, rendering, search, corpus, dictionary, standards, and stewardship work.

This is implementation-tested vocabulary, not proprietary vocabulary.

Other systems may use different terminology. Serious comparison still requires mapping their terms to these distinctions or explaining why the distinctions do not apply.

For example, another system does not have to use the word `signbox`, but it should say what its bounded composed unit is, or why it does not need one. It does not have to use `Formal SignWriting`, but a full-path claim still needs an adequate text model. It does not have to use `written sign`, but it needs to explain what writers compose, what readers recognize, and what software preserves.

The point is not to require every system to become SignWriting.

The point is to prevent the field from repeatedly renaming, flattening, or overlooking problems already exposed by a working signed-text infrastructure.

## Five Threshold Distinctions

The following distinctions are threshold tests. If a review collapses them, the rest of the critique becomes unreliable.

### 1. Writing System, Encoding, and Rendering Are Not the Same Thing

- A `writing system` is the human-readable and human-writable form used to write language.
- An `encoding` is a technical representation used to store, transmit, parse, validate, or process text.
- A `renderer` is a mechanism that turns modeled or encoded text into visible output.

A source that solves one of these problems has not automatically solved the others.

In Sutton SignWriting terms, Sutton SignWriting is the human writing system. Formal SignWriting belongs to the technical text-model layer. FSW and SWU are encoding or serialization strategies within that model. Fonts, SVG, style strings, and layout engines belong to rendering and presentation.

A font is not a writing system. A character repertoire is not a full text model. A serialization is not evidence that the writing itself is linear. A visual image may show a sign while still failing to preserve text.

### 2. A Symbol Is Not the Same Thing as a Written Sign

A `symbol` is a component. A `written sign` is a structured written unit composed for reading and writing.

In Sutton SignWriting, the written sign is composed in a signbox. Other systems may define a different primary written unit, but they still need to identify what writers compose, what readers read, what can be cited, and what software preserves.

If a source treats the symbol inventory as the whole writing problem, it is stopping one level too low. The question is not only which symbols exist. The question is how they become written units, how those units become text, and how text remains readable, writable, searchable, and maintainable.

### 3. Serialization Is Not Evidence That Writing Is Linear

A system may need a one-dimensional serialized form for storage or processing. That does not mean the writing, as authored and read, is fundamentally line-based.

For plane-based writing, spatial composition may be part of the written form rather than a later display choice. Serialization, storage order, or character sequence may preserve writing for software; they do not prove that the writing itself is linear.

A review must therefore ask whether a source preserves authored spatial relations as text, treats them as rendering, or discards them as incidental.

### 4. Adjacent-Purpose Systems Are Not Failed Writing Systems

A source may be analyzing language, proposing a notation, transcribing signed media, designing a public writing system, building a semantic representation, controlling an avatar, supporting classroom transition, annotating a corpus, or solving a software problem.

All of these can be valuable. They should not be treated as the same achievement.

The critique begins when success at one purpose is presented as if it solves another.

### 5. Data Objects, Rights Layers, and Written Units Are Not the Same Thing

A written sign, a lexical record, a dictionary entry, a corpus record, a dataset item, a linked video, and a signer performance are different objects.

They may be connected, but they do not carry the same structure, evidence, rights, consent, governance, or reuse conditions.

A source that stores dictionary records has not thereby defined a writing system. A source that publishes a corpus has not thereby granted permission for every dataset use. A source that links video to written forms has not thereby merged video rights, transcription rights, and written-text rights into one object.

This distinction is especially important for AI, dataset, corpus, dictionary, and public-platform claims.

## Framework Architecture

The framework separates three kinds of categories.

1. **System layers** are components of a whole signed-language writing and text-infrastructure path.
2. **Adjacent-purpose categories** are useful systems whose primary purpose may not be full public writing infrastructure.
3. **Evaluation axes** are questions about evidence, authority, claim scope, audience, completeness, dependency, and prior work that apply across all layers and categories.

Mixing these three kinds of categories weakens critique. Separating them makes the framework fairer and harder to dismiss.

A review should therefore proceed in this order:

1. Name what the source claims to do.
2. Locate it in the layer stack or adjacent-purpose categories.
3. Identify the primary unit it treats as basic.
4. Identify its representational target and spatial/sequential assumptions.
5. Evaluate evidence, maturity, authority, audience, and completeness at that level.
6. State a layer-level judgment.
7. State a separate full-path judgment.

The method is not designed to force every source into a deficiency narrative. It is designed to prevent a review from either overpraising a partial solution or unfairly dismissing a narrow but valuable one.

## System Layers

A full signed-language writing and text-infrastructure path contains the following layers.

A reviewed source may address one layer, several layers, or the whole path. It should not be credited with solving layers it does not address. It should also not be condemned for failing to solve layers it never claimed to address.

When a source is discussed in relation to signed-language literacy, the decisive question is whether it supports a durable written text pathway. If it does not, the review should say so precisely and then credit the source at the layer or adjacent purpose where it actually works.

| # | Layer | Core question |
| ---: | --- | --- |
| 1 | **Language and modality target** | What signed-language form, structure, or communicative object is being represented? |
| 2 | **Human writing-system layer** | What do people read and write? |
| 3 | **Orthographic / written-convention layer** | What makes forms stable, contrastive, teachable, correctable, reusable, and legible within a community of practice? |
| 4 | **Written-unit layer** | What is the primary written unit, and what can be composed, recognized, cited, copied, corrected, and preserved? |
| 5 | **Spatial, sequential, and compositional organization layer** | How are written units organized internally and externally, and is spatial relation part of authorship, display, or both? |
| 6 | **Technical text-model layer** | How is written structure modeled for validation, parsing, comparison, transformation, and preservation? |
| 7 | **Encoding / serialization layer** | How is text represented as characters, strings, code points, markup, or serialized data? |
| 8 | **Text-operations and interoperability layer** | Can it be searched, sorted, normalized, converted, migrated, indexed, and exchanged? |
| 9 | **Layout and document-organization layer** | How are written units arranged into readable passages, columns, pages, lanes, or other document structures? |
| 10 | **Rendering / styling layer** | How is modeled text displayed visually? |
| 11 | **Tooling, corpus, and platform layer** | Are there editors, fonts, libraries, datasets, corpora, dictionaries, APIs, documentation, and preservation paths? |
| 12 | **Use, pedagogy, and literacy-practice layer** | Can people learn, teach, read, write, revise, correct, and use the system in practice? |
| 13 | **Governance and stewardship layer** | Who maintains the system, separates authority, governs data, and sustains infrastructure over time? |

These layers are not a rigid checklist that every narrow-purpose system must satisfy. They are the layers a full-path claim must eventually account for. A source may intentionally operate at one layer. That is fine. A source becomes overstated when success at one layer is treated as if it solves the whole path.

The companion manual, *Review Procedure for the Full-Path Critique Framework*, expands these layers into detailed questions, layer risks, review steps, output classifications, examples, and stress tests.

## Adjacent-Purpose Categories

Adjacent-purpose systems are not failed writing systems. They are systems with different primary purposes.

The framework identifies adjacent-purpose categories before judging full-path adequacy. This is fairer than treating every narrow system as a deficient version of a full writing system. It also preserves critique when a narrow system is rhetorically extended beyond what it actually solves.

| Adjacent target | Core question | Typical full-path risk |
| --- | --- | --- |
| **Notation / transcription** | Is this adequate for analysis, description, documentation, or research transcription? | Specialist notation is presented as public writing. |
| **Semantic / computational representation** | Is this adequate for meaning representation, translation, computational analysis, or language technology? | Meaning representation is treated as written signed text. |
| **Pedagogical bridge system** | Is this useful for teaching, transition, literacy support, or classroom scaffolding? | Classroom scaffold is presented as full orthography or public infrastructure. |
| **Corpus annotation** | Is this useful for tagging, alignment, analysis, search, or dataset enrichment? | Annotation metadata is treated as durable signed text. |
| **Video-linked annotation** | Is this useful for connecting signed media with structured metadata or linguistic analysis? | Durable records about video are treated as durable written signs. |
| **Video-centered language record** | Is this useful for preserving performance, timing, expression, prosody, and embodiment? | Video is treated as a replacement for every function of durable text. |
| **Synthesis / avatar representation** | Is this useful for generating movement, controlling avatars, or specifying performance? | Performance instructions are treated as writing for readers and writers. |
| **Character encoding / standards** | Is this adequate as character-repertoire, symbol-identity, or standards-facing work? | Character identity is treated as complete written-text infrastructure. |
| **Rendering / font system** | Is this adequate as display, styling, or visual output mechanism? | Visible output is treated as canonical text. |
| **Lexical database / dictionary infrastructure** | Is this adequate for storing lexical records, translations, examples, metadata, and media? | Dictionary records are treated as the writing system itself. |
| **AI / dataset infrastructure** | Is this adequate for training data, evaluation data, search, recognition, generation, or machine learning? | Dataset usefulness is treated as community authorization or writing-system adequacy. |

For each adjacent-purpose category, the review question is:

> Is the system adequate for its adjacent purpose, and is it being overclaimed as full durable signed-language writing infrastructure?

A positive adjacent-purpose judgment should be explicit. Use phrases such as:

- useful but narrow as notation
- correct and useful as character-repertoire work
- strong as corpus annotation
- valuable as a pedagogical bridge
- useful as a renderer but not a text model
- promising as semantic representation but not public writing infrastructure
- useful for AI or dataset work but not a literacy-supporting writing system

## Evaluation Axes

Evaluation axes are not layers. They are questions applied across all layers and adjacent-purpose categories.

| Axis | Core question |
| --- | --- |
| **Claim scope** | What is the source actually claiming: notation, pedagogy, encoding, writing, infrastructure, empirical outcome, standards status, or something else? |
| **Evidence status** | What kind of evidence supports the claim, and what stronger evidence would be needed for a stronger claim? |
| **Maturity level** | Is the work an idea, prototype, implemented tool, documented practice, maintained infrastructure, institutional resource, or independently studied system? |
| **Authority type** | Is the claim technical, linguistic, orthographic, educational, community-based, institutional, legal, standards-facing, data-governance, or stewardship authority? |
| **Audience and use context** | For whom, and for what task, is the system adequate? |
| **Completeness at the claimed layer** | Is the relevant layer absent, implied, partial, working, mature, or institutionally sustained? |
| **Interdependence and declared dependencies** | Which downstream layers depend on this one, and are required layers solved, borrowed, externally supplied, assumed, deferred, or outside the source's scope? |
| **Prior-work engagement** | Does the source account for relevant existing systems, tools, corpora, encodings, practices, and migration questions? |

The companion manual expands these axes into review questions and maturity categories.

## Minimum Conditions for a Full-Path Claim

A system does not need to solve every layer alone. It may rely on other systems, standards, tools, institutions, or practices. But a full-path claim must account for the path.

A full-path claim should satisfy, or explicitly defer with a credible dependency, the following minimum conditions:

1. **Human written form:** It identifies what people read and write.
2. **Primary written unit:** It identifies the basic unit that writers compose, readers recognize, and tools preserve.
3. **Convention:** It explains how variation becomes stable, teachable, correctable, and reusable.
4. **Spatial and compositional organization:** It explains how space, sequence, simultaneity, orientation, and arrangement are authored, preserved, linearized if necessary, and displayed.
5. **Text model:** It preserves written structure as text, not merely as image, video, performance instruction, or display output.
6. **Encoding or storage:** It defines how text is stored, transmitted, exchanged, and versioned.
7. **Text operations:** It supports or accounts for search, comparison, sorting, validation, conversion, migration, and indexing where relevant.
8. **Layout and documents:** It explains how written units become passages, pages, or other durable documents.
9. **Rendering:** It makes text visible without confusing display with canonical text identity.
10. **Tooling and data:** It provides or accounts for usable tools, documentation, dictionaries, corpora, datasets, and preservation paths.
11. **Use and pedagogy:** It provides evidence appropriate to claims about learning, teaching, reading, writing, correction, adoption, and literacy.
12. **Governance:** It identifies who maintains the system and who has authority over technical validity, data, community practice, education, standards, and stewardship.
13. **Declared dependencies:** It states which layers are solved, borrowed, externally supplied, assumed, deferred, or not in scope.

Dependency honesty is not a demand that every source solve every layer. It is a demand that required layers be named accurately. A review should distinguish:

- **Solved layers:** handled directly by the source, system, or stack being reviewed.
- **Borrowed layers:** handled by another named system, standard, tool, model, or notation that the source adopts as part of its own stack.
- **Externally supplied layers:** provided by communities, institutions, public practice, corpora, datasets, publications, stewardship arrangements, or infrastructure outside the source's direct control.
- **Assumed layers:** required by the claim but not specified, evidenced, or assigned to a responsible actor.
- **Deferred layers:** acknowledged as future work or a later implementation requirement.
- **Not in scope layers:** intentionally excluded because the source makes a narrower claim.

A system that cannot meet these conditions may still be correct and useful at a layer or adjacent purpose. It should not be described as a complete signed-language writing and text-infrastructure path.

## Recurring Failure Patterns

Common failure patterns include level confusion, full-path overextension, symbol-centric modeling, forced linearization, character-inventory substitution, renderer substitution, alphabetic bias, incomplete infrastructure engagement, evidence overextension, authority conflation, incomplete prior-work engagement, and data-object collapse.

These are diagnostic labels, not substitutes for argument. The companion manual defines each pattern and gives review tests for applying them.

## Scope of the Framework

This framework is a review method, not a demand that every system become Sutton SignWriting or solve every layer alone.

It gives notation, transcription, semantic representation, video, gloss, annotation, bridge systems, Unicode, rendering systems, AI datasets, and public writing systems a fairer way to be described: each should be credited at the layer where it actually works.

It also keeps adjacent authorities distinct.

Technical infrastructure does not by itself prove literacy outcomes.

Adoption evidence does not automatically prove universal community preference.

Community preference does not automatically solve technical infrastructure.

Standards recognition does not automatically create production compatibility.

Public availability does not automatically grant data-use permission.

Computational validity does not decide spelling quality, educational value, legal rights, or community legitimacy.

Those boundaries make the framework stronger rather than narrower.

A full working signed-language writing system requires more than one successful layer, and reviews should say exactly which layers a source handles, which it leaves to others, and what would still be needed.

## Conclusion

Signed-language writing work becomes confused when partial solutions are treated as whole solutions.

A notation system can solve notation. A semantic system can solve semantic representation. A video corpus can solve documentation. A character encoding can solve character naming. A renderer can solve display. A classroom bridge can solve a teaching problem. A dataset can support analysis or machine learning. A dictionary can support lexical practice.

Those are real contributions.

But durable signed-language writing requires a full path from human written form to reusable text infrastructure. That path includes language target, human writing, convention, written units, spatial and document organization, text modeling, encoding, operations, layout, rendering, tooling, pedagogy, evidence, governance, and stewardship.

The purpose of this framework is not to dismiss narrower systems. It is to say exactly what each system accomplishes, where it belongs, what it does not accomplish, and what would still be needed for a whole working signed-language writing system.

The strongest review is not the one that says simply `correct` or `wrong`.

The strongest review says:

> This is what the source actually solves.
>
> This is the layer where it is useful.
>
> This is where the claim has been overstated, if anywhere.
>
> This is what remains unresolved.
>
> This is what would be needed for full-path adequacy.

That is the standard this framework applies.
