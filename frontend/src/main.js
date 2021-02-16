import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/index.css';
import i18n from './i18n'

// DarkMode Mixin
const darkModeMixin = {
  created() {
    // If user has chosen dark theme OR, it hasn't chosen dark theme, but prefers it on a system level
    // Then enable it by adding a parent with 'dark' class
    // See https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
    const systemDarkPreferred = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkThemeChosen = localStorage.dark === 'true';
    const noThemeChosenYet = localStorage.dark === undefined;
    if (darkThemeChosen || (noThemeChosenYet && systemDarkPreferred)) {
      document.documentElement.classList.add('dark');
    }
  }
}

new Vue({
  router,
  i18n,
  render: h => h(App),
  mixins: [darkModeMixin],
}).$mount('#app')