import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
  main: {
    width: '90%',
    margin: '7% auto'
  },
  write: {
    float: 'left',
    width: '40%'
  },
  read: {
    float: 'right',
    width: '50%',
    height: '70vh',
    overflowY: 'scroll',
    marginRight: '7%',
    padding: '15px 15px 5px'
  },
};

class Discuss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  handleChange(event, name) {
    this.setState({ ...this.state, [name]: event.target.value })
  }

  render() {
    const values = this.state;

    return (
      <div style={styles.main}>
        <div style={styles.write}>
          <TextField id="message" label="Сообщение подрядчику" value={values.message} multiline rows={5}
                     name="message" onChange={e => this.handleChange(e, 'message')} margin="normal"
                     variant="outlined" autoComplete="off" fullWidth/>
          <br/>
          <div align="center">
            <Button variant="outlined" color="primary">Отправить</Button>
          </div>
        </div>
        <Paper style={styles.read} elevation={3}>
          <Typography variant="subtitle1" color="inherit">
            Что же это?
          </Typography>
          <Typography variant="subtitle1" color="inherit">
            Сам не наю
          </Typography>
          <Typography variant="subtitle1" color="inherit">
            Пойдем разберемся?
          </Typography>
          <Typography variant="subtitle1" color="inherit">
            Ну го! Только куда нас это заведет?
          </Typography>
        </Paper>
      </div>
    )
  }
}

export default Discuss
