'use strict';
angular.module("lionHeart")
.controller("productCtrl", function($scope, dataService) {
  dataService.getProducts(function(response) {
    $scope.products = response.data.products
  })
  dataService.getCart(function(response) {
    $scope.cart = response.data.cart.data.cart;
  })
  dataService.getUser(function(response) {
    $scope.user = response.data.user;
  })
  var items = [];
  var user = {};
  $scope.addToCart = function(id, quantity) {
    var itemsOld = [];
    var item = {"product": id, "quantity": quantity}
    user = $scope.user;
    if ($scope.cart !== null) {
      items = $scope.cart.items;
      items.push(item);
    }
    else {
      items = item;
    }
    user.data.cart = {"items" : items};
dataService.updateCart(user, function(response) {});
items = [];
user = {};
  }

});
