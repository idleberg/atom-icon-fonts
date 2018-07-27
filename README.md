# atom-icon-fonts

[![apm](https://img.shields.io/apm/l/icon-fonts.svg?style=flat-square)](https://atom.io/packages/icon-fonts)
[![apm](https://img.shields.io/apm/v/icon-fonts.svg?style=flat-square)](https://atom.io/packages/icon-fonts)
[![apm](https://img.shields.io/apm/dm/icon-fonts.svg?style=flat-square)](https://atom.io/packages/icon-fonts)
[![Travis](https://img.shields.io/travis/idleberg/atom-icon-fonts.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-icon-fonts)
[![David](https://img.shields.io/david/dev/idleberg/atom-icon-fonts.svg?style=flat-square)](https://david-dm.org/idleberg/atom-icon-fonts?type=dev)

**Note:** *As of v2.17, this package supports all __Font Awesome v5__ icons. If you need to continue the old __Font Awesome v4__ icons, please install the* [`icon-fonts-legacy`](https://github.com/idleberg/atom-icon-fonts-legacy) *package via `apm`!*

Atom snippets for a variety of icon fonts ([see details](https://github.com/idleberg/atom-icon-fonts#prefixes)).

This package is also available for [Sublime Text](https://github.com/idleberg/sublime-icon-fonts) and [Visual Studio Code](https://github.com/idleberg/vscode-icon-fonts).

## Installation

### apm

* Install package `apm install icon-fonts` (or use the GUI)

### Using Git

1. Change directory `cd ~/.atom/packages/`
2. Clone repository `git clone https://github.com/idleberg/atom-icon-fonts icon-fonts`

## Usage

Snippets are limited to the `.text.html`, `source.(css|less|sass|scss|stylus)` and `.source.js.jsx` scopes. Typing the class name of an icon using the designated prefix will complete to a tag containing the icon class. Exceptions are `fa-layers`, `fa-layers-counter`, `fa-layers-text` and `fa-layers` (`<span>`).

### Prefixes

Prefix            | Icon Font                               | Version | cdnjs | jsDelivr
------------------|-----------------------------------------|---------|-------|---------
`ai`              | [Android Icons][ai]                     | 1.0.0   | 🚫    | 🚫
`cc`              | [Creative Commons Icon Font][cc]        | 1.2.1   | ✅    | ✅
`bx`              | [BoxIcons][bx]                          | -       | 🚫    | 🚫
`dashicons`       | [WordPress Dashicons][dashicons]        | –       | 🚫    | 🚫
`devicons`        | [Devicons][devicons]                    | 1.8.0   | ✅    | ✅
`el`              | [Elusive Icons][el]                     | 2.0.0   | 🚫    | 🚫
`fas`,`far`,`fab` | [Font Awesome Pro][fa]                  | 5.2.0   | ✅    | ✅
`fi`              | [Foundation Icons][fi]                  | 3.0     | ✅    | ✅
`fl`              | [Font Logos][fl]                        | 0.11    | 🚫    | 🚫
`geomicon`        | [Geomicons Open][geomicon]              | 2.0.0   | 🚫    | ✅
`glyphicon`       | [Bootstrap Glyphicons][glyphicon]       | 3.3.7   | 🚫    | 🚫
`icono`           | [Icono][icono]                          | 1.3.0   | ✅    | 🚫
`ion`             | [Ionicons][ion]                         | 2.0.1   | 🚫    | 🚫
`mdi`             | [Material Design Icons][mdi]            | 2.4.85  | ✅    | 🚫
`mfg`             | [MFG Labs Iconset][mfg]                 | –       | 🚫    | 🚫
`mfizz`           | [Font Mfizz][mfizz]                     | 2.4.1   | ✅    | 🚫
`mio`             | [Material Design Icons (Official)][mio] | 3.0.1   | 🚫    | 🚫
`octicon`         | [GitHub Octicons][octicon]              | 4.1.0   | 🚫    | 🚫
`oi`              | [Open Iconic][oi]                       | 1.1.0   | 🚫    | ✅
`openwebicons`    | [OpenWeb Icons][openwebicons]           | 1.4.3   | ✅    | ✅
`pf`              | [PaymentFont][pf]                       | 1.2.5   | ✅    | 🚫
`ratchicon`       | [Ratchicons][ratchicon]                 | 2.0.2   | ✅    | ✅
`st`              | [Stack Icons][st]                       | 1.0.0   | 🚫    | 🚫
`typcn`           | [Typicons][typcn]                       | 2.0.7   | 🚫    | 🚫
`wi`              | [Weather Icons][wi]                     | 2.0.10  | ✅    | 🚫
`zmdi`            | [Material Design Iconic Font][zmdi]     | 2.2.0   | ✅    | 🚫

Several previously supported fonts have been removed and are now available in the [SVG icons](https://github.com/idleberg/atom-svg-icons) package or the icon fonts [legacy package](https://github.com/idleberg/atom-icon-fonts-legacy).

Examples:

* `fa-check`+<kbd>Tab</kbd> completes to `<i class="fa fa-check"></i>`
* `glyphicon-check`+<kbd>Tab</kbd> completes to `<span class="glyphicon glyphicons-check"></span>`
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

[ai]: https://github.com/opoloo/androidicons
[bx]: https://github.com/atisawd/boxicons
[cc]: https://github.com/cc-icons/cc-icons
[dashicons]: https://github.com/WordPress/dashicons
[devicons]: https://github.com/vorillaz/devicons
[el]: https://github.com/reduxframework/Elusive-Icons
[fa]: https://github.com/FortAwesome/Font-Awesome-Pro
[fi]: https://github.com/zurb/foundation-icons
[fl]: https://github.com/Lukas-W/font-linux
[geomicon]: https://github.com/jxnblk/geomicons-open
[glyphicon]: https://github.com/twbs/bootstrap/tree/v3.3.7
[icono]: https://github.com/saeedalipoor/icono
[ion]: https://github.com/driftyco/ionicons
[mdi]: https://github.com/Templarian/MaterialDesign-Webfont
[mfg]: https://github.com/MfgLabs/mfglabs-iconset
[mfizz]: https://github.com/fizzed/font-mfizz
[mio]: https://github.com/google/material-design-icons
[octicon]: https://github.com/primer/octicons/tree/v4.1.0
[oi]: https://github.com/iconic/open-iconic
[openwebicons]: https://github.com/pfefferle/openwebicons
[pf]: https://github.com/vendocrat/PaymentFont
[ratchicon]: http://github.com/twbs/ratchet
[st]: https://github.com/parkerbennett/stackicons
[typcn]: https://github.com/stephenhutchings/typicons.font
[wi]: https://github.com/erikflowers/weather-icons
[zmdi]: https://github.com/zavoloklom/material-design-iconic-font
