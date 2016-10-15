'use strict';
angular.module("lionHeart")
.controller("adminCtrl", function($scope, dataService, $location, $parse) {

  var searchForCurrentLocation = function(cb) {
    let searchThis = $location.path();
    let checkVariableForAdmin = searchThis.search('admin');
    if (checkVariableForAdmin >= 0) {
      let arrayOfItems = ["post", "user", "product", "port"];
      arrayOfItems.map(function(term) {
        let checkVariable = searchThis.search(term);
        if (checkVariable >= 0) {
          let scopeSaving = $parse(term+'Button');
          scopeSaving.assign($scope, true);
        }
        else {
          let scopeSavingFalse = $parse(term+'Button');
          scopeSavingFalse.assign($scope, false);
        }
      })
    }
    else {
      window.removeEventListener('hashchange', searchForCurrentLocation)
    }
  }
  searchForCurrentLocation();
  window.addEventListener('hashchange', searchForCurrentLocation)
});
