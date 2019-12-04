import React, { Component } from 'react';

import { termCloudList } from 'data/term.data';
import { TermIndex } from './TermIndex.component';

export class TermIndexContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      terms: [],
    };
  }

  async componentDidMount() {
    const { terms } = await termCloudList();
    this.setState({
      terms: terms.map(termData => [termData.term, termData.weigth]),
    });
  };

  termClickHandler = (term) => {
    this.props.history.push(`/topics/${term}`)
  }

  render() {
    console.log(this.state)
    return (
      <TermIndex
        terms={this.state.terms}
        termClickHandler={this.termClickHandler}
      />
    );
  }
}
