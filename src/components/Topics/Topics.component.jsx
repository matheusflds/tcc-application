import React, { Component } from 'react';
import times from 'lodash.times';

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
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      panelWidth: null,
    };
    this.panelRef = React.createRef();
  }

  componentDidMount() {
    const width = parseFloat(getComputedStyle(this.panelRef.current).width.replace('px', ''));
    this.setState({ panelWidth: width });
  }

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
          <Paper ref={this.panelRef}>
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
                <TopicPanel
                  key={index}
                  value={this.state.value}
                  index={index}
                  topic={topic}
                  cloudWidth={this.state.panelWidth}
                />
              ))
            }
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
