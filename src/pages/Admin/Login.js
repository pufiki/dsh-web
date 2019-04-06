import React from 'react'
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
      email: '',
      password: '',
      passwordConfirm: '',
    };
  }

  handleChange(event, name) {
    this.setState({ ...this.state, [name]: event.target.value })
  }

  render() {
    const values = this.state;

    return(
      <div style={styles.centerDiv}>
        <Typography variant="h4" style={styles.title}>Сетевая компания</Typography>
        <Paper elevation={4} style={styles.paper}>
          <Typography variant="h6" style={styles.paperTitle}>Вход</Typography>
          <form align="center">
            <TextField id="email" label="Эл. почта" type="email" name="email" style={styles.field}
                       autoComplete="email" margin="normal" variant="outlined" required
                       value={values.email} onChange={(e) => this.handleChange(e, 'email')}/>
            <br/>
            <TextField id="password" label="Пароль" type="password" name="password" style={styles.field}
                       autoComplete="password" margin="normal" variant="outlined" required
                       value={values.password} onChange={(e) => this.handleChange(e, 'password')}/>
            <br/>

            <Button variant="contained" color="primary" style={styles.button}>Войти</Button>
          </form>
        </Paper>
      </div>
    )
  }
}

export default AdminLogin
