import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChatsListItem from './ChatsListItem';
import { ChatObject } from '../store/chats';

interface ChatsListProps {
  chats: Array<ChatObject>;
}

const useStyles = makeStyles(() => ({
  root: {},
}));

const ChatsList: React.FC<ChatsListProps> = props => {
  const { chats } = props;
  const classes = useStyles();

  return (
    <Grid className={classes.root} spacing={2} container>
      {chats.map(chat => (
        <Grid xs={12} item key={chat.chatInfo.id}>
          <ChatsListItem chat={chat} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ChatsList;
