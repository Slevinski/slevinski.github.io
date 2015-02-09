Stephen E Slevinski Jr
=====================
_the projects for written sign language with SignWriting Text_
- - - 
> February 2015

Contents
---------
* Github Projects
  * SignWriting 2010 JavaScript Library
  * SignWriting 2010 Fonts
  * SignWriting 2010 Tools
  * SignWriting Asset Provider
  * SignWriting Icon Server
* Other Projects
  * Wikimedia Incubator
  * draft-slevinski-signwriting-text
- - -

SignWriting 2010 JavaScript Library
--------------------------
Github repo: [sw10js][62], currently version 1.2.4

The JavaScript library leverages the TrueType fonts without any additional requirements. Include the "sw10.js" script or the minified version "sw10.min.js" in any HTML page to access the function library. 

- [SignWriting 2010 JavaScript Library](http://slevinski.github.io/sw10js)  
- [Guide](http://slevinski.github.io/sw10js/guide.html)  
- [API](http://slevinski.github.io/sw10js/api.html)  
- [Testing](http://slevinski.github.io/sw10js/tests)  

### License
SignWriting 2010 JavaScript Library  
Copyright (c) 2007-2015, Stephen E Slevinski Jr  
Licensed under the [MIT License][63]  

- - - 

SignWriting 2010 Fonts
--------------------------
Github repo: [signwriting\_2010\_fonts][29], currently version 1.1.1

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

### Demo Pages
The demo pages can be created with the SignWriting 2010 Tools.
There are 3 types of demo pages available online.

* Unicode 8 demo pages: [view online][47] or [download][48]
* Unicode Private Use Area demo pages: [view online][49] or [download][50]
* Symbol Key demo pages: [view online][51] or [download][52]

Additionally, complete sign images with the TrueType fonts inside of SVGs is working nicely.  View the [codepen][59] example for a working demonstration.

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

SignWriting 2010 Tools
--------------------------
Github repo: [signwriting\_2010\_tools][30], currently version 1.4

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

SignWriting Asset Provider
--------------------------
Github repo: [swap][31], coming soon...

The next generation SignWriting server code for SVG creation and data processing.  Symbols and signs can be accessed with a simple syntax.  Data from SignPuddle Online can be queried with an API and returns JSON data.

### Symbol Images
* http://signbank.org/swap/api/symbol/S10000
* http://signbank.org/swap/api/symbol/5/S10000
* http://signbank.org/swap/api/symbol/x/S10000
* http://signbank.org/swap/api/symbol/5/red/blue/S10000
* http://signbank.org/swap/api/symbol/5/FF0000/000/S10000

### Sign Images
* http://signbank.org/swap/api/sign/M548x514S11010509x487S11018477x487S2df1e453x489S2df06528x489
* http://signbank.org/swap/api/sign/5/M548x514S11010509x487S11018477x487S2df1e453x489S2df06528x489
* http://signbank.org/swap/api/sign/x/M548x514S11010509x487S11018477x487S2df1e453x489S2df06528x489
* http://signbank.org/swap/api/sign/5/red/blue/M548x514S11010509x487S11018477x487S2df1e453x489S2df06528x489
* http://signbank.org/swap/api/sign/5/FF0000/000/M548x514S11010509x487S11018477x487S2df1e453x489S2df06528x489

### API Calls
* http://signbank.org/swap/api/symbols/S10000S20500
* http://signbank.org/swap/api/query/Q
* http://signbank.org/swap/api/query/QS10000
* http://signbank.org/swap/api/query/QS10000S20500


- - -

SignWriting Icon Server
---------------------------
Github repo: [swis][32], currently version 1.3.0

The current generation SignWriting server code for SVG, PNG, and other image formats.  Currently running on [Wikimedia Labs][34], [SignBank.org][35], and [SignPuddle.com][36]


- - -

Wikimedia Incubator
-----------------------
>User [slevinski][37]

The [SignWriting Gadget][38] makes is possible for Wikimedia Incubator to support any sign language with SignWriting Text.

The [ASL Wikipedia][39] has been started and currently has over 50 articles. Other sign language projects are ready to start.
View the [Test wikis of sign language][40] for the current list.
- - -

draft-slevinski-signwriting-text
------------------
The character encodings used in SignWriting 2010 are defined in an Internet Draft submitted to the IETF: [draft-slevinski-signwriting-text][26].
The document is improved and resubmitted every 6 months.
The character design has been stable since January 12, 2012.
The current version of the Internet Draft is 04.
The next version is planned for May 2015.

- - -

Epilogue
----------
This is a work in progress. Feedback, bug reports, and patches are welcomed.

[1]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Filling.ttf
[2]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Filling.log
[3]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Mono%20Filling.ttf
[4]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Mono%20Filling.log
[5]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Unified.ttf
[6]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Unified.log
[7]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Line.ttf
[8]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Line.log
[9]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Mono%20Unified.ttf
[10]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Mono%20Unified.log
[11]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Mono%20Line.ttf
[12]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010%20Mono%20Line.log
[13]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/source/svg1U.zip
[14]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/source/svg1L.zip
[15]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/source/svg1F.zip
[16]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/source/svb1U.zip
[17]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/source/svb1L.zip
[18]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/source/svb1F.zip
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
[35]: http://signbank.org/swis
[36]: http://signpuddle.com
[37]: https://incubator.wikimedia.org/wiki/User:Slevinski
[38]: https://incubator.wikimedia.org/wiki/User:Slevinski/SignWriting/Incubator#SignWriting_Gadget
[39]: https://incubator.wikimedia.org/wiki/Wp/ase
[40]: https://incubator.wikimedia.org/wiki/Category:Incubator:Test_wikis_of_sign_languages
[41]: http://www.adobe.com/devnet/opentype/afdko/topic_feature_file_syntax.html#5.d
[42]: https://raw.githubusercontent.com/Slevinski/signwriting_2010_tools/master/source/signwriting_2010_unicode8.fea
[43]: https://raw.githubusercontent.com/Slevinski/signwriting_2010_tools/master/source/signwriting_2010_unicode_pua.fea
[44]: https://raw.githubusercontent.com/Slevinski/signwriting_2010_tools/master/source/signwriting_2010_symbolkey.fea
[45]: http://fontforge.org/
[46]: http://fontforge.org/python.html
[47]: http://signpuddle.net/iswa/demo/unicode8
[48]: http://signpuddle.net/iswa/demo/unicode8.zip
[49]: http://signpuddle.net/iswa/demo/unicodepua
[50]: http://signpuddle.net/iswa/demo/unicodepua.zip
[51]: http://signpuddle.net/iswa/demo/symbolkey
[52]: http://signpuddle.net/iswa/demo/symbolkey.zip
[53]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/source/png_sutton.zip
[54]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/source/svg_refinement.zip
[55]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/source/svg_line.zip
[56]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/source/svg_fill.zip
[57]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010.ttf
[58]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010.log
[59]: http://codepen.io/Slevinski/pen/exnju
[60]: https://github.com/Slevinski/sw10js
[61]: https://github.com/Slevinski/signwriting_2010_fonts/raw/master/fonts/SignWriting%202010.mobileconfig
[62]: http://github.com/Slevinski/sw10js
[63]: http://www.opensource.org/licenses/mit-license.php
[64]: http://www.unicode.org/versions/Unicode8.0.0/
[65]: https://raw.githubusercontent.com/Slevinski/sw10js/gh-pages/sw10.js
