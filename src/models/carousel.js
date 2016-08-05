var mongoose = require('mongoose');

var carousel = {
  url: { type: String },
  urlBig: { type: String }
};

var carouselScheme = new mongoose.Schema(carousel);

var model = mongoose.model('Carousel', carouselScheme);
module.exports = model;
