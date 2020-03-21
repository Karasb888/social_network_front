import React from 'react';
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

const users = [
  {
    avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: 1,
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: 2,
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: 3,
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: 4,
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: 5,
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: 6,
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
  {
    avatar: 'https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png',
    id: 7,
    name: 'Ivan Mazurenko',
    email: 'test@email.com',
    createdAt: 1584723863938,
  },
];

const UsersPage: React.FC = () => {
  const classes = useStyles();

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
