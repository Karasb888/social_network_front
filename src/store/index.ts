import { combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { usersReducer, UsersState } from './users';
import { ChatsState, chatsReducer } from './chats';

export interface ApplicationState {
  users: UsersState;
  chats: ChatsState;
  router: RouterState;
}

export const createRootReducer = (
  history: History
): Reducer<ApplicationState> =>
  combineReducers({
    users: usersReducer,
    chats: chatsReducer,
    router: connectRouter(history),
  });
