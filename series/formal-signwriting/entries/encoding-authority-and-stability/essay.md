# Encoding Stewardship and Stability

**Technical coherence, computational validity, linguistic judgment, practical finality, and forkability**

Formal SignWriting is author-stewarded infrastructure.

Steve Slevinski stewards the formal encoding he authored and maintains: the supported FSW/SWU path, its technical coherence, stability, documentation, compatibility, and reference behavior.

That stewardship is real but bounded. It is not authority over signed languages, spelling preferences, education, corpora, datasets, community governance, or AI deployment.

This note states the boundary clearly.

## Core Boundary

The supported encoding defines what is well-formed for software.

It does not decide what is well-written for the reader.

In formal terms:

> Formal SignWriting distinguishes computational validity from linguistic judgment. The encoding determines whether a written sign is structurally valid for parsing, rendering, search, sorting, and interchange. It does not determine whether a spelling is good, preferred, readable, standard, local, poetic, or community-approved.

That distinction protects both sides of the work.

The encoding can remain stable enough for software, archives, corpora, fonts, search, rendering, and publication.

Writers, readers, teachers, editors, researchers, and communities remain responsible for use, preference, pedagogy, interpretation, local norms, and judgment.

## What Encoding Stewardship Covers

Encoding stewardship covers the supported formal model.

That includes:

- FSW structure
- SWU structure
- symbol keys
- signbox syntax
- coordinate rules
- temporal-prefix syntax
- query syntax
- style-string syntax
- parsing and validation behavior
- lossless conversion between supported forms
- compatibility boundaries for the Sutton SignWriting production ecosystem

This stewardship responsibility is practical.

It lets implementers know what the supported model accepts, rejects, preserves, converts, searches, and renders.

## What Encoding Stewardship Does Not Cover

Encoding stewardship does not decide:

- whether a spelling is good
- whether a spelling is preferred
- whether a spelling is local, poetic, educational, formal, informal, or experimental
- whether a community should use SignWriting
- whether a dictionary should prefer one form over another
- whether a corpus should normalize variants
- whether a signer, teacher, editor, or institution approves a form
- whether an AI system is safe, useful, or accountable

Those questions belong to other layers.

The technical model can preserve written distinctions.

It cannot replace reader judgment, community use, corpus governance, educational practice, or evaluation by relevant signers, signing communities, and local stakeholders where systems are deployed.

That evaluation boundary is not an afterthought. Any tool, dataset, classroom deployment, AI system, or institutional workflow that affects people needs review at the layer where people are affected. Formal validity can say whether text is parseable and compatible; it cannot grant social legitimacy, pedagogical adequacy, community acceptance, or deployment permission.

## Stability and Practical Finality

The FSW/SWU encoding is stable and mature as the supported Sutton SignWriting production path.

Finality is a stewardship judgment, not a refusal of critique.

It means the supported encoding has reached production maturity and is no longer being held open for ordinary design revision.

It does not mean that no future proposal can matter, that no alternative could ever be valid, or that critique is unwelcome.

The finality of FSW/SWU is practical and historical.

Formal SignWriting emerged through a particular convergence:

- Valerie Sutton's invention and long-term development of SignWriting
- worldwide SignWriting users and accumulated practice
- dictionary work and real written-sign data
- practical software, fonts, rendering, search, and publication needs
- cross-layer work on writing-system structure, encoding, rendering, search, corpus use, and standards-facing compatibility

That convergence cannot simply be recreated on demand by declaring the encoding open for redesign.

For that reason, the supported Sutton SignWriting production path should be treated as stable and complete.

Future work concerns:

- documentation
- tooling
- preservation
- bridge support
- implementation profiles
- platform development
- datasets
- access
- research use
- migration support

Future work does not require redesigning the supported encoding model.

The encoding has reached the stability required for long-term tools, datasets, fonts, search, rendering, publication, and archival use.

That stability matters because an encoding that remains open-ended forever cannot provide a reliable base for durable text infrastructure.

Others remain free to propose alternatives, fork the work where licenses allow, or develop a new version.

Such work may be valuable, but it should not be assumed to replace the established FSW/SWU model unless it demonstrates real cross-layer compatibility and production advantage.

## Voluntary Adoption and Forkability

Sutton SignWriting infrastructure does not compel adoption.

The encoding is openly available for use, study, implementation, critique, and forking under the applicable licenses.

Communities, institutions, researchers, and developers remain free to:

- use it
- ignore it
- critique it
- reject it
- build alternatives
- adapt their own tools
- fork the model under the applicable licenses

The existence of an author-stewarded supported path does not prevent other paths from existing.

It only states which path the Sutton SignWriting production ecosystem supports.

## Supported Path and Alternative Paths

The supported path remains the established FSW/SWU model.

This means:

- production libraries should preserve FSW/SWU compatibility
- archives should not silently transform written signs into incompatible models
- datasets should record when data has been normalized, migrated, or converted
- implementations should document departures from the supported model
- alternatives should identify themselves as alternatives rather than as transparent replacements

Forks are possible.

But forks should be named honestly.

If a system changes the signbox model, symbol inventory, coordinate assumptions, temporal-prefix behavior, query syntax, or compatibility requirements, it should not pretend to be the same production encoding.

## Representational Affordance

Encoding stewardship is not linguistic authority.

It is still real responsibility for the representational affordances available to linguistic expression inside this technical model.

That means the encoding must be maintained carefully.

A formal model can make some distinctions easy to preserve and others difficult.

It can support search, sorting, rendering, corpus work, publication, and study.

It can also create constraints that implementers, writers, researchers, and communities need to understand.

That is why the boundary must be explicit:

- the encoding maintains computational coherence
- writers and readers judge written use
- communities and institutions guide local practice
- corpus and dataset stewards govern records, permissions, metadata, and access
- relevant signer and community evaluation is required where tools affect people

## Bottom Line

Formal SignWriting is a stable supported encoding path for Sutton SignWriting.

It defines computational well-formedness.

It does not define linguistic worth, spelling preference, community authority, or deployment legitimacy.

It is a stewardship boundary, not a claim of language or community control.

Others may use it, critique it, reject it, or fork it under the applicable licenses.

The supported Sutton SignWriting path remains the established FSW/SWU model.
