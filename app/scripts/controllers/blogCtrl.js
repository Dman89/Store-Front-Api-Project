'use strict';
angular.module("lionHeart")
.controller("blogCtrl", function($scope, dataService, $location) {
  dataService.getBlog(function(res) {
    $scope.blogItemsToDisplay = res.data.posts;
  })

  let tempSearchItem = $location.path();
  if (tempSearchItem.search("/blog/id/") >= 0) {
    let tempItem = tempSearchItem.split("/");
    let tempID = tempItem[3];
    if (tempItem[3] != "") {
      dataService.getBlogById(tempID, function(res) {
        console.log(res.data.posts._id);
        $scope.blogItem = res.data.posts;
      })
    }
  }



});
