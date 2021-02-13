<template>
<!-- This is an example component -->
<label class="flex items-center">
  <input 
      class="relative w-10 h-5 transition-all duration-200 ease-in-out bg-gray-400 rounded-full shadow-inner outline-none appearance-none " 
      type="checkbox" 
  />
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