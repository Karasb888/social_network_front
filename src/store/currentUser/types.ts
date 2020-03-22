export enum CurrentUserActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SET_FETCH_STATUS = 'SET_FETCH_STATUS',
  UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER',
}

export type CurrentUserObject = {
  registerAt: number;
  name: string;
  id: string;
  email: string;
  avatarUrl: string;
  status: string;
};

export interface CurrentUserState {
  fetchStatus: string;
  info: CurrentUserObject;
}
