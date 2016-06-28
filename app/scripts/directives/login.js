'use strict';
angular.module('lionHeart')
.directive("login", function() {
  return {
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl',
    replace: true
  }
})
