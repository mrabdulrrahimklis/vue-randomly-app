import { ActionTree } from "vuex";
import { IPosts } from "@/components/NewsFeed/types";
import { RootState } from "@/store/RootState";
import axios, { AxiosResponse } from "axios";
import { baseurl } from "@/helpers/constants";
import { getAuthHeader } from "@/services/authHeader";

export const actions: ActionTree<IPosts, RootState> = {
  fetchPosts(context) {
    axios
      .get(`${baseurl}posts/`, { headers: { ...getAuthHeader() } })
      .then((response: AxiosResponse) =>
        context.commit("setPosts", response.data)
      )
      .catch(err => {
        context.commit("errorLog", err);
      });
  },
  createPost(context, post) {
    axios
      .post(`${baseurl}posts/`, post, { headers: { ...getAuthHeader() } })
      .then((response: AxiosResponse) => {
        context.commit("createPost", response.data);
      })
      .catch(err => {
        context.commit("errorLog", err);
      });
  },
  createComment(context, comment) {
    axios
      .post(`${baseurl}post-comments/`, comment, {
        headers: { ...getAuthHeader() }
      })
      .then((response: AxiosResponse) => {
        context.commit("createComment", response.data);
      })
      .catch(err => {
        context.commit("errorLog", err);
      });
  },
  likePost(context, likePost) {
    axios
      .post(`${baseurl}post-likes/`, likePost, {
        headers: { ...getAuthHeader() }
      })
      .catch(err => {
        context.commit("errorLog", err);
      });
  },
  updateLike(context, likedData) {
    context.commit("setPosts", likedData);
  }
};
