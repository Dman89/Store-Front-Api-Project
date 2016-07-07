'use strict';
angular.module("lionHeart")
.controller("cart.checkoutCtrl", function($scope, dataService) {
  dataService.getCart(function(response) {
  $scope.cart = response.data.cart;
  });
dataService.getUser(function(response) {
  $scope.userCheckout = response.data.user;
});
});
