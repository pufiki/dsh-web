import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
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
    width: '50%',
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
    width: '60%'
  },
  fileInput: {
    display: 'none',
  },
  fileName: {
    display: 'inline-block',
    marginLeft: 10,
    marginTop: 5,
    fontStyle: 'italic'
  },
  button: {
    margin: '10px auto'
  },
  topMargin: {
    marginTop: 10
  }
};

function NewRequest() {

  const [values, setValues] = React.useState({
    name: '',
    description: '',
    specs: []
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return(
    <div style={styles.centerDiv}>
      <Typography variant="h4" style={styles.title}>Заявка</Typography>
      <Paper elevation={4} style={styles.paper}>
        <Typography variant="h6" style={styles.paperTitle}>Новая заявка</Typography>
        <form align="center">
          <TextField id="name" label="Название" value={values.name} required
                     name="name" onChange={handleChange('name')} margin="normal"
                     variant="outlined" autoComplete="off" style={styles.field}/>
          <br/>
          <TextField id="description" label="Описание" name="description" fullWidth required
                     autoComplete="off" margin="normal" variant="outlined" multiline
                     value={values.description} onChange={handleChange('description')}/>
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

          <div style={styles.topMargin}>
            <input style={styles.fileInput} id="buttonFile" multiple type="file"/>
            <label htmlFor="buttonFile">
              <Button variant="outlined" color="primary" component="span">
                Загрузить
              </Button>
            </label>
            <Typography variant="body1" color="inherit" style={styles.fileName}>
              Название файла.docx
            </Typography>
          </div>

          <Button variant="contained" color="primary" style={styles.button}>Опубликовать</Button>

        </form>
      </Paper>

    </div>
  )
}

export default NewRequest
