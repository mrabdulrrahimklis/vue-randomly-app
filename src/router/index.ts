import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from "vue-router";
import { RouteName, RoutePath } from "@/router/types";
import HomeView from "@/views/Home/HomeView.vue";
import LoginView from "@/views/Login/LoginView.vue";
import SignupView from "@/views/Signup/SignupView.vue";
import SelectInfluencerView from "@/views/SelectInfluencers/SelectInfluencerView.vue";

Vue.use(VueRouter);

const isLoggedIn = (to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  let isAuthed = false;

  if (localStorage.getItem("token")) isAuthed = true;
  else isAuthed = false;

  if (isAuthed) {
    next();
  } else {
    next({ name: RouteName.Login });
  }
};

const routes: Array<RouteConfig> = [
  {
    path: RoutePath.HomeView,
    name: RouteName.HomeView,
    component: HomeView,
    beforeEnter: (to: Route, from: Route, next: NavigationGuardNext<Vue>) =>
      isLoggedIn(to, from, next)
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
    component: SelectInfluencerView,
    beforeEnter: (to: Route, from: Route, next: NavigationGuardNext<Vue>) =>
      isLoggedIn(to, from, next)
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
