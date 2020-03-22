import { Reducer } from 'redux';
import { ChatsState, ChatsActionTypes } from './types';

export const initialState: ChatsState = {
  chatsList: [],
  fetchStatus: 'none',
};

const reducer: Reducer<ChatsState> = (state = initialState, action) => {
  switch (action.type) {
    case ChatsActionTypes.SET_FETCH_STATUS: {
      return { ...state, fetchStatus: action.payload };
    }
    case ChatsActionTypes.SET_CHATS: {
      return { ...state, chatsList: [...action.payload] };
    }
    case ChatsActionTypes.UPDATE_CHAT: {
      return {
        ...state,
        chatsList: state.chatsList.map(chat => {
          return chat.chatInfo.id === action.payload.chatInfo.id
            ? action.payload
            : chat;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as chatsReducer };
