'use strict';
angular.module('lionHeart')
.directive("confirmationpage", function() {
  return {
    templateUrl: 'templates/confirmationPage.html',
    controller: 'confirmationPageCtrl',
    replace: true
  }
})
