import React, { Component } from 'react';
import times from 'lodash.times';

import {
  Grid,
  Box,
  Paper,
  Tab,
  Tabs,
  AppBar,
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { TermDetails } from 'components/TermDetails';
import { TopicPanel } from './TopicPanel.component';
import { SentimentData } from 'components/SentimentData';

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
            tweetsCount={this.props.tweetCount}
            description={this.props.description}
          />
        </Grid>
        <Grid item xs={12}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <Box fontWeight="fontWeightLight">
                  Overall Results
                </Box>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {this.props.overallResults &&
                <SentimentData
                  polarity={this.props.overallResults.polarity}
                  joy={this.props.overallResults.joy}
                  anger={this.props.overallResults.anger}
                  fear={this.props.overallResults.fear}
                  sadness={this.props.overallResults.sadness}
                />
              }
            </ExpansionPanelDetails>
          </ExpansionPanel>
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
                  topic={topic.words}
                  cloudWidth={this.state.panelWidth}
                  polarity={topic.polarity}
                  joy={topic.joy}
                  anger={topic.anger}
                  fear={topic.fear}
                  sadness={topic.sadness}
                />
              ))
            }
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
