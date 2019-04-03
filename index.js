const express = require('express');
const path = require('path');

const app = express();


app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.all('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'template/index.html'));
});


// start the server
app.listen(3000, () => {
  console.log('Server is listening in http://localhost:3000');
});
