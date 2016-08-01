'use strict';
angular.module("lionHeart")
.controller("admin.productsCtrl", function($scope, dataService, $location) {
  dataService.getProducts(function(response) {
    $scope.products = response.data.products
  })
  $scope.editProduct = {show: false};
  var productBeingEditedIndex;
  $scope.productEdit = function(product, index) {
    productBeingEditedIndex = index;
    if (!product.quantity) {
      product.quantity = 0;
    }
    $scope.productDisplayEdit = product;
    $scope.editProduct = {show: true};
  }
  $scope.deleteItem = function(id) {
    dataService.deleteItem(id, function(response) {
      if (response.status == 200) {
      $scope.products.splice(productBeingEditedIndex, 1);
      $scope.editProduct.show = false;
    } else {
      alert('Error Deleteing Item?');
    }
    })
  }
});
