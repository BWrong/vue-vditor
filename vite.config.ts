import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
import dts from 'rollup-plugin-dts';
const libName = pkg.name;
const banner = `/* libName: ${libName} version: ${pkg.version} author: ${pkg.author} */`;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  server: {
    open: true
  },
  build: {
    target: 'es2015',
    outDir: 'lib', // 输出目录
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VueVditor'
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue-demi','vditor','nanoid','vue'],
      // plugins:[dts()],
      output: {
        name: libName,
        banner,
        exports: 'auto',
        sourcemap: true,
        globals: {
          'vue-demi': 'VueDemi',
          'Vditor': 'Vditor',
          'vue': 'vue',
          'nanoid': 'nanoid',
        }
      }
    }
  }
});
