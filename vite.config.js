import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const createDocPlugin = require('./build/vite-plugin-doc');

export default defineConfig({
  plugins: [
    createDocPlugin(),
    vue({
      include: [ /\.vue$/, /\.md$/ ]
    })
  ],
  build: {
    outDir: 'site'
  }
});
