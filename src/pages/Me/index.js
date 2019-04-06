import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '@/redux/actions'

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

  componentDidMount() {
    if(!this.props.role) {
      this.props.actions.chooseUser()
    }
  }

  render() {
    const { role } = this.props;
    return(
      <div style={styles.centerDiv}>
        <Paper elevation={4} style={styles.paper}>
          <div>
            <Typography variant="h6" style={styles.title}>
              <span style={styles.grey}>
                {role === "contractor" ? "Подрядчик": "Заказчик"}:&nbsp;
              </span>
              ОАО "Сетевая компания"ОАО "Сетевая компания"
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
              <img alt="Фото компании" style={styles.image} src="https://images.unsplash.com/photo-1542372420-f50174a8ddd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1044&q=80"/>
            </div>
            <div style={styles.middleRight}>
              {role === "contractor" &&
              <Typography variant="body1" color="textSecondary" style={styles.description}>
                Специализация: <span>Дворняга</span>
              </Typography>
              }
              <Typography variant="body1" color="inherit" style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur maximus
                ex in consectetur. Maecenas auctor sem nunc. Praesent aliquam metus et turpis
                venenatis, eu iaculis augue dapibus. Nulla ultrices diam ut velit luctus luctus.
                In volutpat, dui non dictum scelerisque, lacus erat hendrerit mi, id rutrum nunc
                mauris eget sem. <br/><br/> Aenean ac nisl nibh. In ornare turpis tellus, vel suscipit lacus
                lacinia ac. Integer dui lectus, bibendum consequat molestie sit amet, scelerisque
                ut mi. Aliquam ac hendrerit purus. Praesent.
              </Typography>
            </div>
          </div>
          <div style={styles.bottom}>
            <a href="https://vk.com" target="_blank" color="inherit">
              <IconButton color="inherit">
                <Vk/>
              </IconButton>
            </a>
            <a href="https://t.me" target="_blank" color="inherit">
              <IconButton color="inherit">
                <Telegram/>
              </IconButton>
            </a>
            <a href="https://instagram.com" target="_blank" color="inherit">
              <IconButton color="inherit">
                <Instagram/>
              </IconButton>
            </a>
            <a href="mailto:vanishmax2018@gmail.com" target="_blank" color="inherit">
              <IconButton color="inherit">
                <Email/>
              </IconButton>
            </a>
            <a href="tel:+79190485457" target="_blank" color="inherit">
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

const mapStateToProps = (state) => ({
  role: state.user
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Me)
