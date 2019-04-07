import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

const styles = {
  main: {
    width: '50%',
    margin: '7% auto',
    textAlign: 'center'
  },
  paper: {
    margin: '20px auto',
    padding: 10
  },
  title: {
    fontFamily: '"Comfortaa", sans-serif',
    textTransform: 'uppercase'
  },
  field: {
    width: '80%'
  },
  smallField: {
    width: '30%'
  },
  button: {
    margin: '10px auto'
  },
};

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
      select: ''
    };
  }

  handleChange(event, name) {
    this.setState({ ...this.state, [name]: event.target.value })
  }

  render() {
    const values = this.state;

    return (
      <div style={styles.main}>
        <Typography variant="h4" style={styles.title}>Отзыв</Typography>
        <Paper elevation={4} style={styles.paper}>
          <Typography variant="h6" style={styles.paperTitle}>
            Расскажите о своих впечатлениях в работе с подрядчиком
          </Typography>
          <TextField id="feedback" label="Отзыв о работе подрядчика" value={values.feedback} multiline rows={5}
                     name="feedback" onChange={e => this.handleChange(e, 'feedback')} margin="normal"
                     variant="outlined" autoComplete="off" fullWidth style={styles.field}/>
          <br/>
          <TextField id="select" select label="Количество звезд" value={values.select}
                     onChange={e => this.handleChange(e, 'select')} style={styles.smallField}
                     margin="normal" variant="outlined">
            <MenuItem key={1} value={1}>1</MenuItem>
            <MenuItem key={2} value={2}>2</MenuItem>
            <MenuItem key={3} value={3}>3</MenuItem>
            <MenuItem key={4} value={4}>4</MenuItem>
            <MenuItem key={5} value={5}>5</MenuItem>
          </TextField>

          <br/>
          <Button variant="contained" color="primary" style={styles.button}>Оставить отзыв</Button>
        </Paper>
      </div>

    )
  }
}

export default Feedback
