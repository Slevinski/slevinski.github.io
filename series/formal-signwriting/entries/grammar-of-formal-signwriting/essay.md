# Grammar of Formal SignWriting

**Token patterns, syntax, and valid structure**

Formal SignWriting is not only an encoding. It is also a grammar of valid written forms.

This entry focuses on token patterns, syntax, regular expressions, and well-formed structure.

Grammar answers a different question:

> what counts as valid Formal SignWriting text?

## Core token patterns

Several core FSW patterns make the grammar legible:

| Pattern | Meaning |
| --- | --- |
| `S[123][0-9a-f]{2}[0-5][0-9a-f]` | symbol key |
| `[0-9]{3}x[0-9]{3}` | coordinate |
| `(A(S[123][0-9a-f]{2}[0-5][0-9a-f])+)?` | optional temporal prefix |
| `[BLMR][0-9]{3}x[0-9]{3}(S[123][0-9a-f]{2}[0-5][0-9a-f][0-9]{3}x[0-9]{3})*` | signbox |

The main structural markers are:

- `A` for the temporal prefix
- `B`, `L`, `M`, `R` for signbox and lane markers
- `S...` for symbol keys
- `nnnxnnn` for coordinates

The key structural fact is simple:

- the temporal prefix is optional
- the signbox is required for a full sign

## Token patterns and syntax

The grammar layer clarifies how the two-part word is built from its technical pieces.

This includes:

- structural markers
- symbol forms
- coordinate patterns
- the valid relation between prefix and signbox

This is not merely formal neatness. Later layers need a stable account of what they can trust.

The main token families can also be grouped this way:

| Family | Typical examples | Role |
| --- | --- | --- |
| structural markers | `A`, `B`, `L`, `M`, `R` | major structural boundaries |
| symbol keys | `S10011`, `S2e748` | identify symbols |
| coordinates | `525x535` | place signs and symbols spatially |
| combination rules | prefix + signbox patterns | determine well-formed structure |

## Worked example

This FSW sign is well formed:

```text
AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475
```

It is well formed because it contains:

- an optional temporal prefix beginning with `A`
- a required signbox beginning with `M`
- valid symbol keys
- valid coordinates associated with the placed spatial symbols

By contrast, this is not a valid full sign:

```text
AS10011S10019
```

It is only a prefix fragment. It does not yet contain a signbox.

This, however, is a valid full sign:

```text
M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475
```

It is valid because the signbox is present.

It simply lacks a temporal prefix, which means sequence-based sorting is unavailable for that sign.

## Regular expressions

Regular expressions matter here because they make the grammar processable.

They do not replace the conceptual account, but they give the technical model a rigorous operational form for validation, tokenization, and software handling.

This is why grammar matters operationally:

- validation can reject malformed text
- tokenization can separate structural parts
- later layers can assume a stable shape

At a high level, a full FSW sign follows this pattern:

```text
(A(symbol)+)? [BLMR] coord (symbol coord)*
```

That is readable enough for a human description while still close to operational validation logic.

The important point is not only that the pattern exists.

It is that the pattern can be checked consistently across tools, which means:

- validation can be shared
- tokenization can be reproduced
- later processing does not have to guess what counts as a sign

## Passage-level scope

The core grammar in this entry is sign-level grammar.

It defines what counts as:

- a valid symbol key
- a valid coordinate
- a valid temporal prefix
- a valid spatial signbox
- a valid full sign

Passage-level structure is deliberately thinner. A passage is an ordered stream or collection of valid signs, punctuation signs, and layout information. The grammar does not redefine a passage as one larger hidden sign, and it does not make layout choices part of canonical sign identity.

In practice:

- adjacent signs are separated by the surrounding text format, data structure, or parser boundary
- punctuation is represented with punctuation symbols and signbox structure
- vertical or horizontal flow belongs to layout
- lane behavior belongs to layout
- document-level segmentation belongs to the host format or corpus convention

That division keeps the grammar strict where it needs to be strict while leaving passage layout and document packaging to the layers designed for them.

## Tokenization and NLP

At the grammar layer, tokenization means that valid text can be separated into recognizable structural parts.

Tokenization can happen at several levels:

- sign as token
- temporal prefix as sequence tokens
- spatial signbox as placed symbol tokens
- symbol key as base, fill, and rotation
- coordinate pairs as spatial features

For search and validation, sign-level and symbol-level tokenization are usually enough.

For NLP, machine learning, corpus analysis, and other downstream tasks, the detailed guidance belongs in `Formal SignWriting in Practice`. The grammar rule is narrower:

> preserve the full canonical sign text, then derive task-specific tokens from it

Derived token streams should remain reproducible from the stored FSW or SWU source.

## Downstream use

Once the grammar layer is explicit, later entries can build on it:

- search can use it
- rendering can assume it
- implementation can validate against it

## Core rule

Before text can be searched, rendered, or maintained confidently, it has to be recognizably well formed.
