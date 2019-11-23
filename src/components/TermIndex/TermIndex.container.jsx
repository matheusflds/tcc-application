import React, { Component } from 'react';

import { termList } from 'data/term.data';
import { TermIndex } from './TermIndex.component';

export class TermIndexContainer extends Component {

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
      <TermIndex
        terms={this.state.terms}
        termClickHandler={this.termClickHandler}
      />
    );
  }
}
