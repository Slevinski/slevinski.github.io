# FSW and SWU

**Plain-text encodings, character sets, and conversion**

Formal SignWriting needs a clear account of its plain-text encodings.

This entry focuses on:

- FSW as an ASCII-oriented encoding
- SWU as a Unicode-oriented encoding
- character sets and conversion
- canonical text versus optional markup

## FSW and SWU

FSW and SWU should be treated as plain-text encodings of Formal SignWriting.

They are two technical ways to carry the same underlying model forward into processing, storage, and interchange. They do not represent two different theories of the writing system. They represent two character strategies for the same architecture.

From a stewardship perspective, the distinction should be stated plainly:

- FSW is commonly used as the canonical processing form for storage, indexing, and validation
- SWU is supported for input, output, conversion, and Unicode-oriented workflows

## Script code and language tags

`Sgnw` is the ISO 15924 script code for SignWriting.

A language tag such as `ase-Sgnw` identifies American Sign Language written in the SignWriting script.

That tag does not tell you whether the text is serialized in FSW or SWU.

The language tag identifies **language plus script**.

The encoding choice belongs in the surrounding format, schema, protocol, profile, or technical documentation.

This is why both FSW and SWU can represent the same `ase-Sgnw` content.

## How an FSW symbol key works

An FSW symbol key is not opaque.

A key such as `S10000` can be read as:

- `S` = symbol key marker
- `100` = base symbol
- `0` = fill
- `0` = rotation

This matters because base, fill, and rotation are preserved across conversion.

The base identifies the symbol family and is the part used for range tests such as writing, movement, punctuation, `hcenter`, or `vcenter`.

The exact conversion arithmetic belongs in the technical notes. The paper-level point is simpler: FSW and SWU preserve the same symbol identity and coordinate model through different character strategies.

## Character inventory at a glance

The technical inventory can be summarized this way:

| Description | FSW | SWU |
| --- | --- | --- |
| Sequence marker | `A` | `U+1D800` |
| Signbox markers | `B`, `L`, `M`, `R` | `U+1D801` to `U+1D804` |
| Numbers | `250` to `749` | `U+1D80C` to `U+1D9FF` |
| Null symbol | `S00000` | `U+40000` |
| Symbols | `S10000` to `S38b07` | `U+40001` to `U+4F428` |

In SWU, those ranges are explicit:

- structural markers: `U+1D800` to `U+1D804`
- number characters: `U+1D80C` to `U+1D9FF`
- null symbol: `U+40000`
- symbol inventory: `U+40001` to `U+4F428`

FSW uses the compact ASCII character set:

```text
A B L M R S 0-9 a-f x
```

SWU uses dedicated Unicode characters for:

- sequence and signbox markers
- numbers from `250` to `749`
- the null symbol
- the full symbol inventory

## Character strategy

FSW makes the model workable within an ASCII-oriented plain-text environment.

SWU makes the model workable within a Unicode-oriented plain-text environment.

The key point is continuity:

- same core model
- same sign structure
- same downstream layers for grammar, search, and rendering

In practice, the usual choice is:

- use FSW when you want simpler ASCII tooling, regex, parsing, and processing
- use SWU when you want Unicode-native text handling, cleaner one-dimensional display, or Unicode-centered downstream workflows

## Worked conversion examples

At the symbol level:

```text
FSW: S10000
SWU: 񀀁
```

At the sign level:

```text
FSW: AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475
SWU: 𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񋚥𝤐𝤆񀀚𝣮𝣭
```

These examples matter because they show continuity of model across two different character strategies.

## Conversion logic

Conversion is systematic rather than ad hoc.

At the paper level, three facts matter most:

- base symbol identity is preserved
- fill and rotation are preserved
- coordinates remain text rather than external metadata

That is enough to keep conversion inside the encoding layer rather than the rendering layer.

## Numbers and coordinates

Both encodings use the same restricted numeric space for coordinates.

In FSW, a coordinate is written with decimal digits and an `x` separator. In SWU, the same coordinate is carried by dedicated Unicode number characters.

This matters because spatial writing becomes processable only when coordinates remain part of the text model rather than external metadata.

## Conversion

What matters is not merely that conversion is possible, but that the model remains legible across multiple textual encodings. That matters for:

- archives
- software generations
- interoperability
- long-term maintenance

## What conversion should preserve

Conversion should preserve the underlying sign structure.

That means preserving:

- the two-part word
- the symbol identities
- the coordinate logic
- the lane and signbox markers
- the distinction between text and later presentation markup

## Canonical text and markup

One central distinction closes the entry:

- FSW and SWU are core plain-text encodings of the same model
- the style string is optional light markup for presentation

That distinction protects the technical architecture from being flattened into display concerns and prepares the way for the later entries on rendering and styling.

## Core boundary

- **FSW and SWU** are core encodings of Formal SignWriting text, with FSW commonly used as the canonical processing form and SWU supported for Unicode-oriented interchange
- **the style string** is an optional presentation layer and not part of the canonical encoding itself

## Standards references

- [ISO 15924 code list](https://unicode.org/iso15924/iso15924-codes.html)
- [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
- [RFC 5646 / BCP 47 language tags](https://www.rfc-editor.org/rfc/rfc5646)
