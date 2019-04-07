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
    let icon;
    if(this.props.status === 'error'){
      icon = <ErrorIcon/>
    } else if(this.props.status === 'success'){
      icon = <CheckCircleIcon/>
    } else icon = <InfoIcon/>

    return(
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={this.props.open} autoHideDuration={5000} onClose={this.props.closeFunc}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        message={<Typography variant="h6" color="inherit" id="message-id">
            {icon}
            {this.props.message}
          </Typography>}
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
  status: PropTypes.string.isRequired,
  closeFunc: PropTypes.func
};
Toast.defaultProps = {
  status: 'info'
};

export default Toast
