import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '@/redux/actions'

const styles = {
  centerDiv: {
    margin: '10% auto',
    width: '96%',
    textAlign: 'center'
  },
  title: {
    fontFamily: '"Comfortaa", sans-serif',
    width: '60%',
    textAlign: 'right'
  }
};

const cards = [
  {
    name: 'ОАО Энергомегаотопление',
    photo: 'img',
    description: 'Лоооол'
  },
  {
    name: 'ОАО Энергомегаотопление',
    photo: 'img',
    description: 'Лоооол'
  }
];

class Requests extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return(
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4}>

        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Requests)
