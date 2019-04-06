import React from 'react'
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Registration from './Registration'
import Acceptance from './Acceptance'

const styles = {
  tabs: {
    zIndex: 10000
  }
};

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event, value){
    this.setState({ value })
  }

  render() {
    const { value } = this.props;

    return(
      <React.Fragment>
        <AppBar position="static">
          <Tabs centered value={value} style={styles.tabs}>
            <Tab label="Подтверждение подрядчиков" onClick={() => this.props.history.push('/admin/acceptance')}/>
            <Tab label="Регистрация заявителя" onClick={() => this.props.history.push('/admin/registration')}/>
          </Tabs>
        </AppBar>
        {value === 0 && <Acceptance/>}
        {value === 1 && <Registration/>}
      </React.Fragment>
    )
  }
}

export default withRouter(AdminPage)
