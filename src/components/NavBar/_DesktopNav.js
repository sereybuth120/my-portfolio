import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import { TopNavData } from './_TopNavData';
import Link, { useLinkStyles } from 'components/Link/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    background: theme.palette.primary.dark,
  },
  logo: {
    // width: '119px',
  },
  navWrapper: {
    width: '100%',
  },
  nav: {
    width: '100%',
    color: 'white',
    '&& a': {
      display: 'block',
      padding: '0 16px',
      lineHeight: 'inherit',
      cursor: 'pointer',
    },
    '&& ul': {
      listStyle: 'none',
      padding: 0,
      marginBottom: 0,
    },
  },
  navMenu: {
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navMenuItem: {
    position: 'relative',
    color: theme.palette.primary.white,
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&:active': {
      color: theme.palette.primary.main,
    },
  },
}));

const DesktopNav = () => {
  const classes = useStyles();
  const linkClasses = useLinkStyles();
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <h6>logo</h6>
            <Box className={classes.navWrapper}>
              <nav className={classes.nav}>
                <ul className={classes.navMenu}>
                  {TopNavData.map((item, index) => (
                    <li key={index} className={classes.navMenuItem}>
                      <Link href={item.href} className={linkClasses.noUnderlineOnHover}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNav;
