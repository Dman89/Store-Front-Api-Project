var mongoose = require('mongoose');

var portfolioSchema = {
  _id: { type: String },
  url: { type: String }
};

var model = mongoose.model('Portfolio', portfolioSchema);
module.exports = model;
module.exports.Category = portfolioSchema;
