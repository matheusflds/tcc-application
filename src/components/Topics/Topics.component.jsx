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
            tweetsCount={10000}
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
              <SentimentData
                polarity={90}
                joy={70}
                anger={5}
                fear={15}
                sadness={10}
              />
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
                  topic={topic}
                  cloudWidth={this.state.panelWidth}
                  polarity={Math.floor(Math.random() * 100)}
                  joy={Math.floor(Math.random() * 100)}
                  anger={Math.floor(Math.random() * 100)}
                  fear={Math.floor(Math.random() * 100)}
                  sadness={Math.floor(Math.random() * 100)}
                />
              ))
            }
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
