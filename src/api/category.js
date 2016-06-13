'use strict';
var express = require('express');
var Products = require('../models/products');
var categoryRouter = express.Router();
//category
categoryRouter.get('/category/:id', function(req, res) {
  var id = req.params.id;
  Products.find({ 'category.parent': id }, function(err, products) {
    if (err) {
      console.error("Oh Shucks!");
      return res.status(500).json({message: "Error searching for " + id});
    } else if (products.length == false) {
      console.error("Oh Shucks!");
      return res.status(500).json({message: "Wrong Search Term, "  + id + " not found."});
    }
    res.json({products: products});
  })
})


module.exports = categoryRouter;
