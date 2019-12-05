import React, { Component } from 'react';
import { toast } from 'react-toastify';

import { TermSearch } from './TermSearch.component';

import { termSearch } from 'data/term.data';

export class TermSearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
    };
  }

  termSearchClickHandler = async () => {
    if(this.state.searchTerm) {
      const { message } = await termSearch(this.state.searchTerm);
      toast.info(message);
      this.setState({ searchTerm: null });
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
        searchTerm={this.state.searchTerm}
        inputChangedHandler={this.inputChangedHandler}
        termSearchClickHandler={this.termSearchClickHandler}
      />
    );
  }
}
