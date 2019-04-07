import React from 'react'
import Paper from '@material-ui/core/Paper'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '@/redux/actions'
import { withRouter } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const styles = {
  centerDiv: {
    margin: '10% auto',
    width: '30%',
    textAlign: 'center'
  },
  title: {
    fontFamily: '"Comfortaa", sans-serif',
    textTransform: 'uppercase',
  },
  paper: {
    margin: '20px auto',
    padding: 10
  },
  paperTitle: {
    textAlign: 'center'
  },
  field: {
    width: '80%'
  },
  button: {
    margin: '10px auto'
  },
  topMargin: {
    marginTop: 10
  },
  changeRole: {
    fontFamily: '"Comfortaa", sans-serif'
  }
};

class CusLogin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errorText: ''
    }
  }

  handleChange(name) {
    return event => {
      this.setState({ ...this.state, errorText: '', [name]: event.target.value })
    }
  }

  setError(errorText) {
    this.setState({ ...this.state, errorText })
  }

  loginHandler() {
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };

    if (!payload.email) {
      return this.setError('Укажите email.')
    }

    if (!payload.password) {
      return this.setError('Укажите пароль.')
    }

    this.props.actions.customerLogin(payload, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const values = this.state;

    return (
      <div style={styles.centerDiv}>
        <Typography variant="h4" style={styles.title}>Заказчик</Typography>
        <Paper elevation={4} style={styles.paper}>
          <Typography variant="h6" style={styles.paperTitle}>Вход</Typography>
          <form align="center">
            <TextField id="email" label="Эл. почта" type="email" name="email" style={styles.field}
              autoComplete="email" margin="normal" variant="outlined" required
              value={values.email} onChange={this.handleChange('email')} />
            <br />
            <TextField id="password" label="Пароль" type="password" name="password" style={styles.field}
              autoComplete="password" margin="normal" variant="outlined" required
              value={values.password} onChange={this.handleChange('password')} />
            <br />
            <Typography variant="subtitle1" color="error" style={styles.topMargin}>{values.errorText}</Typography>

            <Button variant="contained" color="primary" disabled={this.props.customer.isLoading} style={styles.button} onClick={e => this.loginHandler()}>Войти</Button>

            <Typography variant="subtitle1" style={styles.topMargin}>
              Регистрация возможна только через сетевую компанию
          </Typography>

          </form>
        </Paper>

        <Link to="/contractor/login" component={RouterLink} variant="h6" style={styles.changeRole}>
          Я подрядчик
      </Link>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  customer: state.customer,
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CusLogin))
