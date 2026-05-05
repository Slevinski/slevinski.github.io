# Formal SignWriting Overview

*Technical orientation for the mechanism layer of the Sutton SignWriting platform*

Formal SignWriting is the technical series for signed text that can be stored, searched, checked, laid out, rendered, styled, and maintained without losing the written form.

The opening paper, *Formal SignWriting*, gives the core claim:

> a sign can be modeled as a two-part word of time and space

This overview explains how to read the series, what each layer is responsible for, and where implementation details belong.

## How To Enter The Series

There are two good entry paths.

If you arrive from the public writing argument, begin here:

1. *Sutton SignWriting Foundations: The Shape of Writing*
2. *Writing and Representation in Sutton SignWriting: Perspective and Authored Space*
3. *Formal SignWriting: The Shape of a Sign*

That route explains why signed writing does not need to imitate line-based print and why authored spatial composition matters.

If you arrive as a technical reader, begin here:

1. *Formal SignWriting*
2. *FSW and SWU*
3. *The Shape of a Sign*
4. *Grammar of Formal SignWriting*

That route gives the model, encodings, signbox structure, and validation layer before search, layout, rendering, styling, and practice.

## Overview Scope

This overview:

- names the technical layers
- shows the reading order
- keeps canonical text, rendering, styling, and implementation practice distinct
- points technical readers toward the right companion material

The series should not be read as one long specification where every entry repeats the same facts.

The publication split is:

- **technical papers** explain the architecture, concepts, and layer boundaries
- **technical notes** carry formulas, regex details, implementation cautions, edge cases, and reference material
- **historical notes** explain why the model took its present form

## Layer Map

| Entry | Primary role | Companion or secondary work |
| --- | --- | --- |
| *Formal SignWriting* | states the core two-part word model | points forward to the practice history of how the model stabilized |
| *FSW and SWU* | explains two plain-text encodings of the same model | keeps conversion arithmetic in technical notes |
| *The Shape of a Sign* | defines symbols, coordinates, signboxes, and centering | carries *Plane Writing Technical Bridge* as a named bridge from the public writing argument into the signbox model |
| *Grammar of Formal SignWriting* | defines valid sign-level structure and clarifies passage-level scope | introduces token roles while leaving downstream NLP choices to practice |
| *Searching Signed Text* | explains exact and generalized matching over structured text | keeps query construction and variance details in technical notes |
| *Sign Text Layout* | explains how signboxes become vertical and horizontal passages | provides shared SW1-SW4 layout profiles for implementation |
| *Rendering Formal SignWriting* | explains downstream visible output from canonical text | keeps output format details downstream from the stored text |
| *Styling Signs* | defines optional style strings as presentation markup | separates customization from canonical FSW or SWU text |
| *Formal SignWriting in Practice* | connects the model to libraries, datasets, transformations, and maintenance | carries the encoding history as a practice companion |

## Core Boundaries

The series depends on a small set of boundaries.

| Boundary | Why it matters |
| --- | --- |
| canonical text != rendering | storage and validation should not depend on one visual output method |
| rendering != styling | visible output and optional customization should remain separable |
| grammar != search | validity and matching are related but different operations |
| signbox != layout | one sign's internal geometry is not the same as passage flow |
| encoding != script identity | `Sgnw` identifies the script; FSW and SWU identify character strategies |
| sequence theory != spatial writing | sorting sequences can vary while the written signbox remains authored text |

These boundaries make the technical stack maintainable.

## Companion Materials

Two companion documents deserve early visibility.

The most important bridge from the public writing argument into the formal signbox model is:

- *Plane Writing Technical Bridge*

Read it if you want the deeper account of alphabet stability, writer authorship, compatibility boundaries, and practical dataset scale. It is also where the series states the current scale claim most directly: the Brazilian Sign Language dictionary alone contains nearly 68,000 signs, and the broader accumulated dataset contains well over one million unique signs.

The most important historical companion for the practice layer is:

- *From Experimental Encodings to Formal SignWriting*

Read it if you want to understand why the model settled around four lessons:

- the signbox must remain explicit
- sequence is useful but not sufficient
- clarity matters more than maximum compression
- migration must be lossless

Other technical notes should be used as implementation aids rather than as alternate versions of the main papers.

## Technical Paper Sequence

The technical papers should be read in this sequence:

1. *Formal SignWriting*
2. *FSW and SWU*
3. *The Shape of a Sign*
4. *Grammar of Formal SignWriting*
5. *Searching Signed Text*
6. *Sign Text Layout*
7. *Rendering Formal SignWriting*
8. *Styling Signs*
9. *Formal SignWriting in Practice*

Each entry should stand alone. The series is strongest when read as a layered technical canon.

## Maintenance Surface

The core model is stable. The surrounding technical record can keep growing.

Near-term extensions worth treating explicitly include:

| Surface | Likely owner |
| --- | --- |
| tokenization guidance for NLP and machine learning | research and corpus collaborators, with core-library support |
| corpus conventions for mixed sorting theories | corpus maintainers and dataset publishers |
| implementation profiles for passage layout | core maintainers and renderer implementers |
| rendering profiles for `Line`, `Fill`, and `OneD` fonts | font and rendering maintainers |
| compatibility and migration notes for older data | core maintainers and infrastructure stewards |

These are not reasons to weaken the core model.

They are the next maintenance edge around a stable center.
