import React from 'react'

import RequestCard from './Card'

const styles = {
  div: {
    width: '50%',
    margin: '7% auto',
    padding: '0 20px'
  },
  card: {
    width: '100%',
    margin: '15px auto'
  }
};

const requests = [
  {
    id: 0,
    name: 'Заявка 1',
    description: 'Какое-то непонятное описание',
    author: 'Иванов Иван',
    comOffers: 5,
    date: '06-04-2019 18:32'
  },
  {
    id: 1,
    name: 'Заявка 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tellus nisl. Praesent at felis libero. Donec vel accumsan felis. Ut iaculis sit amet lacus vitae luctus. Pellentesque ligula purus, ultricies id laoreet in, sodales in metus. Sed sagittis porta nulla vel ultrices. Vestibulum lorem nisl, pellentesque vitae sodales sed, viverra sed nulla. Ut consectetur aliquet nulla in posuere. Pellentesque lacinia turpis lectus, id rutrum dui pharetra id.\n' +
      '\n' +
      'Nunc accumsan sem magna, nec condimentum odio faucibus nec. Morbi vel arcu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In commodo pellentesque sapien, et pharetra elit interdum sed. Integer iaculis sapien dui. Vivamus.',
    author: 'Иванов Иван',
    comOffers: 5,
    date: '06-04-2019 18:32'
  },
  {
    id: 2,
    name: 'Заявка 1',
    description: 'Какое-то непонятное описание',
    author: 'Иванов Иван',
    comOffers: 5,
    date: '06-04-2019 18:32'
  }
];

class Requests extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.div}>
        {requests.map(request => (
          <div style={styles.card} key={request.id}>
            <RequestCard request={request}/>
          </div>
          ))}
      </div>
    )
  }
}

export default Requests
