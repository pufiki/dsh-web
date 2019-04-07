import React from 'react'
import * as Actions from '@/redux/actions'
import { bindActionCreators } from 'redux'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import {connect} from 'react-redux'

const styles = {
  noAccess: {
    display: 'inline-block',
    marginTop: 32,
    width: '100%',
    textAlign: 'center',
    fontFamily: '"Comfortaa", sans-serif'
  },
  loading: {
    display: 'inline-block',
    margin: '32px 47%',
    textAlign: 'center',
    fontFamily: '"Comfortaa", sans-serif'
  }
};

export default function isAuthorizedHOC (ChildComponent) {
  class isAuthorized extends React.Component {
    constructor(props){
      super(props);
    }
    componentDidMount() {
    }
    render(){
      const childs = <ChildComponent user={this.props.user} {...this.props} />
      const noAccess = <Typography variant="h3" style={styles.noAccess} color="error">У вас нет доступа</Typography>
      const loading = <CircularProgress color="primary" style={styles.loading}/>
      if (this.props.user.isLoading) {
        return loading
      } else {
        return (this.props.user.info && this.props.user.info.id) ? childs : noAccess
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
