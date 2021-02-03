<template>
  <div id="app">
    <router-view />
    <router-link to="/"></router-link>
    <router-link to="/posts"></router-link>
    <router-link to="/post"></router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>