# UTC Technical Note

**Draft note on compatibility, spatial composition, and next steps**

The Sutton SignWriting Resources regard the current official Unicode SignWriting encoding as insufficient for compatible production use within the established Sutton SignWriting ecosystem.

## Summary

The current official Unicode SignWriting encoding provides a large part of a symbol inventory.

It does not provide a workable compatible solution for symbol identity and written signs as they exist in the Sutton SignWriting production ecosystem.

The main unresolved issues are:

- symbol-level incompatibility in the facial system
- spatial composition
- compatibility with existing datasets
- collation and sorting
- migration from current production encodings and tools

Renewed technical review of these issues is needed rather than continued assumption that migration to the current official encoding is the expected path.

## Terms

- **Sutton SignWriting**: the writing system and broader technical ecosystem
- **FSW**: Formal SignWriting in ASCII, the main production encoding in practice
- **SWU**: SignWriting in Unicode, the Unicode-oriented isomorphic representation supported by the Sutton SignWriting Resources
- **official Unicode SignWriting**: the current SignWriting encoding standardized in Unicode 8 and later versions

In some internal discussions, the official Unicode encoding is informally called **uni8** to distinguish it from SWU.

Inside the current ecosystem, that informal term helps prevent confusion between:

- official Unicode SignWriting
- SWU as supported by the Sutton SignWriting Resources

## Current problem

The current problem is not whether Unicode can name SignWriting symbols.

It can.

The current problem is whether the official Unicode SignWriting encoding can carry the established Sutton SignWriting production ecosystem without loss, redesign, or incompatible workarounds.

At present, it cannot.

This is an interoperability judgment about what the current official encoding can carry in practice, not about the sincerity of past participants.

It is also not only a higher-level written-sign problem.

In the facial system, the official model does not preserve direct writer selection of a stable ISWA symbol.

Instead, a sequence of facial elements is interpreted by the font and merged into a rendered face.

That means part of symbol formation is delegated to font behavior and designer interpretation rather than being fixed by a writer-selected symbol inventory.

This breaks compatibility at the symbol layer before the larger written-sign problem is even fully considered.

There is no closed master list of facial-diacritic combinations that functions as a shared exhaustive inventory in the same way as ISWA symbol selection.

As a result, font implementations are pushed toward copying a previous interpretation or inventing one.

## Spatial composition remains unresolved

The core writing-system issue is spatial composition.

SignWriting is not only a symbol inventory.

It is a writing system in which the visible written sign depends on spatial composition.

Earlier framing around Unicode SignWriting described a two-stage path:

- first the symbol set
- then an encoding that takes symbols and turns them into signs

The first stage advanced.

The second did not become a workable compatible standard.

The unresolved issue is not merely how to draw a symbol string.

It is how to encode a written sign in a way that remains:

- faithful to the writing system
- processable in software
- compatible with current data

This is the point where the standards question and the software question become the same question.

## Collation and sorting remain unresolved

Sorting and collation are not incidental details.

They affect:

- dictionaries
- corpus order
- search behavior
- software workflows
- interoperability across tools

The problem is not simply that a sort order has not yet been tuned.

The problem is that the current official model does not align cleanly with the established Sutton SignWriting production ecosystem and its practical needs.

This includes two symbol-level design choices that matter directly:

- facial diacritics, which move part of symbol identity into font interpretation
- inherent first fill and first rotation values, which weaken explicit symbol identity and complicate stable sorting

If the facial-diacritic model were removed and explicit first fill and first rotation values were restored instead of being inherent, compatibility and sorting would move much closer to the Formal SignWriting model.

This is why collation should be treated as a signal of deeper incompatibility rather than as a small secondary defect.

## Compatibility with current production use

The current Sutton SignWriting production ecosystem includes:

- real tools
- real websites
- real fonts
- real corpora
- real dictionaries
- real published materials

That ecosystem currently relies on FSW and SWU.

The official Unicode SignWriting encoding does not currently provide a compatible migration path that preserves:

- direct writer-selected symbol identity across the full system
- existing data
- current production tooling
- practical search and sorting workflows
- stable written-sign representation

That should matter to UTC because an encoding standard becomes much more valuable when it can serve as a stable interchange layer for real production use.

Without that, formal standardization risks naming a script without actually serving its living technical ecosystem.

## Why this is not only a font issue

The issue is sometimes framed as though a sufficiently complete font would solve the problem.

That framing is too narrow.

Fonts matter, but the deeper issues remain:

- stable symbol identity in the facial system
- representation of signs, not only symbols
- compatibility with existing encoded data
- sorting and collation
- workflow and software integration
- the absence of a completed compatible spatial-composition model

Strong fonts can hide structural gaps temporarily.

## Practical position

The practical position of the Sutton SignWriting Resources is:

- FSW remains the main production encoding
- SWU remains the supported Unicode-oriented isomorphic representation
- the official Unicode SignWriting encoding is not currently used as the main production path

That position is not based on refusal to engage Unicode in principle.

It is based on incompatibility in practice.

It is also compatible with continued technical engagement if a serious path opens.

That path would need to begin by acknowledging that the current official model did not fully solve symbols cleanly, and did not solve writing.

## Evidence from current use

The real-world ecosystem is now large enough that compatibility should be judged against production use, not only theoretical possibility.

The current ecosystem includes more than one million written signs across dozens of sign languages, together with real software, public resources, dictionaries, and published materials.

In addition, current country-level cases such as Brazil and South Korea show that encoded SignWriting is not hypothetical or merely local.

They also show why the standard of evaluation should be real writing and real infrastructure, not only internal standards elegance.

## Requested next step

The requested next step is modest and concrete:

- acknowledgment that current official Unicode SignWriting is not sufficient for compatible production use
- acknowledgment that spatial composition remains unresolved
- renewed technical review of compatibility and collation
- a concrete path for follow-up discussion with support from a voting member

Start with honest technical acknowledgment of the present gap.

## Closing

The current official Unicode SignWriting encoding should not be treated as though it already solved the practical writing-system problem.

It did not fully solve symbols cleanly.

It did not solve the compatible written-sign problem.

In the facial system, it displaced writer-selected symbol identity with font-mediated interpretation.

That distinction remains the central technical issue.

Everything else depends on whether that distinction is acknowledged clearly.
