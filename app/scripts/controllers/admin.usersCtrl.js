'use strict';
angular.module("lionHeart")
.controller("admin.usersCtrl", function($scope, dataService) {
  dataService.getUsers(function(response) {
    $scope.users = response.data.users;
  });
});
