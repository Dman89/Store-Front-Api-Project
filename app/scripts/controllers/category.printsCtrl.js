'use strict';
angular.module("lionHeart")
.controller("category.printsCtrl", function($scope, dataService) {
  dataService.getCategoryPrints(function(response) {
    $scope.products = response.data.products;
  });
});
