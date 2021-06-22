import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
const libName = pkg.name;
const banner = `/* libName: ${libName} version: ${pkg.version} author: ${pkg.author} */`;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // createVuePlugin({})
  ],
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  server: {
    open: true
  },
  build: {
    target: 'es2015',
    outDir: 'lib', // 输出目录
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VueVditor',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue-demi','vditor','vue'],
      // plugins: [],
      output: {
        banner,
        // exports: 'auto',
        //sourcemap: true,
        globals: {
          'vue-demi': 'VueDemi',
          vue: 'Vue',
          vditor: 'Vditor'
        }
      }
    }
  }
});
