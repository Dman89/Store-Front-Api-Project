'use strict';
angular.module("lionHeart")
.controller("singleItemCtrl", function($scope, dataService, $stateParams) {
$scope.urlCode = $stateParams.urlCode;
var urlCode = $scope.urlCode
dataService.getSingleItem(urlCode, function(response) {
  $scope.singleItem = response.data.products;
});
});
