import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const styles = {
  centerDiv: {
    margin: '10% auto',
    width: '50%',
    textAlign: 'center'
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
    margin: '15px auto'
  },
  fileInput: {
    display: 'none'
  },
  fileName: {
    display: 'inline-block',
    marginLeft: 10,
    marginTop: 5,
    fontStyle: 'italic'
  },
  center: {
    margin: '0 auto'
  },
};

class Apply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      file: '',
      fileError: ''
    }
  }

  handleFileUpload(event) {
    const file = event.target.files[0];
    if(file.size < 10*1024*1024) {
      this.setState({ file: file.name, fileError: '' })
    } else {
      this.setState({ fileError: 'Too large', file: ''})
    }
  }

  handleChange(event, name) {
    this.setState({ ...this.state, [name]: event.target.value })
  }

  render() {
    const values = this.state;

    return(
      <div style={styles.centerDiv}>
        <Paper elevation={4} style={styles.paper}>
          <Typography variant="h6" style={styles.paperTitle}>Отклик на заявку</Typography>
          <form align="center">
            <TextField id="description" label="Описание" value={values.description} required
                       placeholder="Выполню работу в срок по лучшей цене. Качество не гарантирую"
                       multiline rows={5}
                       name="description" onChange={e => this.handleChange(e, 'description')} margin="normal"
                       variant="outlined" autoComplete="off" style={styles.field}/>
            <br/>

            <input accept="image/*" style={styles.fileInput} id="buttonFile"
                   type="file" onChange={(e) => this.handleFileUpload(e)}/>
            <label htmlFor="buttonFile">
              <Button variant="outlined" color="primary" component="span" style={styles.center}>
                Загрузить
              </Button>
            </label>
            <Typography variant="body1" color="inherit" style={styles.fileName}>
              {values.file || 'Название файла.png'}
            </Typography>
            <Typography variant="body1" color="error" style={styles.fileName}>
              {values.fileError || ''}
            </Typography>

            <br/>
            <Button variant="contained" color="primary" style={styles.button}>Откликнуться</Button>
          </form>
        </Paper>
      </div>
    )
  }
}

export default Apply
