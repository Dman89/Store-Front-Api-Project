'use strict';
var express = require('express');
var User = require('../models/user');
var Products = require('../models/products');
var stripe = require('../models/stripe');
var _ = require('underscore');
var passport = require('passport')
var passportFB = require('passport-facebook')
var cartRouter = express.Router();
// Cart
cartRouter.get('/user/:id/cart/', function(req, res) {
  //TODO: remove notes from below
  // if (!req.user) {
  //   return res.
  //   res.status(401).json({'message':'Not logged in'});
  // }
  var id = req.params.id;
  User.findOne({_id:id}, function(err, carts) {
    if (err) {
      console.error('Oh Shucks!');
      return res.status(500).json({message: err.message});
    }
    if (carts == undefined) {
      res.status(404).json({"message":"Not a User"});
      console.log("Not a User");
    } else {
    var cart = carts.data.cart;
    //TODO: req.user (remove carts.populate)
    carts.populate({ path: 'data.cart.product', model: 'Products' },
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
    req.user.populate({ path: 'data.cart.product', model: 'Products' },
    handleOne.bind(null, 'user', res));
  }
  })
})
cartRouter.put('/user/:id/cart/', function (req, res) {
  var id = req.params.id
  //TODO: if (!req.user) {
  //   return res.status(404).json({'message': 'Not logged in'});
  //   console.log('Not logged in');
  // }
  if (!req.body) {
    return res.status(404).json({'message': 'Cart not found'});
  console.log('No cart specified');
  }
  var cart = req.body
  User.findByIdAndUpdate(id, cart, {new: true}, function(err, response) {
    if(err) {
      return res.status(500).json(err);
    } else if (response == undefined) {
    return res.status(500).json({message: "Not Found?!"});
    } else {
    var response = response.data.cart;
    res.send({'cart': response});
    console.log('Shopping cart has been edited!');
  }
  })
  // TODO: req.user.save(function(err, user) {
  //   if (error) {
  //     return res.status(500).json({'message': 'Cannot find page'});
  //   }
  //  return res.json({user: user});
  //})
})
cartRouter.post('/user/:id/checkout', function (req, res) {
  var id = req.params.id;
  if (!req.user) {
    return res.status(404).json({message: "Not logged in"})
  }
  req.user.populate({ path: 'data.cart.product', model: 'Products'}, function (err, user) {
    var totcalCostUSD = 0;
    _.each(user.data.cart, function(item) {
    totalCostUSD += item.product.ineternal.approximatePriceUSD * item.quantity;
  });
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
        req.data.cart = [];
        req.user.save(function() {
          return res.jason({id: charge.id});
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
  json[property] = result.data.cart;
  res.json(json);
}

module.exports = cartRouter;
