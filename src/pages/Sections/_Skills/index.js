import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SkillItem from './SkillItem';
import { skillsContent, otherSkillsContent, toolsContent } from 'content/skills';

const useStyles = makeStyles((theme) => ({
  root: {},
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorWhite: {
    color: theme.palette.primary.white,
  },
  title: {
    textAlign: 'center',
    margin: '35px 0 10px 0',
  },
}));

export default function Skill() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          <strong>
            <span className={classes.colorWhite}>My Professional</span>{' '}
            <span className={classes.colorPrimary}>Skillset</span>
          </strong>
        </Typography>
      </Grid>
      {skillsContent.map((item, index) => (
        <SkillItem key={index} name={item.name} value={item.value} icon={item.icon} />
      ))}
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          <strong>
            <span className={classes.colorWhite}>My Other</span> <span className={classes.colorPrimary}>Skillset</span>
          </strong>
        </Typography>
      </Grid>
      {otherSkillsContent.map((item, index) => (
        <SkillItem key={index} name={item.name} value={item.value} icon={item.icon} />
      ))}
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          <strong>
            <span className={classes.colorPrimary}>Tools</span> <span className={classes.colorWhite}>I Used</span>
          </strong>
        </Typography>
      </Grid>
      {toolsContent.map((item, index) => (
        <SkillItem key={index} name={item.name} value={item.value} icon={item.icon} />
      ))}
    </Grid>
  );
}
