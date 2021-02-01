import Vue from "vue";
import VueRouter from 'vue-router'

import BlogHome from "./components/BlogHome.vue";
import BlogPost from "./components/BlogPost.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: BlogHome
  },
  {
    path: "/users",
    name: "users",
    component: BlogPost
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
