import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About")
  },
  {
    path: "/characters",
    name: "Characters",
    component: () => import("../views/Characters")
  },
  {
    path: "/character/new",
    name: "NewCharacter",
    component: () => import("../views/Character/New")
  },
  {
    path: "/character/:characterId",
    name: "Character",
    component: () => import("../views/Character/Details")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
