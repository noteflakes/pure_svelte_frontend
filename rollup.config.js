import svelte from 'rollup-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    name: 'my_bundle'
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
    // see NOTICE below
    resolve({
      browser: true,
      exportConditions: ['svelte'],
      extensions: ['.svelte']
    }),
    css({
      output: 'bundle.css'
    })
    // ...
  ]
}
