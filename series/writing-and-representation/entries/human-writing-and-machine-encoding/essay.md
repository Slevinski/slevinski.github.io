# Human Writing and Machine Encoding

**Authorship, serialization, and the layers of signed text**

This paper is a native anchor of the `Writing and Representation in Sutton SignWriting` series.

It follows *Handwriting and Spatial Script Practice*.

The previous papers argued that SignWriting is not spatial only in a decorative sense. The writer authors viewpoint, placement, relation, and composed space; those choices become legible because motivated visual form is disciplined by convention; and the writing system also lives in human practices such as block printing, shorthand, cursive forms, correction, and ordinary material use.

This paper asks the next question:

> if signed writing is authored in space, what does it mean to encode that writing for machines?

The answer is not that machine encoding replaces writing.

The answer is more careful:

> encoding is an infrastructure layer that should preserve enough of the authored written form for storage, exchange, rendering, search, comparison, and study

That distinction matters because SignWriting makes a general writing-systems problem unusually visible.

Human writing and machine encoding are not the same thing.

They often appear similar in line-based alphabetic writing, but they should not be confused.

## The visible problem

Most modern readers meet writing through software.

They type into text fields, copy strings, search databases, export files, and read rendered pages.

That makes it tempting to think that the machine representation is the writing system.

For many alphabetic texts, the temptation is easy to miss because the written order and the encoded order look similar. A word such as `cat` appears to be a line of letters, and a plain-text encoding also stores a sequence of characters.

The match is not perfect, but it is close enough that the distinction can fade into the background.

SignWriting does not let the distinction disappear.

A written sign is not merely a row of characters.

It is a composed spatial object.

The writer selects symbols and arranges them in a signbox. Placement, relation, and orientation belong to the written form itself.

But computers still need some way to store, transmit, index, compare, and render that written form.

That creates the central problem of this paper:

> how can a spatial written object become processable text without being mistaken for a line-based writing system?

This is not only a SignWriting problem.

It is a general problem in modern writing.

Any writing system that enters software has to pass through layers that were not visible in older manuscript or print practice: character models, encoding forms, fonts, layout engines, rendering systems, search indexes, file formats, and accessibility layers.

The difference is that SignWriting makes the problem harder to ignore.

When a writing system is sequence-dominant, the encoded sequence can look like the writing itself.

When a writing system is plane-based, the encoded sequence and the written object are visibly different kinds of things.

That difference is useful because it forces a cleaner theory.

It asks us to say what belongs to human writing, what belongs to computational encoding, and what belongs to later rendering or analysis.

## Human writing comes first

The first principle is simple.

SignWriting is a human writing system before it is a machine format.

The written sign is what readers and writers use.

It is the visible, composed, authored form.

That form includes:

- symbol identity
- symbol placement
- relation among symbols
- orientation and movement cues
- boundaries around the composed sign
- passage layout that helps readers move through text

Machine encoding comes later.

Encoding answers a different question:

> how can this written object be stored and processed without losing the structure that makes it readable as writing?

This order matters.

If encoding is treated as primary, SignWriting can be misunderstood as a technical code that happens to render as signs.

That reverses the logic.

The writing is not derived from the encoding.

The encoding is designed to serve the writing.

## Why alphabetic text hides the layer problem

Alphabetic writing often hides the distinction between writing and encoding because the human object and the machine object are both strongly sequential.

A writer writes letters in order.

A plain-text file stores characters in order.

A rendering engine displays them in order, with shaping rules, fonts, spacing, line breaking, and layout added later.

Even there, the layers are not identical.

The same visible form may involve:

- one precomposed character or multiple combining characters
- font-specific glyph shaping
- ligatures
- bidirectional text behavior
- normalization rules
- layout decisions not authored by the writer

So even alphabetic text is not as simple as it looks.

But the ordinary sequence is strong enough that the layer distinction can feel technical rather than theoretical.

SignWriting changes that.

