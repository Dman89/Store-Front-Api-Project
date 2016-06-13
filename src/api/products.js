'use strict';
var express = require('express');
var Products = require('../models/products');
var productRouter = express.Router();
//products
productRouter.get('/products', function (req, res) {
  Products.find({}, function(err, products) {
    if (err) {
      console.log('Oh Shucks!');
      return res.status(500).json({message: err.message});
    }
      console.log('Products Returned');
    res.json({products:products});
  })
})
productRouter.get('/products/:id', function(req, res) {
  var id = req.params.id.toLowerCase();
  Products.find({ 'urlCode': id }, function(err, products) {
    if (err) {
      console.error("Oh Shucks!");
    }
    if (products == undefined) {
      res.status(404).json({"message": "Not a Product"})
    } else {
      res.json({products: products});
  }
  })
})
productRouter.get('/products/id/:id', function(req, res) {
  var id = req.params.id;
  Products.find({ _id: id }, function(err, products) {
    if (err) {
      console.error("Oh Shucks!");
    }
    if (products == undefined) {
      res.status(404).json({"message": "Not a Product"})
    } else {
      res.json({products: products});
  }
  })
})
productRouter.put('/products/id/:id', function (req, res) {
  var id = req.params.id;
  Products.findByIdAndUpdate(id, req.body, {new: true}, function(err, response) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.send({'products': response});
    console.log(req.body.name + ' has been edited!')
  })
})
productRouter.post('/products/id/', function(req, res) {
  var product = req.body;
  Products.create(product, function(err, product) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.send({'products': product, message: "Product Added"});
    console.log('Product Added');
  })
})
productRouter.delete('/products/id/:id', function (req, res) {
  var id = req.params.id
  Products.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({message: err.message})
    } else {
      res.json({message: 'Deleted Product'});
    }
  })
})

module.exports = productRouter;
