import React, { Component } from 'react';
import { TagCloud } from '../../components/tagcloud';
import axios from 'axios';

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
        terms: data.terms.map(term => [term.name, term.prob]), 
      });
    } catch (error) {
      console.log(error); 
    }
  };

  render() {
    return (
      this.state.terms && <TagCloud words={this.state.terms} scale={100} />
    );
  }
}