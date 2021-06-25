/* eslint-disable camelcase */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// product schema
const StylesSchema = new Schema({
  style_id: {
    type: Number,
    unique: true,
  },
  productId: Number,
  name: String,
  sale_price: String,
  original_price: Number,
  default_style: Boolean
});

// product model
const Styles = mongoose.model('style', StylesShema);

module.exports = Styles;