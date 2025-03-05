const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const num = Math.floor(Math.random() * 10);
  res.send(`The random number is ${num}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
