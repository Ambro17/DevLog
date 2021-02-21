<template>
<label class="dark-mode-switcher flex items-center ml-2">
  <div class="flex items-center text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-500">
    <button
      @click="toggleDarkMode"
      class="rounded focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      <svg
        class="h-6 w-6 sm:h-6 sm:w-6"
        v-if="dark"
        aria-label="Apply light theme"
        role="button"
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        />
      </svg>
      <svg 
        class="h-6 w-6 sm:h-6 sm:w-6"
        v-if="!dark"
        aria-label="Apply dark theme"
        role="button"
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg" 
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  </div>
</label>
</template>

<script>

export default {
  name: 'DarkModeSwitcher',
  data: function() {
      return {
        dark: document.documentElement.classList.contains('dark')
      }
  },
  methods: {
    toggleDarkMode() {
      this._updateState(this.dark)
      const isOnDarkMode = document.documentElement.classList.contains('dark')
      this._updateHTMLWithThemeChanges(isOnDarkMode)
    },
    _updateState(oldDarkValue) {
      this.dark = !oldDarkValue
      localStorage.dark = this.dark? 'true': 'false'
    },
    _updateHTMLWithThemeChanges(isOnDarkMode) {
      if (isOnDarkMode) {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
    }
  }
}
</script>
