import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ButtonBase from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const styles = {
  block: {
    width: '100%'
  },
  link: {
    width: '100%',
    textAlign: 'left',
    padding: '10px 10px 5px'
  },
  decor: {
    textDecoration: 'none'
  },
  title: {
    display: 'inline-block'
  },
  titleFull: {
    width: '80%'
  },
  stepperDiv: {
    clear: 'both'
  },
  btnNext: {
    float: 'right'
  },
  actives: {
    height: '50px'
  },
  botText: {
    display: 'inline-block',
    width: '33%',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  description: {
    clear: 'both',
    display: 'inline-block',
    textAlign: 'justify',
    margin: '0px 0 10px'
  },
  paper: {
    margin: '7% auto',
    width: '70%',
    padding: '15px 15px 5px'
  },
  apply: {
    float: 'right',
    textDecoration: 'none'
  }
};

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  nextStep() {
    if(this.state.active === 4) {
      this.setState({active: 0})
    } else {
      this.setState({active: this.state.active + 1})
    }
  }

  render() {
    const req = this.props.request;
    const isFull = this.props.full;
    const { active } = this.state;

    const insides = <React.Fragment>
      <Typography variant="h5" color="textPrimary" style={styles.title}>
        {req.name}
      </Typography>

      {isFull &&
      <Link to={`/request/${req.id}/apply`} component={RouterLink} color="inherit" style={styles.apply}>
        <Button variant="outlined" color="primary">Принять</Button>
      </Link>}

      {isFull &&
      <div style={styles.stepperDiv}>
        <Stepper activeStep={active}>
          <Step key={0}>
            <StepLabel>Создать заявку</StepLabel>
          </Step>
          <Step key={1}>
            <StepLabel>Найти исполнителя</StepLabel>
          </Step>
          <Step key={2}>
            <StepLabel>Выполнение работы</StepLabel>
          </Step>
          <Step key={3}>
            <StepLabel>Окончание работы и оплата</StepLabel>
          </Step>
          <Step key={4}>
            <StepLabel>Оставить отзыв</StepLabel>
          </Step>
        </Stepper>
      </div>}

      {isFull &&
      <div style={styles.actives}>
        {active === 1 &&
        <Link to="/request/0/applies" component={RouterLink} variant="h6" style={styles.decor}>
          <Button variant="outlined" color="primary">Список откликов</Button>
        </Link>}
        {active === 2 &&
        <Link to="/request/0/discuss" component={RouterLink} variant="h6" style={styles.decor}>
          <Button variant="outlined" color="primary">Общение</Button>
        </Link>}
        {active === 3 &&
        <Link to="/request/0/payment" component={RouterLink} variant="h6" style={styles.decor}>
          <Button variant="outlined" color="primary">Оплата</Button>
        </Link>}
        {active === 4 &&
        <Link to="/request/0/feedback" component={RouterLink} variant="h6" style={styles.decor}>
          <Button variant="outlined" color="primary">Отзыв</Button>
        </Link>}

        <Button style={styles.btnNext} variant="outlined" color="primary" onClick={() => this.nextStep()}>
          Шаг вперед
        </Button>
      </div>}

      <br/>
      <Typography variant="body1" color="textPrimary" style={styles.description}
                  dangerouslySetInnerHTML={{__html: req.description.replace('\n', '<br/><br/>')}}/>
      <div style={styles.bottom}>
        <Typography variant="subtitle2" color="textSecondary" style={styles.botText}>
          {req.author}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" style={styles.botText}>
          {req.comOffers} откликов
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" style={styles.botText}>
          {req.date}
        </Typography>
      </div>
    </React.Fragment>

    if(isFull) {
      return (
        <Paper elevation={4} style={styles.paper}>
          {insides}
        </Paper>
      )
    } else {
      return(
        <Paper elevation={3}>
          <ButtonBase style={styles.block}>
            <Link to={"/request/" + req.id} component={RouterLink} color="inherit" style={styles.link}>
              {insides}
            </Link>
          </ButtonBase>
        </Paper>
      )
    }
  }
}

Card.propTypes = {
  request: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    comOffers: PropTypes.number
  }).isRequired,
  full: PropTypes.bool
};
Card.defaultProps = {
  full: false
};

export default Card
