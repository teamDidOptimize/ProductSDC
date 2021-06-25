const express = require('express');
const productsRouter = express.Router();
const Product = require('../models/product.js');
const db = require('../server.js');

productsRouter
  // TODO: NEED TO ADD PAGINATION AND COUNT HANDLING
  // get the related route
  .route('/')
  .get((req, res) => {
    let query = '';
    let results = '';
    res.status(200).send(results);
  });

productsRouter
  .route('/:product_id')
  .get((req, res) => {
    let query = '';
    let results = '';
    res.status(200).send(results);
  });

productsRouter
  .route('/:product_id/styles')
  .get((req, res) => {
    let query = '';
    let results = '';
    res.status(200).send(results);
  });

productsRouter
  .route('/:product_id/related')
  .get((req, res) => {
    let query = '';
    let results = '';
    res.status(200).send(results);
  });


module.exports = productsRouter;