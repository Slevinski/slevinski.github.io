- - -
> October 2016

Contents
---------
* Active GitHub Projects
  * [Sutton SignWriting](#sutton-signwriting)
  * [SignWriting Server](#signwriting-server)
  * [SignMaker 2015](#signmaker-2015)
  * [SignWriting 2010 Fonts](#signwriting-2010-fonts)
  * [SignWriting 2010 Tools](#signwriting-2010-tools)
* SignPuddle Websites
  * [SignPuddle.com](#signpuddle-com)
  * [SignPuddle.org](#signpuddle-org)
  * [SignPuddle.net](#signpuddle-net)
* Other Projects
  * [draft-slevinski-formal-signwriting](#draft-slevinski-formal-signwriting)
  * [SignWriting Symposium](#signwriting-symposium)
  * [Wikimedia Incubator](#wikimedia-incubator)
  * [Unicode Technical Committee](#unicode-technical-committee)
  * [SignWriting font-face Project](#signwriting-font-face-project) 
* Historical GitHub Projects
  * [SignWriting Character Viewer](#signwriting-character-viewer)
  * [SignWriting 2010 JavaScript Library](#signwriting-2010-javascript-library)
  * [SignWriting Icon Server](#signwriting-icon-server)

- - -

## Sutton SignWriting ##
Github repo: [SuttonSignWriting](http://github.com/Slevinski/SuttonSignWriting), currently version 1.0.1

The Sutton SignWriting project is designed for the internet community and includes TrueType Fonts, Scalar Vector Graphics, HTML, CSS, and JavaScript Functions.
The Formal SignWriting specification is a faithful encoding of Sutton SignWriting that is documented in an Internet Draft submitted to the IETF. 

- [The Sutton SignWriting Project](http://slevinski.github.io/SuttonSignWriting) 
- [Characters](http://slevinski.github.io/SuttonSignWriting/characters) 
- [Components](http://slevinski.github.io/SuttonSignWriting/components) 
- [Internet Draft](http://slevinski.github.io/SuttonSignWriting/draft.html) 

### Sutton SignWriting Fonts
The Sutton SignWriting TrueType fonts are available for download and installation. The fonts have been tailored for the Sutton SignWriting JavaScript Library. Install instructions available for Windows, Linux, Mac, and iOS.  
>Sutton SignWriting Fonts  
Copyright (c) 1974-2016, Center for Sutton Movement Writing, inc  
Licensed under the SIL Open Font License v1.1  


### Sutton SignWriting JavaScript Library
The JavaScript library leverages the TrueType fonts without any additional requirements. 
Simply include the Sutton SignWriting JavaScript file in any HTML page to access the functions.  
> Sutton SignWriting JavaScript Library  
Copyright (c) 2007-2016, Stephen E Slevinski Jr  
Licensed under the MIT License  

- - -
## SignWriting Server ##
Github repo: [swserver](http://github.com/Slevinski/swserver), currently version 1.3.0

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
Licensed under the MIT License  

- - -
## SignMaker 2015 ##
Github repo: [signmaker](http://github.com/Slevinski/signmaker), currently version 1.3.2

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
Licensed under the MIT License  

- - -
## SignWriting 2010 Fonts ##
Github repo: [signwriting\_2010\_fonts](https://github.com/Slevinski/signwriting_2010_fonts), currently version 2.0.1

SignWriting 2010 is a typeface for written sign languages which makes the entire International SignWriting Alphabet 2010 symbol set available in TrueType fonts.

The Sutton SignWriting fonts are an updates revision of the SignWriting 2010 fonts which fixes the appearance and size for some of the symbols. The fonts are built with the SignWriting 2010 Tools. The Sutton SignWriting Fonts are used in the Sutton SignWriting Project.

Original symbol design by Valerie Sutton.
Symbol image refinement in SVG by Adam Frost.
Encoding and transformation by Stephen E Slevinski Jr.

### Sutton SignWriting TrueType Font Downloads
* Reserved Font Name: [Sutton SignWriting](https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SuttonSignWriting.ttf) with [log report](https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SuttonSignWriting.log)  
* Reserved Font Name: [Sutton SignWriting Fill](https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SuttonSignWritingFill.ttf) with [log report](https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SuttonSignWritingFill.log)  
* Fonts packaged for iOS: [Sutton SignWriting Configuration Profile](https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SuttonSignWriting.mobileconfig)

>Sutton SignWriting Fonts  
Copyright (c) 1974-2016, Center for Sutton Movement Writing, inc  
Licensed under the SIL Open Font License v1.1  

### SignWriting 2010 TrueType Font Downloads
* Reserved Font Name: [SignWriting 2010](https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010.ttf) with [log report](https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010.log)  
* Reserved Font Name: [SignWriting 2010 Filling](https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Filling.ttf) with [log report](https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010%20Filling.log)  
* Fonts packaged for iOS: [SignWriting 2010 Configuration Profile](https://cdn.rawgit.com/Slevinski/signwriting_2010_fonts/master/fonts/SignWriting%202010.mobileconfig)

>SignWriting 2010 Fonts  
Copyright (c) 1974-2016, Center for Sutton Movement Writing, inc  
Licensed under the SIL Open Font License v1.1  


- - -
## SignWriting 2010 Tools ##
Github repo: [signwriting\_2010\_tools](https://github.com/Slevinski/signwriting_2010_tools), currently version 1.5.1

The SignWriting 2010 Tools are used to build a typeface for written sign languages
called the [SignWriting 2010 Fonts](https://github.com/Slevinski/signwriting_2010_fonts).

To build the fonts from the sources, you need [FontForge](http://fontforge.org/) with [Python scripting](http://fontforge.org/python.html) support.

- - -
## SignPuddle com ##
>[SignPuddle.com](http://signpuddle.com/)

SignPuddle.com is an informational website with links to email, github, codepen, slideshare, linked in, twitter, stockoverflow, and youtube.

- - -
## SignPuddle net ##
>[SignPuddle.net](http://signpuddle.net/)

SignPuddle.net is running the [SignWriting Server](#signwriting-server) with the SignPuddle Online data.  Offerse API resources in SVG and JSON for developer integration.

- - -
## SignPuddle org ##
>[SignPuddle.org](http://signpuddle.com/)

SignPuddle.org is the main URL for SignPuddle Online.  Version 2 is for production.  Version 3 is an early preview with new technologies and new techniques.

- - -
## draft-slevinski-formal-signwriting ##
The character encodings and associated technologies used in the Sutton SignWriting Project are defined in an Internet Draft submitted to the IETF: [draft-slevinski-formal-signwriting](http://tools.ietf.org/html/draft-slevinski-formal-signwriting).
The character design has been stable since January 12, 2012.

- - -
## SignWriting Symposium ##

### In 2016, 12 presentations coming July 18-21

To be presented by Stephen E Slevinski Jr.  
 1) [Moving Forward with Sign Language Projects in Formal SignWriting](http://www.signwriting.org/symposium/presentation0055.html)  
 2) [SignPuddle 3: Front and Back](http://www.signwriting.org/symposium/presentation0062.html)  

Also part of [SignWriting Encyclopedia Projects: Wikipedias in American Sign Language and Tunisian Sign Language](http://www.signwriting.org/symposium/presentation0064.html) 

### In 2015, there were 12 presentations from 8 countries.

Presentations by Stephen E Slevinski Jr.  
 1) [SignWriting Stack 2015](http://www.signwriting.org/symposium/presentation0043.html)  
 2) [SignMaker 2015](http://www.signwriting.org/symposium/presentation0049.html)  

### In 2014, there were 40 presentations from 12 countries.

Presentations by Stephen E Slevinski Jr.  
 1) [The SignPuddle Standard for SignWriting Text](http://www.signwriting.org/symposium/presentation0011.html)  
 2) [Constructing a TrueType Font for the SignWriting Script with Unicode Characters Using the Graphite Rendering System](http://www.signwriting.org/symposium/presentation0019.html)  
 3) [Digital collaboration with machine-readable sign language text in the SignWriting script](http://www.signwriting.org/symposium/presentation0031.html)  

- - -
## Wikimedia Incubator ##
>User [slevinski](https://incubator.wikimedia.org/wiki/User:Slevinski)

The [SignWriting Gadget](https://incubator.wikimedia.org/wiki/User:Slevinski/SignWriting/Incubator#SignWriting_Gadget) makes is possible for Wikimedia Incubator to support any sign language with SignWriting Text.

The [ASL Wikipedia](https://incubator.wikimedia.org/wiki/Wp/ase) has been started and currently has over 50 articles. Other sign language projects are ready to start.
View the [Test wikis of sign language](https://incubator.wikimedia.org/wiki/Category:Incubator:Test_wikis_of_sign_languages) for the current list. 

- - -
## Unicode Technical Committee ##
### UTC #148, August 3-5, 2016 
SignWriting is scheduled to be discussed at UTC #148 with some plenary time with the whole UTC and several ad hoc discussions during the meeting.

To be presented by Stephen E Slevinski Jr.  
 1) [SignWriting in Unicode Next](http://www.slideshare.net/StephenSlevinski/signwriting-in-unicode-next)  

### At UTC #144, SignWriting was discussed 3 times at length.

Presentations by Stephen E Slevinski Jr.  
  1) [Issues with SignWriting in Unicode 8](http://www.slideshare.net/StephenSlevinski/sign-writing-in-unicode-8-issues)  
  2) [Thanks to the UTC](http://www.slideshare.net/StephenSlevinski/thanks-to-the-utc)  

- - -
## SignWriting font-face Project ##
SignWriting uses a 16-bit font.  Creating the fonts is a complex process that uses a complex tool.  If anyone is interested in font work collaboration, please contact me. 

The glyphs of the SignWriting font each have a specific size and shape.  The compatibility of the data between each font-face will depend on the similarity of the glyphs.

### Hamburg SignWriting Font
During the SignWriting Symposium of 2015, presentation 51 was about designing an alternate SignWriting Font, called [SignType](http://www.signwriting.org/symposium/presentation0051.html) using typography design ideas.  Valerie Sutton pointed out several issues with the font, but was interested in the effort.  To be able to fully test the font, it must be usable with existing software.  Towards this end, I hope that we will be able to use the [SignWriting 2010 Tools](https://github.com/Slevinski/signwriting_2010_tools) to create a new set of fonts.

The fonts will be moderately compatible with the existing data set of Formal SignWriting, but the font may not be perfectly replaceable due to changes in symbols shape and size.

### Handwritten SignWriting Fonts
The existing SignWriting fonts are based on SignWriting Block Printing: an international design intended for publishing and computerization.  It should be possible to design a font based on glyphs modeled after a particular style of handwriting.  This would be an involved project with over a thousand hand-crafted glyphs, but automation is possible to create tens of thousands more.


- - -
## SignWriting Character Viewer ##
> Historical project.  Merged into the Sutton SignWriting Project.  

Github repo: [SignWriting_Character_Viewer](https://github.com/Slevinski/SignWriting_Character_Viewer), v1 and v2.

The SignWriting Character Viewer shows all of the symbols of the International SignWriting Alphabet 2010 using a variety of character encoding forms to access the glyphs of the [SignWriting 2010 Fonts](https://github.com/Slevinski/signwriting_2010_fonts).
 
The main index page contains links for both version 1 and 2.
The main index uses the SignWriting 2010 JavaScript library (7 KB zipped) to convert a live Formal SignWriting string into HTML, CSS, SVG and TTF.
 * [SignWriting Character Viewer Index](https://slevinski.github.io/SignWriting_Character_Viewer)  
 * [Available as 2 KB each of CSS, HTML, and custom JavaScript at CodePen.io](http://codepen.io/Slevinski/full/XKRPzm/)  

The SignWriting Character Viewer versions 1 and 2 use HTML, CSS, and JavaScript with TrueType Font files for display.

### License
SignWriting Character Viewer  
Copyright (c) 2007-2016, Stephen E Slevinski Jr  
Licensed under the MIT License  

- - -
## SignWriting 2010 JavaScript Library ##
> Historical project.  Merged into the Sutton SignWriting Project.  

Github repo: [sw10js](http://github.com/Slevinski/sw10js), currently version 1.9.0

The JavaScript library leverages the TrueType fonts without any additional requirements. Include the "sw10.js" script or the minified version "sw10.min.js" in any HTML page to access the function library.

- [SignWriting 2010 JavaScript Library](http://slevinski.github.io/sw10js) 
- [Guide](http://slevinski.github.io/sw10js/guide.html) 
- [API](http://slevinski.github.io/sw10js/api.html) 
- [Testing](http://slevinski.github.io/sw10js/tests) 

### License
SignWriting 2010 JavaScript Library  
Copyright (c) 2007-2016, Stephen E Slevinski Jr  
Licensed under the MIT License  

- - -
## SignWriting Icon Server ##
> Historical project.  Superceeded by the SignWriting Server.  

Github repo: [swis](https://github.com/Slevinski/swis), currently version 1.3.0

The previous generation SignWriting server code for SVG, PNG, and other image formats.  Currently running on [Wikimedia Labs](http://swis.wmflabs.org/).

- - -
## Epilogue
This is a work in progress. Feedback, bug reports, and patches are welcomed.