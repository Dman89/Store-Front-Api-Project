'use strict';
var mongoose = require('mongoose');
var server = "mongodb://loginforsite:rossbob420@ds031925.mlab.com:31925/dman89db";
mongoose.connect(server, function(err) {
  if (err) {
    console.log("Error Connecting");
  } else {
    console.log('Connected to MongoDB!\nDaniel,\nWhat are you focusing on?\nWhat does it mean?\nWhat are you gonna do?')
  }
})
