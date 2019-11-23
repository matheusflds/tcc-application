import React, { Component } from 'react';

import { Topics } from './Topics.component';
import { topicList } from 'data/topic.data';

export class TopicsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      term: null,
    };
  }

  async componentDidMount() {
    const query = this.props.match.params.term;
    if (query) {
      const { topics } = await topicList(query);
      this.setState({
        term: query,
        topics: topics,
        description: 'Jair Messias Bolsonaro (Brazilian Portuguese: [ʒaˈiʁ meˈsi.ɐz bowsoˈnaɾu, ʒaˈiɾ -]; born 21 March 1955) is a Brazilian politician and retired military officer who has been the 38th president of Brazil since 1 January 2019.'
      });
    }
  }

  render() {
    return(
      <Topics
        topics={this.state.topics}
        term={this.state.term}
        description={this.state.description}
      />
    );
  }

}
