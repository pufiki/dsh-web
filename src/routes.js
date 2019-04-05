import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { serverFetch as meFetch } from '@/redux/serverFetch'

import Header from './parts/Header'
import Home from './pages/Home'
import Error404 from './Error404'

import CusLogin from './pages/Logins/CusLogin'
import CusSignup from './pages/Logins/CusSignup'
import ConLogin from './pages/Logins/ConLogin'
import ConSignup from './pages/Logins/ConSignup'

import Me from './pages/Me'
import MeEdit from './pages/Me/Edit'

import NewRequest from './pages/Requests/New'

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
          <Route exact path="/customer/login" component={ CusLogin }/>
          <Route exact path="/customer/signup" component={ CusSignup }/>
          <Route exact path="/contractor/login" component={ ConLogin }/>
          <Route exact path="/contractor/signup" component={ ConSignup }/>

          <Route exact path="/me/edit" component={ MeEdit }/>
          <Route exact path="/me" component={ Me } serverFetch={ meFetch }/>

          <Route exact path="/request/new" component={ NewRequest }/>

          <Route component={ Error404 }/>
        </Switch>
      </div>

    </BrowserRouter>
  )
};

export default Routes
