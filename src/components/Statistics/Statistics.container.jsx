import React, { Component } from 'react';
import { Statistics } from './Statistics.component';

export class StatisticsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetCount: null,
      termCount: null,
      topicCount: null,
    }
  }

  componentDidMount() {
    this.setState({
      pendingTermCount: Math.floor(Math.random() * 10000),
      processingTermCount: Math.floor(Math.random() * 10000),
      processedTermCount: Math.floor(Math.random() * 10000),
      tweetCount: Math.floor(Math.random() * 10000),
      topicCount: Math.floor(Math.random() * 10000),
    })
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
