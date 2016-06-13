var mongoose = require('mongoose');
var Goal = require('../models/goal.js');
var goal = new Goal({
  title: 'New Addition'
});
goal.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Success");
})
