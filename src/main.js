import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(fas);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(bootstrap)
  .mount('#app');