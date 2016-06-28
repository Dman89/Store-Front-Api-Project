var mongoose = require('mongoose');

var categorySchema = {
  _id: { type: String },
  parent: {
    type: String,
    ref: 'Category',
    index: true
  },
  ancestors: [{
    type: String,
    ref: 'Category'
  }]
};

var model = mongoose.model('Category', categorySchema);
module.exports = model;
module.exports.Category = categorySchema;