Because the authored written sign is spatial, the gap between human writing and machine encoding becomes impossible to ignore.

The machine must serialize something that the writer authors as a plane.

That serialization is necessary.

It is not a theory of what the writing "really" is.

## Serialization is not linearization

This is the core distinction.

Serialization means arranging information in an order so a machine can store, transmit, and process it.

Linearization means treating the writing system itself as if its primary structure is a line.

Those are not the same.

A spatial sign can be serialized without becoming line-based writing.

This is familiar outside SignWriting.

A page layout file may store objects as a sequence of instructions, but the page is not therefore read as a line of instructions.

A vector graphic may serialize shapes in document order, but the visible image is not reducible to that order.

A musical score may be stored in a structured file, but the file order is not the same as the musical page experienced by a reader.

The same principle applies here.

Formal SignWriting serializes a written sign so it can be handled by software.

That does not mean the sign has been reduced to a line in the writing-system sense.

The crucial question is not whether storage has an order.

All storage has an order somewhere.

The crucial question is:

> does the machine representation preserve the authored spatial structure that readers need in order to recover the written sign?

## The layers of signed text

A clean writing-systems account should keep the layers separate.

For SignWriting, the most important layers are:

| Layer | Question it answers |
| --- | --- |
| Human written sign | What did the writer compose for a reader? |
| Symbol inventory | Which stable symbols can be selected? |
| Signbox | How are selected symbols spatially arranged into one written sign? |
| Machine encoding | How is the written sign stored and exchanged as text data? |
| Rendering | How is encoded text displayed visually? |
| Styling | Which optional visual choices modify presentation without changing the canonical text? |
| Passage layout | How are signs arranged across lines, columns, lanes, and pages? |
| Search and analysis | How can written signs be compared, queried, sorted, or studied? |

These layers interact.

They should not collapse into one another.

The symbol inventory is not the whole writing system.

The encoding is not the whole writing system.

The font is not the whole writing system.

The rendered image is not the whole writing system.

The grammar used by software is not the whole writing system.

Each layer answers a different question.

Keeping them separate makes the system easier to understand and harder to misread.

It also makes criticism more precise.

If a proposed system has a weak symbol inventory, the problem is not automatically a rendering problem.

If it has a good symbol inventory but cannot preserve placement, the problem is not solved by adding a font.

If it can render attractive signs but cannot store searchable text, the problem is not visual adequacy but textual structure.

If it can store text but cannot recover the authored signbox reliably, the problem is fidelity to writing.

The layer model gives each criticism a proper address.

## What a good encoding must preserve

A good encoding for SignWriting must preserve the written form at the right level.

It does not need to preserve everything about signing.

It does need to preserve enough of the written sign to keep the author's composition recoverable.

That means preserving:

- stable symbol identity
- sign boundaries
- spatial placement
- relation among symbols inside the signbox
- optional sequence-sensitive information where it supports sorting, searching, or analysis
- enough structure for reliable rendering
- enough structure for comparison and search

This is why a mere list of symbols is not enough.

If symbol placement is lost, the written sign is damaged.

If sign boundaries are lost, the text stream is damaged.

If symbol identity drifts across fonts or private glyph sets, interoperability is damaged.

If the spatial arrangement exists only as a picture with no recoverable text structure, search and analysis are damaged.

The standard is not perfection.

The standard is fidelity to the written form at the layer where encoding operates.

## A small worked example

A concrete example helps make the layer distinction visible.

Consider the same Formal SignWriting sign used in the technical series:

```text
AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475
```

This is not how an ordinary reader experiences the sign.

The reader experiences a composed written sign.

The string is the machine-readable encoding of that written object.

The beginning of the string carries sequence-sensitive information:

```text
A S10011 S10019 S2e704 S2e748
```

The later part carries the spatial signbox:

```text
M525x535 S2e748483x510 S10011501x466 S2e704510x500 S10019476x475
```

The important point for this paper is not the exact symbol meanings.

The important point is the layer relationship.

