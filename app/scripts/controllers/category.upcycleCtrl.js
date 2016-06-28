'use strict';
angular.module("lionHeart")
.controller("category.upcycleCtrl", function($scope, dataService) {
  dataService.getCategoryUpcycle(function(response) {
    $scope.products = response.data.products;
  });
});
