import React, { Component } from 'react';

import { MenuItemStyled, LinkStyled } from './SideMenu.styles';

import {
  Paper,
  MenuList,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AssessmentIcon from '@material-ui/icons/Assessment';

export class SideMenu extends Component {
  state = {
    current: window.location.pathname === '/' ? 'terms' : 'statistics',
  };

  onLinkClick = (current) => () => {
    this.setState({ current });
  }

  render() {
    console.log(this.state);
    return(
      <Paper>
        <MenuList>
          <LinkStyled to='/' onClick={this.onLinkClick('terms')}>
            <MenuItemStyled focused={this.state.current === 'terms'}>
              <ListItemIcon>
                <CheckBoxIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary='Terms'/>
            </MenuItemStyled>
          </LinkStyled>
          <LinkStyled to='/statistics' onClick={this.onLinkClick('statistics')}>
            <MenuItemStyled focused={this.state.current === 'statistics'}>
              <ListItemIcon>
                <AssessmentIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary='Statistics' />
            </MenuItemStyled>
          </LinkStyled>
        </MenuList>
      </Paper>
    );
  }
}
