import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import {Link as RouterLink} from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import Chip from '@material-ui/core/Chip'
import InputLabel from '@material-ui/core/InputLabel'

import categories from '*/categories'

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

function ConSignup() {

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    specs: []
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return(
    <div style={styles.centerDiv}>
      <Typography variant="h4" style={styles.title}>Подрядчик</Typography>
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

          <br/>

          <FormControl style={styles.field}>
            <InputLabel htmlFor="select">Специализация</InputLabel>
            <Select multiple value={values.specs} input={<Input id="select"/>} autoWidth={false}
                    onChange={handleChange('specs')}
                    renderValue={selected => (
                      <div>
                        {selected.map(value => (
                          <Chip key={value} label={categories[value].label} />
                        ))}
                      </div>
                    )}>
              {categories.map(category => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <br/>
          <Button variant="contained" color="primary" style={styles.button}>Создать</Button>

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

export default ConSignup
