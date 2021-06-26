/* eslint-disable camelcase */
const express = require('express');
const productsRouter = express.Router({ mergeParams: true });
const Product = require('../models/product.js');
const Styles = require('../models/style.js');

// TODO-ALL: add second parameter to find to grab ONLY fields needed ({}, {field1: 1, field2: 1, field3: 1})
// TODO-ALL: handle authorization

productsRouter
  // TODO: NEED TO ADD PAGINATION AND COUNT HANDLING
  // get the related route
  .route('/')
  .get(async (req, res) => {
    let query = {};
    let products = await Product.find(query).limit(5); // update limit to be dynamic
    res.status(200).json(products);
  });

productsRouter
  .route('/:product_id')
  .get(async (req, res) => {
    let product_id = req.params.product_id;
    let query = { id: product_id };
    let product = await Product.findOne(query);
    res.status(200).json(product);
  });

productsRouter
  .route('/:product_id/styles')
  .get(async (req, res) => {
    let product_id = req.params.product_id;
    let query = { id: id };
    let styles = await Product.findOne(query, { styles: 1});
    res.status(200).json(styles);
  });

productsRouter
  .route('/:product_id/related')
  .get(async (req, res) => {
    let product_id = req.params.product_id;
    let query = { id: id };
    let relatedIds = await Product.findOne(query, { related: 1 });
    res.status(200).json(relatedIds);
  });


module.exports = productsRouter;