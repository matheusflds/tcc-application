import React, { Component } from 'react';

import { Topics } from './Topics.component';
import { topicList } from 'data/topic.data';

export class TopicsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    };
  }

  async componentDidMount() {
    const query = this.props.match.params.term;
    if (!query) {
      return;
    }
    const { topics } = await topicList(query);
    this.setState({
      topics: topics,
    });
  }

  render() {
    return(
      <Topics topics={this.state.topics} />
    );
  }

}
