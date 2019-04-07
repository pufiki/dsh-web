import React from 'react'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import Paper from '@material-ui/core/Paper'
import StepButton from '@material-ui/core/StepButton'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'

const styles = {
  top: {
    height: 53,
    paddingTop: 32,
    boxSizing: 'content-box'
  },
  hackImg: {
    height: '100%',
    width: 'auto',
    float: 'left',
    marginLeft: '10%'
  },
  pufikiImg: {
    height: '100%',
    width: 'auto',
    float: 'right',
    marginRight: '10%'
  },
  middle: {
    clear: 'both',
    width: '60%',
    margin: '32px auto'
  },
  paper: {
    padding: '15px 15px 0'
  },
  title: {
    fontFamily: '"Comfortaa", sans-serif',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  actions: {
    marginTop: 8
  },
  ul: {
    marginLeft: 20
  },
  decor: {
    textDecoration: 'none',
    marginLeft: 10
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  handleStep(event, index) {
    this.setState({ active: index })
  }

  render() {
    const {active} = this.state
    return (
      <main>
        <div style={styles.top}>
          <img src="https://s3.eu-north-1.amazonaws.com/serverlessgallery/pufiki/hack.png" alt="Digital Superhero logo" style={styles.hackImg}/>
          <img src="https://s3.eu-north-1.amazonaws.com/serverlessgallery/pufiki/pufiki.png" alt="Pufiki team logo" style={styles.pufikiImg}/>
        </div>
        <div style={styles.middle}>
          <Paper elevation={5} style={styles.paper}>
            <Typography style={styles.title} variant="h4" color="inherit">Возможности проекта</Typography>
            <Stepper activeStep={active} orientation="vertical" nonLinear>
              <Step key={0}>
                <StepButton onClick={(e) => this.handleStep(e, 0)}>
                  Регистрация
                </StepButton>
                <StepContent>
                  <Typography>
                    На проекте реализованы три роли пользователей: Сетевая компания (администратор)
                    получает логин и пароль лично, заявителей регистрируют администраторы после
                    физического обращения в Сетевую компанию, и подрядчики, регистрацию которых
                    должен подтвердить администратор в специальном дашборде:
                  </Typography>
                  <div style={styles.actions}>
                    <Link to="/admin/login" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Администратор
                      </Button>
                    </Link>
                    <Link to="/customer/login" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Заявитель
                      </Button>
                    </Link>
                    <Link to="/contractor/login" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Подрядчик
                      </Button>
                    </Link>
                  </div>
                </StepContent>
              </Step>
              <Step key={1}>
                <StepButton onClick={(e) => this.handleStep(e, 1)}>
                  Работа с пользователями
                </StepButton>
                <StepContent>
                  <Typography>
                    Здесь же можно изменять профиль заказчиков и подрядчиков, улучшая доверие
                    на сервисе. Прикрепить к странице можно не только имя или название компании,
                    но и множество контактных данных (эл.почту, номер телефона, страницы в социальных
                    сетях), фотографию.<br/><br/>
                    Всех подтвержденных пользователей можно увидеть на страницах "Заказчики" или
                    "Подрядчики", которые будут сортироваться по рейтингу. Также можно будет
                    использовать расширенный поиск по названию, описанию или рейтингу.
                  </Typography>
                  <div style={styles.actions}>
                    <Link to="/customer/0" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Страница заказчика
                      </Button>
                    </Link>
                    <Link to="/customers" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Заказчики
                      </Button>
                    </Link>
                    <Link to="/contractors" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Подрядчики
                      </Button>
                    </Link>
                  </div>
                </StepContent>
              </Step>
              <Step key={2}>
                <StepButton onClick={(e) => this.handleStep(e, 2)}>
                  Заявки
                </StepButton>
                <StepContent>
                  <Typography>
                    Зарегистрировавшись, заказчик получает возможность публиковать заявку на
                    выполнение определенных работ. Подрядчики просматривают раздел "Заявки" и
                    выбирают, на какие они хотят откликнуться. <br/><br/>На отдельной странице заявки
                    есть строго контроллируемый процесс выполнения работ. Там можно видеть на
                    какой стадии находится заявка: создана, в поиске исполнителя, выполняется,
                    закончена или в ожидании отзыва. В соответствии со статусом можно выбрать
                    дальнейшие действия: просмотреть список откликнувшихся подрядчиков, пообщаться
                    с согласованным исполнителем, оплатить работу и оставить отзыв.
                  </Typography>
                  <div style={styles.actions}>
                    <Link to="/request/new" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Новая заявка
                      </Button>
                    </Link>
                    <Link to="/requests" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Все заявки
                      </Button>
                    </Link>
                    <Link to="/request/0" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Отдельная заявка
                      </Button>
                    </Link>
                  </div>
                </StepContent>
              </Step>
              <Step key={3}>
                <StepButton onClick={(e) => this.handleStep(e, 3)}>
                  Работа с заявками
                </StepButton>
                <StepContent>
                  <Typography>
                    Как описано в предыдущем пункте, заявки - основная забота маркетплейса. Поэтому
                    с ними происходит много действий. Заявитель может выбирать среди откликнувшихся
                    подрядчиков, выбирая "Принять" или "Отклонить".<br/><br/>
                    После выбора происходит согласование работ, и обе стороны получают
                    доступ с личным сообщениям. Помимо общения там можно будет делиться файлами и
                    делать чек-листы с определенными датами, до которых нужно сдать часть работы.<br/><br/>
                    После выполнения всех работ и оплаты (в планах) заказчик может оставить подрядчику
                    отзыв, который обязательно будет влиять его рейтинг и количество подтвержденных
                    заказов в будущем.
                  </Typography>
                  <div style={styles.actions}>
                    <Link to="/request/0/apply" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Откликнуться
                      </Button>
                    </Link>
                    <Link to="/request/0/applies" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Список откликов
                      </Button>
                    </Link>
                    <Link to="/request/0/discuss" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Диалоги
                      </Button>
                    </Link>
                    <Link to="/request/0/feedback" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        Отзывы
                      </Button>
                    </Link>
                  </div>
                </StepContent>
              </Step>
              <Step key={4}>
                <StepButton onClick={(e) => this.handleStep(e, 4)}>
                  Будущие планы
                </StepButton>
                <StepContent>
                  <Typography>
                    В будущем в сервисе планируются множественные улучшения, которые изменят
                    настоящие наработки и добавят большое количество функционала, который
                    поможет заказчикам гораздо быстрее находить исполнителя для своей заявки,
                    минимизировать оффлайн-общение с Сетевой компанией и монетизировать проект.
                    <br/>
                    Среди них:
                    <ul style={styles.ul}>
                      <li>
                        Модерация заявок с помощью администраторов
                      </li>
                      <li>
                        Сферы деятельности у подрядчиков
                      </li>
                      <li>
                        Горячие и закрепленные заявки
                      </li>
                      <li>
                        Возможность заказчика находить подрядчиков из списка
                      </li>
                      <li>
                        И многие другие
                      </li>
                    </ul>
                  </Typography>
                </StepContent>
              </Step>
              <Step key={5}>
                <StepButton onClick={(e) => this.handleStep(e, 5)}>
                  Почитать о нас
                </StepButton>
                <StepContent>
                  <Typography>
                    Тут все просто - короткий раздел о нашей команде
                  </Typography>
                  <div style={styles.actions}>
                    <Link to="/about" component={RouterLink} color="inherit" style={styles.decor}>
                      <Button color="primary" variant="outlined">
                        О нас
                      </Button>
                    </Link>
                  </div>
                </StepContent>
              </Step>
            </Stepper>
          </Paper>
        </div>
      </main>
    )
  }
}

export default Home
