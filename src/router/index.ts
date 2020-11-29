import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { RouteName, RoutePath } from "@/router/types";
import HomeView from "@/views/Home/HomeView.vue";
import LoginView from "@/views/Login/LoginView.vue";
import SignupView from "@/views/Signup/SignupView.vue";
import SelectInfluencerView from "@/views/SelectInfluencers/SelectInfluencerView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: RoutePath.HomeView,
    name: RouteName.HomeView,
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") !== "") {
        next();
      } else {
        next({ name: RouteName.Login });
      }
    }
  },
  {
    path: RoutePath.Login,
    name: RouteName.Login,
    component: LoginView
  },
  {
    path: RoutePath.Signup,
    name: RouteName.Signup,
    component: SignupView
  },
  {
    path: RoutePath.SelectInfluencerView,
    name: RouteName.SelectInfluencerView,
    component: SelectInfluencerView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
