'use strict';
angular.module("lionHeart")
.controller("purchaseConfirmationCtrl", function($scope, dataService) {
dataService.getUser(function(response) {
  $scope.user = response.data.user;
  var temp = response.data.user.data.cart.items
  $scope.cartLength = temp.length;
});
});
