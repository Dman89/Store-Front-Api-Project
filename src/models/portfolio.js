var mongoose = require('mongoose');

var portfolio = {
  url: { type: String },
  urlBig: { type: String },
  text: { type: String }
};

var portfolioSchema = new mongoose.Schema(portfolio);

var model = mongoose.model('Portfolio', portfolioSchema);
module.exports = model;
