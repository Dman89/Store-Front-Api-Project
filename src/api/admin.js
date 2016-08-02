'use strict';
var express = require('express');
var User = require('../models/user');
var adminRouter = express.Router();

adminRouter.post('/admin/:id', function (req, res) {
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
    res.send({'user': user, 'message':'Admin Updated'});
  })
})
adminRouter.put('/admin/user/id/:id', function (req, res) {
  var id = req.params.id;
  var user = req.body;
  var admin = req.user.admin.status;
  if (admin != 777) {
    return res.status(500).json({err: user});
  }
  User.findByIdAndUpdate(id, user, {new: true}, function(err, user) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    //TODO: Remove or only return profile
      console.log(req.body.profile.username + ' profile has been edited!')
      console.log(req.body.admin.status);
      return res.status(200).json({'user': user, 'message':'Profile Updated'});
  })
})

module.exports = adminRouter;
