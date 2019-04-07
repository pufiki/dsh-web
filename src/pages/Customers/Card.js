import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Link from '@material-ui/core/Link'
import {Link as RouterLink} from 'react-router-dom'

const styles = {
  description: {
    position: 'relative',
    display: 'inline-block',
    wordWrap: 'break-word',
    textAlign: 'justify',
    lineHeight: '1.2em',
    maxHeight: '3.6em',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  link: {
    textDecoration: 'none'
  }
};

class CusCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cont } = this.props;

    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {cont.name}
          </Typography>
          <Typography color="textSecondary" style={styles.description}>
            {cont.description}
          </Typography>
        </CardContent>
        <CardMedia component="img" alt="Contemplative Reptile"
                   height="140" image="https://s3.eu-north-1.amazonaws.com/serverlessgallery/pufiki/pufiki.png" title="Фотография подрядчика"/>
        <CardActions style={styles.flex}>
          <Link to={`/contractor/${cont.id}`} component={RouterLink} color="inherit" style={styles.link}>
            <Button size="small" color="primary" variant="outlined">
              Профиль заказчика
            </Button>
          </Link>
          <Link to={`/contractor/${cont.id}/requests`} component={RouterLink} color="inherit" style={styles.link}>
            <Button size="small" color="primary" variant="outlined">
              Заявки
            </Button>
          </Link>
        </CardActions>
      </Card>
    )
  }
}

export default CusCard
