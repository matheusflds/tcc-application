import React, { Component } from 'react';

import { termCloudList } from 'data/term.data';
import { TermIndex } from './TermIndex.component';

export class TermIndexContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ids: {},
      terms: [],
    };
  }

  async componentDidMount() {
    const { terms } = await termCloudList();
    this.setState({ terms });
  };

  termClickHandler = (term) => {
    const clickedTerm = this.state.terms.find(termData => termData.term === term);
    if(clickedTerm) {
      this.props.history.push(`/topics/${clickedTerm.id}`)
    }
  }

  render() {
    console.log(this.state.ids)
    return (
      <TermIndex
        terms={this.state.terms.map(termData => [termData.term, termData.weigth])}
        termClickHandler={this.termClickHandler}
      />
    );
  }
}
