import React from 'react';

import {
  Grid,
  Typography,
  Box,
} from '@material-ui/core';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

import { EmotionImage, BorderLinearProgress } from './SentimentData.styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';

import joyImg from 'images/joy.png';
import angerImg from 'images/anger.png';
import fearImg from 'images/fear.png';
import sadnessImg from 'images/sadness.png';
import positiveImg from 'images/positive.png';
import negativeImg from 'images/negative.png';

import 'react-circular-progressbar/dist/styles.css';

export const SentimentData = (props) => {
  const { polarity, joy, anger, fear, sadness } = props;

  const getHexColor = (value) => {
    const string = value.toString(16);
    return (string.length === 1) ? '0' + string : string;
  }

  const r = Math.floor(255 - (polarity * 2.55));
  const g = Math.floor(polarity * 2.55);
  const colorHex = '#' + getHexColor(r) + getHexColor(g) + getHexColor(0);

  const reviewsPolarityLevel = () =>{
    if(polarity >= 90)
      return "Very Positive";
    else if(polarity >= 70)
      return "Positive";
    else if(polarity >= 60)
      return "Mostly Positive";
    else if(polarity >= 40)
      return "Mixed";
    else if(polarity >= 30)
      return "Mostly Negative";
    else if(polarity >= 10)
      return "Negative";
    else
      return "Very Negative";
  }

  return(
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item xs={2}>
                <Grid container justify="flex-end">
                  <EmotionImage src={negativeImg} />
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <BorderLinearProgress
                  variant="determinate"
                  color="secondary"
                  colorhex={colorHex}
                  value={polarity}
                />
              </Grid>
              <Grid item xs={2}>
                <Grid container justify="flex-start">
                  <EmotionImage src={positiveImg} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              <Box fontWeight="fontWeightBold" textAlign="center">
                {reviewsPolarityLevel()}
              </Box>
            </Typography>
            <Typography variant='body2'>
              <Box fontWeight="fontWeightLight" textAlign="center">
                tweets
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={2}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <CircularProgressbarWithChildren
                  value={joy}
                  circleRatio={0.75}
                  styles={buildStyles({
                    rotation: 1 / 2 + 1 / 8,
                    trailColor: "#eee",
                    pathColor: yellow[700],
                  })}
                >
                  <Typography variant='body1'>
                    <EmotionImage src={joyImg} />
                  </Typography>
                  <Typography variant='body2'>
                    <Box fontWeight="fontWeightLight">
                      Joy
                    </Box>
                  </Typography>
                  <Typography variant='body1'>
                    <Box fontWeight="fontWeightBold">
                      {`${joy}%`}
                    </Box>
                  </Typography>
                </CircularProgressbarWithChildren>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <CircularProgressbarWithChildren
              value={anger}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                trailColor: "#eee",
                pathColor: red[700],
              })}
            >
              <Typography variant='body1'>
                <EmotionImage src={angerImg} />
              </Typography>
              <Typography variant='body2'>
                <Box fontWeight="fontWeightLight">
                  Anger
                </Box>
              </Typography>
              <Typography variant='body1'>
                <Box fontWeight="fontWeightBold">
                  {`${anger}%`}
                </Box>
              </Typography>
            </CircularProgressbarWithChildren>
          </Grid>
          <Grid item xs={2}>
            <CircularProgressbarWithChildren
              value={fear}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                trailColor: "#eee",
                pathColor: grey[800],
              })}
            >
              <Typography variant='body1'>
                <EmotionImage src={fearImg} />
              </Typography>
              <Typography variant='body2'>
                <Box fontWeight="fontWeightLight">
                  Fear
                </Box>
              </Typography>
              <Typography variant='body1'>
                <Box fontWeight="fontWeightBold">
                  {`${fear}%`}
                </Box>
              </Typography>
            </CircularProgressbarWithChildren>
          </Grid>
          <Grid item xs={2}>
            <CircularProgressbarWithChildren
              value={sadness}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                trailColor: "#eee",
                pathColor: blue[500],
              })}
            >
              <Typography variant='body1'>
                <EmotionImage src={sadnessImg} />
              </Typography>
              <Typography variant='body2'>
                <Box fontWeight="fontWeightLight">
                  Sadness
                </Box>
              </Typography>
              <Typography variant='body1'>
                <Box fontWeight="fontWeightBold">
                  {`${sadness}%`}
                </Box>
              </Typography>
            </CircularProgressbarWithChildren>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
