'use strict';
angular.module("lionHeart")
.controller("productCtrl", function($scope, dataService, functionService, $location, storeCategoryService) {
  var addToCartReq = require("../functions/addToCartReq");
  var cart;
  var user;
  var list = [];
  var tempEdit = $location.path();
  dataService.getProducts(function(response) {
  var varTemp = response.data.products.length;
  if (response.data.products[0].id == null) {
      for (var x = 0; x < varTemp; x++) {
        response.data.products[x].id = response.data.products[x]._id;
      }
  }
    if (tempEdit.search("/store/") > -1 && tempEdit.search("all") == -1) {
      var check;
      tempEdit = tempEdit.slice(7, tempEdit.length);
      for (var x = 0; x < varTemp; x++) {
        if (response.data.products[x].category["parent"]) {
          check = response.data.products[x].category["parent"];
          check = check.toLowerCase();
            if (check == "graphic design") {
              check = "graphics";
            }
          if (check.search(tempEdit) > -1) {
            list.push(response.data.products[x]);
          }
          if (x == varTemp - 1) {
          $scope.products = list;
          }
          if (check.search("tempEdit") > -1) {
            list.push(response.data.products[x]);
          }
          if (x == varTemp - 1) {
            $scope.products = list;
          }
        }
        }
      }
    else {
    $scope.products = response.data.products;
    }
  })
  dataService.getCart(function(response) {
    $scope.cart = response.data.cart.data.cart;
    cart = $scope.cart
  })
  dataService.getUser(function(response) {
    $scope.user = response.data.user;
    user = $scope.user;
  })
    $scope.addToCart = function(id, quantity, product) {
    var id = id;
      addToCartReq(id, quantity, user, cart, product, functionService, $scope, function(res) {
        // console.log("Cart Saved");
        $scope.cart = res;
        cart = $scope.cart
        // console.log("Completed!");
      });
    }
    storeCategoryService.whatCategoryIsIt(function(res) {
      if (res !== false) {
        let resWithCap = res.charAt(0).toUpperCase();
        let resRestOfWord = res.slice(1, res.length);
        $scope.subcategoryActive = true;
        $scope.subcategory = resWithCap + resRestOfWord;
      }
      $scope.subcategoryActive = res;
    })
});
