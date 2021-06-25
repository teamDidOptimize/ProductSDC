/* eslint-disable camelcase */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// product schema
const relatedSchema = new Schema({
  current_product_id: Number,
  related_product_id: Number
});

// product model
const Related = mongoose.model('related', relatedSchema);

module.exports = Related;