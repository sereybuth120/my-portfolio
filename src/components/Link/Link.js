import React from 'react';
import { makeStyles } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import { Link } from '@material-ui/core';

export const useLinkStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'underline',
    color: 'inherit',
    '&&:hover': {
      textDecoration: 'underline',
      color: 'inherit',
    },
  },
  withUnderline: {
    textDecoration: 'underline',
    textDecorationColor: theme.palette.secondary.main,
  },
  noUnderline: {
    textDecoration: 'none',
  },
  noUnderlineOnHover: {
    '&&:hover': {
      textDecoration: 'none',
    },
  },
}));

export default function MyLink({ newTab, href, target, rel, children, ...props }) {
  const classes = useLinkStyles();
  return (
    <>
      {newTab && (
        <a className={classes.root} href={href} target={target} rel={target} style={{ color: 'inherit' }} {...props}>
          {children}
        </a>
      )}
      {!newTab && (
        <Link to={href} style={{ color: 'inherit' }} {...props}>
          {children}
        </Link>
      )}
    </>
  );
}
