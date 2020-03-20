import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UsersToolbar from '../components/UsersToolbar';
import UsersTable from '../components/UsersTable';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const UsersPage: React.FC = () => {
  const classes = useStyles();

  const [users] = useState([]);

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default UsersPage;
