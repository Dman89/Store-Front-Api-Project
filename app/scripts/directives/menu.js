'use strict';
angular.module('lionHeart')
.directive("menu", function() {
  return {
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl',
    replace: true
  }
})
