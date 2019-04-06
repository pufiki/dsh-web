import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from 'parts/Header'
import Home from 'pages/Home'
import About from 'pages/About'
import Error404 from './Error404'

import AdminPage from 'pages/Admin'
import AdminLogin from 'pages/Admin/Login'

import CusLogin from 'pages/Logins/CusLogin'
import CusSignup from 'pages/Logins/CusSignup'
import ConLogin from 'pages/Logins/ConLogin'
import ConSignup from 'pages/Logins/ConSignup'

import Me from 'pages/Me'
import MeEdit from 'pages/Me/Edit'

import NewRequest from 'pages/Requests/New'

import Customers from 'pages/Customers'
import Contractors from 'pages/Contractors'
import Requests from 'pages/Requests'

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
          <Route exact path="/about" component={ About }/>

          <Route exact path="/admin" render={(props) => <AdminPage value={0} {...props} />}/>
          <Route exact path="/admin/acceptance" render={(props) => <AdminPage value={0} {...props} />}/>
          <Route exact path="/admin/registration" render={(props) => <AdminPage value={1} {...props} />}/>
          <Route exact path="/admin/login" component={ AdminLogin }/>

          <Route exact path="/customer/login" component={ CusLogin }/>
          <Route exact path="/customer/signup" component={ CusSignup }/>
          <Route exact path="/contractor/login" component={ ConLogin }/>
          <Route exact path="/contractor/signup" component={ ConSignup }/>

          <Route exact path="/me/edit" component={ MeEdit }/>
          <Route exact path="/me" component={ Me }/>

          <Route exact path="/request/new" component={ NewRequest }/>

          <Route exact path="/customers" component={ Customers }/>
          <Route exact path="/contractors" component={ Contractors }/>
          <Route exact path="/requests" component={ Requests }/>

          <Route component={ Error404 }/>
        </Switch>
      </div>

    </BrowserRouter>
  )
};

export default Routes
