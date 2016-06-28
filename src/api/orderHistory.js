'use strict';
var express = require('express');
var User = require('../models/user');
var Products = require('../models/products');
var _ = require('underscore');
var passport = require('passport')
var passportFB = require('passport-facebook')
var orderHistoryRouter = express.Router();
// Cart
orderHistoryRouter.get('/cart/history', function(req, res) {
  if (!req.user) {
    return res.status(401).json({'message':'Not logged in'});
  }
  var id = req.user._id;
  User.findOne({_id: id}, function(err, carts) {
    if (err) {
      console.error('Oh Shucks!');
      return res.status(500).json({message: err.message});
    }
    if (carts == undefined) {
      res.status(404).json({"message":"Not a User"});
      console.log("Not a User");
    } else {
      carts.populate({ path: 'data.orderHistory.cart.items.product', model: 'Products' },
      handleOne.bind(null, 'orders', res));
  }
  })
})

//Borrowed from ( MongoDBx: M101x Introduction to MongoDB using the MEAN Stack )
function handleOne(property, res, error, result) {
  if (error) {
    return res.status(500).json(error);
  }
  if (!result) {
    return res.status(404).json(error);
  }

  var json = {};
  json[property] = result.data.orderHistory;
  res.json(json);
}

module.exports = orderHistoryRouter;
