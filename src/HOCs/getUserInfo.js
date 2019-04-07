import React from 'react'
import * as Actions from '@/redux/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { authToken } from '#/common/api/config'

export default function getUserInfoHOC(ChildComponent) {
  class getUserInfo extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      !!authToken && this.props.actions.userMe();
    }
    render() {
      return <ChildComponent user={this.props.user} {...this.props} />
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(getUserInfo)
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});
