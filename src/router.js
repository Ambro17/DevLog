import Vue from "vue";
import VueRouter from 'vue-router'

import BlogHome from "./components/BlogHome.vue";
import BlogPost from "./components/BlogPost.vue";
import BlogListing from "./components/BlogListing.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: BlogHome
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
