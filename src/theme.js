import { createMuiTheme } from '@material-ui/core/styles';
import lightblue from '@material-ui/core/colors/lightblue';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: lighhtblue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;