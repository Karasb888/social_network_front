import { Dispatch } from 'redux';
import axios from 'axios';
import { UsersActionTypes, UserObject } from './types';

const requestOptions = {
  headers: {
    Authorization: 'Bearer 123',
    ContentType: 'application/json',
  },
};

export const fetchUsers = () => (dispatch: Dispatch): Promise<void> => {
  const apiEndpoint = `api/users/${124125325}`;
  dispatch({ type: UsersActionTypes.SET_FETCH_STATUS, payload: 'pending' });

  return axios
    .post(apiEndpoint, requestOptions)
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
