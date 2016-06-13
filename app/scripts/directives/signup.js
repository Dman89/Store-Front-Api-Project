'use strict';
angular.module('lionHeart')
.directive("signup", function() {
  return {
    templateUrl: 'templates/signupform.html',
    controller: 'signUpForm',
    replace: true
  }
})
