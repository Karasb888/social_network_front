import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer } from '@material-ui/core';
import Profile from './Profile';
import SidebarNav from './SidebarNav';

export interface SidebarProps {
  onClose: () => void;
  open: boolean;
  variant: 'persistent' | 'temporary' | 'permanent';
}

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    padding: '15px',
    boxSizing: 'border-box',
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar: React.FC<SidebarProps> = props => {
  const { open, variant, onClose } = props;

  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
