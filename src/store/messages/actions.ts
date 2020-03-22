import { Dispatch } from 'redux';
import axios from 'axios';
import { MessagesActionTypes, MessageObject } from './types';

export const fetchMessages = () => (dispatch: Dispatch): Promise<void> => {
  const apiEndpoint = `api/messages/`;
  dispatch({ type: MessagesActionTypes.SET_FETCH_STATUS, payload: 'pending' });

  return axios
    .post(apiEndpoint, {
      headers: {
        Authorization: 'Bearer 123',
        ContentType: 'application/json',
      },
    })
    .then(response => {
      const messages: Array<MessageObject> = response.data;

      dispatch({ type: MessagesActionTypes.SET_MESSAGES, payload: messages });
      dispatch({
        type: MessagesActionTypes.SET_FETCH_STATUS,
        payload: 'success',
      });
    })
    .catch(() => {
      dispatch({
        type: MessagesActionTypes.SET_FETCH_STATUS,
        payload: 'error',
      });
    });
};

export const addMessage = (message: MessageObject) => (
  dispatch: Dispatch
): void => {
  dispatch({ type: MessagesActionTypes.ADD_MESSAGE, payload: message });
};
