<template>
<!-- This is an example component -->
<label class="flex items-center">
  <input class="relative w-10 h-5 transition-all duration-200 ease-in-out bg-gray-400 rounded-full shadow-inner outline-none appearance-none " type="checkbox" checked />
</label>
</template>

<style>
  input:before {
    content: '';
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: 0;
    left: 0;
    transform: scale(1.1);
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.2);
    background-color: white;
    transition: .2s ease-in-out;
  }

  input:checked {
    @apply: bg-indigo-400;
    background-color:#7f9cf5;
  }

  input:checked:before {
    left: 1.25rem;
  }
</style>