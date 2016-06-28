'use strict';
var Products = require('./models/products');
var Users = require('./models/user');
var productData = ["One", "Two", "Three"];
var userData = ["Alpha", "Beta", "Omega"];
productData.forEach(function(product, index) {
    Products.find({'name': product}, function(err, products) {
      if (err) {
        console.error('Error Dude or Dudet')
      }
      else if(!err && products.length < 4) {
        Products.create({
            "name": product,
            "urlCode": product,
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
userData.forEach(function(user, index) {
    Users.find({'name': user}, function(err, users) {
      if (err) {
        console.error('Error Dude or Dudet')
      }
      else if(!err && users.length < 4) {
        Users.create({
            profile: {
              displayName: user,
              username: user,
              picture: "http://www.bluespiritgal.com/BlueCardSeries/AangBlue01d150pixels.jpg"
            },
            data: {
              oauth: "hashtagham",
              cart: [
                {product:"575ede5aa1012f0c2787d10d", quantity: 4}, {product:"575ede5aa1012f0c2787d10e", quantity: 2}, {product:"575edef846b033dc2f763dc9", quantity: 1}
              ],
              firstName: user,
              email: "email@email.email",
              password: user,
              lastName: user,
              location: "Arbitrary Location",
              emailMailingList: true,
              researchAndDevelopment: true,
            }
          });
      };
    });
});
