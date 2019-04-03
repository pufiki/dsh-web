import React from 'react'
import ReactDom from 'react-dom'
import Routes from './routes'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[600] },
    secondary: { main: '#7c4dff' },
  },
  typography: { useNextVariants: true },
});

ReactDom.render(
  <MuiThemeProvider theme={theme}>
    <Routes/>
  </MuiThemeProvider>,
  document.getElementById('main'));

module.hot.accept();
