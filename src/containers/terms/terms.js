import React, { Component } from 'react';
import { TagCloud } from '../../components/tagcloud';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export class TermsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      terms: [],
    };
  }

  async componentDidMount() {
    try {               
      const { data } = await axios.get('http://127.0.0.1:5000/terms');                    
      this.setState({ 
        ...this.state, 
        terms: data.terms, 
      });
    } catch (error) {
      console.log(error); 
    }
  };

  render() {
    const TagCloudWithRouter = withRouter(TagCloud);
    return (
      <div style={styles}>
        <h2>{'\u2728'} Terms {'\u2728'}</h2>
        {this.state.terms && <TagCloudWithRouter words={this.state.terms} scale={100} />}
      </div>
    );
  }

}