<template>
<label class="dark-mode-switcher flex items-center ml-1">
  <!-- Icon -->
  <a class="flex items-center text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-500" href="#">
    <svg 
      class="h-6 w-6 sm:h-6 sm:w-6"
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  </a>
  <!-- <a class="flex items-center text-gray-800 hover:text-indigo-600" href="#">
    <svg 
      class="h-6 w-6 sm:h-6 sm:w-6"
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor"
      viewBox="0 0 20 20"
      visibility="hidden" 
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  </a> -->

</label>
</template>

<style>
  input:before {
    content: '';
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: -0.05rem;
    left: 0.4rem;
    transform: scale(0.7);
    box-shadow: -0.5rem 0.1rem #fff;
    background-color: transparent;
    transition: .2s ease-in-out;
  }

  input:checked {
    @apply: bg-indigo-400;
    background-color: #312E81;
  }

  input:checked:before {
    left: 1.45rem;
  }
</style>