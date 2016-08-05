'use strict';
angular.module("lionHeart")
.controller("profileCtrl", function($scope, dataService, $location) {
  dataService.getUser(function(response) {
    $scope.user = response.data.user;
  });
  //save user on btn click
  $scope.saveUser = function(user) {
    dataService.saveUser(user, function(response) {
      $scope.successDisplaySaveUser = response.data.user.message;
    })
  }
  $scope.isActiveProfile = function (viewLocation) {
        if (viewLocation == $location.path()) {
        return viewLocation === $location.path();
      }
    };

});
