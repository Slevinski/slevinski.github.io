# Wikimedia Brief

**What Wikimedia needs to understand about Unicode and SignWriting**

## Short answer

Current official Unicode SignWriting support is not yet sufficient for real-world Sutton SignWriting production use.

Wikimedia projects that want to host or work with SignWriting therefore still need practical, stable solutions for text storage, structured sign representation, display, search, and compatibility with existing datasets.

## What Wikimedia is likely to notice first

You may see:

- sign-language content or lexeme work relying on ASCII-based strings (FSW)
- custom user scripts or renderers
- understandable confusion about whether Unicode already solved SignWriting

Unicode did encode a SignWriting block in Unicode 8.

That block names many characters, but it does not yet deliver a complete, compatible solution for stable symbols and plane-based written signs.

## The real gap

The gap is larger than missing fonts or rendering. Official Unicode SignWriting does not currently provide a workable compatible solution for:

- stable symbol identity across the full system
- direct writer selection of final symbols (especially in the facial system)
- full written signs as they exist in production
- spatial composition (the plane-based nature of the writing system)
- seamless compatibility with current Sutton SignWriting datasets and tooling

In the facial system specifically, the official model asks the writer to enter a sequence of elements; the font then interprets and arranges them. This shifts part of symbol formation into font behavior rather than preserving a stable, writer-selected symbol inventory. That affects not just display but also how data is stored, compared, and reused.

## What is used in practice today

Current production workflows (tools, dictionaries, corpora, websites) use:

- **FSW** (Formal SignWriting) as the canonical production encoding
- **SWU** (SignWriting in Unicode) as the supported Unicode-oriented isomorphic representation

These are not temporary workarounds. They are the stable, production-tested baseline that already carries real datasets (including the 68 000-sign Brazilian dictionary and more than 1 million signs across languages).

## Existing Wikimedia footprint

This is not only a theoretical future issue for Wikimedia.

There is already a visible SignWriting footprint across Wikimedia infrastructure:

- **Wikidata property P14164** ("SignWriting transcription") currently uses a formatter URL pointing to the Formal SignWriting analyzer on `steveslevinski.me`
- **Wikimedia Incubator** has maintained a sign-language gadget and a category of sign-language test wikis, including ASL, BSL, Libras, Tunisian Sign Language, Russian Sign Language, Italian Sign Language, and others over time
- **Wikimedia Cloud VPS / Labs** has hosted SignWriting infrastructure such as `swserver.wmflabs.org` and `swis.wmflabs.org`, even though that stack is now deprecated and has drifted behind current production design

That matters because Wikimedia is not deciding whether SignWriting has ever touched its ecosystem.

Wikimedia is deciding how accurately to understand and support an existing footprint that has already depended on custom infrastructure, bridge tooling, and long-lived external services.

## Why this matters specifically to Wikimedia

Accurate handling here affects:

- sign-language incubator projects
- sign-language lexemes in Wikidata
- shared linguistic data and reference examples
- cross-platform rendering and search
- future public language infrastructure inside Wikimedia

Prematurely treating the official Unicode block as "solved" risks spreading incorrect assumptions at Wikimedia scale.

It also risks breaking or neglecting existing Wikimedia-facing integrations that were built around FSW, SWU, custom rendering, and external analyzer or image-server links.

## What would help

Wikimedia could help by:

- starting from the actual production ecosystem rather than the assumption that the Unicode block already solves the problem
- supporting interim practical use of FSW and SWU where needed
- helping advocate inside the UTC (especially as a new participant or voting member) for concrete improvements if a viable technical path emerges

## Good next step

A productive first step is simply to establish a shared factual baseline:

- confirm the current production stack
- agree on where the technical gaps remain
- decide together whether reopening Unicode-level discussion is worth the investment

We are happy to provide the technical details, conversion tools, and datasets needed for Wikimedia to evaluate the options clearly.
