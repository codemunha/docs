# CHANGELOG

![doc](https://img.shields.io/badge/doc-v2.1.0-fe7d37.svg)
![vue](https://img.shields.io/badge/vue-2.x-4fc08d.svg)
![iview](https://img.shields.io/badge/iview-4.0.2-2db7f5.svg)

> All notable changes to this project will be documented in this file.
>
>The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
>and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2019-11-22
### Changed
- Component `DslButton`'s style is more well-designed with prop `btn` - should not be customized easily.
- Component `DslButtonXXX` should be refactored to `DslButton` soon, so that maintenance is much easier.

## [2.0.3] - 2019-11-21
### Added
- Demo of component `DslInputEmail` with validation.
### Fixed
- `DslInputCid`'s validation.

## [2.0.2] - 2019-11-21
### Added
- New component: `DslDatePicker` *(`DslDate` may be deprecated soon.)*
### Changed
- Demo Calendar to **Date Picker**
- `code`'s styles problems *(from `Upload File` demo)* which override other pages.

## [2.0.1] - 2019-11-18
### Changed
- Fixed column checkbox and radio at the left of `DslTableCustom` component.
- Tooltip overflow styles (not completed.)
- Imported `CHANGELOG.md` as a component.
### Fixed
- Pushing routes with a correct version before Vue creates an instance.

## [2.0.0] - 2019-11-15
### Changed
- Used view-design (iview version 4.0) from dsl-core.
- Removed node-sass and sass-loader for better performance and maintenance.

## [1.0.5] - 2019-11-11
### Added
- Demo table with input which correctly updates data when input event is triggered.
- Demo input miscellaneous (see the code yourself.)

## [1.0.4] - 2019-11-08
### Added
- Demo input with custom button.

## [1.0.3] - 2019-11-07
### Added
- Demo DmsUpload.
### Changed
- Demo table custom style.
- `README.md`

## [1.0.2] - 2019-11-06 (16:27)
### Added
- This CHANGELOG!
- `CHANGELOG.md` which will be able to be loaded here in near future.
- Added `vue-markdown` to this project.

## [1.0.1] - 2019-11-06 (14:22)
### Added
* Demo of input components:
  * Upper Case
  * Eng
  * Thai
  * Address
  * Mobile Phone Number
  * Telephone Number

## [1.0.0] - 2019-11-06
### Added
- Version navigation of this document (e.g. 1.x, 2.x, etc.)

## [0.0.1] - 2019-11-01
### Added
- Demo of 5 basics components: auto complete, button, input, modal, and table (custom).