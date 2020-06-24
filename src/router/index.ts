import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Demo1 = () => import("../views/Demo1.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/demo1",
    name: "Demo1",
    component: Demo1
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