| Human-writing question | Encoding evidence in the example |
| --- | --- |
| Which symbols were selected? | Symbol keys such as `S10011`, `S10019`, `S2e704`, and `S2e748` |
| Is there sequence-sensitive information? | The `A` prefix and following symbol sequence |
| Is there a composed written sign? | The `M` signbox marker |
| Where are symbols placed? | Coordinates such as `483x510`, `501x466`, `510x500`, and `476x475` |
| Can software recover the signbox? | The encoded symbol-plus-coordinate pairs preserve a structured spatial object |

This example shows why the string should not be mistaken for the writing itself.

The string is a preservation path.

It lets software recover the written sign, render it, search it, compare it, and move it between systems.

If the same visible sign is represented in SWU, the characters change:

```text
𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񋚥𝤐𝤆񀀚𝣮𝣭
```

But the underlying model does not change.

FSW and SWU are two character strategies for carrying the same written object.

That is the whole point.

The human written sign is not identical to either string.

But a faithful string can preserve the structure needed to recover the human written sign.

## What encoding does not claim to preserve

Encoding also has limits.

A responsible account should name them.

A SignWriting encoding does not claim to preserve:

- every physical nuance of an actual signing event
- every possible linguistic analysis of the sign
- every gradient motion detail
- every stylistic choice in display
- every reader interpretation
- every community convention that might develop around handwriting or pedagogy

Those are different layers.

Video preserves aspects of performance that writing does not.

Linguistic annotation can make analyses explicit that ordinary writing leaves implicit.

Pedagogy can teach conventions that the encoding does not itself explain.

Typography and styling can change visual presentation without changing the underlying written sign.

This is not a weakness unique to SignWriting.

It is a normal fact about writing.

Writing always selects.

Encoding then selects again, but it should select in service of the writing rather than against it.

## Four common layer mistakes

Once the layers are visible, several recurring mistakes become easier to name.

### Mistake 1: treating symbols alone as writing

A symbol inventory is necessary.

It is not sufficient.

For SignWriting, the written sign is not only a set of symbols. It is a composed spatial object.

If placement and relation are lost, the writing has been reduced too far.

### Mistake 2: treating rendered images as text

A rendered sign can be readable.

But a rendered image by itself may not be searchable, convertible, normalizable, or structurally comparable.

If the underlying text is lost, the writing becomes visually present but computationally fragile.

### Mistake 3: treating fonts as the writing system

Fonts draw.

They do not define the writing system.

A font can support writing well or poorly, but it should not silently decide symbol identity, sign boundaries, or spatial structure.

### Mistake 4: treating encoding as the author

Encoding preserves authored writing.

It should not be treated as if it authored the sign.

If all meaningful relation is moved into a technical procedure that the writer did not control, then authorship has shifted away from the writing practice and into the implementation layer.

That is exactly what a writing-system account should avoid.

## Formal SignWriting as a worked solution

Formal SignWriting is the main worked solution in the Sutton SignWriting platform.

Its importance in this paper is not that every reader must learn the technical details immediately.

Its importance is that it demonstrates how a plane-based writing system can remain processable as text.

In broad terms, Formal SignWriting treats a written sign as a two-part word:

- a temporal prefix that can preserve sequence-sensitive information
- a spatial signbox that preserves the composed written form

That design is important because it refuses two bad reductions.

It does not reduce SignWriting to an unordered symbol inventory.

It also does not reduce SignWriting to an image with no internal text structure.

Instead, it keeps the written sign available as both:

- a visible authored composition for readers
- a structured text object for machines

FSW and SWU are two encodings of this model.

FSW is useful as an ASCII-friendly plain-text form.

SWU is useful as a Unicode-compatible plain-text form.

The writing-systems point is not the specific character strategy.

The writing-systems point is that both encodings serve the same authored written object.

This is why Formal SignWriting belongs downstream from the human writing claim.

The model is valuable because it preserves a form of writing that already has its own visual-spatial logic.

