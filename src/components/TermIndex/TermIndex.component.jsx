import React, { Component } from 'react';

import { TagCloud } from 'components/TagCloud';
import { TermSearch } from 'components/TermSearch';
import { ListWrapperStyled } from './TermIndex.styles';

import {
  Paper,
  Grid,
  Typography,
  Box,
} from '@material-ui/core';

export class TermIndex extends Component {
  constructor(props) {
    super(props);
    this.termList = React.createRef();
    this.state = {
      tagCloudWidth: null,
    }
  }

  componentDidMount() {
    const width = parseFloat(getComputedStyle(this.termList.current).width.replace('px', ''));
    this.setState({ tagCloudWidth: width });
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TermSearch />
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <ListWrapperStyled ref={this.termList}>
              <Typography variant="h5">
                <Box fontWeight="fontWeightNormal">
                  Recently Processed Terms
                </Box>
              </Typography>
              {this.props.terms &&
                <TagCloud
                  words={this.props.terms}
                  scale={100}
                  width={this.state.tagCloudWidth}
                  height={400}
                  clickHandler={this.props.termClickHandler}
                />
              }
            </ListWrapperStyled>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
