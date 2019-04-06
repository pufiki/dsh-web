import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ButtonBase from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'

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
  title: {
    display: 'inline-block'
  },
  titleFull: {
    width: '80%'
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
    display: 'inline-block',
    textAlign: 'justify',
    margin: '20px 0 10px'
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

function Card(props) {
  const req = props.request;
  const isFull = props.full;

  const insides = <React.Fragment>
    <Typography variant="h5" color="textPrimary" style={styles.title}>
      {req.name}
    </Typography>

    {isFull &&
    <Link to={`/request/${req.id}/apply`} component={RouterLink} color="inherit" style={styles.apply}>
      <Button variant="outlined" color="primary">Принять</Button>
    </Link>}

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
