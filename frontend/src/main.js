import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/index.css';
import i18n from './i18n'

new Vue({
  router,
  i18n,
  render: h => h(App),
  mounted: function() {
    const systemDarkPreferred = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkThemeChosen = localStorage.dark === 'true';
    const noThemeChosenYet = localStorage.dark === 'undefined';
    if (darkThemeChosen || (noThemeChosenYet && systemDarkPreferred)) {
      document.documentElement.classList.add('dark');
    }
  }
}).$mount('#app')