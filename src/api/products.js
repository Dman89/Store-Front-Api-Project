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
    res.json({products:products});
  })
})
productRouter.get('/products/:id', function(req, res) {
  var id = req.params.id.toLowerCase();
  Products.findOne({ 'urlCode': id }, function(err, products) {
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
productRouter.post('/products', function(req, res) {
  var product = req.body;
  console.log(product);
  Products.create(product, function(err, product) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.send({'products': product, message: "Product Added"});
  })
})
productRouter.delete('/products/id/:id', function (req, res) {
  var id = req.params.id
  Products.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({message: err.message})
    } else {
      res.json({message: 'Deleted Product'});
      console.log('Product Added')
    }
  })
})
// Search name
productRouter.get('/products/search/:query', function (req, res) {
  Products.find({ $text: { $search : req.params.query } },
                { score : { $meta : 'textScore' } } )
                .sort({ score : { $meta : 'textScore' } })
                .limit(10)
                .exec(handleMany.bind(null, 'products', res))
})
function handleMany(property, res, error, result) {
  if (error) {
    console.log(error);
    return res.
      status(status.INTERNAL_SERVER_ERROR).
      json({ error: error.toString() });
  }

  var json = {};
  json[property] = result;
  res.json(json);
}
module.exports = productRouter;
