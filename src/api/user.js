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
userRouter.put('/profile', function (req, res) {
  var id = req.user._id;
  var user = req.body;
  if (user && user._id !== id) {
    return res.status(500).json({err: user});
    console.log('ID does not match.')
  }
  User.findByIdAndUpdate(id, user, {new: true}, function(err, user) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    //TODO: Remove or only return profile
    res.send({'user': user, 'message':'Profile Updated'});
    console.log(req.body.profile.username + ' your profile has been edited!')
  })
})

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
    //TODO: Remove or only return profile
    res.send({'user': user, 'message':'Profile Updated'});
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
      //TODO: return only profiles
    res.json({"users":users});
  }
  })
});
// Get profile
userRouter.get('/profile', function(req, res) {
  if (req.user == undefined) {
    res.status(401).json({message: "Please Log In"})
  } else {
    var id = req.user._id;

  User.findOne({_id: id}, function(err, user) {
    if (err) {
      console.log('Oh Shucks!');
      return res.status(500).json({message: err.message});
    }
    if (user == undefined) {
      res.status(404).json({"message": "Not a User"})
    } else {
    res.json({"user":user});
  }
  })
}
});
//Users Personal Route VIA Username
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
    //TODO: Return only Profiles
    res.json({"users":users});
  }
  })
});
//List Users
var tempUsers = {};
userRouter.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      console.error('Oh Shucks!');
      return res.status(500).json({message: err.message});
    } else {
      res.json({"users":users});
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
  json[property] = result;
  res.json(json);
}


module.exports = userRouter;
