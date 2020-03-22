import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import UsersToolbar from '../components/UsersToolbar';
import UsersList from '../components/UsersList';
import { UsersState } from '../store/users';
import { ApplicationState } from '../store';

interface UsersPageProps {
  users: UsersState;
}

const mapStateToProps = (state: ApplicationState): UsersPageProps => {
  return {
    users: state.users,
  };
};

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    marginTop: theme.spacing(2),
  },
}));

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersList users={users.usersList} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(UsersPage);
