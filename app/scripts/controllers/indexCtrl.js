'use strict';
angular.module("lionHeart")
.controller("indexHomeCtrl", function($scope, carouselDataService, $http, googleCalendarGetRequest, dataService) {
  googleCalendarGetRequest.calendar(function(events) {
    $scope.threeEvents = false;
    $scope.twoEvents = false;
    if (events.length > 3) {
      var temp = events.length - 3;
      events.splice(3, temp)
      $scope.threeEvents = true;
    }
    else if (events.length == 2) {
      $scope.twoEvents = true;
    }
    $scope.googleEvents = events;
  });


    carouselDataService.getCarousel(function(res) {
      $scope.carouselImages = res.data.carousel;
    })



  $("#owl").owlCarousel({

        navigation : false, // Show next and prev buttons
        slideSpeed : 200,
        paginationSpeed : 800,
        singleItem:true,
        autoPlay: true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    dataService.getBlog(function(res) {
      sortPosts(res, 'main', function(res) {
        $scope.posts = res;
      })
      sortPosts(res, 'subA', function(res) {
        $scope.postsA = res;
      })
      sortPosts(res, 'subB', function(res) {
        $scope.postsB = res;
      })
      sortPosts(res, 'subC', function(res) {
        $scope.postsC = res;
      })
    })

    var sortPosts = function(input, filter, success) {
      let posts = [];
      let mainPost = input.data.posts;
      for (var x = 0; x < mainPost.length; x++) {
        if (mainPost[x].loc == filter) {
          posts.push(mainPost[x])
        }
      }
      if (posts.length > 1) {
        let minusNum = (posts.length - 1)
        posts.splice(1, minusNum)
      }
      success(posts);
    }
});
