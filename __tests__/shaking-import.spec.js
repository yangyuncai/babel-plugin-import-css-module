/**
 * @description - sub-module import test suits
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

'use strict';

const path = require('path');
const babel = require('babel-core');
const ShakingImport = require('../src');

// fixture
const babelOptions = {
  presets: [],
  plugins: [],
  babelrc: false
};

describe('babel-plugin-import-css-module', function () {
  it('should support adaptor libraryStrategy', function () {
    const fixture = path.resolve(__dirname, '../__fixture__/lodash.js');
    const ShakingImportPlugin = [ShakingImport, {
      libraryName: 'lodash',
      libraryDirectory: '.',
      libraryStrategy: 'whatever'
    }];
    const caseBabelOptions = Object.assign({}, babelOptions, { plugins: [ShakingImportPlugin] });
    const { code } = babel.transformFileSync(fixture, caseBabelOptions);

    expect(code).toMatchSnapshot();
  });

});