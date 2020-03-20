import { combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { usersReducer, UsersState } from './users';

export interface ApplicationState {
  users: UsersState;
  router: RouterState;
}

export const createRootReducer = (
  history: History
): Reducer<ApplicationState> =>
  combineReducers({
    users: usersReducer,
    router: connectRouter(history),
  });
