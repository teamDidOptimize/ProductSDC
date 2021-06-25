const express = require('express');
const productsRouter = express.Router();
const Product = require('../models/product.js');
const db = require('../server.js');

productsRouter
  .get('/', (req, res) => {
    res.status(200).send('ADD SOME ROUTES');
  })
  .get('/');


module.exports = productsRouter;