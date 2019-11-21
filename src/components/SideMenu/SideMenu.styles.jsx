import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

export const MenuItemStyled = withStyles(theme => ({
  root: props => {
    const defaultStyles = {
      color: 'black',
      '& .MuiListItemText-primary': {
        color: 'rgba(0, 0, 0, 1)',
      },
      backgroundColor: 'white',
      '& .MuiListItemIcon-root': {
        color: 'rgba(0, 0, 0, 0.54)',
      },
      '&:hover': {
        backgroundColor: grey[300],
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: 'rgba(0, 0, 0, 1)',
        }
      }
    }
    if(props.focused){
      return ({
        ...defaultStyles,
        backgroundColor: blue[800],
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: 'white',
        },
        '&:hover': {
          backgroundColor: blue[800],
          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: 'white',
          }
        }
      })
    }
    return defaultStyles;
  }
}))(MenuItem)

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
