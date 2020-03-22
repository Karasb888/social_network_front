import { Dispatch } from 'redux';
import axios from 'axios';
import { ChatsActionTypes, ChatObject } from './types';

export const fetchChats = () => (dispatch: Dispatch): Promise<void> => {
  const apiEndpoint = `api/chats/`;
  dispatch({ type: ChatsActionTypes.SET_FETCH_STATUS, payload: 'pending' });

  return axios
    .post(apiEndpoint, {
      headers: {
        Authorization: 'Bearer 123',
        ContentType: 'application/json',
      },
    })
    .then(response => {
      const chats: Array<ChatObject> = response.data;

      dispatch({ type: ChatsActionTypes.SET_CHATS, payload: chats });
      dispatch({ type: ChatsActionTypes.SET_FETCH_STATUS, payload: 'success' });
    })
    .catch(() => {
      dispatch({
        type: ChatsActionTypes.SET_FETCH_STATUS,
        payload: 'error',
      });
    });
};

export const updateChat = (chat: ChatObject) => (dispatch: Dispatch): void => {
  dispatch({ type: ChatsActionTypes.UPDATE_CHAT, payload: chat });
};
