# Icon Fonts for Atom

[![apm](https://img.shields.io/apm/l/icon-fonts.svg?style=flat-square)](https://atom.io/packages/icon-fonts)
[![apm](https://img.shields.io/apm/v/icon-fonts.svg?style=flat-square)](https://atom.io/packages/icon-fonts)
[![apm](https://img.shields.io/apm/dm/icon-fonts.svg?style=flat-square)](https://atom.io/packages/icon-fonts)
[![Travis](https://img.shields.io/travis/idleberg/atom-icon-fonts.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-icon-fonts)
[![David](https://img.shields.io/david/dev/idleberg/atom-icon-fonts.svg?style=flat-square)](https://david-dm.org/idleberg/atom-icon-fonts#info=devDependencies)

Atom snippets for a variety of icon fonts ([see details](#prefixes)).

Converted from the [package](https://github.com/idleberg/Icon-Fonts-Sublime-Text) for Sublime Text.

## Installation

### apm

* Install package `apm install icon-fonts` (or use the GUI)

### GitHub

1. Change directory `cd ~/.atom/packages/`
2. Clone repository `git clone https://github.com/idleberg/atom-icon-fonts icon-fonts`

## Usage

Snippets are limited to the `.text.html` scope. Typing the class name of an icon using the designated prefix will complete to a tag containing the icon class. Exceptions are `fa-stack` (`<span>`) and `fa-ul` (`<ul>`).

### Prefixes

Prefix         | Icon Font | Version | cdnjs | jsDelivr
---------------|-----------|---------|-------|---------
`ai`           | [Android Icons](http://www.androidicons.com/) | 1.0.0 | 🚫 | 🚫
`brandico`     | [Brandico Font](https://github.com/fontello/brandico.font) | – | 🚫 | 🚫
`cc`           | [Creative Commons Icon Font](http://cc-icons.github.io/) | 1.2.1 | ✅ | ✅
`dashicons`    | [WordPress Dashicons](https://github.com/WordPress/dashicons) | – | 🚫 | 🚫
`devicons`     | [Devicons](https://github.com/vorillaz/devicons) | 1.8.0 | ✅ | ✅
`el-icon`      | [Elusive Icons](http://shoestrap.org/downloads/elusive-icons-webfont/) | ? | 🚫 | 🚫
`fa`           | [Font Awesome](http://fontawesome.io/) | 4.5.0 | ✅ | ✅
`fi`           | [Foundation Icons](http://zurb.com/playground/foundation-icons) | 3.0 | ✅ | ✅
`filetypes`    | [Glyphicons Filetypes](http://glyphicons.com/) | 1.9.0 | 🚫 | 🚫
`foundico`     | [Foundation Icons](https://github.com/zurb/foundation-icons/tree/original-implementation) | 1.0 | 🚫 | 🚫
`geomicon`     | [Geomicons Open](https://github.com/jxnblk/geomicons-open/) | 2.0.0 | 🚫 | ✅
`glyphicons`   | [Glyphicons Pro](http://glyphicons.com/)* | 1.9.0 | 🚫 | 🚫
`halflings`    | [Glyphicons Halflings](http://glyphicons.com/) | 1.9.0 | 🚫 | 🚫
`ion`          | [Ionicons](https://github.com/driftyco/ionicons) | 2.0.1 | 🚫 | 🚫
`line`         | [Elegant Theme Line Icons](http://www.elegantthemes.com/blog/resources/how-to-use-and-embed-an-icon-font-on-your-website) | – | 🚫 | 🚫
`mfg`          | [MFG Labs Iconset](http://mfglabs.github.io/mfglabs-iconset/) | – | 🚫 | 🚫
`octicon`      | [GitHub Octicons](https://octicons.github.com/) | 3.3.0 | 🚫 | 🚫
`oi`           | [Open Iconic](https://useiconic.com/open/) | 1.1.0 | 🚫 | ✅
`openwebicons` | [OpenWeb Icons](http://pfefferle.github.io/openwebicons/) | 1.3.2| 🚫 | 🚫
`pf`           | [PaymentFont](http://paymentfont.io/) | 1.1.2 | ✅ | 🚫
`ratchicon`    | [Ratchicons](http://goratchet.com/components/#ratchicons) | 2.0.2 | ✅ | ✅
`social`       | [Glyphicons Social](http://glyphicons.com/) | 1.9.0 | 🚫 | 🚫
`st`           | [Stack Icons](http://stackicons.com/) | 1.0.0 | 🚫 | 🚫
`typicon`      | [Typicons](http://typicons.com/) | 2.0.7 | 🚫 | 🚫
`ui`           | [Semantic UI Icons](http://semantic-ui.com/elements/icon.html) | 2.0.7 | ✅ | ✅
`zmdi`         | [Material Design Iconic Font](https://github.com/zavoloklom/material-design-iconic-font) | 2.2.0 | ✅ | 🚫

\* Vanilla Glyphicons and Bootstrap Glyphicons use different class-names, the former adding a plural-s to its classes. On completion, a tab-stop is added to support both options. Future versions will deprecate this distinction, since [Bootstrap 4](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/) is likely to ship without (glyph)icons.

Examples:

* `fa-check`+<kbd>Tab</kbd> completes to `<i class="fa fa-check"></i>`
* `glyphicons-check`+<kbd>Tab</kbd> completes to `<span class="glyphicons glyphicons-check"></span>`
* `octicon-check`+<kbd>Tab</kbd> completes to `<span class="octicon octicon-check"></span>`
* well, you get the idea

### CDNs

If a supported CDN is indicated in the [table](#prefixes) above, you can use the prefixes `cdnjs` or `jsdelivr` to quickly insert a link to the CDN-hosted asset:

Examples:

* `cdnjs-fa`+<kbd>Tab</kbd> completes to a `<link>` tag to the Font Awesome style-sheet
* `jsdelivr-fa`+<kbd>Tab</kbd> completes to a `<link>` tag to the Font Awesome style-sheet
* `jsdelivr-geomicon`+<kbd>Tab</kbd> completes to a `<script>` tag to the Geomicons script

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-icon-fonts) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
