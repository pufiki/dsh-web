import React from 'react'
import Typography from '@material-ui/core/Typography'

const styles = {
  noAccess: {
    display: 'inline-block',
    marginTop: 32,
    width: '100%',
    textAlign: 'center',
    fontFamily: '"Comfortaa", sans-serif'
  }
};

function Error404() {
  return (
    <main>
      <Typography variant="h3" style={styles.noAccess} color="error">В разработке</Typography>
    </main>
  )
}

export default Error404
