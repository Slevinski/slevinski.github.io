# Stephen E Slevinski Jr
_the projects for written sign language with SignWriting Text_
- - -
> July 2016

Contents
---------
* GitHub Projects
  * [SignWriting Server](#signwriting-server)
  * [SignMaker 2015](#signmaker-2015)
  * [SignWriting Character Viewer](#signwriting-character-viewer)
  * [SignWriting 2010 JavaScript Library](#signwriting-2010-javascript-library)
  * [SignWriting 2010 Fonts](#signwriting-2010-fonts)
  * [SignWriting 2010 Tools](#signwriting-2010-tools)
  * [SignWriting Icon Server](#signwriting-icon-server)
* SignPuddle Websites
  * [SignPuddle.com](#signpuddle-com)
  * [SignPuddle.org](#signpuddle-org)
  * [SignPuddle.net](#signpuddle-net)
* Other Projects
  * [draft-slevinski-signwriting-text](#draft-slevinski-signwriting-text)
  * [SignWriting Symposium](#signwriting-symposium)
  * [Wikimedia Incubator](#wikimedia-incubator)
  * [Unicode Technical Committee](#unicode-technical-committee)
  * [SignWriting font-face Project](#signwriting-font-face-project) 

- - -

## SignWriting Server ##
Github repo: [swserver][78], currently version 1.3.0

The SignWriting Server provides online resources for SignWriting applications and users.  The server accepts HTTP requests and responds with SVG or JSON data. The SignWriting Server is built with the PHP SLIM Framework v2.6.

The primary site is available on the Center for Sutton Movement Writing server.
* https://signpuddle.net

A mirror site is available on Wikimedia Labs.
* https://swserver.wmflabs.org



### SVG images
The SignWriting server creates SVG images for individual symbols using symbol keys and completed 2-dimensional signs using Formal SignWriting.  Styling strings are supported, offering coloring and sizing customizations.
* http://swserver.wmflabs.org/svg/S10000
* http://swserver.wmflabs.org/svg/font/S20500
* http://swserver.wmflabs.org/svg/M548x514S11010509x487S11018477x487S2df1e453x489S2df06528x489
* http://swserver.wmflabs.org/svg/M548x514S11010509x487S11018477x487S2df1e453x489S2df06528x489-CP10G_lightblue_D_x,lightblue_Zx

### Query string transformation to regular expressions
Query strings are a concise representation of a much larger and detailed set of regular expressions.
Each query string is transformed into one or more regular expressions that can be used to search a text of Formal SignWriting.
Additionally, Formal SignWriting strings can be converted into several types of query strings, each of which can be transformed into regular expressions.
* http://swserver.wmflabs.org/regex/Q
* http://swserver.wmflabs.org/regex/s/M548x514S11010509x487S11018477x487S2df1e453x489S2df06528x489

### Countries of the world
The countries of the world are described with SVG shapes and flag images.
Listings of languages and puddle collections are available for each country.

### Puddle collections and sign entries
All of the SignPuddle Online data is available as SQLite 3 databases.
These databases can be downloaded individually.
The various puddle collections can be listed, limited by sign language or individual code.
For each sign language, a default public dictionary has been selected so that ISO 639-3 codes can be used rather than a puddle code.
With a puddle query, individual entries can be access with sign language directly.
With a puddle search, individual entries can be access with spoken language.
Additional search options are available for listings of individual signs and terms.
Additionally, entries can be retrieved by the dates created or updated.

### License
SignWriting Server  
Copyright (c) 2007-2016, Stephen E Slevinski Jr  
Licensed under the [MIT License][63]  

- - -
## SignMaker 2015 ##
Github repo: [signmaker][66], currently version 1.3.2

SignMaker is a standards based editor, utilizing HTML, CSS, JavaScript, SVG, TrueType Fonts, and PNG images.
Write signs in any sign language with the SignWriting script using the SignWriting 2010 Fonts.

SignMaker is browser based without the need for a server connection. It can be used online or it can be [downloaded](https://github.com/Slevinski/signmaker/archive/gh-pages.zip) and run directly from the user's computer.

The primary online website can be used to create a private dictionary in the browser's LocalStorage or view dozens of sign language dictionaries from around the world.
 - [SignMaker on SignBank](http://signbank.org/signmaker.html)

The secondary online website can be used to create a private dictionary in the browser's LocalStorage.
 - [SignMaker on GitHub.io](http://slevinski.github.io/signmaker)

### License
SignMaker  
Copyright (c) 2007-2015, Stephen E Slevinski Jr  
Licensed under the [MIT License][63]  

- - -
## SignWriting Character Viewer ##
Github repo: [SignWriting_Character_Viewer][69], v1 and v2.

The SignWriting Character Viewer is composed of an HTML file, a CSS file, and 5 JavaScript files.  For convenience, these files have been combined into a single file that is just over 100 KB.

The SignWriting Character Viewer v1 shows all of the symbols of the International SignWriting Alphabet 2010 using any of the 4 different character encoding forms to access the glyphs of the [SignWriting 2010 Fonts][29].
* [SignWriting Character Viewer v1 as single file][68]
* [SignWriting Character Viewer v1 as multiple files][67]

The SignWriting Character Viewer v2 shows all of the symbols of the International SignWriting Alphabet 2010 using a plane 4 encoding proposal for Uniocde 10, without Private Use Area characters and without ligatures.  The topic will be discussed at UTC 148 in August 2016.  [SignWriting in Unicode Next][79].
* [SignWriting Character Viewer v2 as single file][80]
* [SignWriting Character Viewer v2 as multiple files][81]



### License
SignWriting Character Viewer  
Copyright (c) 2007-2016, Stephen E Slevinski Jr  
Licensed under the [MIT License][63]  

- - -
## SignWriting 2010 JavaScript Library ##
Github repo: [sw10js][62], currently version 1.9.0

The JavaScript library leverages the TrueType fonts without any additional requirements. Include the "sw10.js" script or the minified version "sw10.min.js" in any HTML page to access the function library.

- [SignWriting 2010 JavaScript Library](http://slevinski.github.io/sw10js) 
- [Guide](http://slevinski.github.io/sw10js/guide.html) 
- [API](http://slevinski.github.io/sw10js/api.html) 
- [Testing](http://slevinski.github.io/sw10js/tests) 

### License
SignWriting 2010 JavaScript Library  
Copyright (c) 2007-2016, Stephen E Slevinski Jr  
Licensed under the [MIT License][63]  

- - -
## SignWriting 2010 Fonts ##
Github repo: [signwriting\_2010\_fonts][29], currently version 1.1.4

SignWriting 2010 is a typeface for written sign languages
which makes the entire [International SignWriting Alphabet 2010 symbol set][19] available in a TrueType font with OpenType features.

The SignWriting 2010 Fonts are fully functional and production ready.  The image quality and glyph alignment has been perfected.

### TrueType Font Downloads
> Reserved Font Name: [SignWriting 2010][57] with [log report][58]  
Reserved Font Name: [SignWriting 2010 Filling][1] with [log report][2] 

Fonts packaged for iOS: [SignWriting 2010 Configuration Profile][61]

### License
The SignWriting 2010 Fonts are free and open source, released under
[SIL Open Font License][24], version 1.1.

This Font Software is Copyright (c) 1974-2014 
Center For Sutton Movement Writing, Inc.

Original symbol design by Valerie Sutton.
Symbol image refinement in SVG by Adam Frost.
Encoding and transformation by Stephen E Slevinski Jr.

The SVGs of the compatibility glyphs for the character set "S1234567890abcdef" are based on [Source Sans Pro][25]
written by Paul D. Hunt and licensed under [SIL Open Font License][24], version 1.1.

### Character Sets
The various character sets used to access the symbol glyphs are Unicode compatible. 

1D800..1DAAF; Sutton SignWriting  
To be published in [Unicode 8][64] in [2015][22].  
Uses 1 to 3 characters per symbol.  

FD800..FDFFF; SignWriting Text  
Private Use Area characters.  
Uses 3 characters per symbol.  Includes characters for structural markers and numbers.  

100000...10FFFF; Symbol Code Points  
Private Use Area characters.  
Uses 1 character per symbol.  

S10000..S38b07; ISWA 2010 Symbol Keys  
ASCII characters, UTF-8 compatible.  
[Symbol keys][19] used as glyph names in the font files.  

The characters conversions implementation can be found in the [SignWriting 2010 JavaScript Library][60] in the ["sw10.js"][65] file under functions "uni8" for Unicode 8, "pua" for SignWriting Text characters on plane 15, "code" for symbol code points characters on plane 16. 

- - -
## SignWriting 2010 Tools ##
Github repo: [signwriting\_2010\_tools][30], currently version 1.5.1

The SignWriting 2010 Tools are used to build a typeface for written sign languages
called the [SignWriting 2010 Fonts][29].

To build the fonts from the sources, you need [FontForge][45] with [Python scripting][46] support.

To control the different aspect of the automated font creation, customize the files in the `source`  directory and the `tools` directory.  Newly created fonts are written to the `fonts` directory.

To create the demo pages, you need pystache for templating.  Demo pages are written to the `demo` directory.

To retrace the SVG from the command line, you will need the following command line tools: Inkscape, pngtopnm, mkbitmap, and potrace.

To unpack the SVG Line and SVG Fill data files, the `unpack.py` tool can be used.

### Tools Directory
To build individual font files, use the Python script `build.py`.   Use "-h" for help

    cd tools
    python build.py -h

To build all of the release font files, use the shell script `release.sh`.

    cd tools
    chmod a+x release.sh
    ./release.sh

To create the demo pages, use the Python script `demo.py`.  Use "-h" for help.

    cd tools
    python demo.py -h


To build the current demo pages used for development, use the shell script `demo.sh`.

    cd tools
    chmod a+x demo.sh
    ./demo.sh

Several text files are included in the `tools` directory.

* `symkeys.txt` - list of the 37,811 symbol keys of the ISWA 2010.
* `symsizes.txt` - list of the 37,811 symbol keys with their individual sizes
* `custom.txt` - list of custom settings for the entire font.
* `glyph.txt` - list of glyph settings to apply to each char.

### Source SVG
The source SVG files required to build the fonts are available from the [SignWriting 2010 Fonts][29] project.  These files were created with the SignWriting 2010 Tools by retracing the SVG Refinement using the `retrace.py` script.  To use these files, save them to the `source` directory and unzip.

* [SVG Line][55] 
* [SVG Filling][56]


- - -
## SignWriting Icon Server ##
Github repo: [swis][32], currently version 1.3.0

The previous generation SignWriting server code for SVG, PNG, and other image formats.  Currently running on [Wikimedia Labs][34].

- - -
## SignPuddle com ##
>[SignPuddle.com][36]

SignPuddle.com is an informational website with links to email, github, codepen, slideshare, linked in, twitter, stockoverflow, and youtube.

- - -
## SignPuddle net ##
>[SignPuddle.net][85]

SignPuddle.net is running the [SignWriting Server](#signwriting-server) with the SignPuddle Online data.  Offerse API resources in SVG and JSON for developer integration.

- - -
## SignPuddle org ##
>[SignPuddle.org][86]

SignPuddle.org is the main URL for SignPuddle Online.  Version 2 is for production.  Version 3 is an early preview with new technologies and new techniques.

- - -
## draft-slevinski-signwriting-text ##
The character encodings used in SignWriting 2010 are defined in an Internet Draft submitted to the IETF: [draft-slevinski-signwriting-text][26].
The document is improved and resubmitted every 6 months.
The character design has been stable since January 12, 2012.
The current version of the Internet Draft is 07.
The next version is planned for November 2016.

- - -
## SignWriting Symposium ##

### In 2016, 12 presentations coming July 18-21

To be presented by Stephen E Slevinski Jr.  
 1) [Organizing Principles of SignPuddle][82]  
 2) [SignPuddle 3: Front and Back][83]  

Also part of [SignWriting Encyclopedia Projects: Wikipedias in American Sign Language and Tunisian Sign Language][84] 

### In 2015, there were 12 presentations from 8 countries.

Presentations by Stephen E Slevinski Jr.  
 1) [SignWriting Stack 2015][70]  
 2) [SignMaker 2015][71]  

### In 2014, there were 40 presentations from 12 countries.

Presentations by Stephen E Slevinski Jr.  
 1) [The SignPuddle Standard for SignWriting Text][72]  
 2) [Constructing a TrueType Font for the SignWriting Script with Unicode Characters Using the Graphite Rendering System][73]  
 3) [Digital collaboration with machine-readable sign language text in the SignWriting script][74]  

- - -
## Wikimedia Incubator ##
>User [slevinski][37]

The [SignWriting Gadget][38] makes is possible for Wikimedia Incubator to support any sign language with SignWriting Text.

The [ASL Wikipedia][39] has been started and currently has over 50 articles. Other sign language projects are ready to start.
View the [Test wikis of sign language][40] for the current list. 

- - -
## Unicode Technical Committee ##
### UTC #148, August 3-5, 2016 
SignWriting is scheduled to be discussed at UTC #148 with some plenary time with the whole UTC and several ad hoc discussions during the meeting.

To be presented by Stephen E Slevinski Jr.  
 1) [SignWriting in Unicode Next][79]  

### At UTC #144, SignWriting was discussed 3 times at length.

Presentations by Stephen E Slevinski Jr.  
  1) [Issues with SignWriting in Unicode 8][75]  
  2) [Thanks to the UTC][76]  

- - -
## SignWriting font-face Project ##
SignWriting uses a 16-bit font.  Creating the fonts is a complex process that uses a complex tool.  If anyone is interested in font work collaboration, please contact me. 

The glyphs of the SignWriting font each have a specific size and shape.  The compatibility of the data between each font-face will depend on the similarity of the glyphs.

### Sutton SignWriting Font
Planned for 2016, the Sutton SignWriting Font will replace the [SignWriting 2010 Fonts][29] as the standard font set.  The Sutton SignWriting Font is a two-color font.  The two colors are currently supported with 2 TrueType fonts.  It is possible a single font file could support both colors.

The Sutton SignWriting Font will address the issue of symbol distortion for a few symbols.  The Sutton SignWriting Font is a 16-bit font, so it requires an entire Unicode plane in the font itself.  This is currently done on plane 16, but I am hopeful that it can be moved to plane 4.

The Sutton SignWriting Font will probably not support the ligatures of Symbol Key, Unicode 8, or PUA Plane 15.  These options will be available in the [SignWriting 2010 Tools][30], but the official distribution will only support direct symbol access and any future Unicode design.

The baseline is also an issue.  Currently, the glyphs of the SignWriting 2010 Fonts are written under the baseline.  This design reduces the amount of code that needs to be written, but it hides the glyphs when used in normal contexts.

### Hamburg SignWriting Font
During the SignWriting Symposium of 2015, presentation 51 was about designing an alternate SignWriting Font, called [SignType][77] using typography design ideas.  Valerie Sutton pointed out several issues with the font, but was interested in the effort.  To be able to fully test the font, it must be usable with existing software.  Towards this end, I hope that we will be able to use the [SignWriting 2010 Tools][30] to create a new set of fonts.

The fonts will be moderately compatible with the existing data set of Formal SignWriting, but the font may not be perfectly replaceable due to changes in symbols shape and size.

### Handwritten SignWriting Fonts
The existing SignWriting fonts are based on SignWriting Block Printing: an international design intended for publishing and computerization.  It should be possible to design a font based on glyphs modeled after a particular style of handwriting.  This would be an involved project with over a thousand hand-crafted glyphs, but automation is possible to create tens of thousands more.


- - -
## Epilogue
This is a work in progress. Feedback, bug reports, and patches are welcomed.

[1]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Filling.ttf
[2]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Filling.log
[3]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Mono%20Filling.ttf
[4]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Mono%20Filling.log
[5]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Unified.ttf
[6]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Unified.log
[7]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Line.ttf
[8]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Line.log
[9]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Mono%20Unified.ttf
[10]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Mono%20Unified.log
[11]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Mono%20Line.ttf
[12]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Mono%20Line.log
[13]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/source/svg1U.zip
[14]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/source/svg1L.zip
[15]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/source/svg1F.zip
[16]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/source/svb1U.zip
[17]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/source/svb1L.zip
[18]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/source/svb1F.zip
[19]: http://signbank.org/iswa
[20]: http://signpuddle.net/iswa
[21]: http://www.unicode.org/alloc/Pipeline.html
[22]: http://unicode-inc.blogspot.com/2014/08/new-publication-schedule-for-unicode.html
[23]: http://tools.ietf.org/html/draft-slevinski-signwriting-text
[24]: http://scripts.sil.org/OFL
[25]: https://www.google.com/fonts/specimen/Source+Sans+Pro
[26]: http://tools.ietf.org/html/draft-slevinski-signwriting-text
[27]: http://signpuddle.net/iswa/swfont_test.html
[28]: http://signpuddle.net/iswa/swfonts.html
[29]: https://github.com/Slevinski/signwriting_2010_fonts
[30]: https://github.com/Slevinski/signwriting_2010_tools
[31]: https://github.com/Slevinski/swap
[32]: https://github.com/Slevinski/swis
[33]: https://signbank.org/swap
[34]: http://swis.wmflabs.org
[36]: http://signpuddle.com
[37]: https://incubator.wikimedia.org/wiki/User:Slevinski
[38]: https://incubator.wikimedia.org/wiki/User:Slevinski/SignWriting/Incubator#SignWriting_Gadget
[39]: https://incubator.wikimedia.org/wiki/Wp/ase
[40]: https://incubator.wikimedia.org/wiki/Category:Incubator:Test_wikis_of_sign_languages
[41]: http://www.adobe.com/devnet/opentype/afdko/topic_feature_file_syntax.html#5.d
[42]: https://cdn.rawgit.com/Slevinski/signwriting_2010_tools/master/source/signwriting_2010_unicode8.fea
[43]: https://cdn.rawgit.com/Slevinski/signwriting_2010_tools/master/source/signwriting_2010_unicode_pua.fea
[44]: https://cdn.rawgit.com/Slevinski/signwriting_2010_tools/master/source/signwriting_2010_symbolkey.fea
[45]: http://fontforge.org/
[46]: http://fontforge.org/python.html
[53]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/source/png_sutton.zip
[54]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/source/svg_refinement.zip
[55]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/source/svg_line.zip
[56]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/source/svg_fill.zip
[57]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010.ttf
[58]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010.log
[59]: http://codepen.io/Slevinski/pen/exnju
[60]: https://github.com/Slevinski/sw10js
[61]: https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010.mobileconfig
[62]: http://github.com/Slevinski/sw10js
[63]: http://www.opensource.org/licenses/mit-license.php
[64]: http://www.unicode.org/versions/Unicode8.0.0/
[65]: https://cdn.rawgit.com/Slevinski/sw10js/gh-pages/sw10.js
[66]: http://github.com/Slevinski/signmaker
[67]: https://slevinski.github.io/SignWriting_Character_Viewer/SignWriting_Character_Viewer_dev.html
[68]: https://slevinski.github.io/SignWriting_Character_Viewer/SignWriting_Character_Viewer.html
[69]: https://github.com/Slevinski/SignWriting_Character_Viewer
[70]: http://www.signwriting.org/symposium/presentation0043.html
[71]: http://www.signwriting.org/symposium/presentation0049.html
[72]: http://www.signwriting.org/symposium/presentation0011.html
[73]: http://www.signwriting.org/symposium/presentation0019.html
[74]: http://www.signwriting.org/symposium/presentation0031.html
[75]: http://www.slideshare.net/StephenSlevinski/sign-writing-in-unicode-8-issues
[76]: http://www.slideshare.net/StephenSlevinski/thanks-to-the-utc
[77]: http://www.signwriting.org/symposium/presentation0051.html
[78]: http://github.com/Slevinski/swserver
[79]: http://www.slideshare.net/StephenSlevinski/signwriting-in-unicode-next
[80]: https://slevinski.github.io/SignWriting_Character_Viewer/SignWriting_Character_Viewer_2.html
[81]: https://slevinski.github.io/SignWriting_Character_Viewer/SignWriting_Character_Viewer_2_dev.html
[82]: http://www.signwriting.org/symposium/presentation0055.html
[83]: http://www.signwriting.org/symposium/presentation0062.html
[84]: http://www.signwriting.org/symposium/presentation0064.html
[85]: https://signpuddle.net
[86]: http://signpuddle.org
