'use strict';
angular.module("lionHeart")
.controller("cart.cartCtrl", function($scope, dataService) {
  dataService.getCart(function(response) {
    $scope.inputData = response.data.cart;
    $scope.temp = $scope.inputData.data.cart;
    $scope.num = $scope.temp.items;
    var total = 0;
    var tax = 0;
    var shipping = 0;
    var shippingRate = 0;
    var grandTotal = 0;
    for (var x = 0; x < $scope.num.length; x++) {
      total += $scope.num[x].product.subTotal;
      tax += ($scope.num[x].product.subTotal * 0.0085);
      shipping += ($scope.num[x].product.weight * $scope.num[x].product.size * shippingRate);
      grandTotal += total + tax + shipping;
    }
    grandTotal = total + tax + shipping;
    $scope.temp.subTotal = total;
    $scope.temp.tax = tax;
    $scope.temp.shipping = shipping;
    $scope.temp.total = grandTotal;
    $scope.temp.len = $scope.num.length
    $scope.cart = $scope.temp
    $scope.inputData.data.cart = $scope.temp;
    var here = $scope.inputData;
    dataService.updateCart(here, function(response) {
      $scope.cart = response.data.user.data.cart;
    }
    )
  });

});
