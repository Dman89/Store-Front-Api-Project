'use strict';
angular.module("lionHeart")
.controller("admin.postsCtrl", function($scope, dataService, $timeout) {
  dataService.getBlog(function(response) {
    $scope.blog = response.data.posts;
  })
  $scope.newPost = function() {
    var date = new Date;
        var month = (date.getUTCMonth()+1);
        var day = date.getDate();
        var year = date.getFullYear();
        var hour = date.getHours();
        if (hour >= 13) {
          hour -= 12;
        }
        var minutes = date.getMinutes();
        var time = hour+":"+minutes;
    var newPost = {
      "title": "Add Title",
      "description": "Add Description",
      "body": "Add Body",
      "urlCode": new Date().getTime(),
      "img": "https://tctechcrunch2011.files.wordpress.com/2015/08/clouds.jpg",
      "live": 'false',
      "date": {"month": month, "day": day, "year": year, "time": time},
      "loc": "main",
      "category": {"parent": "Homepage"}
    };
    dataService.newPost(newPost, function(res) {
      if (res.status == 200) {
        newPost._id = res.data.post._id;
        newPost.id = res.data.post._id;
      $scope.blog.push(newPost);
    } else {
      return res.status(500).json(res)
    }
    })
  }
  $scope.deletePost = function(id, post, index) {
    dataService.deletePost(id, post, function(res) {
        if (res.status == 200) {
          $scope.blog.splice(index, 1);
      } else {
        return res.status(500).json(res)
      }
    })
  }
    $scope.successMessageDisplayTopPost = false;
  $scope.savePost = function(id, post) {
    dataService.savePost(id, post, function(res) {
        if (res.status == 200) {
          $scope.successMessageDisplayTopPost = true;
          $timeout(function() {
            $scope.successMessageDisplayTopPost = false;
          }, 3075)
      } else {
        console.log('Error Saving Post?');
        alert('Error Saving Post?');
        return res.status(500).json(res)
      }
    })
  }
});
