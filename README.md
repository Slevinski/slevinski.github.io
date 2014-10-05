Stephen E Slevinski Jr
=====================
_the projects for written sign language with SignWriting Text_
- - - 
> October 2014

Contents
---------
* Github Projects
  * SignWriting 2010 Fonts
  * SignWriting 2010 Tools
  * SignWriting Asset Provider
  * SignWriting Icon Server
* Other Projects
  * Wikimedia Incubator
  * draft-slevinski-signwriting-text
- - -

SignWriting 2010 Fonts
--------------------------
Github repo: [signwriting\_2010\_fonts][29], currently version 0.9

SignWriting 2010 is a typeface for written sign languages
which makes the entire [International SignWriting Alphabet 2010 symbol set][19] available in a TrueType font with OpenType features.

The SignWriting 2010 Fonts are fully functional but not production ready.  

There are several issues with sizing and alignment for the various glyphs.  The font settings and the individual glyph settings can be adjusted in the SignWriting 2010 Tools project and the fonts can quickly be recreated.

There are a few issues regarding the image quality.  Overall, the TrueType quality is very close to the SVG, but there are obvious differences when the images are zoomed.  There are a handful of symbols that need to be adjusted by hand because the SVG import failed to produce a legible glyph.  These issues will be resolved before the 1.0 release.


### Public TrueType Fonts  
> Reserved Font Name: SignWriting 2010  
Reserved Font Name: [SignWriting 2010 Filling][1] with [log report][2]  
Reserved Font Name: SignWriting 2010 Mono  
Reserved Font Name: [SignWriting 2010 Mono Filling][3] with [log report][4]  

### Development Fonts  
> Reserved Font Name: [SignWriting 2010 Unified][5] with [log report][6]  
Reserved Font Name: [SignWriting 2010 Line][7] with [log report][8]  
Reserved Font Name: SignWriting 2010 Other  
Reserved Font Name: [SignWriting 2010 Mono Unified][9] with [log report][10]  
Reserved Font Name: [SignWriting 2010 Mono Line][11] with [log report][12]  
Reserved Font Name: SignWriting 2010 Other

### License
The SignWriting 2010 Fonts are free and open source, released under
[SIL Open Font License][24], version 1.1.

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

### Character Sets
Three different character sets can be used to access the glyphs.

1D800..1DAAF; Sutton SignWriting  
To be published in [Unicode 8][21] in [2015][22].

FD800..FDFFF; SignWriting Text  
[Private Use Area characters][26] for 2-dimensional text.

S10000..S38b07; ISWA 2010 Symbol Keys  
[Symbol keys][19] used as glyph names in the font files.

- - - 

SignWriting 2010 Tools
--------------------------
Github repo: [signwriting\_2010\_tools][30], currently version 1.0

The SignWriting 2010 Tools are used to build a typeface for written sign languages
called the [SignWriting 2010 Fonts][29].

To build the fonts from the sources, you need [FontForge][45] with [Python scripting][46] support.

To control the different aspect of the automated font creation, customize the files in the `source`  directory and the `tools` directory.  Newly created fonts are written to the `fonts` directory.

To create the demo pages, you need pystache for templating.  Demo pages are written to the `demo` directory.

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
* `custom.txt` - list of custom settings for the entire font.
* `glyph.txt` - list of glyph settings to apply to each char.
* `svg1ref.txt` - cross reference file from symbol key to subfont, such as Unified, Line, or Other.

### Source SVG
The source SVG files required for the build process are available from the [SignWriting 2010 Font][29] project.

#### Individually Sized SVG
> [SVG1 Unified Glyphs][13]  
[SVG1 Line Glyphs][14]  
[SVG1 Filling Glyphs][15]  
SVG1 Other Glyphs  

#### Mono Sized SVG with viewBox

> [SVG1 Unified Glyphs][16]  
[SVG1 Line Glyphs][17]  
[SVG1 Filling Glyphs][18]  
SVG1 Other Glyphs

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
The current version of the Internet Draft is 03.
The next version is planned for November 2014.

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