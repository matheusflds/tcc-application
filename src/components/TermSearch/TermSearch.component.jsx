import React from 'react';

import {
  Paper,
  Container,
  Grid,
  Typography,
  Box,
  TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import {
  SearchButtonStyled,
  AvatarStyled,
  TitleBoxStyled,
} from './TermSearch.styles';

export const TermSearch = (props) => {
  return(
    <Paper>
      <Container container>
        <Grid container>
          <Grid item xs={5}>
            <Grid container>
              <Grid item xs={2}>
                <AvatarStyled>
                  <EmojiEmotionsIcon />
                </AvatarStyled>
              </Grid>
              <Grid item xs={9}>
                <TitleBoxStyled>
                  <Typography variant="h5">
                    <Box fontWeight="fontWeightBold">Sentiment Analysis</Box>
                  </Typography>
                  <Typography variant="body1">
                    <Box fontWeight="fontWeightLight">English Tweets</Box>
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
                        To search for a term, fill the field below and click the button.
                        It will take about 3 minutes to complete the processing.
                        Additionally, you can click on a term within the word cloud below to see its results.
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField
                      id="standard-basic"
                      label="Term"
                      margin="normal"
                      onChange={props.inputChangedHandler}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <SearchButtonStyled
                      variant="contained"
                      color="primary"
                      endIcon={<SearchIcon />}
                      onClick={props.termSearchClickHandler}
                    >
                      Search
                    </SearchButtonStyled>
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
