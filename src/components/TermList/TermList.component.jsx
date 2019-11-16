import React, { Component } from 'react';

import { TagCloud } from '../TagCloud/TagCloud.component';
import { ListWrapperStyled } from './TermList.styles';

export class TermList extends Component {
  render() {
    return (
      <ListWrapperStyled>
        <h2>{'\u2728'} Terms {'\u2728'}</h2>
        {this.props.terms &&
          <TagCloud
            words={this.props.terms}
            scale={100}
            clickHandler={this.props.termClickHandler}
          />
        }
      </ListWrapperStyled>
    );
  }
}
