/* eslint-disable camelcase */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// product schema
const ProductSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  campus: String,
  slogan: String,
  category: String,
  default_price: Number,
  features: Array,
  styles: Array,
  related: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

// product model
const Product = mongoose.model('product', ProductSchema);

module.exports = Product;