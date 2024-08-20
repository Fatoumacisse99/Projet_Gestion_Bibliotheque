import App from './App.vue';
import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';



createApp(App).mount('#app')
App.use(router);