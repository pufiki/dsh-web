import React from 'react'
import * as Actions from '@/redux/actions'
import {connect} from 'react-redux'


class isAuthorizedHOC extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if(!this.props.user) {
      this.props.actions.getUser();
    }
  }
  render() {
    const ChildComponent = this.props.children;
    return <ChildComponent user={this.props.user} {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(isAuthorizedHOC)
