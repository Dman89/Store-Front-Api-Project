'use strict';
angular.module('lionHeart')
.directive("products", function() {
  return {
    templateUrl: 'templates/products.html',
    controller: 'productCtrl',
    replace: true
  }
})
