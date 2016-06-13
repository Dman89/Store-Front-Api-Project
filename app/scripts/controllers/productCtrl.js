'use strict';
angular.module("lionHeart")
.controller("productCtrl", function($scope, dataService) {
  dataService.getProducts(function(response) {
    $scope.products = response.data.products
  })
  $scope.checkout = function() {
    var user = {
      "_id": "575b3533ad679e741c73eee0",
      "__v": 0,
      "data": {
        "firstName": "Tupac3",
        "email": "KingD@Tupac.com",
        "password": "catmouse",
        "lastName": "King",
        "location": "At the Top",
        "emailMailingList": true,
        "researchAndDevelopment": true,
        "oauth": "123",
        "cart": [
          {
            "product": "5759c172532990e03b37d9b2",
            "_id": "575b3533ad679e741c73ded3",
            "quantity": 1
          },
          {
            "product": "5759c172532990e03b37d9b2",
            "_id": "575b3533ad679e741c73ded2",
            "quantity": 1
          },
          {
            "product": "5759c1c59e38917831d9efa7",
            "_id": "575b3533ad679e741c73ded1",
            "quantity": 1
          }
        ]
      },
      "profile": {
        "username": "anewnameqwe",
        "picture": "http://www.google.com"
      }
    }
    dataService.checkout(user);
  }
});
