import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Button from 'components/Button';
import { constants } from 'content/constants';
import Avatar from 'assets/Icons/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorWhite: {
    color: theme.palette.primary.white,
  },
  buttonWrapper: {
    display: 'flex',
    margin: '10px 0 30x 0',
    gap: '20px',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box component={Grid} container paddingX={{ sm: 2, md: 4 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" className={classes.colorWhite}>
            Hello There 👋
          </Typography>
          <Box marginY={3}>
            <Typography variant="h3" display="inline" className={classes.colorWhite}>
              I'm
            </Typography>
            <Typography variant="h3" display="inline" className={classes.colorPrimary}>
              <strong> Sereybuth Hout</strong>
            </Typography>
          </Box>
          <Typography variant="h4" display="inline" noWrap className={classes.colorPrimary}>
            <strong>Web Developer </strong>
          </Typography>
          <Typography variant="h5" display="inline" className={classes.colorWhite}>
            &&
          </Typography>
          <Typography variant="h4" display="inline" className={classes.colorPrimary}>
            <strong> Web Designer</strong>
          </Typography>
          <Box paddingTop={5} paddingRight={5}>
            <Typography variant="body1" className={classes.colorWhite} gutterBottom paragraph>
              A little bit about my self, Im <span className={classes.colorPrimary}> 21</span> a year olds kid who moved
              from <span className={classes.colorPrimary}> Battambang</span> to the big city to find a better
              opportunity for my self. I'm Currently a senior at
              <span className={classes.colorPrimary}> Royal University of Phnom Penh</span> majoring in{' '}
              <span className={classes.colorPrimary}> Computer Sentence</span>. And right now Im working as a junior{' '}
              <span className={classes.colorPrimary}>Associate Software Engineer</span> at an awesome company call{' '}
              <a
                href={constants.href.JAKSMOK}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.colorPrimary}
              >
                JAKSMOK.
              </a>
              <br />
              Also a big fan of Star Wars and Anime XD
            </Typography>
          </Box>
          <div className={classes.buttonWrapper}>
            <Button>Resume</Button>
            <Button>Contact</Button>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="center" alignItems="center" height="80%" paddingTop={{ xs: 3 }}>
            <Avatar />
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
