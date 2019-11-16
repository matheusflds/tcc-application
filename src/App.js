import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { TermList } from './components/TermList';
import { Topics } from './components/Topics';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={TermList} />
          <Route path='/topics/:term' component={Topics} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
