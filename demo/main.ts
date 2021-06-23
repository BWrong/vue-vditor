import { createApp } from 'vue';
import 'vditor/dist/index.css';
import VueVditor from '../lib/index.es.js';
// import VueVditor from '../src/index';
import App from './App.vue';
const app = createApp(App);
app.use(VueVditor);
app.mount('#app');
