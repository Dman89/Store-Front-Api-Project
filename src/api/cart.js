'use strict';
var express = require('express');
var User = require('../models/user');
var Cart = require('../models/cart');
var Products = require('../models/products');
var stripe = require('../models/stripe');
var _ = require('underscore');
var passport = require('passport')
var passportFB = require('passport-facebook')
var OrderHistory = require('../models/orderHistory');
var NewUser = require('../models/user');
var cartRouter = express.Router();
// Cart
cartRouter.get('/cart', function(req, res) {
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
    carts.populate({ path: 'data.cart.items.product', model: 'Products' },
    handleOne.bind(null, 'cart', res));
  }
  })
})
cartRouter.get('/:id/cart/', function(req, res) {
  if (!req.user) {
    return res.status(401).json({'message':'Not logged in'});
  }
  var id = req.params.id;
  User.findOne({"profile.username":id}, function(err, carts) {
    if (err) {
      console.error('Oh Shucks!');
      return res.status(500).json({message: err.message});
    }
    if (carts == undefined) {
      res.status(404).json({"message":"Not a User"});
      console.log("Not a User")
    } else {
    req.user.populate({ path: 'data.cart.items.product', model: 'Products' },
    handleOne.bind(null, 'user', res));
  }
  })
})
cartRouter.put('/user/cart/', function (req, res) {
  var id = req.user._id
  if (!req.user) {
    return res.status(404).json({'error': 'Not logged in'});
    console.log('Not logged in');
  }
  if (!req.body) {
    return res.status(404).json({'error': 'Cart not found'});
  console.log('No cart specified');
  }
  var cart = req.body
  User.findByIdAndUpdate(id, cart, {new: true}, function(err, response) {
    if(err) {
      return res.status(500).json(err);
    }
    else if (response == undefined) {
    return res.status(500).json({message: "Not Found?!"});
    }
    else {
       return res.json({user: response});
     console.log('Shopping cart has been edited!');
      }

  })

})
cartRouter.post('/user/checkout', function (req, res) {
  var id = req.user._id;
  if (!req.user) {
    return res.status(404).json({message: "Not logged in"})
  }
  req.user.populate({ path: 'data.cart.items.product', model: 'Products'}, function (err, user) {
    var totalCostUSD = 10;
    stripe.charges.create(
        {
          amount: Math.ceil(totalCostUSD *100),
          currency: 'usd',
          source: req.body.stripeToken,
          description: 'Example Charge'
        },
        function(err, charge) {
          if (err && err.type === 'StripeCardError') {
            return res.status(400).json(err);
          }
          if (err) {
            console.log(err);
            return res.status(500).json(err);
          }
          var newHistory = new OrderHistory();
            newHistory.date = new Date();
            newHistory.cart = req.user.data.cart;
            newHistory.billingAddress = req.user.data.billingAddress;
            newHistory.shippingAddress = req.user.data.shippingAddress;
            newHistory.charge = charge;
            req.user.data.orderHistory.push(newHistory);
            var newUser = new NewUser();
            newUser = req.user;
            newUser.data.cart = null;
          newUser.save(function() {
            return res.json({charge: charge, user: req.user.data});
          });
        }
      );
    });
});

//Borrowed from ( MongoDBx: M101x Introduction to MongoDB using the MEAN Stack )
function handleOne(property, res, error, result) {
  if (error) {
    return res.status(500).json(error);
  }
  if (!result) {
    return res.status(404).json(error);
  }
  var json = {};
  json[property] = result;
  res.json(json);
}

module.exports = cartRouter;
