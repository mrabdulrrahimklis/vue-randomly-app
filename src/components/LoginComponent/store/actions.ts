import { ActionTree } from "vuex";
import { ILoginObject, ILoginState } from "@/components/LoginComponent/types";
import { RootState } from "@/store/RootState";
import axios, { AxiosResponse } from "axios";
import { baseurl } from "@/helpers/constants";
import { RouteName } from "@/router/types";
import router from "@/router";

export const actions: ActionTree<ILoginState, RootState> = {
  login(context, loginObject: ILoginObject) {
    axios
      .post(`${baseurl}auth/login/`, loginObject)
      .then((response: AxiosResponse) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));

        context.commit("setLoginState", response.data);
        context.commit("auth", true);

        if (response.data.user.hasSelectedInfluencers) {
          router.push({ name: RouteName.HomeView });
        } else {
          router.push({ name: RouteName.SelectInfluencerView });
        }
      })
      .catch(err => {
        context.commit("auth", false );
        context.commit("errorLog", err);
      });
  },
  logout(context) {
    // @TODO: Need to fix Logout route
    router.push({ name: RouteName.Login });
    axios
      .post(`${baseurl}logout/`)
      .then(() => {
        router.push({ name: RouteName.Login });
      })
      .catch(err => {
        context.commit("errorLog", err);
      });
  }
};
