import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from 'components/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { socials } from 'content/socials';

import Button from 'components/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorWhite: {
    color: theme.palette.primary.white,
  },
  input: {
    margin: '10px 0px',
  },
  iconContainer: {
    display: 'flex',
    gap: '25px',
    margin: '15px 0px',
    justifyContent: 'center',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  social: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box component={Grid} container paddingX={{ sm: 2, md: 4 }}>
        <Grid item xs={12} md={6} className={classes.container}>
          <Box>
            <Typography variant="h3">
              <strong className={classes.colorPrimary}>Let's</strong>
              <strong className={classes.colorWhite}> Talk</strong>
            </Typography>
            <Typography variant="body1" className={classes.colorWhite}>
              Have any questions? Fell free to ask me ^^
            </Typography>
          </Box>
          <Box className={classes.social}>
            <Typography variant="h3" className={classes.colorPrimary}>
              <strong className={classes.colorPrimary}>Find</strong>
              <strong className={classes.colorWhite}> Me At</strong>
            </Typography>
            <Box className={classes.iconContainer}>
              {socials.map((item, index) => (
                <div key={index} className={classes.icon}>
                  {item.icon}
                </div>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField label="Name" variant="outlined" className={classes.input} fullWidth />
            <TextField label="Email" variant="outlined" className={classes.input} fullWidth />
            <TextField label="Messages" variant="outlined" className={classes.input} fullWidth multiline rows={4} />
            <Box display="flex" justifyContent="flex-end" marginTop={2}>
              <Button>Send</Button>
            </Box>
          </form>
        </Grid>
      </Box>
    </div>
  );
}
