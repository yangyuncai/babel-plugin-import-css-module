/**
 * @description - babel-plugin-import-css-module
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

// external
const types = require('babel-types');
const _ = require('lodash');

// strategy
const DefaultOptions = {
  rule: /\.css$/
};

module.exports = function () {
  return {
    visitor: {
      ImportDeclaration: {
        enter(path, state) {
          importCSSModule(path, _.assign({}, DefaultOptions, state.opts))
        }
      }
    }
  };
};

/**
 * @description - transform reference into json
 *
 * @param {object} path
 * @param {object} opts
 */
function importCSSModule(path, opts) {
  const value = path.node.source.value;
  const specifiers = path.node.specifiers;

  if (!_.isEmpty(specifiers)) {
    if (opts.rule.test(value)) {
      path.insertBefore(types.importDeclaration([], types.stringLiteral(`${value}`)));
      path.insertBefore(types.importDeclaration(specifiers, types.stringLiteral(`${value}.json`)));
      path.remove();
    }
  }
}
