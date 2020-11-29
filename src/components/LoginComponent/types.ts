export interface ILoginState {
  loginState: ILoginObject | null;
  auth: boolean | null;
  errorLog: string;
}

export interface ILoginObject {
  token: string;
  user: IUser;
}

export interface IUser {
  id: string;
  username: string;
  firstName: string;
  dateOfBirth: null;
  lastName: string;
  isInfluencer: boolean;
  profileImage: string | null;
  coverImage: string | null;
  hasSelectedInfluencers: boolean;
  country: string;
  city: string;
  bio: string;
  jobTitle: string;
  numberOfFollowers: number;
  numberOfFollowings: number;
}
