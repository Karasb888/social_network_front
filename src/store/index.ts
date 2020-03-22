import { combineReducers, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { usersReducer, UsersState } from './users';
import { ChatsState, chatsReducer } from './chats';
import { MessagesState, messagesReducer } from './messages';
import { currentUserReducer, CurrentUserState } from './currentUser';

export interface ApplicationState {
  users: UsersState;
  chats: ChatsState;
  currentUser: CurrentUserState;
  messages: MessagesState;
  router: RouterState;
}

export const createRootReducer = (
  history: History
): Reducer<ApplicationState> =>
  combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
    messages: messagesReducer,
    chats: chatsReducer,
    router: connectRouter(history),
  });
