import Vue from "vue";
import VueRouter from 'vue-router'

import Home from "./components/Home.vue";
import BlogPost from "./components/BlogPost.vue";
import BlogListing from "./components/BlogListing.vue";
import i18n from "./i18n";


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
      path: '/:lang',
      component: {
        render(c) {return c('router-view')}
      },
      children: [
        {
          path: "",
          name: "home",
          component: Home
        },
        {
          path: "post",
          name: "post",
          component: BlogPost
        },
        {
          path: "posts",
          name: "posts",
          component: BlogListing
        }
      ]
    }
];

const router = new VueRouter({
  mode: "history",
  routes
});

// Set locale based on url string
router.beforeEach((to, from, next) => {
  i18n.locale = to.params.lang? to.params.lang : 'en';
  next()
})

export default router;
