import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
 
export default {
  input: 'dist/index.js',
  output: [
    {
      file: 'lib/bundle.js',
      format: 'cjs'
    },
    {
      format: 'cjs',
      file: 'lib/bundle.min.js',
      plugins: [terser()]
    },
    {
      format: 'esm',
      file: 'lib/bundle.esm.js'
    }
  ],
  plugins: [
    commonjs(),
    typescriptPaths()
  ]
};