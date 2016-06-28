'use strict';
angular.module('lionHeart')
.directive("signupform", function() {
  return {
    templateUrl: 'templates/signUpForm.html',
    controller: 'signUpFormCtrl',
    replace: true
  }
})
