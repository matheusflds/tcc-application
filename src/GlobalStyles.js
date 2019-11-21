import { styled as mstyled } from '@material-ui/core/styles';
import styled from 'styled-components';
import { AppBar, Grid } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

export const AppBarStyled = mstyled(AppBar)({
  background: 'white',
  color: grey[900],
  boxShadow: '0px 2px 4px -1px rgba(190,190,190,0.2), 0px 4px 5px 0px rgba(190,190,190,0.14), 0px 1px 10px 0px rgba(190,190,190,0.12)',
})

export const ContentBoxStyled = mstyled(Grid)({
  paddingTop: '50px',
})

export const Logo = styled.img`
  max-height: 40px;
  margin-right: 15px;
`;
