import Vue from "vue";
import VueRouter from 'vue-router'

import Home from "./components/Home.vue";
import BlogPost from "./components/BlogPost.vue";
import BlogListing from "./components/BlogListing.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/post",
    name: "post",
    component: BlogPost
  },
  {
    path: "/posts",
    name: "posts",
    component: BlogListing
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
