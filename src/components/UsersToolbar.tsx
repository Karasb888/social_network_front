import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from './SearchInput';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  spacer: {
    flexGrow: 1,
  },
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
}));

const UsersToolbar: React.FC = () => {
  const classes = useStyles();

  const searchUserHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value;
    // eslint-disable-next-line no-console
    console.log(query);
  };

  return (
    <div>
      <div className={classes.row}>
        <SearchInput
          onChange={searchUserHandler}
          className={classes.searchInput}
          placeholder="Search user"
        />
      </div>
    </div>
  );
};

export default UsersToolbar;
