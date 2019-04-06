import React from 'react'

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

class Registration extends React.Component {
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

  async registerHandler() {
    const payload = {
      companyName: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    try {
      const result = await customerClient.register(payload);
      console.log('registerHandler api result', result);
    } catch (error) {
      console.error(error)
    }
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

          </form>
        </Paper>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)
