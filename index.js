const express = require('express');
const path = require('path');

const app = express();


app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/template/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is listening in http://localhost:3000');
});
