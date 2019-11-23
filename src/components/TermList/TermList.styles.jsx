import { withStyles } from '@material-ui/core/styles';

import MaterialTable from 'material-table';

export const TableStyled = withStyles({
  root: {
    "padding": "15px",
  }
})(MaterialTable);
