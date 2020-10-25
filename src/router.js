import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Skills from "./views/Skills.vue";
import About from "./views/About.vue";
import Jobs from "./views/Jobs.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  scrollBehavior() {
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
      path: "/jobs",
      name: "jobs",
      component: Jobs,
      props: true
    },
    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () => import("./views/NotFound")
    }
  ]
});

export default router;
