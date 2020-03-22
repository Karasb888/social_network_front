export enum UsersActionTypes {
  SET_FETCH_STATUS = 'SET_FETCH_STATUS',
  SET_USERS = 'SET_USERS',
}

export type UserObject = {
  id: string;
  name: string;
  createdAt: number;
  email: string;
  avatarUrl: string;
};

export interface UsersState {
  fetchStatus: string;
  usersList: Array<UserObject>;
}
