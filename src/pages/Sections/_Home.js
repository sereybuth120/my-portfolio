import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    height: '100%',
    color: 'white',
    padding: '0 5rem'
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
            about
          </Grid>
          <Grid item xs={6}>
            image
          </Grid>
        </Grid>
    </div>
  );
};

export default Home;
