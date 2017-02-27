const express = require('express');
const Oca = require('oca');

// loading the registered actions
require('./Actions');

// creating an express app
const app = express();

// adding the rest support to the express app
Oca.restful(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');

  console.log('Sum: http://localhost:3000/sum?x=1&y=10');
  console.log('Multiply: http://localhost:3000/multiply?x=2&y=2');
})
