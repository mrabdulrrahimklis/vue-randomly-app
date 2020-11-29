import { GetterTree } from "vuex";
import { IPosts } from "@/components/NewsFeed/types";
import { RootState } from "@/store/RootState";

export const getters: GetterTree<IPosts, RootState> = {
  getPosts(state) {
    return state.posts;
  },
  errorLog(state): any {
    return state.errorLog;
  }
};
