'use strict';
angular.module('lionHeart')
.directive("bio", function() {
  return {
    templateUrl: 'templates/bio.html',
    controller: 'bioCtrl',
    replace: true
  }
})
