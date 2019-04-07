import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '@/redux/actions'

import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import {Link as RouterLink} from 'react-router-dom'

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

class ConSignup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      specs: [],
      errorText: ''
    };
  }

  handleChange(name) {
    return event => {
      this.setState({ ...this.state, errorText: '', [name]: event.target.value })
    }
  }

  setError(errorText) {
    this.setState({ ...this.state, errorText })
  }

  registerHandler() {
    const payload = {
      companyName: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    if (!payload.companyName) {
      return this.setError('Укажите название компании.')
    }

    if (!payload.email) {
      return this.setError('Укажите email.')
    }

    if (!payload.password) {
      return this.setError('Укажите пароль.')
    }

    if (payload.password !== this.state.passwordConfirm) {
      return this.setError('Пароли должны совпадать.')
    }

    this.props.actions.contractorRegister(payload, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const values = this.state;

    return (
      <div style={styles.centerDiv}>
        <Typography variant="h4" style={styles.title}>Подрядчик</Typography>
        <Paper elevation={4} style={styles.paper}>
          <Typography variant="h6" style={styles.paperTitle}>Регистрация</Typography>
          <form align="center">
            <TextField id="name" label="Название компании" value={values.name} required
              name="name" onChange={this.handleChange('name')} margin="normal"
              variant="outlined" autoComplete="off" style={styles.field} />
            <br />
            <TextField id="email" label="Эл. почта" type="email" name="email" style={styles.field}
              autoComplete="email" margin="normal" variant="outlined" required
              value={values.email} onChange={this.handleChange('email')} />
            <br />
            <TextField id="password" label="Пароль" type="password" name="password" style={styles.field}
              autoComplete="password" margin="normal" variant="outlined" required
              value={values.password} onChange={this.handleChange('password')} />
            <br />
            <TextField id="passwordConfirm" label="Подтверждение пароля" type="password"
              name="passwordConfirm" style={styles.field} required
              margin="normal" variant="outlined"
              value={values.passwordConfirm} onChange={this.handleChange('passwordConfirm')} />
            <br />
            <Typography variant="subtitle1" color="error" style={styles.topMargin}>{values.errorText}</Typography>

            <br />
            <Button variant="contained" disabled={this.props.contractor.isLoading} color="primary" style={styles.button} onClick={e => this.registerHandler(values)}>Создать</Button>

            <Typography variant="subtitle1" style={styles.topMargin}>Уже есть аккаунт?</Typography>
            <Link to="/contractor/login" component={RouterLink} variant="subtitle1">
              Войти
          </Link>

          </form>
        </Paper>

        <Link to="/customer/signup" component={RouterLink} variant="h6" style={styles.changeRole}>
          Я заказчик
        </Link>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  contractor: state.contractor,
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ConSignup))
