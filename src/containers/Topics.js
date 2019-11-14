import React, { Component } from 'react';
import { TagCloud } from '../components/tagcloud';
import axios from 'axios';

export class Topics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    };
  }

  async componentDidMount() {
    const query = this.props.match.params.term;
    if (!query) {
      return;
    }
    try {
      const { data } = await axios.get(`http://127.0.0.1:5000/topics?query=${query}`);
      this.setState({
        ...this.state,
        topics: data.topics,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return(
      this.state.topics && this.state.topics.map((topic, index) => 
        <TagCloud words={topic} scale={500} key={index} />
      )
    );
  }

}