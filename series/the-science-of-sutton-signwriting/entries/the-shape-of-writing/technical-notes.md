# The Shape of Writing Technical Notes

**The Shape of Writing**  
Alphabet, authorship, encoding, and practical consequences

These technical notes collect the heavier structural details behind the handout.

The handout argues in plain language that writing does not have to be linear and that SignWriting is a genuine case of plane-based writing.

These notes add the more technical layer:

- alphabet stability
- symbol identity
- authorship
- compatibility
- encoding
- practical consequences for datasets and dictionary design

## I. The plane depends on a stable alphabet

Plane writing is not only about where symbols are placed.

It also depends on which symbols are available, how they are distinguished, and whether those distinctions remain stable across tools.

For modern Sutton SignWriting infrastructure, that stable reference layer is **ISWA 2010**.

At the practical level, this means:

- 652 panels of symbols
- each panel arranged as a 6 by 16 grid
- stable distinctions for handshape, palm facing, fill, rotation, and related contrasts

Those distinctions are not mere rendering preferences.

They are part of the writing system itself.

That is why symbol drift across fonts, editors, and websites is not a harmless technical quirk.

It changes the writing.

## II. Valerie Sutton's alphabet and long-term refinement

The modern alphabet is not an abstract diagram created all at once.

It is the product of long use, repeated revision, and a deep internal conception of how signed language can be written.

That matters historically and technically.

The practical infrastructure now rests on:

- Valerie Sutton's symbol conceptions
- years of actual writer use
- successive rounds of revision and refinement
- later technical organization and application in software, fonts, and datasets

That history should not be treated as accidental background.

It explains why the alphabet has to be respected as a shared reference layer rather than casually redefined tool by tool.

## III. Writer authorship matters

One of the most important practical commitments in Sutton SignWriting is that the writer should be the one who decides what the written sign looks like.

That means at least three things.

### 1. Symbol choice belongs to the writer

The writer chooses which symbols are used.

### 2. Spatial composition belongs to the writer

The writer composes those symbols in two-dimensional space.

### 3. Sorting theory is separate from visible writing

Sequence, sorting, or linguistic theory may be added for indexing, search, or comparison.

But those theories should not be confused with the visible writing itself.

This distinction matters because different theories of sorting can coexist, while the signbox still remains authored writing.

## IV. Authored composition versus derived rendering

Some alternative ideas imagine signed writing as something that should be generated from an internal linguistic skeleton.

In those models, symbols may be treated as if they need attachment points, hidden roots, relative angles, distances, or other internal structures from which the visible writing would later be derived.

Such ideas can be interesting in principle.

But they do not yet provide a demonstrated writing practice at scale.

They also shift too much authority away from the writer and into an unrealized rendering system.

The practical issue is not whether a more abstract internal model can be imagined.

The practical issue is what kind of writing system has actually supported:

- real writers
- real signs
- real dictionaries
- real tools
- real interoperability problems
- real accumulated corpus scale

Sutton SignWriting takes a different path.

The writer authors a visible two-dimensional composition directly.

Formal SignWriting then preserves both temporal and spatial information in processable text without asking a font or rendering engine to invent the sign on the writer's behalf.

That distinction matters.

It keeps authorship with the writer, keeps the signbox visible as writing, and keeps encoding in the role of preservation and computation rather than replacement.

This is also why the separation of time and space in Formal SignWriting is so useful.

The temporal prefix does not try to generate the written sign from hidden geometry alone.

The spatial signbox does not erase temporal information.

Together they preserve a written composition that is already authored, rather than postponing authorship into an undefined future grammar or font.

## V. Compatibility boundaries

At present, the Sutton SignWriting resources remain the main maintained compatibility layer for:

- SVG source material
- compatible font files
- structured symbol references

This matters because a plane-based writing system cannot be supported by private or drifting symbol sets if interoperability is the goal.

Writers, readers, websites, editors, fonts, and datasets all depend on enough shared compatibility to remain part of one writing system rather than multiple quiet forks.

## VI. Human writing and encoded text

The technical distinction in the handout can be stated more sharply here.

### Human writing layer

This layer concerns:

- symbol choice
- visible relations
- spatial composition
- what readers actually read

### Machine layer

This layer concerns:

- storage
- validation
- sorting
- search
- transmission
- computation

Formal SignWriting matters because it preserves both:

- symbol identity
- spatial composition

while still giving software a tractable representation.

That is why the encoding is not just a storage convenience.

It is the technical response that lets plane-based writing remain writable, searchable, and interoperable as text.

## VII. Practical scale and outgrown infrastructure

This is not a hypothetical writing system waiting for first use.

The Brazilian Sign Language dictionary alone now contains nearly **68,000 signs**.

Across languages, the broader accumulated dataset contains well over **one million unique signs**.

Those signs have not yet been fully catalogued and cross-referenced.

But query strings and advanced search already make that work technically approachable at scale.

That scale proves several things at once:

- plane-based writing is functioning in practice
- real users have been authoring signs for years
- the infrastructure is carrying more historical and practical weight than its current support model was built for
- data generation is now outpacing the old one-destination workflow

It also creates predictable problems:

- duplicates
- inconsistent curation
- learning-oriented entries mixed with dictionary-oriented entries
- refinement work landing in the same place as stable reference material
- flows that were workable at hundreds or thousands of entries but strain badly at tens of thousands

This is not a sign of failure.

It is a sign that the writing system has outgrown the current platform model and needs better destinations, pathways, and integration flows for continual growth.

## VIII. Dictionary and practice should not be the same thing

One practical consequence for Platform v3 is that the current SignPuddle-style dictionary logic should no longer be treated as one undifferentiated space.

A future structure should distinguish at least:

- **dictionary space** for curated lexical material
- **practice space** for learning, repetition, comparison, and improvement
- **review and integration space** for refinement, deduplication, cross-reference, and promotion into curated resources

That matters because students often learn SignWriting by adding signs to the dictionary.

That is understandable historically.

But over time it mixes together:

- stable lexical entries
- duplicate attempts
- learning exercises
- provisional forms

That makes the dictionary less useful than it could be.

## IX. Practice writing and community readability

A future practice area should allow people to:

- write signs repeatedly
- compare what they wrote with other available writings
- receive reader feedback
- improve through use rather than through top-down prescription alone

A future integration workflow should also allow maintainers and contributors to:

- connect related signs quickly through query strings and advanced search
- compare duplicates and near-duplicates
- cross-reference signs across languages and datasets
- move material more cleanly from practice and refinement into curated lexical destinations

The strongest practical principle here is:

> good writing is writing that can be read by the community where it is used

That does not eliminate expertise.

It does mean that readability within actual communities is a stronger long-term criterion than abstract prescription by council alone.

This is especially important for a living writing system used by real writers rather than only by analysts.

## X. Why these technical notes belong with this entry

The handout should stay readable.

It should make the public-facing move clearly:

- writing is not inherently linear
- SignWriting is plane-based writing
- infrastructure follows from that fact

These technical notes belong beside it because they show why that public claim has practical force.

The issue is not only philosophical.

It is built into:

- alphabets
- symbol compatibility
- writer authorship
- encodings
- datasets
- dictionaries
- practice environments

That is why the shape of writing is not only a theoretical question.

It is also a technical and infrastructural one.
