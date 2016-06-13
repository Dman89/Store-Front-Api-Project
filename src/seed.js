'use strict';
var Products = require('./models/products');
var productData = ["One", "Two", "Three"];
productData.forEach(function(product, index) {
    Products.find({'name': product}, function(err, products) {
      if (err) {
        console.error('Error Dude or Dudet')
      }
      else if(!err) {
        Products.create({
            "name": product,
            "pictures": "http://www.stopaddiction.ca/wp-content/uploads/2016/02/tumblr_o33tcjbPZ41rrjjxto1_500.jpg",
            "price": {
              "amount":"50",
              "currency": "USD"
            },
            "category": {
              "_id": "Elephant",
              "parent": "Paintings",
              "ancestors": ["canvas"]
            }
          });
      };
    });
});
