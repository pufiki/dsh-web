import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import Typography from '@material-ui/core/Typography'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import CloseIcon from '@material-ui/icons/Close'
import InfoIcon from '@material-ui/icons/Info'
import IconButton from '@material-ui/core/IconButton'

class Toast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const iconsMap = {
      error: <ErrorIcon />,
      success: <CheckCircleIcon />
    }

    let icon = iconsMap[this.props.status] || <InfoIcon />;

    return(
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={this.props.open} autoHideDuration={5000} onClose={this.props.closeFunc}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        message={
          this.props.title ?
            <Typography variant="h6" color="inherit" id="message-id">
              <p>{icon}{this.props.title}</p>
              {this.props.message}
            </Typography>
          :
            <Typography variant="h6" color="inherit" id="message-id">
              {icon}
              {this.props.message}
            </Typography>
        }
        action={[
          <IconButton key="close" aria-label="Close" color="inherit" onClick={this.props.closeFunc}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    )
  }
}

Toast.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string,
  status: PropTypes.string.isRequired,
  closeFunc: PropTypes.func
};
Toast.defaultProps = {
  status: 'info'
};

export default Toast

export const ToastState = {
  data: null,
  show: false
}

export const ToastActionTypes = {
  SET_DATA: 'SET_DATA',
  CLOSE_TOAST: 'CLOSE_TOAST',
}

export const ToastReducer = (state = ToastState, action) => {
  switch (action.type) {
    case ToastActionTypes.SET_DATA:
      return {
        ...state,
        data: action.data,
        show: true
      };
    case ToastActionTypes.CLOSE_TOAST:
      return {
        ...state,
        show: false
      };
    default:
      return state
  }
}

export const ToastActions = {
  setToastData: (data) => (dispatch) => {
    dispatch({ type: ToastActionTypes.SET_DATA, data })
  },
  closeToast: () => (dispatch) => {
    dispatch({ type: ToastActionTypes.CLOSE_TOAST })
  }
}
