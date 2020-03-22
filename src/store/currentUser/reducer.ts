import { Reducer } from 'redux';
import { CurrentUserActionTypes, CurrentUserState } from './types';
import { mockedCurrentUser } from '../mockedData';

export const initialState: CurrentUserState = {
  info: mockedCurrentUser,
  fetchStatus: 'none',
};

const reducer: Reducer<CurrentUserState> = (state = initialState, action) => {
  switch (action.type) {
    case CurrentUserActionTypes.SET_FETCH_STATUS: {
      return { ...state, fetchStatus: action.payload };
    }
    case CurrentUserActionTypes.SET_CURRENT_USER: {
      return { ...state, info: { ...action.payload } };
    }
    case CurrentUserActionTypes.UPDATE_CURRENT_USER: {
      return { ...state, info: { ...action.payload } };
    }
    default: {
      return state;
    }
  }
};

export { reducer as currentUserReducer };
