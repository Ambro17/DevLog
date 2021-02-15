<template>
    <header 
      class="
        topbar 
        bg-white 
        shadow 
        border-t-4 
        border-indigo-600
        dark:border-indigo-500
        dark:bg-gray-800
        "
    >
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Left Side -->
          <div>
            <a class="
              flex items-center 
              text-gray-800 
              dark:text-gray-100 
              hover:text-indigo-600 
              dark:hover:text-indigo-500" href="#"
            >
              <svg class="h-6 w-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="mx-3 font-medium text-sm md:text-base">Nahuel Ambrosini</span>
            </a>
          </div>


          <!-- Right Side -->
          <div class="flex items-center -mx-2">

            <!-- Home -->
            <router-link :to="`/`" class="flex items-center mx-2 
              text-gray-800 
              dark:text-gray-100 
              hover:text-indigo-600 
              dark:hover:text-indigo-500"
            >
              <svg 
                class="h-5 w-5 sm:h-6 sm:w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </router-link>

            <!-- Posts -->
            <router-link :to="`/${$i18n.locale}/posts`" class="flex items-center mx-2 
                text-gray-800 
                dark:text-gray-100 
                hover:text-indigo-600 
                dark:hover:text-indigo-500"
            >
                <svg 
                  class="h-5 w-5 sm:h-6 sm:w-6" 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            </router-link>

            <!-- Lang switcher -->
            <LangSwitcher />

            <!-- Dark Mode Toggle -->
            <DarkModeSwitcher />

          </div>
        </div>
      </div>
      <!-- Just a shadow on the bottom part of the header to give a depth ilusion -->
      <div class="
          spacer-between-header-and-about 
          border-b-2
          shadow-lg
          border-gray"
      />
    </header>
</template>
<script>
import LangSwitcher from './LangSwitcher.vue'
import DarkModeSwitcher from './DarkModeSwitcher.vue'

export default {
    components: {
      LangSwitcher,
      DarkModeSwitcher
    }
}
</script>