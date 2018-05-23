/**
 * @description - babel-plugin-import-css-module
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

// external
const types = require('babel-types');
// eslint-disable-next-line
const _ = require('lodash');

// strategy
const DefaultOptions = {
  rule: /\.p?css$/,
};

/**
 * @description - transform reference into json
 *
 * @param {object} path
 * @param {object} opts
 */
function importCSSModule(path, opts = {}) {
  const {
    specifiers,
    source: { value },
  } = path.node;
  const { rule } = opts;
  const filter = _.isString(rule) ? new RegExp(rule) : DefaultOptions.rule;

  if (!_.isEmpty(specifiers)) {
    if (filter.test(value)) {
      path.insertBefore(
        types.importDeclaration([], types.stringLiteral(`${value}`))
      );
      path.insertBefore(
        types.importDeclaration(
          specifiers,
          types.stringLiteral(`${value}.json`)
        )
      );
      path.remove();
    }
  }
}

module.exports = function babelPluginimportCSSModule() {
  return {
    visitor: {
      ImportDeclaration: {
        enter(path, state) {
          importCSSModule(path, state.opts);
        },
      },
    },
  };
};
