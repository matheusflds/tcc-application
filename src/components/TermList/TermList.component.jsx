import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import { TagCloud } from 'components/TagCloud';
import { ListWrapperStyled } from './TermList.styles';

export class TermList extends Component {
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
      <ListWrapperStyled ref={this.termList}>
        <Typography variant="h4">{'\u2728'} Terms {'\u2728'}</Typography>
        {this.props.terms &&
          <TagCloud
            words={this.props.terms}
            scale={100}
            width={this.state.tagCloudWidth}
            clickHandler={this.props.termClickHandler}
          />
        }
      </ListWrapperStyled>
    );
  }
}
