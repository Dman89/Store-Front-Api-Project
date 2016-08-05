'use strict';
angular.module("lionHeart")
.controller("indexHomeCtrl", function($scope, carouselDataService, $http, googleCalendarGetRequest) {
  googleCalendarGetRequest.calendar(function(events) {
    if (events.length > 3) {
      var temp = events.length - 3;
      events.splice(3, temp)
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

});
