var mongoose = require('mongoose');

var adminSchema = { status: {
  type: String
  },

  _id: {type: String}
  };

var model = mongoose.model('Admin', adminSchema);
module.exports = model;
module.exports.Panel = adminSchema;
