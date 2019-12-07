import React, { Component } from 'react';

import { TermList } from './TermList.component';
import { termList } from 'data/term.data';

export class TermListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termList: [],
    }
  }

  async componentDidMount() {
    const { terms } = await termList();
    this.setState({ termList: terms })
  }

  termClickHandler = (id) => {
    this.props.history.push(`/topics/${id}`)
  }

  render() {
    return(
      <TermList
        termList={this.state.termList}
        termClickHandler={this.termClickHandler}
      />
    );
  }
}
