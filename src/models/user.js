var mongoose = require('mongoose');
var OrderHistory = require('./orderHistory');
var Blog = require('./blog');
var Cart = require('./cart');
var Admin = require('./admin');

var addition = {
  profile: {
    displayName: { type: String },
    username: {
      type: String,
      unique: true
    },
    picture: {
      type: String
    }
  },
  data: {
    oauth: { type: String },
    socialLogin: {type: String},
    cart: Cart.Cart,
    orderHistory: [OrderHistory.History],
    firstName: {type: String},
    lastName: {type: String},
    email: [{type: String}],
    url: {type: String},
    emailMailingList: {type: Boolean},
    researchAndDevelopment: {type: Boolean},
    customerNumber: {type: String},
    billingAddress: {name: {type: String}, address: {type: String}, address2: String, city: {type: String}, state: {type: String}, zip:{type: String}, country: {type: String}},
    shippingAddress: {name: {type: String}, address: {type: String}, address2: String, city: {type: String}, state: {type: String}, zip:{type: String}, country: {type: String}, useBilling: {type: Boolean}},
    posts: [Blog.Posts]
  },
  admin: Admin.Panel
};
var userSchema = new mongoose.Schema(addition);

userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });


var model = mongoose.model('User', userSchema);
module.exports = model;
