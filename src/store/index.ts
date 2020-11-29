import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/RootState";
import { signupEvent } from "@/components/SignupComponent/store";
import { loginEvent } from "@/components/LoginComponent/store";
import { influencers } from "@/views/SelectInfluencers/store";
import { postsList } from "@/components/NewsFeed/store";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  plugins: [createPersistedState()],
  state: {
    version: "1.0.0"
  },
  modules: {
    signupEvent,
    loginEvent,
    influencers,
    postsList
  }
};

export default new Vuex.Store<RootState>(store);
