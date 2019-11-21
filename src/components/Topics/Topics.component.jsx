import React, { Component } from 'react';
import times from 'lodash.times';

import { TagCloud } from 'components/TagCloud';

import {
  Grid,
  Paper,
  Tab,
  Tabs,
  AppBar,
} from '@material-ui/core';

import { TermDetails } from 'components/TermDetails';
import { TopicPanel } from './TopicPanel.component';

export class Topics extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }

  render() {
    return(
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TermDetails
            term={this.props.term}
            tweetsCount={10000}
          />
        </Grid>
        <Grid item xs={12}>
          <Paper>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {
                times(this.props.topics.length, (index) => (
                  <Tab label={`Topic ${index + 1}`} />
                ))
              }
            </Tabs>
          </AppBar>
            {
              this.props.topics.map((topic, index) => (
                <TopicPanel value={this.state.value} index={index}>
                  <TagCloud words={topic} scale={500} key={index} />
                </TopicPanel>
              ))
            }
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
