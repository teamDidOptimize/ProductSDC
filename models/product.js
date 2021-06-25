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
  related: [Number]
});


// product schema
// const ProductSchema = new Schema({
//   id: {
//     type: Number,
//     unique: true,
//     required: [true, 'id field is required']
//   },
//   campus: {
//     type: String,
//     required: [true, 'campus field is required']
//   },
//   slogan: {
//     type: String,
//     required: [true, 'slogan field is required']
//   },
//   category: {
//     type: String,
//     required: [true, 'category field is required']
//   },
//   default_price: {
//     type: mongoose.Decimal128,
//     set: v => {
//       return new mongoose.Types.Decimal128(v.toFixed(2));
//     },
//     required: [true, 'default price field is required']
//   },
//   features: {
//     type: [
//       {
//         feature: String,
//         value: String
//       }
//     ],
//     required: [true, 'features field is required']
//   },
//   styles: {
//     type: [
//       {
//         style_id: { type: Number, unique: true },
//         name: String,
//         original_price: {
//           type: mongoose.Decimal128,
//           set: v => {
//             return new mongoose.Types.Decimal128(v.toFixed(2));
//           },
//         },
//         sale_price: {
//           type: mongoose.Decimal128,
//           set: v => {
//             return new mongoose.Types.Decimal128(v.toFixed(2));
//           },
//         },
//         'default?': Boolean,
//         photos: [
//           {
//             thumbnailURL: String,
//             url: String
//           }
//         ],
//         skus: {
//           id: {
//             quantity: Number,
//             size: String
//           }
//         }
//       }
//     ],
//     required: [true, 'styles field is required']
//   },
//   related: {
//     type: [Number],
//     required: [true, 'related field is required']
//   }
// }, {
//   timestamps: {
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
//   }
// });

// product model
const Product = mongoose.model('product', ProductSchema);

module.exports = Product;