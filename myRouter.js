const express = require('express');
const myRouter = express.Router();

myRouter.get('/', (req, res) => {
  res.send('Hello World!');
});

myRouter.post('/users', (req, res) => {
  // handle POST request to create a new user
});

module.exports = myRouter;
