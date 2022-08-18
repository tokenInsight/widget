import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
const createDocPlugin = require('./build/vite-plugin-doc');

const plugins = [
  createDocPlugin(),
  vue({
    include: [ /\.vue$/, /\.md$/ ]
  })
];

if (process.env.NODE_ENV !== 'production'){
  plugins.push(createHtmlPlugin(
    {
      entry: '/demo/main-dev.js',
      template: 'index.html'
    }
  ));
}


export default defineConfig({
  plugins: plugins,
  build: {
    outDir: 'site'
  }
});
