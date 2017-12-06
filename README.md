# babel-plugin-import-css-module
![Build Status](https://img.shields.io/travis/bornkiller/babel-plugin-import-css-module/master.svg?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/bornkiller/babel-plugin-import-css-module/badge.svg?branch=master)](https://coveralls.io/github/bornkiller/babel-plugin-import-css-module?branch=master)
![Package Dependency](https://david-dm.org/bornkiller/babel-plugin-import-css-module.svg?style=flat)
![Package DevDependency](https://david-dm.org/bornkiller/babel-plugin-import-css-module/dev-status.svg?style=flat)

Modular import plugin for babel, compatible with antd, antd-mobile, lodash, and so on.

## Changelog
+ `ShakingImportOptions` add property `libraryNameImport` since `v0.4.0`.
+ `ShakingImportOptions` property `style` transform into `libraryStyle`

## Usage
Install:

```shell
# npm
npm install babel-plugin-import-css-module --save-dev
# yarn
yarn add babel-plugin-import-css-module --dev
```

Add babel plugin:

```json
{
  "plugin": [
    ["import-css-module", {
    }]
  ]
}
```

## Example
```json
```

## Showcase

## License
MIT
