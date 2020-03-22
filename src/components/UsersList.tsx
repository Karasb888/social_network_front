import React, { useState } from 'react';
import dayjs from 'dayjs';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  TablePagination,
  Grid,
} from '@material-ui/core';
import { UserObject } from '../store/users';

interface UsersTableProps {
  users: Array<UserObject>;
}

const useStyles = makeStyles(theme => ({
  root: {},
  actions: {
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
  },
  bottomCard: {
    marginTop: theme.spacing(2),
  },
}));

const UsersList: React.FC<UsersTableProps> = props => {
  const { users } = props;

  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (
    _e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newPage: number
  ): void => {
    setPage(Number(newPage));
  };

  const handleRowsPerPageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRowsPerPage(Number(e.target.value));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {users.map(user => (
          <Grid key={user.id} component="div" item xs={12} md={6} lg={4}>
            <Card>
              <CardContent className={classes.cardContent}>
                <Avatar className={classes.avatar} src={user.avatarUrl}>
                  {user.name}
                </Avatar>
                <div>
                  <Typography variant="body1">{user.name}</Typography>
                  <Typography variant="body1">{user.email}</Typography>
                  <Typography variant="body1">
                    {dayjs(user.createdAt).format('DD/MM/YYYY')}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Card className={classes.bottomCard}>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={users.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPerPageChange}
            page={page}
            labelRowsPerPage="Users per page"
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[10, 25, 50]}
          />
        </CardActions>
      </Card>
    </div>
  );
};

export default UsersList;
