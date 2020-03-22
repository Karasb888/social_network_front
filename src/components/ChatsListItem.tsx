import * as React from 'react';
import {
  Badge,
  CardContent,
  Card,
  Avatar,
  Typography,
  Grid,
} from '@material-ui/core';
import dayjs from 'dayjs';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { ChatObject } from '../store/chats';

interface ChatsListItemProps {
  chat: ChatObject;
}

const useStyles = makeStyles(() => ({
  root: {},
  card: {
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '-1px 1px 7px 0px rgba(0,0,0,0.8)',
    },
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const ChatsListItem: React.FC<ChatsListItemProps> = props => {
  const { chat } = props;

  const classes = useStyles();
  const history = useHistory();

  const chatCardClickHandler = (): void => {
    history.push(`/chat/${chat.chatInfo.id}`);
  };

  const lastMessageAuthor = chat.users.find(
    user => user.id === chat.lastMessage.userId
  ).name;
  const chatPicture = chat.chatInfo.image
    ? chat.chatInfo.image
    : chat.users.find(user => user.id === chat.lastMessage.userId).avatarUrl;

  return (
    <Card onClick={chatCardClickHandler} className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={1}>
          <Grid xs={6} md={2} item>
            <Badge badgeContent={chat.unreadMessages} color="secondary">
              <Avatar src={chatPicture} />
            </Badge>
          </Grid>
          <Grid xs={6} md={4} item>
            <Typography>
              {chat.chatInfo.title ||
                `Chat members: ${chat.users.map((user, index) => {
                  return index + 1 !== chat.users.length
                    ? `${user.name}, `
                    : user.name;
                })}`}
            </Typography>
          </Grid>
          <Grid xs={12} md={5} item>
            <Typography>
              {`${lastMessageAuthor} : ${chat.lastMessage.text}`}
            </Typography>
          </Grid>
          <Grid xs={12} md={1} item>
            <Typography variant="body1">
              {dayjs(chat.lastMessage.createdAt).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ChatsListItem;
