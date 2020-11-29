import { RootState } from "@/store/RootState";
import { ILoginState } from "@/components/LoginComponent/types";
import { Module } from "vuex";
import { actions } from "@/components/LoginComponent/store/actions";
import { getters } from "@/components/LoginComponent/store/getters";
import { mutations } from "@/components/LoginComponent/store/mutations";

export const state: ILoginState = {
  loginState: null,
  auth: false,
  errorLog: ""
};

export const LOGIN_EVENT = "loginEvent";

const namespaced = true;

export const loginEvent: Module<ILoginState, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations
};
LOGIN_EVENT
