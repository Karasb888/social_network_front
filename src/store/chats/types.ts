export enum ChatsActionTypes {
  SET_FETCH_STATUS = 'SET_FETCH_STATUS',
  SET_CHATS = 'SET_CHATS',
  UPDATE_CHAT = 'UPDATE_CHAT',
}

export type ChatObject = {
  lastMessage: {
    createdAt: number;
    userId: string;
    text: string;
  };
  chatInfo: {
    id: string;
    image: string | null;
    title: string | null;
  };
  unreadMessages: number;
  users: Array<{
    name: string;
    id: string;
    avatarUrl: string;
    status: string;
  }>;
};

export interface ChatsState {
  fetchStatus: string;
  chatsList: Array<ChatObject>;
}
