import React from 'react'
import PropTypes from 'prop-types'
import getUserInfo from '@/HOCs/getUserInfo'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'

import { Email, Vk, Telegram, Phone, Instagram } from '@/parts/icons'

const styles = {
  centerDiv: {
    margin: '10% auto',
    width: '70%',
    textAlign: 'center'
  },
  paper: {
    margin: '20px auto',
    padding: '10px 20px 15px'
  },
  title: {
    fontFamily: '"Comfortaa", sans-serif',
    float: 'left',
    width: '60%',
    textAlign: 'right',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  grey: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  requests: {
    float: 'right',
    marginLeft: 10
  },
  middle: {
    clear: 'both',
    marginTop: 55
  },
  middleLeft: {
    width: '48%',
    float: 'left',
    textAlign: 'center'
  },
  image: {
    display: 'inline-block',
    maxWidth: '100%',
    width: 'auto',
    height: 'auto',
    maxHeight: '60vh',
    WebkitBoxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    MozBoxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
  middleRight: {
    width: '48%',
    float: 'right'
  },
  description: {
    textAlign: 'left',
    maxHeight: '60vh',
    overflowY: 'scroll',
  },
  bottom: {
    clear: 'both',
    textAlign: 'center'
  }
};

class Me extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { user } = this.props;
    console.log(user);
    return(
      <div style={styles.centerDiv}>
        <Paper elevation={4} style={styles.paper}>
          <div>
            <Typography variant="h6" style={styles.title}>
              <span style={styles.grey}>
                {user.role === "contractor" ? "Подрядчик": "Заказчик"}:&nbsp;
              </span>
              {user.name || ''}
            </Typography>
            <Link to="/me/requests" component={RouterLink}>
              <Button variant="outlined" color="primary" style={styles.requests}>Заявки</Button>
            </Link>
            <Link to="/me/edit" component={RouterLink}>
              <Button variant="outlined" color="primary" style={styles.requests}>Изменить</Button>
            </Link>
          </div>

          <div style={styles.middle}>
            <div style={styles.middleLeft}>
              <img alt="Фото компании" style={styles.image} src={user.photo || ''}/>
            </div>
            <div style={styles.middleRight}>
              <Typography variant="body1" color="inherit" style={styles.description}>
                {user.description || ''}
              </Typography>
            </div>
          </div>
          <div style={styles.bottom}>
            <a href={user.contacts.vk || ''} target="_blank" color="inherit">
              <IconButton color="inherit">
                <Vk/>
              </IconButton>
            </a>
            <a href={user.contacts.telegram || ''} target="_blank" color="inherit">
              <IconButton color="inherit">
                <Telegram/>
              </IconButton>
            </a>
            <a href={user.contacts.instagram || ''} target="_blank" color="inherit">
              <IconButton color="inherit">
                <Instagram/>
              </IconButton>
            </a>
            <a href={`mailto:${user.email || ''}`} target="_blank" color="inherit">
              <IconButton color="inherit">
                <Email/>
              </IconButton>
            </a>
            <a href={`tel:${user.contacts.phone || ''}`} target="_blank" color="inherit">
              <IconButton color="inherit">
                <Phone/>
              </IconButton>
            </a>
          </div>
        </Paper>
      </div>
    )
  }
}

Me.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    description: PropTypes.string,
    role: PropTypes.string,
    photo: PropTypes.string,
    contacts: PropTypes.shape({
      phone: PropTypes.string,
      instagram: PropTypes.string,
      telegram: PropTypes.string,
      vk: PropTypes.string
    })
  })
};

export default Me
