# Styling Signs

**The style string as light markup for customization and rich presentation**

The style string deserves its own technical context as a distinct presentation layer:

- optional light markup
- whole-sign customization
- symbol-level customization
- relation to rendering
- relation to canonical text

The style string is one of the easiest parts of the system to misplace. Taught inside encoding, it muddies canonical text. Taught only inside rendering, it stays under-explained.

## Technical position

The clearest position is:

- FSW and SWU are plain-text encodings
- the style string is optional light markup

That means the style string should not be treated as canonical sign text.

It is better understood as an attached presentation instruction layer.

## A compact style example

Even a single symbol can carry optional styling:

```text
S10000-CP10G_blue_D_red,Cyan_Z1.1--primary!cursor!
```

This compact example shows several ideas at once:

- styling is attached to the encoded item
- it can affect padding, color, and scale
- it can add class and id style hooks
- the underlying symbol key is still `S10000`

## Whole-sign customization

The style string can describe appearance for an entire sign.

This includes:

- padding
- scaling
- line and fill colors
- background color
- colorization behavior

These controls matter because they make it easier to adapt signs for teaching, display, interfaces, and publication contexts without changing the encoded sign text itself.

What whole-sign styling can change:

- size
- padding
- foreground and background colors
- whether sign output is colorized

What it does not change:

- the sign identity
- the symbol inventory
- the core encoded structure

## Symbol-level customization

The style string can also target individual symbols within a sign.

That makes it useful for:

- highlighting
- annotation
- teaching materials
- interface emphasis
- experimentation with visual presentation

It is not merely a trivial suffix. It is a lightweight system for rich customization.

For example, symbol-level directives can single out specific symbols for alternate coloring or scaling while leaving the rest of the sign unchanged.

## Classes and identifiers

The style string can also provide class and id hooks for SVG output.

That matters because it bridges sign data and web-facing rendering workflows. It allows richer interaction with CSS, scripted behavior, and interface-level customization while still keeping those concerns outside the canonical text layer.

## Why the markup analogy helps

The markup analogy is useful because it keeps two questions separate:

- what the sign text is
- how the sign text is presented

The analogy should not be pressed too far, but it points in the right architectural direction. Styling is attached presentation instruction, not the core content model.

## Relation to rendering

The style string belongs near rendering because it affects appearance, but it is better treated as a separate topic so rendering can focus on output models while styling can focus on customization semantics and interpretation.

## Core distinction

Separating styling from encoding and rendering keeps the central distinction clear:

- canonical text remains stable
- rendering realizes that text visibly
- styling customizes the presentation of that rendering

The style string can change how a sign is shown, but it does not change what sign text is being encoded.