It should not be read as if it invents that logic from scratch.

Nor should it be read as if the technical string is the final object of literacy.

The final object of literacy is still readable signed text.

Formal SignWriting is the infrastructure that makes that text durable across tools.

## Unicode, fonts, and the layer problem

This distinction also clarifies a recurring confusion around Unicode.

A script code is not an encoding model.

A character inventory is not a full writing system.

A font is not a writing system.

Rendering is not the same as authorship.

Unicode can be extremely important for interchange, identifiers, character assignment, and standards work. But assigning characters does not automatically solve the problem of preserving a composed spatial sign.

For SignWriting, the core question remains:

> can the encoded form preserve the written sign as a composed spatial object?

If a system can display symbols but cannot preserve authored placement, it has not solved the writing problem.

If a system stores characters but depends on font behavior to invent the sign, it has moved too much of the writing into rendering.

If a system identifies `Sgnw` as a script but does not specify how written signs are represented, searched, converted, or rendered, it has named a layer without solving the encoding layer.

This is why the distinction between human writing and machine encoding matters beyond software.

It protects the writing from being redefined by whichever technical layer happens to be most visible.

It also clarifies what compatibility should mean.

Compatibility is not merely the ability to display something that resembles SignWriting.

Compatibility means preserving the authored written sign across the relevant layers:

- stable symbol identity
- recoverable signbox structure
- coordinates or equivalent spatial relations
- sign boundaries
- conversion paths
- rendering paths that derive from the text rather than replacing it

Without those properties, two systems may look related while failing to preserve the same written text.

## Search, comparison, and the value of structure

One reason encoding matters is search.

A picture of a sign can be displayed.

But a structured written sign can also be queried.

Software can ask whether signs share:

- a handshape
- a location
- a movement type
- a symbol class
- a spatial relation
- a general pattern rather than an exact symbol match

That kind of search depends on encoded structure.

It also depends on preserving the difference between writing and analysis.

Search should be able to inspect written structure without pretending that every search parameter is the full linguistic meaning of the sign.

This is another reason layer discipline matters.

Encoding makes search possible.

Search does not define the writing system.

This distinction matters for research as well.

Once signed text is encoded structurally, researchers can build corpora, compare written forms, test recognition, study reading behavior, and create reusable datasets.

But the research tools remain downstream.

They should not force the writing to become whatever is easiest for a database, search engine, or machine-learning pipeline.

Good infrastructure makes research possible while keeping the human written object intact.

## Why this belongs in writing-systems theory

This paper belongs in `Writing and Representation in Sutton SignWriting` because the issue is not only technical.

It is theoretical.

SignWriting shows that writing systems cannot be understood only through visible marks or only through machine codes.

The relevant object is layered:

- human authors compose signs
- readers interpret composed written objects
- symbol inventories stabilize choices
- encodings preserve structure for machines
- renderers display text
- search systems compare text
- layouts organize passage reading

When those layers are confused, false conclusions follow.

One false conclusion is:

> because machine text is serialized, SignWriting is really linear

Another is:

> because SignWriting is spatial, it cannot be real text

Another is:

> because a font can display symbols, the writing problem is solved

Another is:

> because Unicode names characters, the authored signbox no longer matters

Each conclusion fails because it collapses layers.

The more accurate claim is:

> SignWriting is human-authored plane writing that can be serialized for machines when the encoding preserves the authored spatial structure of the written sign

That is the contribution of this paper.

## Equivalence is downstream

Formal SignWriting preserves authored written forms.

It does not declare which variants are universally the same sign or which written form is globally correct.

That is a writing-system principle, not an omission.

SignWriting can use a shared symbol set and a shared encoding model while allowing different sign languages, countries, communities, institutions, and periods to develop different writing traditions.

Writers choose written forms.

Readers and communities decide what is readable, useful, and worth reusing.

Software may still need task-specific equivalence for search, corpus statistics, text entry, machine translation, teaching tools, or dictionary work.

Those equivalence layers should be explicit about their purpose.

