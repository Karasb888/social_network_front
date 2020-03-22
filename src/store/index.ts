import { combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { usersReducer, UsersState } from './users';
import { ChatsState, chatsReducer } from './chats';
import { MessagesState, messagesReducer } from './messages';

export interface ApplicationState {
  users: UsersState;
  chats: ChatsState;
  messages: MessagesState;
  router: RouterState;
}

export const createRootReducer = (
  history: History
): Reducer<ApplicationState> =>
  combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    chats: chatsReducer,
    router: connectRouter(history),
  });
