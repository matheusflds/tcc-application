import React, { Component } from 'react';

import { TermList } from './TermList.component';

export class TermListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termList: [],
    }
  }

  componentDidMount() {
    this.setState({
      termList: [
        {
          term: 'nobel',
          status: 3,
          description: 'The Nobel Prize (, NOH-bel; Swedish: Nobelpriset, [nʊ²bɛlːˌpriːsɛt]; Norwegian: Nobelprisen) is a set of annual international awards bestowed in several categories by Swedish and Norwegian institutions in recognition of academic, cultural, or scientific advances.',
        },
        {
          term: 'trump',
          status: 2,
          description: 'Donald John Trump (born June 14, 1946) is the 45th and current president of the United States.',
        },
        {
          term: 'blizzard',
          status: 1,
          description: 'A blizzard is a severe snowstorm characterized by strong sustained winds of at least 56 km/h (35 mph) and lasting for a prolonged period of time—typically three hours or more.'
        }
      ]
    })
  }

  termClickHandler = (term) => {
    this.props.history.push(`/topics/${term}`)
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
