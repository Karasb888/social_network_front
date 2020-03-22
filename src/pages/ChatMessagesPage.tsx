import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import MessagesList from '../components/MessagesList';
import { MessagesState } from '../store/messages';
import { ApplicationState } from '../store';

interface ChatMessagesPageProps {
  messages: MessagesState;
}

const mapStateToProps = (state: ApplicationState): ChatMessagesPageProps => {
  return {
    messages: state.messages,
  };
};

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    marginTop: theme.spacing(2),
  },
}));

const ChatMessagesPage: React.FC<ChatMessagesPageProps> = ({ messages }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <MessagesList messages={messages.messagesList} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(ChatMessagesPage);
