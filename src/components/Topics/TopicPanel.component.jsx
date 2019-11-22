import React from 'react';

import {
  Typography,
  Grid,
  Box,
} from '@material-ui/core';

import { TagCloud } from 'components/TagCloud';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

import { EmotionImage, BorderLinearProgress } from './TopicPanel.styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';

import 'react-circular-progressbar/dist/styles.css';

import joy from 'images/joy.png';
import anger from 'images/anger.png';
import fear from 'images/fear.png';
import sadness from 'images/sadness.png';
import positive from 'images/positive.png';
import negative from 'images/negative.png';

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
      return "Very Positive";
    else if(props.polarity >= 70)
      return "Positive";
    else if(props.polarity >= 60)
      return "Mostly Positive";
    else if(props.polarity >= 40)
      return "Mixed";
    else if(props.polarity >= 30)
      return "Mostly Negative";
    else if(props.polarity >= 10)
      return "Negative";
    else
      return "Very Negative";
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
              <Grid container justify="center">
                <Grid item xs={2}>
                  <Grid container justify="flex-end">
                    <EmotionImage src={negative} />
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <BorderLinearProgress
                    variant="determinate"
                    color="secondary"
                    colorhex={colorHex}
                    value={props.polarity}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Grid container justify="flex-start">
                    <EmotionImage src={positive} />
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
                    value={props.joy}
                    circleRatio={0.75}
                    styles={buildStyles({
                      rotation: 1 / 2 + 1 / 8,
                      trailColor: "#eee",
                      pathColor: yellow[700],
                    })}
                  >
                    <Typography variant='body1'>
                      <EmotionImage src={joy} />
                    </Typography>
                    <Typography variant='body2'>
                      <Box fontWeight="fontWeightLight">
                        Joy
                      </Box>
                    </Typography>
                    <Typography variant='body1'>
                      <Box fontWeight="fontWeightBold">
                        {`${props.joy}%`}
                      </Box>
                    </Typography>
                  </CircularProgressbarWithChildren>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <CircularProgressbarWithChildren
                value={props.anger}
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  trailColor: "#eee",
                  pathColor: red[700],
                })}
              >
                <Typography variant='body1'>
                  <EmotionImage src={anger} />
                </Typography>
                <Typography variant='body2'>
                  <Box fontWeight="fontWeightLight">
                    Anger
                  </Box>
                </Typography>
                <Typography variant='body1'>
                  <Box fontWeight="fontWeightBold">
                    {`${props.anger}%`}
                  </Box>
                </Typography>
              </CircularProgressbarWithChildren>
            </Grid>
            <Grid item xs={2}>
              <CircularProgressbarWithChildren
                value={props.fear}
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  trailColor: "#eee",
                  pathColor: grey[800],
                })}
              >
                <Typography variant='body1'>
                  <EmotionImage src={fear} />
                </Typography>
                <Typography variant='body2'>
                  <Box fontWeight="fontWeightLight">
                    Fear
                  </Box>
                </Typography>
                <Typography variant='body1'>
                  <Box fontWeight="fontWeightBold">
                    {`${props.fear}%`}
                  </Box>
                </Typography>
              </CircularProgressbarWithChildren>
            </Grid>
            <Grid item xs={2}>
              <CircularProgressbarWithChildren
                value={props.sadness}
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  trailColor: "#eee",
                  pathColor: blue[500],
                })}
              >
                <Typography variant='body1'>
                  <EmotionImage src={sadness} />
                </Typography>
                <Typography variant='body2'>
                  <Box fontWeight="fontWeightLight">
                    Sadness
                  </Box>
                </Typography>
                <Typography variant='body1'>
                  <Box fontWeight="fontWeightBold">
                    {`${props.sadness}%`}
                  </Box>
                </Typography>
              </CircularProgressbarWithChildren>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Typography>
  );
}
