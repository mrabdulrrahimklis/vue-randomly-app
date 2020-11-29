import { MutationTree } from "vuex";
import { ILoginState } from "@/components/LoginComponent/types";

export const mutations: MutationTree<ILoginState> = {
  setLoginState(state, e: any) {
    state.loginState = e;
  },
  auth(state, auth: any) {
    state.auth = auth;
  },
  errorLog(state, err: string) {
    state.errorLog = err;
  }
};
