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
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
            <Typography variant='h6'>Nome</Typography>
          </Toolbar>
        </AppBarStyled>
        <Container maxWidth="lg">
          <BrowserRouter>
            <ContentBoxStyled container spacing={3}>
              <Grid item xs={2}>
                <SideMenu />
              </Grid>
              <Grid item xs={10}>
                <Paper>
                  <Switch>
                    <Route path='/' exact={true} component={TermList} />
                    <Route path='/topics/:term' component={Topics} />
                  </Switch>
                </Paper>
              </Grid>
            </ContentBoxStyled>
          </BrowserRouter>
        </Container>
      </>
    );
  }
}

export default App;
