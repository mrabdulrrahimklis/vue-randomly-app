export interface ISignupState {
  setSignupUser: ISignupObject | null;
  errorLog: string;
}

export interface ISignupObject {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  dateOfBirth: string;
}
