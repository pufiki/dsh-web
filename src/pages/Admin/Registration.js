import React from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '@/redux/actions'

import { customerClient } from '#/customer'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
  centerDiv: {
    margin: '32px auto',
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
  }
};

const defaultState = {
  name: '',
  email: '',
  phone: '',
  errorText: ''
}

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  setError(errorText) {
    this.setState({ ...this.state, errorText })
  }

  handleChange(event, name) {
    this.setState({ ...this.state, [name]: event.target.value })
  }

  async registerHandler() {
    const payload = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };

    if (!payload.name) {
      return this.setError('Укажите имя.')
    }

    if (!payload.email) {
      return this.setError('Укажите email.')
    }

    if (!payload.phone) {
      return this.setError('Укажите телефон.')
    }

    this.props.actions.customerRegister(payload, (data) => {
      const toastMap = {
        success: 'Зарегистрирован',
        error: 'Ошибка'
      }
      const status = data ? 'success' : 'error'
      this.props.actions.setToastData({ text: toastMap[status], status })
      this.setState(defaultState)
    })
  }

  render() {
    const values = this.state;

    return(
      <div style={styles.centerDiv}>
        <Typography variant="h4" style={styles.title}>Заявитель</Typography>
        <Paper elevation={4} style={styles.paper}>
          <Typography variant="h6" style={styles.paperTitle}>Регистрация</Typography>
          <form align="center">
            <TextField id="name" label="ФИО" value={values.name} required placeholder="Иванов Иван Иванович"
                       name="name" onChange={e => this.handleChange(e, 'name')} margin="normal"
                       variant="outlined" autoComplete="off" style={styles.field}/>
            <br/>
            <TextField id="email" label="Эл. почта" type="email" name="email" style={styles.field}
                       autoComplete="email" margin="normal" variant="outlined" required placeholder="example@gmail.com"
                       value={values.email} onChange={e => this.handleChange(e, 'email')}/>
            <br/>
            <TextField id="phone" label="Номер телефона" type="email" name="phone" style={styles.field}
                       autoComplete="phone" margin="normal" variant="outlined" required placeholder="+71236547809"
                       value={values.phone} onChange={e => this.handleChange(e, 'phone')}/>
            <br/>
            <Typography variant="subtitle1" color="error" style={styles.topMargin}>{values.errorText}</Typography>

            <Button variant="contained" color="primary" disabled={this.props.customer.isLoading} style={styles.button} onClick={e => this.registerHandler(values)}>Зарегистрировать</Button>

          </form>
        </Paper>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  customer: state.customer,
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration))
