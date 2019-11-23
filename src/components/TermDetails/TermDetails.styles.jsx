import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';


export const AvatarStyled = withStyles(theme => ({
  root: {
    marginTop: '40px',
  },
}))(Avatar);

export const TitleBoxStyled = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;
