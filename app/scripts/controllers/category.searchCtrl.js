'use strict';
angular.module("lionHeart")
.controller("category.searchCtrl", function($scope, dataService, $stateParams) {
var searchText = $scope.searchText;
dataService.searchText(searchText, function(response) {
  console.log($scope.searchText)
  $scope.products = response.data.products;
});
});
