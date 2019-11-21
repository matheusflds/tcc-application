import React from 'react';

import {
  Paper,
  Container,
  Grid,
  Typography,
  Box,
} from '@material-ui/core';
import CommentSharpIcon from '@material-ui/icons/CommentSharp';

import {
  AvatarStyled,
  TitleBoxStyled,
} from './TermDetails.styles';

export const TermDetails = (props) => {
  return(
    <Paper>
      <Container container>
        <Grid container>
          <Grid item xs={5}>
            <Grid container>
              <Grid item xs={2}>
                <AvatarStyled>
                  <CommentSharpIcon />
                </AvatarStyled>
              </Grid>
              <Grid item xs={9}>
                <TitleBoxStyled>
                  <Typography variant="h5">
                    <Box fontWeight="fontWeightBold">{props.term}</Box>
                  </Typography>
                  <Typography variant="body1">
                    <Box fontWeight="fontWeightLight">{props.tweetsCount} tweets</Box>
                  </Typography>
                </TitleBoxStyled>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
