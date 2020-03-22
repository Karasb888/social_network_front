import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChatsList from '../components/ChatsList';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    marginTop: theme.spacing(2),
  },
}));

const chats = [
  {
    lastMessage: {
      createdAt: 1584723863938,
      userId: 'wett23523523523rwe',
      text: 'Some text of last message',
    },
    chatInfo: {
      id: '1241245sd1325dwetr',
      image: 'wetwetwet',
      title: 'Title of chat',
    },
    unreadMessages: 12,
    users: [
      {
        name: 'Ivan Mazurenko',
        id: '1251251dwedfwerf',
        avatarUrl: '1242125125',
        status: 'online',
      },
      {
        name: 'Vlad Kekov',
        id: 'wett23523523523rwe',
        avatarUrl: '1242125125',
        status: 'online',
      },
    ],
  },
  {
    lastMessage: {
      createdAt: 1584723863938,
      userId: 'wett23523523523rwe',
      text: 'Some text of last message',
    },
    chatInfo: {
      id: '12412412451225dwetr',
      image: 'wetwetwet',
      title: 'Title of chat',
    },
    unreadMessages: 12,
    users: [
      {
        name: 'Ivan Mazurenko',
        id: '1251251dwedfwerf',
        avatarUrl: '1242125125',
        status: 'online',
      },
      {
        name: 'Vlad Kekov',
        id: 'wett23523523523rwe',
        avatarUrl: '1242125125',
        status: 'online',
      },
    ],
  },
  {
    lastMessage: {
      createdAt: 1584723863938,
      userId: 'wett23523523523rwe',
      text: 'Some text of last message',
    },
    chatInfo: {
      id: '1241245125dw124etr1',
      image: null,
      title: null,
    },
    unreadMessages: 12,
    users: [
      {
        name: 'Ivan Mazurenko',
        id: 'wett23523523523rwe',
        avatarUrl: '1242125125',
        status: 'online',
      },
      {
        name: 'Vlad Kekov',
        id: '125125134dwedfwerf',
        avatarUrl: '1242125125',
        status: 'online',
      },
    ],
  },
];

const ChatsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <ChatsList chats={chats} />
      </div>
    </div>
  );
};

export default ChatsPage;
