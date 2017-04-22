import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-js-harmony'

export default {
  entry: 'src/index.js',
  targets: [
    { dest: 'dist/bundle.cjs.js', format: 'cjs' },
    { dest: 'dist/bundle.es.js', format: 'es' },
  ],
  sourceMap: true,
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    eslint(),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify({}, minify)),
  ],
}
