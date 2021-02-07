import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/index.css';
import i18n from './i18n'

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')