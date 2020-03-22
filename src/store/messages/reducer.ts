import { Reducer } from 'redux';
import { MessagesState, MessagesActionTypes } from './types';
import { mockedMessages } from '../mockedData';

export const initialState: MessagesState = {
  messagesList: mockedMessages,
  fetchStatus: 'none',
};

const reducer: Reducer<MessagesState> = (state = initialState, action) => {
  switch (action.type) {
    case MessagesActionTypes.SET_FETCH_STATUS: {
      return { ...state, fetchStatus: action.payload };
    }
    case MessagesActionTypes.SET_MESSAGES: {
      return { ...state, messagesList: [...action.payload] };
    }
    default: {
      return state;
    }
  }
};

export { reducer as messagesReducer };
