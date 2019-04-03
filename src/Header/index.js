import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class Header extends React.Component {
  render() {
    return (
      <AppBar position='fixed' color='primary'>
        <Toolbar>
          <Typography variant="h4" color='inherit'>
            Пуфики
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
