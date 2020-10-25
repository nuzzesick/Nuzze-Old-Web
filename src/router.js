<<<<<<< HEAD
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Skills from "./views/Skills.vue";
import About from "./views/About.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills,
      props: true
    },
    {
      path: "/about",
      name: "about",
      component: About,
      props: true
    },
    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "NotFound" */
        "./views/NotFound")
    }
  ]
});

export default router;
=======
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Skills from "./views/Skills.vue";
import About from "./views/About.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
        return false;
      }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills,
      props: true
    },
    {
      path: "/about",
      name: "about",
      component: About,
      props: true
    },
    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "NotFound" */
        "./views/NotFound")
    }
  ]
});

export default router;
>>>>>>> 9a2eb25560739d16c6bea6b1f040dda76a62200f
