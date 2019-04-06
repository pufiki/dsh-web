import React from 'react'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ButtonBase from '@material-ui/core/ButtonBase'

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
  botText: {
    display: 'inline-block',
    width: '25%',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  description: {
    display: 'inline-block',
    textAlign: 'justify',
    margin: '20px 0 10px'
  }
};

function Card(props) {
  const req = props.req;
  return(
    <Paper elevation={3}>
      <ButtonBase style={styles.block}>
        <Link to={"/request/" + req.id} component={RouterLink} color="inherit" style={styles.link}>
          <Typography variant="h5" color="textPrimary" style={styles.title}>
            {req.name}
          </Typography><br/>
          <Typography variant="body1" color="textPrimary" style={styles.description}
                      dangerouslySetInnerHTML={{__html: req.description.replace('\n', '<br/><br/>')}}/>
          <div style={styles.bottom}>
            <Typography variant="subtitle2" color="textSecondary" style={styles.botText}>
              {req.author}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" style={styles.botText}>
              {req.specizalization}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" style={styles.botText}>
              {req.comOffers} откликов
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" style={styles.botText}>
              {req.date}
            </Typography>
          </div>
        </Link>
      </ButtonBase>
    </Paper>
  )
}

export default Card
