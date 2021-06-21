import { createApp } from 'vue';
import '../lib/style.css'
import VueVditor from '../lib/vue-vditor.es.js';
// import VueVditor from '../src/index';
import App from './App.vue';
const app = createApp(App);
app.use(VueVditor);
app.mount('#app');
