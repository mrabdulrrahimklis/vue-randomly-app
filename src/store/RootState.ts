import { ISignupState } from "@/components/SignupComponent/types";
import { ILoginState } from "@/components/LoginComponent/types";
import { ISelectInterfaceState } from "@/views/SelectInfluencers/types";
import { IPosts } from "@/components/NewsFeed/types";

export interface RootState {
  version: string;
  signupEvent?: ISignupState;
  loginEvent?: ILoginState;
  influencers?: ISelectInterfaceState;
  postsList?: IPosts;
}
