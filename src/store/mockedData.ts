export const mockedUsers = [
  {
    avatarUrl:
      'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: '1',
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatarUrl:
      'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: '2',
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatarUrl:
      'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: '3',
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatarUrl:
      'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: '4',
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatarUrl:
      'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: '5',
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatarUrl:
      'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: '6',
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatarUrl:
      'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: '7',
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
];

export const mockedChats = [
  {
    lastMessage: {
      createdAt: 1584723863938,
      userId: '1',
      text: 'Some text of last message',
    },
    chatInfo: {
      id: '1',
      image: 'wetwetwet',
      title: 'Title of chat',
    },
    unreadMessages: 12,
    users: [
      {
        name: 'Ivan Mazurenko',
        id: '1',
        avatarUrl: '1242125125',
        status: 'online',
      },
      {
        name: 'Vlad Kekov',
        id: '2',
        avatarUrl: '1242125125',
        status: 'online',
      },
    ],
  },
  {
    lastMessage: {
      createdAt: 1584723863938,
      userId: '2',
      text: 'Some text of last message',
    },
    chatInfo: {
      id: '2',
      image: 'wetwetwet',
      title: 'Title of chat',
    },
    unreadMessages: 12,
    users: [
      {
        name: 'Ivan Mazurenko',
        id: '1',
        avatarUrl: '1242125125',
        status: 'online',
      },
      {
        name: 'Vlad Kekov',
        id: '2',
        avatarUrl: '1242125125',
        status: 'online',
      },
    ],
  },
  {
    lastMessage: {
      createdAt: 1584723863938,
      userId: '1',
      text: 'Some text of last message',
    },
    chatInfo: {
      id: '3',
      image: null,
      title: null,
    },
    unreadMessages: 12,
    users: [
      {
        name: 'Ivan Mazurenko',
        id: '1',
        avatarUrl: '1242125125',
        status: 'online',
      },
      {
        name: 'Vlad Kekov',
        id: '2',
        avatarUrl: '1242125125',
        status: 'online',
      },
    ],
  },
];

export const mockedMessages = [
  {
    createdAt: 1584723863938,
    authorId: '1',
    message: 'Some test message',
    chatId: '1',
    id: '1',
  },
  {
    createdAt: 1584723863910,
    authorId: '2',
    message: 'Some we ew test message',
    chatId: '1',
    id: '2',
  },
  {
    createdAt: 1584723863810,
    authorId: '1',
    message: 'Some ths test message',
    chatId: '1',
    id: '3',
  },
];

export const mockedCurrentUser = {
  registerAt: 1584723863910,
  name: 'Ivan Mazurenko',
  id: '1',
  email: 'ivan@mazurenko.com',
  avatarUrl: 'wetwegfwegtwet',
  status: 'online',
};
