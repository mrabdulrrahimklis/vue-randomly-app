import { ActionTree } from "vuex";
import { RootState } from "@/store/RootState";
import { ISelectInterfaceState } from "@/views/SelectInfluencers/types";

export const actions: ActionTree<ISelectInterfaceState, RootState> = {
  setInfluencers(context, influencer) {
    // axios.get().then().catch()
    // route is broke
    context.commit("setInfluencers", influencer);
  },
  postChoosedInfluencers(context, listIdsOfInfluencers) {
    // axios.post().then().catch()
    // route is broke
  }
};
