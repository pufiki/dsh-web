import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ToastActions } from 'parts/Toasts'

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

import Profile from 'parts/Profile'
import MeEdit from 'pages/Me/Edit'
import Toast from 'parts/Toasts'

import NewRequest from 'pages/Requests/New'
import RequestCard from 'pages/Requests/Card'
import Apply from 'pages/Requests/Apply'
import Discuss from 'pages/Requests/Discuss'
import Feedback from 'pages/Requests/Feedback'

import Customers from 'pages/Customers'
import Contractors from 'pages/Contractors'
import Requests from 'pages/Requests'

const styles = {
  margin: {
    marginTop: 64
  }
};

const user = {
  name: 'Вася Пупкин',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat,' +
    ' neque a viverra interdum, leo massa eleifend mi, vel auctor metus ante pretium urna. Ut' +
    ' in ullamcorper nisi. Integer sed ex nisi. Aliquam lacinia non tortor a volutpat. Fusce' +
    ' in accumsan dui. Maecenas consequat nunc sit amet purus commodo convallis. Etiam sodales' +
    ' pulvinar erat a semper.\n Ut venenatis gravida lobortis. Vestibulum vulputate tempus arcu.' +
    ' Ut pulvinar nibh id maximus eleifend. Suspendisse aliquet, nibh non mollis sodales, diam' +
    ' ligula ullamcorper ex, eleifend fermentum risus orci et ex. Donec at dolor nulla. Cras' +
    ' condimentum nulla sed consectetur viverra. Donec at euismod eros.',
  photo: 'https://images.unsplash.com/photo-1542372420-f50174a8ddd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1044&q=80',
  email: 'vasyapupkin@gmail.com',
  contacts: {
    phone: '80001112233',
    instagram: '',
    telegram: '',
    vk: ''
  }
};

const request = {
  id: 0,
  name: 'Заявка 1',
  description: 'Какое-то непонятное описание',
  author: 'Иванов Иван',
  comOffers: 5,
  date: '06-04-2019 18:32'
};

class Routes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div style={styles.margin}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />

            <Route exact path="/admin" render={(props) => <AdminPage value={0} {...props} />} />
            <Route exact path="/admin/acceptance" render={(props) => <AdminPage value={0} {...props} />} />
            <Route exact path="/admin/registration" render={(props) => <AdminPage value={1} {...props} />} />
            <Route exact path="/admin/login" component={AdminLogin} />

            <Route exact path="/customer/login" component={CusLogin} />
            <Route exact path="/customer/signup" component={CusSignup} />
            <Route exact path="/contractor/login" component={ConLogin} />
            <Route exact path="/contractor/signup" component={ConSignup} />

            <Route exact path="/me/edit" component={MeEdit} />

            <Route exact path="/me/requests" component={Requests} />
            <Route exact path="/requests" component={Requests} />
            <Route exact path="/contractor/:id/requests" component={Requests} />
            <Route exact path="/customer/:id/requests" component={Requests} />

            <Route exact path="/me" render={(props) => <Profile user={user} {...props} />} />
            <Route exact path="/customer/:id" render={(props) => <Profile user={user} {...props} />} />
            <Route exact path="/contractor/:id" render={(props) => <Profile user={user} {...props} />} />

            <Route exact path="/request/new" component={NewRequest} />
            <Route exact path="/request/:id/apply" component={Apply} />
            <Route exact path="/request/:id" render={(props) => <RequestCard request={request} full {...props} />} />
            <Route exact path="/request/:id/discuss" component={Discuss} />
            <Route exact path="/request/:id/feedback" component={Feedback} />

            <Route exact path="/customers" component={Customers} />
            <Route exact path="/contractors" component={Contractors} />

            <Route component={Error404} />
          </Switch>
        </div>
        <Toast title={this.props.toast.data ? this.props.toast.data.context : undefined} message={this.props.toast.data ? this.props.toast.data.text : ''} status={this.props.toast.data ? this.props.toast.data.status : 'info'} closeFunc={() => this.props.actions.closeToast()} open={!!this.props.toast.show} />
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  toast: state.toast,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ToastActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)
