import { GetterTree } from "vuex";
import { ISelectInterfaceState } from "@/views/SelectInfluencers/types";
import { RootState } from "@/store/RootState";

export const getters: GetterTree<ISelectInterfaceState, RootState> = {
  getInfluencers(state) {
    return state.selectInfluencers;
  }
};
