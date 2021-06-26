const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.status(200).send('IT WORKED!');
});

module.exports = indexRouter;