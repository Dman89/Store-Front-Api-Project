'use strict';
angular.module("lionHeart")
.controller("admin.productsCtrl", function($scope, dataService, $location, $timeout) {
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
      console.log('Error Deleteing Item?');
      alert('Error Deleteing Item?');
    }
    })
  }
    $scope.successMessageDisplayTop = false;
  $scope.saveItem = function(id, product) {
    dataService.saveItem(id, product, function(res) {
      if (res.status == 200) {
        $scope.successMessageDisplayTop = true;
        $scope.editProduct = false;
        $timeout(function() {
          $scope.successMessageDisplayTop = false;
        }, 3075)
      } else {
        console.log('Error Saving Item?');
        alert('Error Saving Item?');
      }
    })
  }
  $scope.newItemStart = function() {
    var newProduct = {
      "name": "New Item",
      "active": true,
      "pictures": ["http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"],
      "price": {
        "amount": 100,
        "currency": 'USD'
      },
      "category": {"parent": "Paintings"},
      "urlCode": new Date().getTime(),
      "sku": new Date().getTime(),
      "quantity": 1
    };
      dataService.newItem(newProduct, function(res) {
        if (res.status == 200) {
          $scope.editProduct = {'show':true};
          $scope.products.push(newProduct);
          $scope.productDisplayEdit = newProduct;
          $scope.productDisplayEdit.id = res.data.products._id;
          $scope.productDisplayEdit._id = res.data.products._id;
        } else {
          alert("Error Creating Product")
        }
      });

  }
});
