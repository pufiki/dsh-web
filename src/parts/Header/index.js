import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

const styles = {
  margin: {
    marginLeft: 22
  },
  font: {
    fontFamily: '"Comfortaa", sans-serif'
  }
};

class Header extends React.Component {
  render() {
    return (
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Link to="/" component={RouterLink} variant="h4" color="inherit" style={styles.font}>
            Пуфики
          </Link>
          <Link to="/customers" component={RouterLink} variant="h6" color="inherit" style={styles.margin}>
            Заказчики
          </Link>
          <Link to="/contractors" component={RouterLink} variant="h6" color="inherit" style={styles.margin}>
            Подрядчики
          </Link>
          <Link to="/requests" component={RouterLink} variant="h6" color="inherit" style={styles.margin}>
            Заявки
          </Link>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
