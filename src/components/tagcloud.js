import React, { Component } from 'react';
import WordCloud from 'wordcloud';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export class TagCloud extends Component {

  componentDidUpdate() {
    WordCloud(this.refs['my-canvas'], {
      list: this.props.words,
      weightFactor: this.props.scale,
      shrinkToFit: true,
      click: (item) => console.log(item),
    });
  }

  render() {
    return (
      <div style={styles}>
        <h2>{'\u2728'} Terms {'\u2728'}</h2>
        <canvas ref="my-canvas" width='900' height='500'>
        </canvas>
      </div>
    );
  }

}