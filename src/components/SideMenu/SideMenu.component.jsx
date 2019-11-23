import React, { Component } from 'react';

import { MenuItemStyled, LinkStyled } from './SideMenu.styles';

import {
  Paper,
  MenuList,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AssessmentIcon from '@material-ui/icons/Assessment';

export class SideMenu extends Component {
  state = {
    current: window.location.pathname === '/statistics' ? 'statistics' : window.location.pathname === '/' ? 'home' : 'terms',
  };

  onLinkClick = (current) => () => {
    this.setState({ current });
  }

  render() {
    return(
      <Paper>
        <MenuList>
          <LinkStyled to='/' onClick={this.onLinkClick('home')}>
            <MenuItemStyled focused={this.state.current === 'home'}>
              <ListItemIcon>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary='Home'/>
            </MenuItemStyled>
          </LinkStyled>
          <LinkStyled to='/terms' onClick={this.onLinkClick('terms')}>
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
