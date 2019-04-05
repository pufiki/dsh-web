import React from 'react'

const styles = {
  top: {
    height: 53,
    paddingTop: 10,
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
    clear: 'both'
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
      </main>
    )
  }
}

export default Home
