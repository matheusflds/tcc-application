import React, { Component } from 'react';

import { termList } from '../../data/term.data';
import { TermList } from './TermList.component';

export class TermListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      terms: [],
    };
  }

  async componentDidMount() {
    const { terms } = await termList();
    this.setState({
      terms: terms,
    });
  };

  termClickHandler = (term) => {
    this.props.history.push(`/topics/${term}`)
  }

  render() {
    return (
      <TermList
        terms={this.state.terms}
        termClickHandler={this.termClickHandler}
      />
    );
  }
}
