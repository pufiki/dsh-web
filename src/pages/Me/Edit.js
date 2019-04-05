import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import {Link as RouterLink} from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '@/redux/actions'

import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import Chip from '@material-ui/core/Chip'
import InputLabel from '@material-ui/core/InputLabel'

import categories from 'config/categories'

const styles = {
  centerDiv: {
    margin: '10% auto',
    width: '50%',
    textAlign: 'center'
  },
  title: {
    fontFamily: '"Comfortaa", sans-serif',
    textTransform: 'uppercase',
  },
  paper: {
    margin: '20px auto',
    padding: 10
  },
  paperTitle: {
    textAlign: 'center'
  },
  field: {
    width: '60%',
    margin: '0 auto'
  },
  selectLabel: {
    marginRight: '-10%'
  },
  button: {
    margin: '10px auto'
  },
  imgInput: {
    display: 'none'
  },
  fileName: {
    marginLeft: 10,
    marginTop: 5,
    fontStyle: 'italic'
  },
  center: {
    margin: '0 auto'
  },
  topMargin: {
    marginTop: 10
  }
};

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      description: '',
      password: '',
      passwordConfirm: '',
      specs: [],
      phone: '',
      instagram: '',
      tg: '',
      vk: '',
      fb: ''
    };
  }

  handleChange(event, name) {
    this.setState({ ...this.state, [name]: event.target.value })
  }

  componentDidMount() {
    if(!this.props.user) {
      this.props.actions.chooseUser()
    }
  }

  render() {
    const values = this.state;

    return(
      <div style={styles.centerDiv}>
        <Typography variant="h4" style={styles.title}>
          {this.props.user === "contractor" ? "Подрядчик": "Заказчик"}
        </Typography>
        <Paper elevation={4} style={styles.paper}>
          <Typography variant="h6" style={styles.paperTitle}>Изменение профиля</Typography>

          <form align="center">

            <ExpansionPanel style={styles.topMargin}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color="inherit">Данные входа</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <TextField id="email" label="Эл. почта" type="email" name="email" style={styles.field}
                           autoComplete="email" margin="normal" variant="outlined"
                           value={values.email} onChange={(e) => this.handleChange(e, 'email')}/>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <TextField id="password" label="Пароль" type="password" name="password" style={styles.field}
                           autoComplete="password" margin="normal" variant="outlined"
                           value={values.password} onChange={(e) => this.handleChange(e, 'password')}/>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <TextField id="passwordConfirm" label="Подтверждение пароля" type="passwordConfirm"
                           name="passwordConfirm" style={styles.field} required
                           margin="normal" variant="outlined" value={values.passwordConfirm}
                           onChange={(e) => this.handleChange(e, 'passwordConfirm')}/>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color="inherit">Название и описание, специализация</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <TextField id="description" label="Описание" name="description" fullWidth
                           autoComplete="off" margin="normal" variant="outlined" multiline
                           value={values.description} onChange={(e) => this.handleChange(e, 'description')}/>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <TextField id="name" label="Название компании" value={values.name}
                           name="name" onChange={(e) => this.handleChange(e, 'name')} margin="normal"
                           variant="outlined" autoComplete="off" style={styles.field}/>
              </ExpansionPanelDetails>

              {this.props.user === "contractor" &&
                <ExpansionPanelDetails>
                  <FormControl style={styles.field}>
                    <InputLabel htmlFor="select">Специализация</InputLabel>
                    <Select multiple value={values.specs} input={<Input id="select"/>} autoWidth={false}
                            onChange={(e) => this.handleChange(e, 'specs')}
                            renderValue={selected => (
                              <div>
                                {selected.map(value => (
                                  <Chip key={value} label={categories[value].label} />
                                ))}
                              </div>
                            )}>
                      {categories.map(category => (
                        <MenuItem key={category.value} value={category.value}>
                          {category.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </ExpansionPanelDetails>
              }

            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color="inherit">Контактные данные</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <TextField id="phone" label="Номер телефона" value={values.phone}
                           name="phone" onChange={(e) => this.handleChange(e, 'phone')} margin="normal"
                           variant="outlined" autoComplete="phone" style={styles.field}
                           inputProps={{maxLength: 11}} placeholder="81236547809"/>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <TextField id="instagram" label="Страница в Instagram" value={values.instagram} margin="normal"
                           name="instagram" onChange={(e) => this.handleChange(e, 'instagram')} variant="outlined"
                           autoComplete="off" style={styles.field} placeholder="https://www.instagram.com/spacex"/>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <TextField id="vk" label="Страница во Вконтакте" value={values.vk} name="vk"
                           onChange={(e) => this.handleChange(e, 'vk')} margin="normal" placeholder="https://vk.com/science_technology"
                           variant="outlined" autoComplete="off" style={styles.field}/>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <TextField id="tg" label="Канал в Telegram" value={values.tg} variant="outlined"
                           name="tg" onChange={(e) => this.handleChange(e, 'tg')} placeholder="https://t.me/breakingmash"
                           autoComplete="off" style={styles.field} margin="normal"/>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color="inherit">Фотография</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <input accept="image/*" style={styles.imgInput} id="buttonFile"
                       multiple type="file"/>
                <label htmlFor="buttonFile">
                  <Button variant="outlined" color="primary" component="span" style={styles.center}>
                    Загрузить
                  </Button>
                </label>
                <Typography variant="body1" color="inherit" style={styles.fileName}>
                  Название файла.png
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>


            <Button variant="contained" color="primary" style={styles.button}>Изменить</Button>
            <br/>

            <Link to="/me" component={RouterLink} variant="subtitle1" style={styles.topMargin}>
              Вернуться
            </Link>

          </form>
        </Paper>
      </div>
    )
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
)(Edit)
