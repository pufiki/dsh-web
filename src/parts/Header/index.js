import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

class Header extends React.Component {
  render() {
    return (
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            Пуфики
          </Typography>
          <Link to='/lolka' component={RouterLink} variant='h6' color='inherit'>
            Заказчики
          </Link>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
