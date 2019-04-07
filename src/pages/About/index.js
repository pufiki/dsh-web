import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import {Link as RouterLink} from 'react-router-dom'

const styles = {
  top: {
    height: 53,
    paddingTop: 32,
    boxSizing: 'content-box'
  },
  hackImg: {
    height: '100%',
    width: 'auto',
    float: 'left',
    marginLeft: '10%'
  },
  pufikiImg: {
    height: '100%',
    width: 'auto',
    float: 'right',
    marginRight: '10%'
  },
  middle: {
    clear: 'both',
    marginTop: 32
  },
  paper: {
    width: '70%',
    margin: '32px auto',
    padding: '15px 15px 5px'
  },
  title: {
    fontFamily: '"Comfortaa", sans-serif',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  center: {
    textAlign: 'center'
  },
  decor: {
    textDecoration: 'none'
  },
  team: {
    width: '50%',
    WebkitBoxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    MozBoxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  }
};

class Home extends React.Component {
  render() {
    return (
      <main>
        <div style={styles.top}>
          <img src="https://s3.eu-north-1.amazonaws.com/serverlessgallery/pufiki/hack.png" alt="Digital Superhero logo" style={styles.hackImg}/>
          <img src="https://s3.eu-north-1.amazonaws.com/serverlessgallery/pufiki/pufiki.png" alt="Pufiki team logo" style={styles.pufikiImg}/>
        </div>
        <div style={styles.middle} align="center">
          <img src="https://s3.eu-north-1.amazonaws.com/serverlessgallery/pufiki/we.jpg" alt="Our team photo" style={styles.team}/>
        </div>
        <Paper style={styles.paper} elevation={5}>
          <Typography style={styles.title} variant="h4" color="inherit">
            Команда <span style={{color: 'orange'}}>Пуфики</span>
          </Typography>
          <Typography variant="subtitle1" color="inherit" style={styles.center}>
            Состоит из:
          </Typography>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Макс Корсунов
                  </Typography>
                  <CardMedia component="img" alt="Contemplative Reptile"
                             height="170" image="https://s3.eu-north-1.amazonaws.com/serverlessgallery/pufiki/max.jpg" title="Фотография подрядчика"/>
                  <Typography>
                    Простой парень
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href="https://t.me/vanishmax" target="_blank" color="inherit" style={styles.decor}>
                    <Button size="small" color="primary" variant="outlined">
                      Телеграм
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Шерафган Кандов
                  </Typography>
                  <CardMedia component="img" alt="Contemplative Reptile"
                             height="170" image="https://s3.eu-north-1.amazonaws.com/serverlessgallery/pufiki/sher.jpg" title="Фотография подрядчика"/>
                  <Typography>
                    Простой парень
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href="https://t.me/ticktocked" target="_blank" color="inherit" style={styles.decor}>
                    <Button size="small" color="primary" variant="outlined">
                      Телеграм
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Карен Каспаров
                  </Typography>
                  <CardMedia component="img" alt="Contemplative Reptile"
                             height="170" image="https://s3.eu-north-1.amazonaws.com/serverlessgallery/pufiki/karen.jpg" title="Фотография подрядчика"/>
                  <Typography>
                    Простой парень
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href="https://t.me/kaskar2008" target="_blank" color="inherit" style={styles.decor}>
                    <Button size="small" color="primary" variant="outlined">
                      Телеграм
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </main>
    )
  }
}

export default Home
