export enum MessagesActionTypes {
  SET_FETCH_STATUS = 'SET_FETCH_STATUS',
  SET_MESSAGES = 'SET_MESSAGES',
  ADD_MESSAGE = 'ADD_MESSAGE',
}

export type MessageObject = {
  createdAt: number;
  authorId: string;
  message: string;
  chatId: string;
  id: string;
};

export interface MessagesState {
  fetchStatus: string;
  messagesList: Array<MessageObject>;
}
