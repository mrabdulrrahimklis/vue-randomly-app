import { MutationTree } from "vuex";
import { IPosts } from "@/components/NewsFeed/types";

export const mutations: MutationTree<IPosts> = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  errorLog(state): any {
    return state.errorLog;
  }
};
