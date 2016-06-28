var mongoose = require('mongoose');
var Products = require('../models/products.js');
var product = new Products({
    name: "Freestyle Lion",
    pictures: "http://localhost:3000/img/stickers/stickers4.jpg",
    price: {
      amount:"35",
      currency: "USD"
    },
    category: {
      _id: "Graphic Lion",
      parent: "Graphic Design"
    },
    urlCode: "Graphic-King-Lion"
  });
product.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Success");
})
