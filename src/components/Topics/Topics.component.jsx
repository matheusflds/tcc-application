import React, { Component } from 'react';

import { TagCloud } from '../TagCloud';

export class Topics extends Component {

  render() {
    return(
      <>
        {
          this.props.topics.map((topic, index) => (
            <TagCloud words={topic} scale={500} key={index} />
          ))
        }
      </>
    );
  }
}
