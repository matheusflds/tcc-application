import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

import { TermSearch } from './TermSearch.component';
import { termSearch } from 'data/term.data';

class TermSearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  termSearchClickHandler = async () => {
    if(this.state.searchTerm) {
      const { message, id } = await termSearch(this.state.searchTerm);
      if(id) {
        this.props.history.push(`/topics/${id}`)
      }
      toast.info(message);
      this.setState({ searchTerm: '' });
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

export const TermSearchWithRouter = withRouter(TermSearchContainer)
