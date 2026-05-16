# Searching Signed Text Technical Notes

**Searching Signed Text**  
Query language, matching, ranges, variance, and search logic

Implementation reference only. Read the companion technical paper for the conceptual account; use these notes when checking implementation details, query construction, and search-specific cautions.

These technical notes are the implementation-oriented companion to the search paper. They focus on query construction, range handling, variance, and search-specific cautions rather than restating the grammar layer.

## Minimal search example

From this sign:

```text
AS14c20S27106M518x529S14c20481x471S27106503x489
```

we can derive queries such as:

```text
Q
QT
QS10000
QTS10000
QAS14c20S27106T
QAS14cuuS271uuT
QS14c20481x471S27106503x489
QS14cuu481x471S271uu503x489
```

That compactly demonstrates all-sign search, sortable-sign search, exact search, generalized search, and coordinate-aware search.

## Search is part of the architecture

Search is not merely a utility for developers.

It is part of what makes Formal SignWriting technically distinctive as written sign text.

## Why query is not grammar

Grammar and query interact, but they do not answer the same question.

- grammar defines valid structure
- query defines how existing text can be matched and searched

The split gives both topics more clarity and keeps matching logic from being confused with validity conditions.

## Small query family

The example queries above illustrate a useful progression:

| Query | What it emphasizes |
| --- | --- |
| `Q` | all signs |
| `QT` | signs with a temporal prefix, suitable for sequence-based sorting |
| `QS10000` | signs with `S10000` in the spatial signbox |
| `QTS10000` | sortable signs with `S10000` in the spatial signbox |
| `QAS14c20S27106T` | temporal prefix starts with exact symbols `S14c20S27106` |
| `QAS14cuuS271uuT` | temporal prefix starts with generalized symbols matching `S14cuuS271uu` |
| `QS14c20481x471S27106503x489` | exact spatial match with coordinates |
| `QS14cuu481x471S271uu503x489` | generalized spatial match with coordinates |

This is one of the most important patterns in the search layer: exactness and generalization can both be expressed compactly.

The `T` marker makes temporal-prefix presence part of the query. By itself, as in `QT`, it requires a sign with a temporal prefix but does not specify the prefix contents. After an `A...` pattern, as in `QAS14c20S27106T`, it ends the temporal-prefix query section. That `A...T` pattern is prefix-initial: it matches signs whose temporal prefix starts with the specified sequence pattern, with additional prefix symbols still allowed after the matched pattern.

## Exactness and flexibility belong together

Search should support exact matching, but exactness alone is not enough.

The search architecture is stronger because it can also support:

- generalized symbol forms
- coordinate-aware matching
- bounded variance
- reproducible range logic

That is what makes the system useful for actual signed-text collections.

## Range logic at a glance

Range logic matters because spatial writing needs disciplined flexibility.

Useful search may vary:

- symbol keys within controlled ranges
- coordinates within bounded neighborhoods
- exact versus generalized symbol forms

The goal is not vague similarity.

The goal is a matcher whose behavior can still be explained, reproduced, and implemented.

## Why transformations belong here

Search is not only a static syntax.

It is a workflow:

- text becomes query
- query becomes matcher
- matcher becomes results

That pipeline belongs to the search layer rather than being scattered across unrelated topics.

## Search matters beyond software

Search matters for:

- corpora
- lexicons
- annotation
- research workflows
- reproducible technical practice

## Appendix note on search workflow

The useful pipeline is:

```text
sign text -> query string -> matcher -> matching signs or lines
```

That workflow is one reason search belongs in the core technical story rather than in a software appendix.

## Working reference points

Search needs to stay clear about what is being matched:

- a full sign
- a sign line
- a temporal prefix
- a signbox pattern
- a symbol with or without coordinates

Keeping those levels explicit makes implementation and explanation much easier.
