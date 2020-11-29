import { RootState } from "@/store/RootState";
import { Module } from "vuex";
import { ISelectInterfaceState } from "@/views/SelectInfluencers/types";
import { actions } from "@/views/SelectInfluencers/store/actions";
import { mutations } from "@/views/SelectInfluencers/store/mutations";
import { getters } from "@/views/SelectInfluencers/store/getters";

export const state: ISelectInterfaceState = {
  selectInfluencers: null,
  errLog: ""
};

export const CHOOSE_INFLUENCER = "influencers";

const namespaced = true;

export const influencers: Module<ISelectInterfaceState, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations
};
