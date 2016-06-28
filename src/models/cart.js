var mongoose = require('mongoose');
var Products = require('./products');

var cart = {
      items: [{
        product: {
          type: mongoose.Schema.Types.ObjectId
        },
        quantity: {
          type: Number,
          default: 1,
          min: 1
        }
      }],
  subTotal: {
    type: Number,
    default: 0
  },
  tax: {
    type: Number,
    default: 0
  },
  shipping: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 0
  },
  len: {
    type: Number,
    default: 0
  }
    };

    var cartSchema = new mongoose.Schema(cart);
    var model = mongoose.model('Cart', cartSchema);
    module.exports = model;
    module.exports.Cart = cartSchema;
