import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

const styles = {
  mainDiv: {
    width: '80%',
    margin: '32px auto'
  }
};

const rows = [
  {
    id: 0,
    name: 'Подрядчик 1'
  },
  {
    id: 1,
    name: 'Подрядчик 2'
  },
  {
    id: 2,
    name: 'Подрядчик 3'
  }
];

class Acceptance extends React.Component {

  render() {
    return(
      <Paper style={styles.mainDiv}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название компании-подрядчика</TableCell>
              <TableCell align="center">Принять</TableCell>
              <TableCell align="center">Отклонить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Link to={'/contractor' + row.id} component={RouterLink} variant="subtitle1" color="inherit">
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Button variant="outlined" color="primary">Принять</Button>
                </TableCell>
                <TableCell align="center">
                  <Button variant="outlined" color="primary">Отклонить</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default Acceptance
