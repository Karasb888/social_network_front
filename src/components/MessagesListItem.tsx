import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent } from '@material-ui/core';
import { connect } from 'react-redux';
import { MessageObject } from '../store/messages';
import { CurrentUserState } from '../store/currentUser';
import { ApplicationState } from '../store';

interface StoreProps {
  currentUser: CurrentUserState;
}

interface MessagesListItemProps extends StoreProps {
  message: MessageObject;
}

const mapStateToProps = (state: ApplicationState): StoreProps => {
  return {
    currentUser: state.currentUser,
  };
};

const useStyles = makeStyles(theme => ({
  root: {},
  cardWrapper: {
    display: 'flex',
    padding: theme.spacing(1),
  },
}));

const MessagesListItem: React.FC<MessagesListItemProps> = ({
  message,
  currentUser,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.cardWrapper}>
      <Card>
        <CardContent>
          <Typography
            variant="body1"
            color={
              message.authorId === currentUser.info.id
                ? 'textPrimary'
                : 'textSecondary'
            }
          >
            {message.message}
          </Typography>
          <div>{message.createdAt}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default connect(mapStateToProps, null)(MessagesListItem);
