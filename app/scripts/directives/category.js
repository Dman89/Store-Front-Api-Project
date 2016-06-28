'use strict';
angular.module('lionHeart')
.directive("category", function() {
  return {
    templateUrl: 'templates/category.html',
    controller: 'categoryCtrl',
    replace: true
  }
})
