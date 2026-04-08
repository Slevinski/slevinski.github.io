# Searching Signed Text Technical Notes

**Searching Signed Text**  
Query language, matching, ranges, variance, and search logic

These technical notes collect compact notes behind search.

## 0. Minimal search example

From this sign:

```text
AS14c20S27106M518x529S14c20481x471S27106503x489
```

we can derive queries such as:

```text
QAS14c20S27106T
QAS14cuuS271uuT
QS14c20481x471S27106503x489
QS14cuu481x471S271uu503x489
```

That compactly demonstrates exact search, generalized search, and coordinate-aware search.

## I. Search is part of the architecture

Search is not merely a utility for developers.

It is part of what makes Formal SignWriting technically distinctive as written sign text.

## II. Why query is not grammar

Grammar and query interact, but they do not answer the same question.

- grammar defines valid structure
- query defines how existing text can be matched and searched

The split gives both topics more clarity and keeps matching logic from being confused with validity conditions.

## III. Small query family

The four example queries above illustrate a useful progression:

| Query | What it emphasizes |
| --- | --- |
| `QAS14c20S27106T` | exact temporal-prefix match |
| `QAS14cuuS271uuT` | generalized temporal-prefix match |
| `QS14c20481x471S27106503x489` | exact spatial match with coordinates |
| `QS14cuu481x471S271uu503x489` | generalized spatial match with coordinates |

This is one of the most important patterns in the search layer: exactness and generalization can both be expressed compactly.

## IV. Exactness and flexibility belong together

Search should support exact matching, but exactness alone is not enough.

The search architecture is stronger because it can also support:

- generalized symbol forms
- coordinate-aware matching
- bounded variance
- reproducible range logic

That is what makes the system useful for actual signed-text collections.

## V. Range logic at a glance

Range logic matters because spatial writing needs disciplined flexibility.

Useful search may vary:

- symbol keys within controlled ranges
- coordinates within bounded neighborhoods
- exact versus generalized symbol forms

The goal is not vague similarity.

The goal is a matcher whose behavior can still be explained, reproduced, and implemented.

## VI. Why transformations belong here

Search is not only a static syntax.

It is a workflow:

- text becomes query
- query becomes matcher
- matcher becomes results

That pipeline belongs to the search layer rather than being scattered across unrelated topics.

## VII. Search matters beyond software

Search matters for:

- corpora
- lexicons
- annotation
- research workflows
- reproducible technical practice

## VIII. Appendix note on search workflow

The useful pipeline is:

```text
sign text -> query string -> matcher -> matching signs or lines
```

That workflow is one reason search belongs in the core technical story rather than in a software appendix.

## IX. Working reference points

Search needs to stay clear about what is being matched:

- a full sign
- a sign line
- a temporal prefix
- a signbox pattern
- a symbol with or without coordinates

Keeping those levels explicit makes implementation and explanation much easier.
