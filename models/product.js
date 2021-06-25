/* eslint-disable camelcase */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// product schema
const ProductSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  campus: {
    type: String,
  },
  slogan: {
    type: String,
  },
  category: {
    type: String,
  },
  default_price: {
    type: Number,
  },
  features: {
    type: [
      {
        feature: String,
        value: String
      }
    ],
  },
  styles: {
    type: [
      {
        style_id: { type: Number, unique: true },
        name: String,
        original_price: {
          type: mongoose.Decimal128,
          set: v => {
            return new mongoose.Types.Decimal128(v.toFixed(2));
          },
        },
        sale_price: {
          type: mongoose.Decimal128,
          set: v => {
            return new mongoose.Types.Decimal128(v.toFixed(2));
          },
        },
        'default?': Boolean,
        photos: [
          {
            thumbnailURL: String,
            url: String
          }
        ],
        skus: {
          id: {
            quantity: Number,
            size: String
          }
        }
      }
    ],
  },
  related: {
    type: [Number],
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

// product model
const Product = mongoose.model('product', ProductSchema);

module.exports = Product;