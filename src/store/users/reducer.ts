import { Reducer } from 'redux';
import { UsersState, UsersActionTypes } from './types';

export const initialState: UsersState = {
  usersList: [],
  fetchStatus: 'none',
};

const reducer: Reducer<UsersState> = (state = initialState, action) => {
  switch (action.type) {
    case UsersActionTypes.SET_FETCH_STATUS: {
      return { ...state, fetchStatus: action.payload };
    }
    case UsersActionTypes.SET_USERS: {
      return { ...state, usersList: [...action.payload] };
    }
    default: {
      return state;
    }
  }
};

export { reducer as usersReducer };
