var mongoose = require('mongoose');
var User = require('../models/user.js');
User.find({ researchAndDevelopment: true}, function(err, d) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(require('util').inspect(d));
})