They may identify, for example:

- exact matches
- visually or spatially similar signs
- signs using the same symbol inventory
- signs grouped under the same dictionary entry
- common variants in a specific corpus
- preferred forms in a specific classroom, publication, country, or project

Those layers can be useful.

But they are not the writing system itself.

They are computational tools built around writing.

## What this paper does and does not claim

This paper claims:

- human writing and machine encoding are distinct layers
- SignWriting makes that distinction unusually visible
- serialization is not the same as linearization
- a good encoding must preserve authored spatial structure
- Formal SignWriting is a worked solution for preserving plane-based written signs as processable text
- equivalence decisions belong in explicit downstream tools rather than in the writing system itself
- Unicode, fonts, rendering, styling, search, and layout should not be collapsed into one layer
- compatibility should be judged by whether authored written signs survive across layers, not merely by whether symbols can be displayed

This paper does not claim:

- that every technical detail of Formal SignWriting belongs in the writing-systems lane
- that FSW or SWU is the only possible serialization strategy in principle
- that encoding alone proves adoption, literacy outcomes, or cultural acceptance
- that all questions of handwriting, typography, or reader processing are solved
- that machine structure replaces human writing practice
- that software should define one globally correct written form for every sign

The purpose is narrower.

It is to make the layer relationship clear enough that later technical, scholarly, and standards conversations start from the right object.

## Conclusion

SignWriting makes a general problem visible.

Writing systems are not identical to their encodings.

In line-based writing, that distinction is often hidden by the similarity between written sequence and machine sequence.

In SignWriting, the distinction becomes unavoidable because the writer authors a composed spatial object while software must store that object through serialized data.

The solution is not to deny serialization.

The solution is to keep serialization in its proper role.

Encoding should preserve the written sign.

It should not replace it, flatten it, or redefine it as a merely technical string.

That is why human writing and machine encoding belong together in this series.

The writing-systems question is not only whether SignWriting can be encoded.

The deeper question is whether encoding can remain faithful to authored plane-based writing.

Formal SignWriting answers that question with a practical model.

The theoretical lesson is broader:

> the more spatial a writing system is, the more carefully its visible form, encoded structure, rendering, and analysis must be kept distinct

That distinction is not a technical footnote.

It is part of understanding SignWriting as writing.

For the `Writing and Representation in Sutton SignWriting` series, this makes the paper a bridge.

It carries the argument from authored space into technical preservation without leaving the writing-systems lane.

The next step is not more technical detail here.

The next theoretical step in this series is *Kinematography and the Limits of Writing-System Typology*.

The next technical step is to read the Formal SignWriting series with the layers already separated:

- *Formal SignWriting* for the two-part word
- *FSW and SWU* for the two character strategies
- *The Shape of a Sign* for symbols, coordinates, and signbox behavior
- *Rendering Formal SignWriting* for visible output

## Selected references

- Coulmas, F. (1989). *The Writing Systems of the World*. Blackwell.
- Daniels, P. T., & Bright, W. (Eds.). (1996). *The World's Writing Systems*. Oxford University Press.
- Meletis, D., & Durscheid, C. (2022). *Writing Systems and Their Use: An Overview of Grapholinguistics*. De Gruyter.
- Sampson, G. (1985). *Writing Systems: A Linguistic Introduction*. Stanford University Press.
- Slevinski, S. (2026). *Formal SignWriting: The Two-Part Word, Spatial Text, and the Core Model*. Formal SignWriting.
- Slevinski, S. (2026). *FSW and SWU: Plain-Text Encodings, Character Sets, and Conversion*. Formal SignWriting.
- Slevinski, S. (2026). *Rendering Formal SignWriting: Styling, SVG, Fonts, and Web Output*. Formal SignWriting.
- Sutton, V. (2010). *ISWA 2010: International SignWriting Alphabet*. Center for Sutton Movement Writing.
- The Unicode Consortium. (n.d.). *The Unicode Standard*.
