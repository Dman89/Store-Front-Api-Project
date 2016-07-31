'use strict';
angular.module("lionHeart")
.controller("singleItemCtrl", function($scope, dataService, $stateParams, functionService) {
var inputToggle = require("../functions/inputToggle");
var user, cart;
var addToCartReq = require("../functions/addToCartReq");
$scope.urlCode = $stateParams.urlCode;
var urlCode = $scope.urlCode
dataService.getSingleItem(urlCode, function(response) {
  $scope.singleItem = response.data.products;
});
dataService.getUser(function(response) {
  $scope.user = response.data.user;
  user = $scope.user
})
dataService.getCart(function(response) {
  $scope.cart = response.data.cart.data.cart;
  cart = $scope.cart
})
$scope.addToCart = function(id, quantity, product) {
var id = id;
  addToCartReq(id, quantity, user, cart, product, functionService, $scope, function(res) {
    console.log("Cart Saved");
    $scope.cart = res;
    cart = $scope.cart
  });
  console.log("Completed!");
}
$scope.quantity = {val: 1};

//Check Quantity
$scope.quantityCheck = function(val) {
  inputToggle(val, function(res) {
    if (res == true) {
      return true;
    } else {
      return false;
    }
  })
}

$scope.quantityChange = function(val) {
  if (val == 1) {
    $scope.quantity.val += 1;
  } else {
    $scope.quantity.val -= 1;
  }
}
$scope.checkValForMax = function() {
  if ($scope.quantity.val > $scope.singleItem.quantity) {
    $scope.quantity.val = $scope.singleItem.quantity;
  } else if ($scope.quantity.val < 1) {
    $scope.quantity.val = 1;
  }
  $scope.edit = false;
}


// get products for random display (3)
// create array with digits = to array.length
// run a random number
// get number from array (NOT INDEX)
// splice out [x] from array
// repeat three times
// save related items to $scope
// Display in angular
// prevent duplicates
dataService.getProducts(function(response) {
  var productsRes = response.data.products;
  var productLength = productsRes.length;
  var tempArr = []
  var items = [];

  var searchForItem = function(callback) {
  var removeItem = []
    for (var x = 0; x < productLength; x++) {
      removeItem.push(productsRes[x].urlCode);
    }
    var removeNum = removeItem.indexOf(urlCode);
    var templength = urlCode.length;
    productsRes.splice(removeNum, 1);
    callback();
  }

  var lengthBuild = function(productLength, callback) {
    for (var x = 0; x < productLength; x++) {
      tempArr.push(x);
      productLength = productLength - 1;
    }
    callback();
  }

  var rnd = function (tempArr, callback) {
    var tempNum = Math.floor(Math.random() * tempArr.length);
    callback(tempNum);
  }
searchForItem(function() {
  lengthBuild(productLength, function() {
    for (var x = 0; x < 3; x++) {
      rnd(tempArr, function (rndNum) {
        var tempItem = productsRes[rndNum];
        productsRes.splice(rndNum, 1);
        items.push(tempItem);
      });
    }
    var submit = {"related": items};
    $scope.relatedItems = submit;
  });
});
});



});
