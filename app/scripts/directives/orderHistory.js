'use strict';
angular.module('lionHeart')
.directive("orderhistory", function() {
  return {
    templateUrl: 'templates/orderHistory.html',
    controller: 'orderHistoryCtrl',
    replace: true
  }
})
