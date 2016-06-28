'use strict';
angular.module("lionHeart")
.controller("category.stickersCtrl", function($scope, dataService) {
  dataService.getCategoryStickers(function(response) {
    $scope.products = response.data.products;
  });
});
