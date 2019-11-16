import React, { Component } from 'react';
import WordCloud from 'wordcloud';

export class TagCloud extends Component {

  componentDidMount() {
    this.updateWordCloud(this.props.words, this.props.scale);
  }

  componentDidUpdate() {
    this.updateWordCloud(this.props.words, this.props.scale);
  }

  updateWordCloud(words, scale) {
    WordCloud(this.refs['my-canvas'], {
      list: words,
      weightFactor: scale,
      shrinkToFit: true,
      click: (item) => {
        const term = item[0];
        console.log(item[0]);
        this.props.history && this.props.history.push(`/topics/${term}`);
      },
    });
  }

  render() {
    return (
      <canvas ref="my-canvas" width='700' height='400' />
    );
  }

}
