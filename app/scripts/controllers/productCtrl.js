'use strict';
angular.module("lionHeart")
.controller("productCtrl", function($scope, dataService, functionService) {
  var addToCartReq = require("../functions/addToCartReq");
  var cart = $scope.cart
  var user = $scope.user;
  dataService.getProducts(function(response) {
    if (response.data.products[0].id == null) {
      var varTemp = response.data.products.length;
      for (var x = 0; x < varTemp; x++) {
        response.data.products[x].id = response.data.products[x]._id;
      }
    }
    $scope.products = response.data.products
  })
  dataService.getCart(function(response) {
    $scope.cart = response.data.cart.data.cart;
    cart = $scope.cart
  })
  dataService.getUser(function(response) {
    $scope.user = response.data.user;
    user = $scope.user;
  })
    $scope.addToCart = function(id, quantity, product) {
    var id = id;
      addToCartReq(id, quantity, user, cart, product, functionService, $scope, function(res) {
        console.log("Cart Saved");
        $scope.cart = res;
        cart = $scope.cart
      });
      console.log("Completed!");
    }
});
