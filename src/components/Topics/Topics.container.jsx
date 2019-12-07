import React, { Component } from 'react';

import { Topics } from './Topics.component';
import { topicList } from 'data/topic.data';

export class TopicsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: null,
      overallResults: null,
      term: null,
      topics: [],
      tweetCount: null,
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      const results = await topicList(id);
      this.setState({ ...results });
    }
  }

  render() {
    return(
      <Topics
        description={this.state.description}
        overallResults={this.state.overallResults}
        term={this.state.term}
        topics={this.state.topics}
        tweetCount={this.state.tweetCount}
      />
    );
  }

}
