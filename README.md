# babel-plugin-import-css-module

![Build Status](https://img.shields.io/travis/coco-platform/babel-plugin-import-css-module/master.svg?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/coco-platform/babel-plugin-import-css-module/badge.svg?branch=master)](https://coveralls.io/github/coco-platform/babel-plugin-import-css-module?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/coco-platform/babel-plugin-import-css-module.svg)](https://greenkeeper.io/)
![Package Dependency](https://david-dm.org/coco-platform/babel-plugin-import-css-module.svg?style=flat)
![Package DevDependency](https://david-dm.org/coco-platform/babel-plugin-import-css-module/dev-status.svg?style=flat)

solution for develop component with css module.

## Usage

Install:

```shell
# npm
npm install @coco-platform/babel-plugin-import-css-module --save-dev
# yarn
yarn add @coco-platform/babel-plugin-import-css-module --dev
```

Add babel plugin:

```json
{
  "plugin": [
    [
      [
        "@coco-platform/import-css-module",
        {
          "rule": "\\.pcss$"
        }
      ]
    ]
  ]
}
```

## Example

```javascript
import styles, { liberty } from './mascot.css';
```

```javascript
import './mascot.css';
import styles, { liberty } from './mascot.css.json';
```

## License

MIT
