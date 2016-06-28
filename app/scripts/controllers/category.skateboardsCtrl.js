'use strict';
angular.module("lionHeart")
.controller("category.skateboardsCtrl", function($scope, dataService) {
  dataService.getCategorySkateboards(function(response) {
    $scope.products = response.data.products;
  });
});
