import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Paper, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export interface SearchInputProps {
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexBasis: 420,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px',
  },
}));

const SearchInput: React.FC<SearchInputProps> = props => {
  const { className, onChange, placeholder } = props;

  const classes = useStyles();

  return (
    <Paper className={clsx(classes.root, className)}>
      <SearchIcon className={classes.icon} />
      <Input
        placeholder={placeholder}
        className={classes.input}
        disableUnderline
        onChange={onChange}
      />
    </Paper>
  );
};

export default SearchInput;
