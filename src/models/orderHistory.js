var mongoose = require('mongoose');

var orderHistorySchema = {
  date:
    {
      type: Date,
    },
  cart:
    {
      items:[
      {
        product:
        {
          type: mongoose.Schema.Types.ObjectId
        },
        quantity:
        {
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
    },
    billingAddress: {name: {type: String}, address: {type: String}, city: {type: String}, state: {type: String}, zip:{type: String}, country:{type: String}},
    shippingAddress: {name: {type: String}, address: {type: String}, city: {type: String}, state: {type: String}, zip:{type: String}, country: {type: String}, useBilling: {type: Boolean}},
    charge: { type: Object }
};


var model = mongoose.model('OrderHistory', orderHistorySchema);
module.exports = model;
module.exports.History = orderHistorySchema;
