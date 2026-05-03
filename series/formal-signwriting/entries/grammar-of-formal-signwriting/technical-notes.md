# Grammar of Formal SignWriting Technical Notes

**Grammar of Formal SignWriting**  
Token patterns, syntax, and valid structure

Implementation reference only. Read the companion technical paper for the conceptual account; use these notes when checking implementation details, validation boundaries, and token roles.

These technical notes are the implementation-oriented companion to the grammar paper. They focus on validation boundaries, token roles, and the distinction between grammar and search.

## 0. Minimal validation example

A schematic full sign:

```text
(A symbol+)? signbox-marker coordinate (symbol coordinate)*
```

A not-yet-complete fragment:

```text
AS10011S10019
```

The difference is grammatical, not aesthetic. The first pattern can match a full sign. The second example is only a prefix fragment.

## I. Token families at a glance

The grammar depends on four kinds of material:

- structural markers
- symbol keys
- coordinates
- combination rules

Those four are enough to state the difference between a fragment and a full sign.

## II. Grammar and search are related, but distinct

Grammar answers whether text is well formed.

Search answers how well-formed text can be matched, filtered, and located.

Those are closely connected technical questions, but they should not be collapsed into one artifact.

## III. Order of technical dependence

The layer order is:

- encodings first
- spatial model next
- grammar after that
- search as a downstream use of the grammar

## IV. Transformations remain cross-cutting

They belong naturally in multiple places:

- encoding conversion
- grammar decomposition
- query construction
- rendering pipelines
- implementation workflows

## V. What the grammar has to establish

The grammar has to establish:

- a conceptual explanation of well-formed text
- an operational account of token patterns
- a clear relation between the two-part word and validation
- enough rigor that later software work does not need to reinvent the layer

## VI. Appendix note on token roles

The grammar is easier to teach when token roles are kept explicit:

- structural markers say where major parts begin
- symbol keys identify symbols
- coordinates place symbols spatially
- combination rules define what counts as a full sign

That keeps the grammar understandable before it becomes fully formal.
