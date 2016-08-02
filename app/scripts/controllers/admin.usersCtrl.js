'use strict';
angular.module("lionHeart")
.controller("admin.usersCtrl", function($scope, dataService, $timeout) {
  dataService.getUsers(function(response) {
    $scope.users = response.data.users;
  });
  //Save User Function
  $scope.successMessageDisplayTopUser = false;
  $scope.saveUserAdmin = function(id, user) {
    dataService.saveUserAdmin(id, user, function(res) {
      if (res.status == 200) {
        $scope.successMessageDisplayTopUser = true;
        $timeout(function() {
          $scope.successMessageDisplayTopUser = false;
        }, 3000)
      }
      else {
        console.log('Error Saving User?');
        alert('Error Saving User?');
      }
    })
  }
});
