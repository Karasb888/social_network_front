import { Dispatch } from 'redux';
import axios from 'axios';
import { UsersActionTypes, UserObject } from './types';

export const fetchUsers = (page: number, usersPerPage: number) => (
  dispatch: Dispatch
): Promise<void> => {
  const apiEndpoint = `api/users/`;
  dispatch({ type: UsersActionTypes.SET_FETCH_STATUS, payload: 'pending' });

  return axios
    .post(apiEndpoint, {
      body: JSON.stringify({
        page,
        usersPerPage,
      }),
      headers: {
        Authorization: 'Bearer 123',
        ContentType: 'application/json',
      },
    })
    .then(response => {
      const users: Array<UserObject> = response.data;

      dispatch({ type: UsersActionTypes.SET_USERS, payload: users });
      dispatch({ type: UsersActionTypes.SET_FETCH_STATUS, payload: 'success' });
    })
    .catch(() => {
      dispatch({
        type: UsersActionTypes.SET_FETCH_STATUS,
        payload: 'error',
      });
    });
};

export default fetchUsers;
