import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
const { babel } = require('@rollup/plugin-babel')

export default defineConfig({
  // 需要安装babel
  plugins: [ vue(), VueSetupExtend(), dts() ],
  build: {
    target:"es2015",
    outDir: "lib",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "TokenInsightWidget",
      fileName: "TokenInsightWidget",
      formats: [ "umd" ],
    },
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: 'bundled'
        })
      ],
    }
  },
});
