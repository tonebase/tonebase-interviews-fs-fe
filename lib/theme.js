import { createMuiTheme } from '@material-ui/core';

// import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Orbitron"', '"sans-serif"'].join(','),
  },
});

export default theme;