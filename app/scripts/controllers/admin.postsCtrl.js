'use strict';
angular.module("lionHeart")
.controller("admin.postsCtrl", function($scope, dataService) {
  dataService.getBlog(function(response) {
    $scope.blog = response.data.posts;
  })
  
});
