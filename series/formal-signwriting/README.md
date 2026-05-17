# Formal SignWriting

[![Source](https://img.shields.io/badge/source-GitHub-lightgrey?logo=github)](https://github.com/sutton-signwriting/formal-signwriting)
[![Read](https://img.shields.io/badge/read-steveslevinski.me-blue)](https://steveslevinski.me/#series/formal-signwriting)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20074767.svg)](https://doi.org/10.5281/zenodo.20074767)
[![License: CC BY 4.0](https://img.shields.io/badge/license-CC%20BY%204.0-green.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Platform](https://img.shields.io/badge/platform-Sutton%20SignWriting-blueviolet)](https://doi.org/10.5281/zenodo.20041043)

*Technical papers on sign text, FSW, SWU, signboxes, grammar, search, layout, rendering, styling, authority, and implementation practice*

This repository contains the technical publication series for modeling sign text so that it can be stored, searched, checked, laid out, rendered, and processed by software without losing the written form. It also states the boundary between computational validity and linguistic judgment.

The central claim is:

> a sign can be modeled as a two-part word of time and space

This is the mechanism layer of the wider Sutton SignWriting platform.

## Repository Details

- Repository: `sutton-signwriting/formal-signwriting`
- Living site: `https://steveslevinski.me/#series/formal-signwriting`
- Version: `v1.0.0`
- Publication year: `2026`
- License: `CC BY 4.0`
- Series DOI: `https://doi.org/10.5281/zenodo.20074767`

## Who This Repository Is For

- developers
- standards-minded readers
- corpus and tooling collaborators
- formal-language readers
- NLP and AI collaborators
- readers who need the technical text model directly

## How To Read This Series

Readers arriving from the public platform should begin with:

1. [Sutton SignWriting Foundations: The Shape of Writing](https://steveslevinski.me/#series/foundations/the-shape-of-writing/primary)
2. [Writing and Representation: Perspective and Authored Space](https://steveslevinski.me/#series/writing-and-representation/perspective-and-authored-space/primary)
3. [The Shape of a Sign](entries/the-shape-of-a-sign/essay.md)

Technical readers can begin with:

1. [Formal SignWriting Overview](entries/overview/essay.md)
2. [Formal SignWriting](entries/formal-signwriting/essay.md)
3. [FSW and SWU](entries/fsw-and-swu/essay.md)
4. [The Shape of a Sign](entries/the-shape-of-a-sign/essay.md)

## Contents

- [Formal SignWriting Overview](entries/overview/essay.md) - overview and reading path
- [Formal SignWriting](entries/formal-signwriting/essay.md) - two-part word and core model
- [FSW and SWU](entries/fsw-and-swu/essay.md) - plain-text encodings and conversion
- [The Shape of a Sign](entries/the-shape-of-a-sign/essay.md) - symbols, coordinates, centering, and signbox structure
  - [Plane Writing Technical Bridge](entries/the-shape-of-a-sign/plane-writing-technical-bridge.md) - companion bridge from plane-based writing to the signbox model
- [Grammar of Formal SignWriting](entries/grammar-of-formal-signwriting/essay.md) - valid token patterns and grammar
- [Searching Signed Text](entries/searching-signed-text/essay.md) - query language and matching logic
- [Sign Text Layout](entries/sign-text-layout/essay.md) - vertical writing, horizontal writing, lanes, centering, and reading levels
- [Rendering Formal SignWriting](entries/rendering-formal-signwriting/essay.md) - SVG, fonts, layout, and output models
- [Styling Signs](entries/styling-signs/essay.md) - style string and presentation markup
- [Formal SignWriting in Practice](entries/formal-signwriting-in-practice/essay.md) - libraries, datasets, transformations, implementation pathways, and encoding history
  - [From Experimental Encodings to Formal SignWriting](entries/formal-signwriting-in-practice/encoding-history.md) - companion history of migration, stabilization, and model design
- [Encoding Stewardship and Stability](entries/encoding-authority-and-stability/essay.md) - technical coherence, computational validity, linguistic judgment, practical finality, and forkability
- [Publishing Notes](publishing.md) - release metadata, citation posture, and artifact register

## Citation

```text
Slevinski, S. (2026). Formal SignWriting (v1.0.0). Zenodo. https://doi.org/10.5281/zenodo.20074767
```

Use the series DOI when citing the technical series as a whole. Use an artifact DOI when citing a specific technical paper that has its own record.

## Platform Context

This repository is one of eight series in the Sutton SignWriting platform release. It maintains a clear distinction between canonical sign text, layout behavior, presentation markup, rendering, downstream tooling, encoding stewardship, and community or reader judgment.

## License

Unless otherwise noted, the contents are released under the Creative Commons Attribution 4.0 International License (`CC BY 4.0`).
