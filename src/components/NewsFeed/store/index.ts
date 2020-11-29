import { RootState } from "@/store/RootState";
import { Module } from "vuex";
import { IPosts } from "@/components/NewsFeed/types";
import { actions } from "@/components/NewsFeed/store/actions";
import { mutations } from "@/components/NewsFeed/store/mutations";
import { getters } from "@/components/NewsFeed/store/getters";

export const state: IPosts = {
  posts: null,
  errorLog: ""
};

export const POSTS_LIST = "postsList";

const namespaced = true;

export const postsList: Module<IPosts, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations
};
