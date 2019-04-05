import React from 'react'
import ReactDom from 'react-dom'
import Routes from './routes'

import { Provider } from 'react-redux'
import configureStore from '@/redux/configureStore'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1e88e5',
      light: '#1e88e5',
      dark: '#01579b'
    },
    secondary: {
      main: '#7c4dff' ,
      dark: '#311b92'
    },
  },
  typography: { useNextVariants: true },
});

ReactDom.render(
  <Provider store={configureStore({})}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Routes/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main'));

module.hot.accept();
