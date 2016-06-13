var mongoose = require('mongoose');
var User = require('../models/user.js');
var user = new User({
  profile: {
    username: 'anewname',
    picture: "http://www.google.com",
    website: 'http://www.website.com',
    signUpDate: 2016-06-08,
  },
  data: {
    firstName: 'Tupac3',
    email: 'KingD@Tupac.com',
    password: 'catmouse',
    lastName: 'King',
    location: 'At the Top',
    emailMailingList: true,
    researchAndDevelopment: true,
    oauth: '123',
    cart: [{product:"5759c172532990e03b37d9b2", quantity: 4}, {product:"5759c172532990e03b37d9b2", quantity: 2}, {product:"5759c1c59e38917831d9efa7", quantity: 1}]
  }
});
user.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Success");
})
