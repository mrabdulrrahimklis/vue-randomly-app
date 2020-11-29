import { ISignupState } from "@/components/SignupComponent/types";
import { Module } from "vuex";
import { RootState } from "@/store/RootState";
import { actions } from "../store/actions";
import { getters } from "../store/getters";
import { mutations } from "../store/mutations";

export const state: ISignupState = {
  setSignupUser: null,
  errorLog: ""
};

export const SIGNUP_EVENT = "signupEvent";

const namespaced = true;

export const signupEvent: Module<ISignupState, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations
};
