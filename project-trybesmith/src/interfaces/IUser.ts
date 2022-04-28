export interface IUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUserId extends IUser {
  id: number;
}
