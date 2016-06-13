'use strict';
var express = require('express');
var User = require('../models/user');
var Products = require('../models/products');
var router = express.Router();
// Cart
// cartRouter.get('/:id/cart/', function(req, res) {
//   var id = req.params.id;
//   User.findOne({_id:id}, function(err, carts) {
//     if (err) {
//       console.error('Oh Shucks!');
//       return res.status(500).json({message: err.message});
//     }
//     if (carts == undefined) {
//       res.status(404).json({"message":"Not a User"});
//       console.log("Not a User");
//     } else {
//     var cart = carts.data.cart;
//     res.json({"cart": cart});
//   }
//   })
// })
// cartRouter.get('/user/:id/cart/', function(req, res) {
//   var id = req.params.id;
//   User.findOne({"profile.username":id}, function(err, carts) {
//     if (err) {
//       console.error('Oh Shucks!');
//       return res.status(500).json({message: err.message});
//     }
//     if (carts == undefined) {
//       res.status(404).json({"message":"Not a User"});
//       console.log("Not a User")
//     } else {
//     var cart = carts.data.cart;
//     res.json({"cart": cart});
//   }
//   })
// })
//


// router.put('/goals/:id', function (req, res) {
//   var id = req.params.id;
//   var goal = req.body;
//   if (goal && goal._id !== id) {
//     return res.status(500).json({err: "ID's dont match!"});
//   }
//   Goal.findByIdAndUpdate(id, goal, {new: true}, function(err, goal) {
//     if(err) {
//       return res.status(500).json({err: err.message});
//     }
//     res.send({'goal': goal, message: 'Goal Edited!'});
//   })
// })
// router.get('/goals/:completed', function (req, res) {
//   var completed = req.params.completed;
//   Goal.find({completed: true}, function(err, goals) {
//     if (err) {
//       console.log('Oh Shucks!');
//       return res.status(500).json({message: err.message});
//     }
//     res.json({goals:goals});
//   })
// })
// router.delete('/goals/:id', function (req, res) {
//   var id = req.params.id
//   Goal.findByIdAndRemove(id, function(err, result) {
//     if (err) {
//       return res.status(500).json({message: err.message})
//     } else {
//       res.json({message: 'Deleted Todo'});
//     }
//   })
// })


module.exports = router;
