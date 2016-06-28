'use strict';
angular.module('lionHeart')
.directive("purchaseconfirmation", function() {
  return {
    templateUrl: 'templates/purchaseConfirmation.html',
    controller: 'purchaseConfirmationCtrl',
    replace: true
  }
})
