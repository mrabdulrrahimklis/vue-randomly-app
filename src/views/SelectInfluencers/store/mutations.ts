import { MutationTree } from "vuex";
import { ISelectInterfaceState } from "@/views/SelectInfluencers/types";

export const mutations: MutationTree<ISelectInterfaceState> = {
  setInfluencers(state, influencers) {
    state.selectInfluencers = influencers;
  }
};
