import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MessagesListItem from './MessagesListItem';

interface MessageListProps {
  messages: Array<any>;
}

const useStyles = makeStyles(() => ({
  root: {},
}));

const MessageList: React.FC<MessageListProps> = props => {
  const { messages } = props;

  const classes = useStyles();

  return (
    <Grid className={classes.root} spacing={1} container>
      {messages.map(message => (
        <Grid xs={12} item key={message.id}>
          <MessagesListItem message={message} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MessageList;
