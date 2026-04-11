# Wikimedia Brief

**What Wikimedia needs to understand about Unicode and SignWriting**

## Short answer

Current SignWriting support in Unicode is not sufficient for current Sutton SignWriting production use.

That matters for Wikimedia because sign-language projects that want to use SignWriting still need practical solutions for:

- text storage
- structured sign representation
- display
- search
- compatibility with existing datasets

In Wikimedia settings, this quickly becomes a question of what can actually be stored, rendered, shared, and reused without bending every project into custom maintenance.

That is where the Unicode question stops being abstract.

## What Wikimedia is likely to notice first

Wikimedia projects may notice:

- sign-language content or lexeme work relying on ASCII-based strings
- custom user scripts or renderers
- confusion about whether Unicode already solved the SignWriting problem

That confusion is understandable.

Unicode did encode a SignWriting block.

But that did not create a complete, compatible, practical solution for stable symbols and written signs in current SignWriting projects.

## What the real gap is

The real gap is not only that some fonts are missing.

The larger gap is that current official Unicode SignWriting does not provide a workable compatible solution for:

- stable symbol identity across the full system
- direct writer selection of final symbols across the full system
- full written signs
- spatial composition
- existing Sutton SignWriting datasets
- current tooling and production workflows

In the facial system, the official model does not simply preserve the writer's choice of facial symbols and their placement.

Instead, the writer enters a sequence of facial elements and the font takes on part of the job of arranging them into a rendered face.

This shifts part of symbol formation into font behavior rather than into a stable, shared symbol identity.

This affects not only rendering, but also how data is stored, compared, and reused across systems.

That means the most useful Wikimedia starting point is not:

- “Unicode already encoded SignWriting, so what remains?”

The more useful starting point is:

- “What remains unresolved for actual project use?”

So if someone asks whether this is mainly a font/rendering problem or mainly a Unicode problem, the best answer is:

it is both, but primarily an encoding-and-interoperability problem

Better fonts alone do not solve the absence of a workable compatible spatial model.

They also do not address the way the facial-diacritic model shifts part of symbol selection and arrangement into font behavior.

## What is used in practice now

Current Sutton SignWriting workflows use:

- **FSW** as the main production encoding
- **SWU** as the Unicode-oriented isomorphic representation

Those two forms are what current tools, datasets, and much of the production ecosystem are built around.

Treat that production reality as the baseline, not as an awkward exception.

## Why this matters to Wikimedia specifically

If Wikimedia wants better SignWriting support, it helps to begin from the actual ecosystem rather than from the assumption that the official Unicode block already solves the problem.

This matters for:

- sign-language incubator projects
- sign-language lexemes in Wikidata
- reference examples and shared linguistic data
- cross-platform support discussions
- future public language infrastructure inside Wikimedia environments

It also matters because any public misunderstanding at Wikimedia scale tends to spread outward into documentation, libraries, and expectations.

## What would help

Wikimedia could help by:

- understanding the current technical gap accurately
- not forcing a Unicode-only framing where current Unicode is still insufficient
- supporting interim practical use of FSW and SWU where needed
- helping advocate inside Unicode as a voting member if a concrete technical path is worth pursuing

Wikimedia could also help simply by refusing to flatten the issue into a solved-symbol-block story.

## What would count as a good next step

A good next step would not be pretending the problem is already solved.

A good next step would be:

- establishing a shared technical baseline
- understanding the existing production stack
- identifying whether Unicode-level discussion is worth reopening
- using Wikimedia's position to advocate accurately, not simplistically

Accurate understanding at this stage is more valuable than premature conclusions.
