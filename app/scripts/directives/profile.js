'use strict';
angular.module('lionHeart')
.directive("profile", function() {
  return {
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl',
    replace: true
  }
})
