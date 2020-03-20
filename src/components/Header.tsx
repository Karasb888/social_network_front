import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import logo from '../images/logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
  },
  logo: {
    width: '110px',
    height: '60px',
    objectFit: 'cover',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
}));

export interface HeaderProps {
  onSidebarOpen: () => void;
}

const Header: React.FC<HeaderProps> = props => {
  const { onSidebarOpen } = props;

  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" src={logo} className={classes.logo} />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
