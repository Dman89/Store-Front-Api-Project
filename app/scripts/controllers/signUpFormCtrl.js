'use strict';
angular.module("lionHeart")
.controller("signUpForm", function($scope, dataService) {
$scope.addUser = function(user) {
  // var user = {
  //   profile: {
  //     username: 'King D',
  //     picture: "http://www.google.com",
  //     website: 'http://www.website.com',
  //     signUpDate: "2016-06-08",
  //   },
  //   data: {
  //     firstName: 'Tupac',
  //     email: 'KingD@Tupac.com',
  //     password: 'catmouse',
  //     lastName: 'King',
  //     location: 'At the Top',
  //     emailMailingList: true,
  //     researchAndDevelopment: true
  //   }
  // };
  dataService.newUser(user);
}

});
