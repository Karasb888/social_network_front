import { Reducer } from 'redux';
import { MessagesState, MessagesActionTypes } from './types';

export const initialState: MessagesState = {
  messagesList: [],
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
