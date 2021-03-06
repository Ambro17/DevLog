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

const isSwitchingLanguage = function(from, to)  {
  return from.params.lang != to.params.lang  
}

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from) {
    // By default, vue-router changes pages
    // but at the same scroll height, which
    // isn't the desired default.
    // So on every router-link, we scroll to top
    if (isSwitchingLanguage(from, to)) {
      // When switching languages we don't
      // Want to move the user from what 
      // (s)he is reading
      return      
    }
    else {
      return { x: 0, y: 0 };
    }
  }
});

// Set locale based on url string
router.beforeEach((to, from, next) => {
  i18n.locale = to.params.lang? to.params.lang : 'en';
  next()
})

export default router;
