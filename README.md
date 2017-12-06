# babel-plugin-import-css-module
![Build Status](https://img.shields.io/travis/bornkiller/babel-plugin-import-css-module/master.svg?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/bornkiller/babel-plugin-import-css-module/badge.svg?branch=master)](https://coveralls.io/github/bornkiller/babel-plugin-import-css-module?branch=master)
![Package Dependency](https://david-dm.org/bornkiller/babel-plugin-import-css-module.svg?style=flat)
![Package DevDependency](https://david-dm.org/bornkiller/babel-plugin-import-css-module/dev-status.svg?style=flat)

solution for develop component with css module, which full of uncertainty.

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
    ["import-css-module"]
  ]
}
```

## Example
```javascript
import style, { liberty } from './mascot.css';
```

```javascript
import './mascot.css';
import style, { liberty } from './mascot.css.json';"
```


## License
MIT
