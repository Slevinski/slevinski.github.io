# Unicode and SignWriting

*Unicode history, compatibility, and standards-facing discussion*

Unicode questions around SignWriting keep returning, and they are too important to leave scattered across old proposals, isolated notes, memory, email threads, and side remarks in unrelated public documents.

Different readers need different levels of detail:

- developers need practical implementation guidance
- historians and standards readers need chronology and official references
- Wikimedia staff need a compact explanation of the current gap
- UTC readers need a formal technical statement

> the current official Unicode SignWriting encoding is not fully compatible with the established Sutton SignWriting production ecosystem

It does **not** mean:

- Unicode has no SignWriting symbols
- no one has tried to make Unicode support work
- fonts and libraries are irrelevant
- Unicode discussion should never happen again

It **does** mean:

- the current official Unicode SignWriting design does not carry the current Sutton SignWriting production ecosystem cleanly
- the unresolved writing-system issues are larger than character naming alone
- compatibility must be judged against real tools, real corpora, real publishing, and real data exchange
- future Unicode discussion is only worth the effort if it begins from those realities

That incompatibility is not only about fonts.

It also involves:

- writer-selected symbols versus font-mediated facial composition
- missing spatial composition
- sorting and collation problems
- dataset incompatibility
- tool and workflow breakage
- the difference between naming characters, preserving stable symbol identity, and encoding complete written signs

## Current position

The current position is:

- the official Unicode 8 SignWriting encoding is a non-compatible branch from the standpoint of the Sutton SignWriting production ecosystem
- FSW remains the canonical production encoding in practice
- SWU remains the isomorphic Unicode-oriented representation supported by the Sutton SignWriting Resources
- real-world corpora, publication, and current tooling should not be forced into the official Unicode encoding when that encoding cannot carry the writing system cleanly

One fact often causes confusion:

- there are Unicode-related packages and experiments inside the Sutton SignWriting ecosystem, including `@sutton-signwriting/unicode8`

That reflects the fact that official Unicode SignWriting exists in the world and must sometimes be processed, examined, converted, or bridged, even when it is not accepted as the main production path.

## Reading path

For most readers, this order works best:

1. **Unicode Overview**  
   Start here for the baseline compatibility judgment.

2. **Wikimedia Brief** or **Developer Notes**  
   Continue with the audience-specific path:
   Wikimedia Brief for public-platform and advocacy conversations, Developer Notes for software, data, and tooling work.

3. **Chronology and Record**  
   Follow the document trail and the turning points.

4. **UTC Technical Note**  
   End with the standards-facing argument and the concrete next-step ask.

## Related lanes

Some related work still belongs elsewhere:

- the scientific foundations for language and writing belong in the science series
- the formal architecture of sign text belongs in the Formal SignWriting series
- Brazil and South Korea as empirical and institutional cases belong in the infrastructure series

Start the science lane with [Language Without Sound](/#series/the-science-of-sutton-signwriting/language-without-sound/handout) and [The Shape of Writing](/#series/the-science-of-sutton-signwriting/the-shape-of-writing/handout).

House rules for this lane live in [editorial-rules.md](./editorial-rules.md).
