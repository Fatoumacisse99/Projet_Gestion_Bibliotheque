import App from './App.vue';
import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



createApp(App).mount('#app')
App.use(router);