import babel from 'rollup-plugin-babel'
import multiEntry from 'rollup-plugin-multi-entry'

export default {
  entry: 'test/*_test.js',
  format: 'cjs',
  dest: 'test/test-bundle.js',
  sourceMap: true,
  external: [ 'ava' ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    multiEntry(),
  ],
}
