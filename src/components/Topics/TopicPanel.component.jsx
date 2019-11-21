import React from 'react';

import {
  Typography,
  Grid,
  Paper,
} from '@material-ui/core';

import { TagCloud } from 'components/TagCloud';

export const TopicPanel = (props) => {
  const { value, index, cloudWidth, topic, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TagCloud
            words={topic}
            scale={1000}
            key={index}
            width={cloudWidth}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              Positive
            </Grid>
            <Grid item>
              Negative
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              Joy
            </Grid>
            <Grid item>
              Anger
            </Grid>
            <Grid item>
              Fear
            </Grid>
            <Grid item>
              Sadness
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Typography>
  );
}
