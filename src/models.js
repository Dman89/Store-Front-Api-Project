var mongoose = require('mongoose');
var _ = require('underscore');

module.exports = function(wagner) {

  var Category =
    mongoose.model('Category', require('./models/category'), 'categories');
  var Products =
    mongoose.model('Products', require('./models/products'), 'products');
  var User =
    mongoose.model('User', require('./models/user'), 'users');

  var models = {
    Category: Category,
    Product: Products,
    User: User
  };

  // To ensure DRY-ness, register factories in a loop
  _.each(models, function(value, key) {
    wagner.factory(key, function() {
      return value;
    });
  });

  return models;
};
