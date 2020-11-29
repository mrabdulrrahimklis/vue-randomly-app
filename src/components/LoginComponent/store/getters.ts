import { GetterTree } from "vuex";
import { ILoginState } from "@/components/LoginComponent/types";
import { RootState } from "@/store/RootState";

export const getters: GetterTree<ILoginState, RootState> = {
  getLoginState(state): any {
    return state.loginState;
  },
  errorLog(state): string {
    return state.errorLog;
  }
};
