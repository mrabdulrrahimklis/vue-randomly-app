import { GetterTree } from "vuex";
import {
  ISignupObject,
  ISignupState
} from "@/components/SignupComponent/types";
import { RootState } from "@/store/RootState";

export const getters: GetterTree<ISignupState, RootState> = {
  getIsSignedUp(state): ISignupObject | null {
    return state.setSignupUser;
  },
  errorLog(state): any {
    return state.errorLog;
  }
};
