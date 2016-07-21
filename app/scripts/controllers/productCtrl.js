'use strict';
angular.module("lionHeart")
.controller("productCtrl", function($scope, dataService, functionService) {
  dataService.getProducts(function(response) {
    $scope.products = response.data.products
  })
  dataService.getCart(function(response) {
    $scope.cart = response.data.cart.data.cart;
  })
  dataService.getUser(function(response) {
    $scope.user = response.data.user;
  })

    $scope.addToCart = function(id, quantity, product) {
      functionService.addToCart(id, quantity, $scope.user, $scope.cart, product, function(response) {
        $scope.cart = response;
      });
    }
});
