import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
  centerDiv: {
    margin: '10% auto',
    width: '30%'
  },
  title: {
    fontFamily: '"Comfortaa", sans-serif',
    textTransform: 'uppercase',
    textAlign: 'center',
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
        <Typography variant="h6" style={styles.paperTitle}>Регистрация</Typography>
        <form align="center">
          <TextField id="name" label="Название компании" value={values.name} required
                     name="name" onChange={handleChange('name')} margin="normal"
                     variant="outlined" autoComplete="off" style={styles.field}/>
          <br/>
          <TextField id="email" label="Эл. почта" type="email" name="email" style={styles.field}
                     autoComplete="email" margin="normal" variant="outlined" required
                     value={values.email} onChange={handleChange('email')}/>
          <br/>
          <TextField id="password" label="Пароль" type="password" name="password" style={styles.field}
                     autoComplete="password" margin="normal" variant="outlined" required
                     value={values.password} onChange={handleChange('password')}/>
          <br/>
          <TextField id="passwordConfirm" label="Подтверждение пароля" type="passwordConfirm"
                     name="passwordConfirm" style={styles.field} required
                     margin="normal" variant="outlined"
                     value={values.passwordConfirm} onChange={handleChange('passwordConfirm')}/>

          <Button variant="contained" color="primary" style={styles.button}>Зарегистрироваться</Button>
        </form>
      </Paper>
    </div>
  )
}

export default CusLogin
