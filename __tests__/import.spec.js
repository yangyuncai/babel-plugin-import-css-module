/**
 * @description - import css module
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

const path = require('path');
const babel = require('babel-core');
const ImportCSSModule = require('../src');

// fixture
const babelOptions = {
  presets: [],
  plugins: [],
  babelrc: false
};

describe('babel-plugin-import-css-module', function () {
  it('should insert json', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/mascot.js');
    const Plugins = [ImportCSSModule];
    const specBabelOptions = Object.assign({}, babelOptions, { plugins: Plugins });
    const { code } = babel.transformFileSync(fixture, specBabelOptions);

    expect(code).toMatchSnapshot();
  });

});
