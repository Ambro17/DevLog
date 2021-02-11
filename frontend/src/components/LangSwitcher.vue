<template>
  <div class="relative icons_button ml-1">
    <!-- Button -->
    <button
      href="#"
      class="flex items-center"
      @click="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
    >
        <svg class="h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
    </button>
    <!-- Button -->
    <transition name="dropdown-fade">
      <ul 
        v-on-clickaway="hideDropdown" 
        v-if="isVisible" 
        ref="dropdown" 
        class="absolute normal-case z-30 font-normal xs:left-0 lg:right-0 bg-white shadow overflow-hidden rounded w-24 border mt-2 py-1 lg:z-20"
      >
        <li>
          <a
            href="#"
            @click.prevent="setLocale('en')"
            class="flex items-center px-2 py-2 hover:bg-gray-200"
          >
            <span class="">🇺🇸 EN</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="setLocale('es')"
            class="flex items-center px-2 py-2 hover:bg-gray-200"
          >
            <span class="">🇦🇷 AR</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [ clickaway ],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }

  }
}
</script>

<style scoped>
  .dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>
