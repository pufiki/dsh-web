import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '@/redux/actions'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
};

class AdminLogin extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: ''
    };
  }

  handleChange(event, name) {
    this.setState({ ...this.state, [name]: event.target.value })
  }

  loginHandler() {
    const payload = {
      username: this.state.name,
      password: this.state.password
    };

    this.props.actions.adminLogin(payload)
  }

  render() {
    const values = this.state;
    console.log(this.props.admin);

    return(
      <div style={styles.centerDiv}>
        <Typography variant="h4" style={styles.title}>Сетевая компания</Typography>
        <Paper elevation={4} style={styles.paper}>
          <Typography variant="h6" style={styles.paperTitle}>Вход</Typography>
          <form align="center">
            <TextField id="name" label="Имя пользователя" name="name" style={styles.field}
                       autoComplete="name" margin="normal" variant="outlined" required
                       value={values.name} onChange={(e) => this.handleChange(e, 'name')}/>
            <br/>
            <TextField id="password" label="Пароль" type="password" name="password" style={styles.field}
                       autoComplete="password" margin="normal" variant="outlined" required
                       value={values.password} onChange={(e) => this.handleChange(e, 'password')}/>
            <br/>

            <Button variant="contained" color="primary" style={styles.button} onClick={e => this.loginHandler(values)}>Войти</Button>

            {/*<p>{JSON.stringify(this.props.user)}</p>*/}
            {/*<p>{JSON.stringify(this.props.admin)}</p>*/}
          </form>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  admin: state.admin,
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin)
