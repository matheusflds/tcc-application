import React, { Component } from 'react';

import { TermSearch } from './TermSearch.component';

export class TermSearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
    };
  }

  termSearchClickHandler = () => {
    if(this.state.searchTerm) {
      alert(this.state.searchTerm);
    }
  };

  inputChangedHandler = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    return (
      <TermSearch
        inputChangedHandler={this.inputChangedHandler}
        termSearchClickHandler={this.termSearchClickHandler}
      />
    );
  }
}
