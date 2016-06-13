'use strict';
var express = require('express');
var User = require('../models/user');
var Products = require('../models/products');
var userRouter = express.Router();
require('./products');
//Users
//Create User
userRouter.post('/user', function(req, res) {
  var user = req.body;
  User.create(user, function(err, user) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.send({message: 'User Created'})
    console.log('User Created!')
  })
})
// Update User
//TODO: Delete Temp User
userRouter.put('/user/id/:id', function (req, res) {
  var id = req.params.id;
  var user = req.body;
  if (user && user._id !== id) {
    return res.status(500).json({err: user});
    console.log('ID does not match.')
  }
  User.findByIdAndUpdate(id, user, {new: true}, function(err, user) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    var tempUser = user;
    var user = user.profile;
    res.send({'user': tempUser, 'message':'Profile Updated'});
    console.log(req.body.profile.username + ' your profile has been edited!')
  })
})
// Delete User
userRouter.delete('/user/id/:id', function (req, res) {
  var id = req.params.id
  User.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({message: err.message})
    } else {
      res.json({message: 'Deleted User'});
      console.log('Deleted User');
    }
  })
})
// Get User By ID
//TODO: Delete Temp User
userRouter.get('/user/id/:id', function(req, res) {
  var id = req.params.id;
  User.find({_id: id}, function(err, users) {
    if (err) {
      console.log('Oh Shucks!');
      return res.status(500).json({message: err.message});
    }
    if (users == undefined) {
      res.status(404).json({"message": "Not a User"})
    } else {
    var tempUsers = users;
    var users = users.profile;
    res.json({"users":tempUsers});
  }
  })
});
//Users Personal Route VIA Username
//TODO: Delete Temp User
userRouter.get('/user/:id', function(req, res) {
  var id = req.params.id;
  User.find({"profile.username": id}, function(err, users) {
    if (err) {
      console.log('Oh Shucks!');
      return res.status(500).json({message: err.message});
    }
    if (users == undefined) {
      res.status(404).json({"message": "Not a User"})
    } else {
    var tempUsers = users;
    var users = users.profile;
    res.json({"users":tempUsers});
  }
  })
});
//List Users
//TODO: delete tempUser
userRouter.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      console.error('Oh Shucks!');
      return res.status(500).json({message: err.message});
    }
    var tempUsers = users;
    var users = users.profile;
    res.json({"users":tempUsers});
  })
})

module.exports = userRouter;
