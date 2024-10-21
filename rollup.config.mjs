import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

const plugins = [
  nodeResolve(),
  typescript(),
  json(),
  babel(),
  terser()
];

export default [
  {
    input: 'src/spcbridge-card.ts',
    output: {
      name: 'spcbridge_card',
      format: 'iife',
      sourcemap: false,
      file: 'dist/spcbridge-card.js'
    },
    plugins: [...plugins],
    context: 'window'
  },
];
