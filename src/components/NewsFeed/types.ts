export interface IPosts {
  posts: IListOfPost | null;
  errorLog: string;
}

export interface IListOfPost {
  count: number;
  next: string;
  previous: number | null | string;
  results: IResults;
}

export interface IResults {
  id: number;
  isLikedByUser: string;
  user: IUserPost;
  likesCount: string;
  commentsCount: number;
  image: string;
  isShare: boolean;
  originalPost: string;
  text: string;
  url: string;
  urlMeta: string;
  createdOn: string;
}

export interface IUserPost {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  coverImage: null | string;
  country: string;
  city: string;
  jobTitle: string;
  isFollowing: boolean;
}
