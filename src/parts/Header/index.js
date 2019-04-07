import React from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '@/redux/actions'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuList from '@material-ui/core/MenuList'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Fingerprint from '@material-ui/icons/Fingerprint'
import Search from '@material-ui/icons/Search'
import Assignment from '@material-ui/icons/Assignment'
import Build from '@material-ui/icons/Build'
import ExitToApp from '@material-ui/icons/ExitToApp'
import PermIdentity from '@material-ui/icons/PermIdentity'

import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

import getUserInfo from '@/HOCs/getUserInfo'

const styles = {
  margin: {
    marginLeft: 22
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
  },
  font: {
    fontFamily: '"Comfortaa", sans-serif'
  },
  icon: {
    fontSize: 34
  },
  menu: {
    outline: 'none'
  },
  link: {
    textDecoration: 'none'
  }
};

function Header(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLogout(event) {
    event.preventDefault();
    props.actions.userLogout();
    props.history.push('/');
    setAnchorEl(null);
  }

  return (
    <AppBar position="fixed" color="primary" style={styles.root}>
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
        <Link to="/about" component={RouterLink} variant="h6" color="inherit" style={styles.margin}>
          Про нас
        </Link>
        <span style={styles.grow}/>
        <div>
          <Link to="/search" component={RouterLink} style={styles.link} color="inherit">
            <IconButton color="inherit">
              <Search style={styles.icon} />
            </IconButton>
          </Link>

          <IconButton color="inherit" onClick={handleMenu} aria-haspopup="true"
                      aria-owns={open ? 'menu-appbar' : undefined}>
            <AccountCircle style={styles.icon} />
          </IconButton>

          <Menu id="appbar-login-menu" anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open} onClose={handleClose}>
            {!props.user.info || !props.user.info.username ?
            <MenuList style={styles.menu}>
              <Link to="/customer/login" component={RouterLink} style={styles.link}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Assignment/>
                  </ListItemIcon>
                  <ListItemText inset primary="Заказчик" />
                </MenuItem>
              </Link>
              <Link to="/contractor/login" component={RouterLink} style={styles.link}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Build/>
                  </ListItemIcon>
                  <ListItemText inset primary="Подрядчик" />
                </MenuItem>
              </Link>
              <Link to="/admin/login" component={RouterLink} style={styles.link}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Fingerprint/>
                  </ListItemIcon>
                  <ListItemText inset primary="Сетевая компания" />
                </MenuItem>
              </Link>
            </MenuList> :
            <MenuList style={styles.menu}>
              <Link to="/me" component={RouterLink} style={styles.link}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PermIdentity />
                  </ListItemIcon>
                  <ListItemText inset primary="Профиль" />
                </MenuItem>
              </Link>
              <Link to="/me/logout" component={RouterLink} style={styles.link} onClick={handleLogout}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ExitToApp />
                  </ListItemIcon>
                  <ListItemText inset primary="Убежать" />
                </MenuItem>
              </Link>
            </MenuList>
            }
          </Menu>

        </div>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(getUserInfo(Header)))
