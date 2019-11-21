import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import {
  AppBarStyled,
  Logo,
  ContentBoxStyled,
} from './GlobalStyles'
import {
  Toolbar,
  Container,
  Grid,
  Box,
  Typography,
} from '@material-ui/core';

import { TermList } from './components/TermList';
import { Topics } from './components/Topics';
import { SideMenu } from './components/SideMenu';

import logo from 'logo.png';

class App extends Component {

  render() {
    return (
      <>
        <AppBarStyled position='static'>
          <Toolbar>
            <Logo src={logo} />
            <Typography variant='h5'>
              <Box fontWeight="fontWeightLight">
                Argus
              </Box>
            </Typography>
          </Toolbar>
        </AppBarStyled>
        <Container maxWidth="lg">
          <BrowserRouter>
            <ContentBoxStyled container spacing={3}>
              <Grid item xs={2}>
                <SideMenu />
              </Grid>
              <Grid item xs={10}>
                <Switch>
                  <Route path='/' exact={true} component={TermList} />
                  <Route path='/topics/:term' component={Topics} />
                </Switch>
              </Grid>
            </ContentBoxStyled>
          </BrowserRouter>
        </Container>
      </>
    );
  }
}

export default App;
