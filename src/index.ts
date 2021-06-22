import { App, Plugin } from 'vue-demi';
import EditorComponent from './index.vue';
// export const VueVditor = EditorComponent;
export default {
  install(Vue: App) {
    Vue.component('VueVditor', EditorComponent);
  }
} as Plugin;
