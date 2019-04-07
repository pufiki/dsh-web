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
        <div style={styles.middle}>
        </div>
      </main>
    )
  }
}

export default Home
