'use strict';
angular.module("lionHeart")
.controller("orderHistoryCtrl", function($scope, dataService) {
dataService.getOrderHistory(function(response) {
  $scope.orderHistory = response.data.orders;
});
});
