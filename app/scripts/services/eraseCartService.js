'use strict';
angular.module("lionHeart")
.service("eraseCartService", function(dataService) {
  this.eraseCart = function() {
    dataService.eraseCart(
      function(response) {
      }
    )
  }
});
