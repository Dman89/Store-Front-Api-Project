var mongoose = require('mongoose');

var addition = {
  profile: {
    displayName: { type: String },
    username: {
      type: String,
      lowercase: true,
      unique: true
    },
    picture: {
      type: String,
      match: /^http:\/\//i
    }
  },
  data: {
    oauth: { type: String },
    cart: [{
      product: {
        type: mongoose.Schema.Types.ObjectId
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1
      }
    }],
    firstName: {type: String},
    email: {type: String},
    password: {type: String},
    lastName: {type: String},
    location: {type: String},
    emailMailingList: {type: Boolean},
    researchAndDevelopment: {type: Boolean},
  }
};

var model = mongoose.model('User', addition);
module.exports = model;
