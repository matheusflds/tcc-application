import React, { Component } from 'react';

import request from '../../utils/http/request';
import { TermList } from './TermList.component';

export class TermListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      terms: [],
    };
  }

  async componentDidMount() {
    try {
      const data = await request({ url: '/terms', method: 'GET' });
      this.setState({
        ...this.state,
        terms: data.terms,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <TermList terms={this.state.terms} />
    );
  }
}
