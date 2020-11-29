import { ActionTree } from "vuex";
import { ISignupState } from "@/components/SignupComponent/types";
import { RootState } from "@/store/RootState";
import axios from "axios";
import { baseurl } from "@/helpers/constants.ts";

export const actions: ActionTree<ISignupState, RootState> = {
  signUp(context, signupObject) {
    axios
      .post(`${baseurl}auth/signup/`, signupObject)
      .then((response: any) => {
        console.log("action");
        context.commit("setSignupUser", response.data);
      })
      .catch(err => {
        context.commit("errorLog", err);
      });
  }
};
