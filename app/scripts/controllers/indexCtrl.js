'use strict';
angular.module("lionHeart")
.controller("indexHomeCtrl", function($scope, dataService) {




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
