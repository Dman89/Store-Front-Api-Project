'use strict';
angular.module("lionHeart")
.controller("cart.confirmationCtrl", function($scope, dataService) {
dataService.getCart(function(response) {
  var tempObject = response.data.cart.data.orderHistory;
  var tempLength = tempObject.length - 1;
  var order = tempObject[tempLength].charge.status;
  if ( order == "succeeded" ) {
    $scope.statusCharge = true;
  }
  else {
    $scope.statusCharge = false;
  }
});
});
