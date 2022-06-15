import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  // 需要安装babel
	plugins: [ vue() ,dts()],
	build: {
		outDir: 'lib',
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'TokenInsightWidget',
			fileName: 'TokenInsightWidget',
			formats: ['umd' ]
		},
	}

});
