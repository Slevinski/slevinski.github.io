# Searching Signed Text

**Query language, matching, ranges, variance, and search logic**

Formal SignWriting is especially powerful because it supports searching signed text as text.

Its core claim is simple:

> signed text can be searched as structured text

## Working understanding

A reader should be able to explain:

- what a query string is for
- how exact and generalized search differ
- why range and variance matter
- how text can become a matcher

## Minimal vocabulary

The matching layer also depends on a compact vocabulary:

| Term | Meaning |
| --- | --- |
| query | a structured search request |
| exact match | a request for the precise encoded form |
| generalized match | a request that broadens symbol specificity in a controlled way |
| range | a bounded search interval over symbols, numbers, or coordinates |
| matcher | the operational form that applies the search request |

If these terms stay explicit, the search layer stays clear.

Once signed text can be searched as text, it becomes usable for lexicons, corpora, annotation systems, discovery tools, and reproducible technical workflows.

## Query is not grammar

Grammar and query are related, but they do different jobs.

- **grammar** answers: what counts as valid Formal SignWriting text?
- **query** answers: how can valid text be matched, filtered, and found?

Query is built on the grammar without being reduced to it.

## Query language

The query language gives a compact way to describe richer search behavior.

It needs to support at least four important distinctions:

- temporal-prefix search versus signbox search
- exact symbol keys versus generalized symbol keys
- queries with and without coordinates
- bounded variance rather than unstructured approximation

This is one of the elegant parts of the architecture. The same technical model that makes writing signs processable also makes them searchable.

## Worked query examples

Consider this FSW sign:

```text
AS14c20S27106M518x529S14c20481x471S27106503x489
```

Several natural queries follow from it:

```text
QAS14c20S27106T
```

Exact temporal-prefix search.

```text
QAS14cuuS271uuT
```

Generalized temporal-prefix search.

```text
QS14c20481x471S27106503x489
```

Exact signbox search with coordinates.

```text
QS14cuu481x471S271uu503x489
```

Generalized signbox search with coordinates.

These examples make the query layer concrete. Search is not merely “find this string.” It is a way to express what should count as a match.

The movement from exact to generalized query is one of the clearest signs that search here is structured rather than ad hoc.

## Exact, general, and range-based search

Search cannot be limited to exact equality if it is going to be useful in real corpora.

Formal SignWriting search therefore needs to support:

- exact forms for direct lookup
- generalized forms for broader matching
- symbol ranges for structured variation
- coordinate ranges for bounded spatial search

The goal is not uncontrolled fuzziness. The goal is flexibility that stays technical and reproducible.

## From query to matcher

One important transformation is:

```text
text -> query -> regular expression -> results
```

For example, a general spatial-symbol search can be turned into a regular expression structure that expects:

- a valid signbox marker
- a valid signbox coordinate
- zero or more spatial symbols
- one or more specific matching patterns inside that sign

The exact regular expressions can live in addenda and reference material. The architectural point here is that search is operational because the query language can be compiled into matching behavior.

## Variance

Variance is especially important for spatial writing.

Two signs may be related even when coordinates are not identical. A useful search architecture therefore needs a way to express tolerated variation without pretending that all spatial arrangements are equivalent.

That makes search suitable for:

- corpus exploration
- lexicon support
- variant discovery
- research on writing practice

This is why tolerance has to be bounded. Search remains useful precisely because the system can widen the match without giving up explanation.

## Transformations

Search is a transformation pipeline.

It often begins with existing Formal SignWriting text and then derives:

- a query string
- a regular expression or equivalent matcher
- a list of matching texts or lines

This is where the model becomes operational at scale.

## Core claim

Formal SignWriting is searchable as text because its model supports a query language, controlled generalization, and reproducible matching workflows.

