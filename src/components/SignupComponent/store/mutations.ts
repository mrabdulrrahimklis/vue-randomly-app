import { MutationTree } from "vuex";
import { ISignupState } from "@/components/SignupComponent/types";

export const mutations: MutationTree<ISignupState> = {
  setSignupUser(state, signupUser: any) {
    state.setSignupUser = signupUser;
  },
  errorLog(state, err: string) {
    state.errorLog = err;
  }
};
