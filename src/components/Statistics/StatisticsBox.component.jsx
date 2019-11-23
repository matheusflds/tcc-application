import React from 'react';

import {
  Grid,
  Paper,
  Typography,
  Box,
  Container,
} from '@material-ui/core';

import { AvatarStyled, TitleBoxStyled } from './Statistics.styles';

export const StatisticsBox = (props) => {
  const { children, title, count, countLabel, icon } = props

  return(
    <Paper>
      <Container container>
        <Grid container>
          <Grid item xs={5}>
            <Grid container>
              <Grid item xs={2}>
                <AvatarStyled>
                  {icon}
                </AvatarStyled>
              </Grid>
              <Grid item xs={9}>
                <TitleBoxStyled>
                  <Typography variant="h5">
                    <Box fontWeight="fontWeightBold">{title}</Box>
                  </Typography>
                  <Typography variant="body1">
                    <Box fontWeight="fontWeightLight">{count} {countLabel}</Box>
                  </Typography>
                </TitleBoxStyled>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Container container>
              <TitleBoxStyled>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="body1">
                      <Box fontWeight="fontWeightLight">
                        {children}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </TitleBoxStyled>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
