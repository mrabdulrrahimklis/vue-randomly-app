import { IInfluencers } from "../../../data/types";

export interface ISelectInterfaceState {
  selectInfluencers: IInfluencers | null;
  errLog: string;
}
