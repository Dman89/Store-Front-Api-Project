var mongoose = require('mongoose');
var CategoryPosts = require('./categoryPosts');

var postSchema = {
  title:
    {
      type: String,
    },
  description:
    {
      type: String,
    },
  body:
    {
      type: String,
    },
  urlCode:
    {
      type: String,
    },
  img:
    {
      type: String,
    },
  live:
    {
      type: String,
    },
  date: {month: {type: String}, day: {type: String}, year: {type: String}, time: {type: String}},
  loc: String,
  category: CategoryPosts.Category
};

var model = mongoose.model('Blog', postSchema);
module.exports = model;
module.exports.Posts = postSchema;
