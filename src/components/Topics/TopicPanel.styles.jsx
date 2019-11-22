import styled from 'styled-components';

import { lighten, withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

export const PolarityContainerStyled = styled.div`
  width: 30%;
`;

export const EmotionImage = styled.img`
  width: 40px;
`;

export const BorderLinearProgress = withStyles(theme => ({
  root: props => ({
    height: 10,
    backgroundColor: lighten(props.colorhex, 0.5),
    margin: theme.spacing(1),
  }),
  bar: props => ({
    borderRadius: 20,
    backgroundColor: props.colorhex,
  }),
}))(LinearProgress);
