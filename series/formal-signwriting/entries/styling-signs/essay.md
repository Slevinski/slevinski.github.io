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

Even a compact style example can carry several optional presentation controls:

```text
S10000-CP10G_blue_D_red,Cyan_Z1.1--primary!cursor!
```

This compact example shows several ideas at once:

- styling is attached to the encoded item
- it can affect whole-sign padding, color, and scale
- it can add whole-sign class and id style hooks
- the underlying symbol key is still `S10000`

## Style string syntax

The compact example can be read as:

```text
S10000 - C P10 G_blue_ D_red,Cyan_ Z1.1 -- primary ! cursor !
```

At the paper level, the useful syntax model is:

```text
target "-" whole-sign-style "-" symbol-level-color "-" class-and-id
```

The initial target identifies what is being styled. It may be a whole sign, a symbol key, or another supported output target depending on the renderer.

For whole-sign styling, the canonical sign text is the FSW or SWU target before the first style-string separator. A parser that does not understand a later directive should preserve that target rather than discarding the sign.

After the target, the style string has three hyphen-delimited sections:

- **whole-sign style**, for whole-sign color, padding, background, detail color, and scale directives
- **symbol-level color**, for per-symbol color overrides
- **class and id**, for CSS class hooks and an optional id hook

The middle and final sections may be empty. In the compact example, there is no symbol-level color section, so the boundary between the whole-sign style section and the class-and-id section appears as `--`:

```text
S10000 - CP10G_blue_D_red,Cyan_Z1.1 - [empty] - primary!cursor!
```

The spaces in the explanatory forms are not serialized style-string separators. The serialized form is compact. Spaces are used only inside the class-name list, where they separate multiple CSS classes, such as `primary blinking`.

The directives are compact presentation commands:

| Directive | Meaning |
| --- | --- |
| `C` | colorize the sign or target using default color behavior |
| `P10` | apply padding of `10` units |
| `G_blue_` | set the background color to `blue` |
| `D_red,Cyan_` | set detail colors: line `red` and fill `Cyan` |
| `Z1.1` | scale output by `1.1` |
| `D01_blue_` | apply a symbol-level color override in the middle section |
| `primary blinking` | add multiple CSS class hooks in the final section |
| `!cursor!` | add an id hook |

This is a compact renderer-facing language rather than canonical sign grammar.

The exact accepted directive set belongs in implementation reference material, but a publication entry should state enough syntax for readers to understand that the style string is structured, parseable, and separate from FSW or SWU text.

## Whole-sign customization

The style string can describe appearance for an entire sign.

This includes:

- whole-sign padding
- whole-sign scaling
- whole-sign line and fill colors
- whole-sign background color
- whole-sign colorization behavior
- whole-sign class and id hooks

These controls matter because they make it easier to adapt signs for teaching, display, interfaces, and publication contexts without changing the encoded sign text itself.

What whole-sign styling can change:

- whole-sign size
- whole-sign padding
- whole-sign foreground and background colors
- whether whole-sign output is colorized
- whole-sign class and id hooks

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

For example, symbol-level directives can single out specific symbols for alternate coloring while leaving the rest of the sign unchanged.

## Classes and identifiers

The style string can also provide class and id hooks for whole-sign SVG output.

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
