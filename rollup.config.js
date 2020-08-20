import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import {uglify} from 'rollup-plugin-uglify';
import banner from 'rollup-plugin-banner';
import json from 'rollup-plugin-json';
import pkg from './package.json';
import merge from 'webpack-merge';

let year = new Date().getFullYear(),
    version = pkg.version;

let bannerText = `yocee v${version}
(c) 2019-${year} yocss https://github.com/yocss/yocee.git
License: MIT
Released on: Aug 20, 2020`;

let config = {
  input: 'src/index.ts',
  output: {
    name:'yocee',
    file: 'dist/yocee.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs({
      include: /node_modules/
    }),
    json(),
    typescript(),
    banner(bannerText),
  ]
};

let [min, es, cjs] = [merge({}, config), merge({}, config), merge({}, config)];

min.output.file = 'dist/yocee.min.js';
min.plugins.unshift(uglify());

es.output.file = 'dist/yocee.es.js';
es.output.format = 'es';

cjs.output.file = 'dist/yocee.cjs.js';
cjs.output.format = 'cjs';

export default [config, min, es, cjs];