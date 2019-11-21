import React from 'react';

import {
  Typography,
  Grid,
  Box,
} from '@material-ui/core';
import Gauge from 'react-svg-gauge';

import { TagCloud } from 'components/TagCloud';

export const TopicPanel = (props) => {
  const { value, index, cloudWidth, topic, ...other } = props;

  const getHexColor = (value) => {
    const string = value.toString(16);
    return (string.length === 1) ? '0' + string : string;
  }

  const r = Math.floor(255 - (props.polarity * 2.55));
  const g = Math.floor(props.polarity * 2.55);
  const colorHex = '#' + getHexColor(r) + getHexColor(g) + getHexColor(0);

  const reviewsPolarityLevel = () =>{
    if(props.polarity >= 90)
      return "Overwhelmingly Positive";
    else if(props.polarity >= 80)
      return "Very Positive";
    else if(props.polarity >= 70)
      return "Positive";
    else if(props.polarity >= 60)
      return "Mostly Positive";
    else if(props.polarity >= 40)
      return "Mixed";
    else if(props.polarity >= 25)
      return "Mostly Negative";
    else
      return "Negative";
  }

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
            height={250}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Gauge
                    label={null}
                    value={props.polarity}
                    width={200}
                    height={130}
                    color={colorHex}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Grid item>
                  <Typography variant='body2'>
                    <Box fontWeight="fontWeightBold">
                      {reviewsPolarityLevel()}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
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
