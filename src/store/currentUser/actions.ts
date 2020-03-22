import { Dispatch } from 'redux';
import axios from 'axios';
import { CurrentUserActionTypes, CurrentUserObject } from './types';

export const fetchChats = () => (dispatch: Dispatch): Promise<void> => {
  const apiEndpoint = `api/current-user/`;
  dispatch({
    type: CurrentUserActionTypes.SET_FETCH_STATUS,
    payload: 'pending',
  });

  return axios
    .post(apiEndpoint, {
      headers: {
        Authorization: 'Bearer 123',
        ContentType: 'application/json',
      },
    })
    .then(response => {
      const user: CurrentUserObject = response.data;

      dispatch({
        type: CurrentUserActionTypes.SET_CURRENT_USER,
        payload: user,
      });
      dispatch({
        type: CurrentUserActionTypes.SET_FETCH_STATUS,
        payload: 'success',
      });
    })
    .catch(() => {
      dispatch({
        type: CurrentUserActionTypes.SET_FETCH_STATUS,
        payload: 'error',
      });
    });
};

export const updateCurrentUserInfo = (user: CurrentUserObject) => (
  dispatch: Dispatch
): void => {
  dispatch({ type: CurrentUserActionTypes.UPDATE_CURRENT_USER, payload: user });
};
