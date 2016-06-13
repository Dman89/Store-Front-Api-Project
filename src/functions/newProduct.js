var mongoose = require('mongoose');
var Products = require('../models/products.js');
var product = new Products({
    name: "Here We Go",
    pictures: "http://papercallio-production.s3.amazonaws.com/uploads/event/logo/2/mid_300_rsz_happy_face.png",
    price: {
      amount:"50",
      currency: "USD"
    },
    category: {
      _id: "Elephant",
      parent: "Paintings",
      ancestors: ["canvas"]
    },
    urlCode: "elephant-painting-on-canvas"
  });
product.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Success");
})
