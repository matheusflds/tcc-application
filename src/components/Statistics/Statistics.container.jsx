import React, { Component } from 'react';
import { Statistics } from './Statistics.component';
import { statistics } from 'data/statistics.data';

export class StatisticsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingTermCount: null,
      processingTermCount: null,
      processedTermCount: null,
      tweetCount: null,
      topicCount: null,
    };
  }

  async componentDidMount() {
    const results = await statistics();
    this.setState({ ...results });
  }

  render() {
    return(
      <Statistics
        pendingTermCount={this.state.pendingTermCount}
        processingTermCount={this.state.processingTermCount}
        processedTermCount={this.state.processedTermCount}
        tweetCount={this.state.tweetCount}
        topicCount={this.state.topicCount}
      />
    );
  };
}
