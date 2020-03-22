import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ChatsList from '../components/ChatsList';
import { ChatsState } from '../store/chats';
import { ApplicationState } from '../store';

interface ChatsPageProps {
  chats: ChatsState;
}

const mapStateToProps = (state: ApplicationState): ChatsPageProps => {
  return {
    chats: state.chats,
  };
};

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    marginTop: theme.spacing(2),
  },
}));

const ChatsPage: React.FC<ChatsPageProps> = ({ chats }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <ChatsList chats={chats.chatsList} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(ChatsPage);
