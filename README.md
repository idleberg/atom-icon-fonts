# Icon Fonts for Atom

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/release/idleberg/atom-icon-fonts.svg?style=flat-square)](https://github.com/idleberg/atom-icon-fonts/releases)
[![Travis](https://img.shields.io/travis/idleberg/atom-icon-fonts.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-icon-fonts)
[![David](https://img.shields.io/david/dev/idleberg/atom-icon-fonts.svg?style=flat-square)](https://david-dm.org/idleberg/atom-icon-fonts#info=devDependencies)

Atom snippets for a variety of icon fonts ([see details](#prefixes)).

Converted from the [package](https://github.com/idleberg/Icon-Fonts-Sublime-Text) for Sublime Text.

## Installation

### apm

* Install package `apm install icon-fonts` (or use the GUI)

### GitHub

1. Change directory to `~/.atom/packages/`
2. Clone repository `git clone https://github.com/idleberg/atom-icon-fonts.git`

## Usage

Snippets are limited to the `.text.html` scope. Typing the class name of an icon using the designated prefix will complete to a tag containing the icon class. Exceptions are `fa-stack` (`<span>`) and `fa-ul` (`<ul>`).

### Prefixes

Prefix         | Icon Font
---------------|----------
`ai`           | [Android Icons](http://www.androidicons.com/)
`brandico`     | [Brandico Font](https://github.com/fontello/brandico.font)
`cc`           | [Creative Commons Icon Font](http://cc-icons.github.io/)
`el-icon`      | [Elusive Icons](http://shoestrap.org/downloads/elusive-icons-webfont/)
`fa`           | [Font Awesome](http://fontawesome.io/)
`foundico`     | [Foundation Icons](http://zurb.com/playground/foundation-icons)
`glyphicon`    | [Bootstrap Glyphicons](http://getbootstrap.com/components/#glyphicons)
`line`         | [Elegant Theme Line Icons](http://www.elegantthemes.com/blog/resources/how-to-use-and-embed-an-icon-font-on-your-website)
`mfg`          | [MFG Labs Iconset](http://mfglabs.github.io/mfglabs-iconset/)
`octicon`      | [GitHub Octicons](https://octicons.github.com/)
`openwebicons` | [OpenWeb Icons](http://pfefferle.github.io/openwebicons/)
`pf`           | [PaymentFont](http://paymentfont.io/)
`ratchicon`    | [Ratchicons](http://goratchet.com/components/#ratchicons)
`oi`           | [Open Iconic](https://useiconic.com/open/)
`st`           | [Stack Icons](http://stackicons.com/)
`typicon`      | [Typicons](http://typicons.com/)
`ui`           | [Semantic UI Icons](http://semantic-ui.com/elements/icon.html)

Examples:

* `fa-check`+`Tab` completes to `<i class="fa fa-check"></i>`
* `glyphicon-check`+`Tab` completes to `<span class="glyphicon glyphicon-check"></span>`
* `octicon-check`+`Tab` completes to `<span class="octicon octicon-check"></span>`
* well, you get the idea

## License

The MIT License ([see details](LICENSE.md))

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-icon-fonts) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
