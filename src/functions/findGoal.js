var mongoose = require('mongoose');
var Goal = require('../models/goal.js');
Goal.find({ title: "New Addition"}, function(err, d) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(require('util').inspect(d));
})
