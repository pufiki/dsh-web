import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '@/redux/actions'

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

class CusSignup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
  }

  handleChange(event, name) {
    this.setState({ ...this.state, [name]: event.target.value })
  }

  registerHandler() {
    const payload = {
      companyName: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.props.actions.customerRegister(payload)
  }

  render() {
    const values = this.state;

    return(
      <div style={styles.centerDiv}>
        <Typography variant="h4" style={styles.title}>Заказчик</Typography>
        <Paper elevation={4} style={styles.paper}>
          <Typography variant="h6" style={styles.paperTitle}>Регистрация</Typography>
          <form align="center">
            <TextField id="name" label="Название компании" value={values.name} required
                       name="name" onChange={e => this.handleChange(e, 'name')} margin="normal"
                       variant="outlined" autoComplete="off" style={styles.field}/>
            <br/>
            <TextField id="email" label="Эл. почта" type="email" name="email" style={styles.field}
                       autoComplete="email" margin="normal" variant="outlined" required
                       value={values.email} onChange={e => this.handleChange(e, 'email')}/>
            <br/>
            <TextField id="password" label="Пароль" type="password" name="password" style={styles.field}
                       autoComplete="password" margin="normal" variant="outlined" required
                       value={values.password} onChange={e => this.handleChange(e, 'password')}/>
            <br/>
            <TextField id="passwordConfirm" label="Подтверждение пароля" type="password"
                       name="passwordConfirm" style={styles.field} required
                       margin="normal" variant="outlined"
                       value={values.passwordConfirm} onChange={e => this.handleChange(e, 'passwordConfirm')}/>

            <Button variant="contained" color="primary" style={styles.button} onClick={e => this.registerHandler(values)}>Зарегистрироваться</Button>

            <p>{JSON.stringify(this.props.user)}</p>
            <p>{JSON.stringify(this.props.customer)}</p>

            <Typography variant="subtitle1" style={styles.topMargin}>Уже есть аккаунт?</Typography>
            <Link to="/customer/login" component={RouterLink} variant="subtitle1">
              Войти
            </Link>

          </form>
        </Paper>

        <Link to="/contractor/signup" component={RouterLink} variant="h6" style={styles.changeRole}>
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
)(CusSignup)
