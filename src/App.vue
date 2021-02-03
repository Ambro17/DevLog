<template>
  <div id="app">
    <router-view />
    <router-link to="/"></router-link>
    <router-link to="/posts"></router-link>
    <router-link to="/users"></router-link>
  </div>
</template>

<script>
// import BlogHome from './components/BlogHome.vue'

export default {
  name: 'App'
}
</script>