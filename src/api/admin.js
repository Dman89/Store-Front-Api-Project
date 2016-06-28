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


module.exports = adminRouter;
