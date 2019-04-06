import React from 'react'

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
          <img src="hack.png" alt="Digital Superhero logo" style={styles.hackImg}/>
          <img src="pufiki.png" alt="Pufiki team logo" style={styles.pufikiImg}/>
        </div>
        <div style={styles.middle} align="center">
          <img src="we.jpg" alt="Our team photo" style={styles.team}/>
        </div>
      </main>
    )
  }
}

export default Home
