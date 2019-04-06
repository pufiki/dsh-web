import React from 'react'
import Grid from '@material-ui/core/Grid'

import Card from './Card'

const customers = [
  {
    id: 0,
    name: "Моё имя - Пашка",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec aliquet sapien. Quisque nulla massa, imperdiet at dolor at, aliquet ultricies purus. Curabitur et mattis orci. Proin eget arcu quis tellus ullamcorper bibendum. Donec varius gravida maximus. Fusce viverra et leo quis dignissim. Phasellus facilisis leo nec orci posuere feugiat.'
  },
  {
    id: 1,
    name: "ОАО Эппл",
    description: 'Самая скучная фирма на этом белом свете'
  },
  {
    id: 2,
    name: "ЗАО 'Кукушки'",
    description: 'Что вы теперь сделаете со мной? Пойдем пить чай в KFC, а то будет тебе очень плохо!'
  },
  {
    id: 3,
    name: "Идите на... уже",
    description: 'Что вы теперь сделаете со мной?'
  },
  {
    id: 4,
    name: "Команда черепашек",
    description: 'Что вы теперь сделаете со мной?'
  },
];

const styles = {
  grid: {
    width: '98%',
    margin: '32px auto 0'
  }
};

class Customers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Grid container spacing={24} style={styles.grid} justify="flex-start" alignItems="center">
        {customers.map(cont =>
          <Grid item xs={12} sm={6} md={4}>
            <Card cont={cont}/>
          </Grid>
        )}
      </Grid>
    )
  }
}

export default Customers
