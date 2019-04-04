import React from 'react'
import Paper from '@material-ui/core/Paper'
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
  }
};

function CusLogin() {

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return(
    <div style={styles.centerDiv}>
      <Typography variant="h4" style={styles.title}>Заказчик</Typography>
      <Paper elevation={4} style={styles.paper}>
        <Typography variant="h6" style={styles.paperTitle}>Вход</Typography>
        <form align="center">
          <TextField id="email" label="Эл. почта" type="email" name="email" style={styles.field}
                     autoComplete="email" margin="normal" variant="outlined" required
                     value={values.email} onChange={handleChange('email')}/>
          <br/>
          <TextField id="password" label="Пароль" type="password" name="password" style={styles.field}
                     autoComplete="password" margin="normal" variant="outlined" required
                     value={values.password} onChange={handleChange('password')}/>
          <br/>

          <Button variant="contained" color="primary" style={styles.button}>Войти</Button>

          <Typography variant="subtitle1" style={styles.topMargin}>Ещё нет аккаунта?</Typography>
          <Link to="/customer/signup" component={RouterLink} variant="subtitle1">
            Зарегистрироваться
          </Link>

        </form>
      </Paper>

      <Link to="/contractor/login" component={RouterLink} variant="h6" style={styles.changeRole}>
        Я подрядчик
      </Link>
    </div>
  )
}

export default CusLogin
