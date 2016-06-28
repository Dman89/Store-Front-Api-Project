'use strict';
angular.module("lionHeart")
.controller("category.graphicsCtrl", function($scope, dataService) {
  dataService.getCategoryGraphics(function(response) {
    $scope.products = response.data.products;
  });
});
