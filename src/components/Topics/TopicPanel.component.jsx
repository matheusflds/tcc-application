import React from 'react';

import {
  Typography,
  Grid,
} from '@material-ui/core';

import { TagCloud } from 'components/TagCloud';
import { SentimentData } from 'components/SentimentData';

export const TopicPanel = (props) => {
  const { value, index, cloudWidth, topic, polarity, joy, anger, fear, sadness, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Grid container>
        <Grid item xs={12}>
          <TagCloud
            words={topic}
            scale={1000}
            key={index}
            width={cloudWidth}
            height={300}
          />
        </Grid>
        <Grid item xs={12}>
          <SentimentData
            polarity={polarity}
            joy={joy}
            anger={anger}
            fear={fear}
            sadness={sadness}
          />
        </Grid>
      </Grid>
    </Typography>
  );
}
