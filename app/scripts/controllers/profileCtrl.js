'use strict';
angular.module("lionHeart")
.controller("profileCtrl", function($scope, dataService) {
  dataService.getUser(function(response) {
    $scope.user = response.data.user;
  });
});
