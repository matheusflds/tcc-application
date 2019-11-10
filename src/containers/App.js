import React, { Component } from 'react';
import './App.css';
// import WordCloud from 'wordcloud';
import { TermsList }from './terms/terms';

class App extends Component {

  render() {
    return (
      <TermsList />
    );
  }
}

export default App;
