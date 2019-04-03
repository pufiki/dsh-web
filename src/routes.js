import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './parts/Header'
import Home from './pages/Home'
import Error404 from './Error404'

const styles = {
  margin: {
    marginTop: 64
  }
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <div style={styles.margin}>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route component={ Error404 }/>
        </Switch>
      </div>

    </BrowserRouter>
  )
};

export default Routes
