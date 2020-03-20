/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { List, colors, ListItem, Button } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import MessageIcon from '@material-ui/icons/Message';

import { NavLink } from 'react-router-dom';

export interface SidebarNavProps {
  className: string;
}

const pages = [
  {
    title: 'Users',
    href: '/users',
    icon: <PublicIcon />,
  },
  {
    title: 'Chats',
    href: '/chats',
    icon: <MessageIcon />,
  },
];

const useStyles = makeStyles(theme => ({
  root: {},
  navLink: {
    textDecoration: 'none',
    width: '100%',
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
  },
  icon: {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
}));

const SidebarNav: React.FC<SidebarNavProps> = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <List className={clsx(classes.root, className)}>
      {pages.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <NavLink exact className={classes.navLink} to={page.href}>
            <Button className={classes.button}>
              <div className={classes.icon}>{page.icon}</div>
              {page.title}
            </Button>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNav;
