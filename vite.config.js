import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
    // 需要安装babel
    plugins: [vue()],
    build: {
        outDir: 'lib',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'TokenInsightWidget',
            fileName: 'TokenInsightWidget',
            formats: ['es', 'umd']
        }
    }
});
