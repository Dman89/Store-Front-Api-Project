'use strict';
angular.module("lionHeart")
.controller("admin.productsCtrl", function($scope, dataService, $location) {
  dataService.getProducts(function(response) {
    $scope.products = response.data.products
  })
  $scope.editProduct = {show: false};
  $scope.productEdit = function(product) {
    $scope.productDisplayEdit = product;
    $scope.editProduct = {show: true};
  }
});
