import React from 'react'
import * as Actions from '@/redux/actions'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

export default function isAuthorizedHOC (ChildComponent) {
  class isAuthorized extends React.Component {
    constructor(props){
      super(props);
    }
    componentDidMount() {
    }
    render(){
      const childs = <ChildComponent user={this.props.user} {...this.props} />
      const noAccess = <p>You have no access</p>
      const loading = <p>Loading...</p>
      if (this.props.user.isLoading) {
        return loading
      } else {
        return this.props.user.info.id ? childs : noAccess
      }
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(isAuthorized)
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});
