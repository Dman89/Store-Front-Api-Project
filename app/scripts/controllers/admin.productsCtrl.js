'use strict';
angular.module("lionHeart")
.controller("admin.productsCtrl", function($scope, dataService) {
  dataService.getProducts(function(response) {
    $scope.products = response.data.products
  })
});
