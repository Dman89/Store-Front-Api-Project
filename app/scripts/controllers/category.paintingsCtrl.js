'use strict';
angular.module("lionHeart")
.controller("category.paintingsCtrl", function($scope, dataService) {
  dataService.getCategoryPaintings(function(response) {
    $scope.products = response.data.products;
  });
});
