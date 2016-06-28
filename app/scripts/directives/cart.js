'use strict';
angular.module('lionHeart')
.directive("cart", function() {
  return {
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl',
    replace: true
  }
})
