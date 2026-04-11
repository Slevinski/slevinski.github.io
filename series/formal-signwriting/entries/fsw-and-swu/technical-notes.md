# FSW and SWU Technical Notes

**FSW and SWU**  
Plain-text encodings, character sets, and conversion

These technical notes collect compact notes behind the encoding layer.

## 0. Quick examples

Minimal conversion examples:

```text
S10000 <-> 񀀁
```

```text
AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475
<->
𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񋚥𝤐𝤆񀀚𝣮𝣭
```

## I. Canonical encodings

FSW and SWU are core encodings of Formal SignWriting text.

They belong to the technical model rather than to an auxiliary display layer, but their operational roles can still differ.

For stewardship and implementation work, FSW is commonly the canonical internal form for processing, storage, and indexing, while SWU is supported for conversion, input/output boundaries, and Unicode-oriented workflows.

## II. Minimal inventory

The shared inventory can be summarized compactly:

| Description | FSW | SWU |
| --- | --- | --- |
| sequence marker | `A` | `U+1D800` |
| signbox markers | `B`, `L`, `M`, `R` | `U+1D801` to `U+1D804` |
| numbers | `250` to `749` | `U+1D80C` to `U+1D9FF` |
| null symbol | `S00000` | `U+40000` |
| symbols | `S10000` to `S38b07` | `U+40001` to `U+4F428` |

In SWU, this means:

- five structural markers from `U+1D800` to `U+1D804`
- `500` dedicated number characters from `U+1D80C` to `U+1D9FF`
- the null symbol at `U+40000`
- `62,504` symbol characters from `U+40001` to `U+4F428`

## III. Symbol key structure

FSW symbol keys deserve a more explicit reading.

For a key such as `S10000`:

- `S` marks a symbol key
- `100` is the three-hex-digit base symbol
- `0` is the fill value
- `0` is the rotation value

In regex terms, the pattern is:

```text
S[123][0-9a-f]{2}[0-5][0-9a-f]
```

The base is especially important because symbol typing is based on the base symbol, not on fill or rotation.

That is why range tests for writing, movement, punctuation, `hcenter`, or `vcenter` all operate on the base value.

The SWU symbol mapping is equally systematic and is best stated in two steps:

```text
id = ((base - 0x100) * 96) + (fill * 16) + rotation + 1
code point = U+40000 + id
```

For `S10000`, that produces:

- `id = 1`
- `U+40001`

## IV. Script code and language tags

`Sgnw` is the ISO 15924 script code for SignWriting.

A tag such as `ase-Sgnw` identifies American Sign Language written in the SignWriting script.

That identifies language plus script, not whether the text is serialized in FSW or SWU.

For public technical guidance, the encoding choice should be stated separately by the format, schema, protocol, or profile.

## V. Separation of concerns

Encoding should stay distinct from:

- grammar
- search
- rendering
- styling

## VI. Style string distinction

The style string should not be taught as part of the plain-text encoding itself.

It is better understood as optional light markup for presentation and customization.

That makes it analogous to a rendering adjunct rather than the text proper.

## VII. Conversion as continuity

Conversion between FSW and SWU is part of the continuity of the model.

It shows that Formal SignWriting is not tied to one single character strategy while still remaining a coherent technical system.

At the symbol level, conversion remains systematic rather than ad hoc:

- base symbol identity is preserved
- fill is preserved
- rotation is preserved

## VIII. Coordinate and number range note

The shared numeric restriction matters enough to state explicitly:

- valid values run from `250` to `749`
- FSW writes them with decimal digits
- SWU writes them with number characters from `U+1D80C` to `U+1D9FF`

The SWU number mapping is direct:

```text
code point = U+1D80C + (value - 250)
```

So:

```text
250 -> U+1D80C
500 -> U+1D906
749 -> U+1D9FF
```

An SWU coordinate is two consecutive number characters, one for `x` and one for `y`, with no literal `x` separator.

For example:

```text
525x535 -> U+1D91F U+1D929
```

This preserves the same coordinate model across both encodings.

That is why conversion belongs to the encoding layer and not to rendering.

## IX. Recurring confusions to avoid

Three confusions recur often:

- confusing encoding with rendering
- confusing text with styling
- confusing character choice with model choice
- confusing base symbol with full symbol key
- confusing script code with encoding name

Those confusions create downstream trouble in software, teaching, and technical writing.

## X. Appendix note on plain text

The important point is not only that FSW is ASCII and SWU is Unicode.

The important point is that both are still plain text, even when one is commonly used as the canonical internal form and the other is preferred for some Unicode-facing workflows.

That is why they can support:

- storage
- parsing
- conversion
- comparison
- search

before any rendering decision is made.
