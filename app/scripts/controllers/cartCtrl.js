'use strict';
angular.module("lionHeart")
.controller("cartCtrl", function($scope, dataService, $timeout, $state) {
  // Blank Stripe Card
    $scope.stripeToken = {stripeToken: {
      number: '',
      cvc: '',
      exp_month: '',
      exp_year: ''
      }
      };
  // Get User/Cart/UserWithCart
  dataService.getCart(function(response) {
    $scope.cartA = response.data.cart.data.cart;
    var cart = $scope.cartA.items;
    $scope.UserWithCart = response.data.cart;
    var user = $scope.UserWithCart;
    $scope.user = $scope.UserWithCart;
    cartTotal(cart, user)
  });
  // Delete Items out of Cart
$scope.deleteCartItem = function(abe) {
      var dog = abe;
        $timeout(function() {
          $scope.deletey(abe);
        }, 1001);
    }
    $scope.deletey = function(abe) {
    $scope.UserWithCart.data.cart.items.splice(abe, 1);
    var user = $scope.UserWithCart;
    dataService.updateCart(user, function(response) {});
    dataService.getCart(function(response) {
      $scope.cartA = response.data.cart.data.cart;
      var cart = $scope.cartA.items;
      $scope.UserWithCart = response.data.cart;
      var user = $scope.UserWithCart;
      cartTotal(cart, user)
    })
}

// Review Page: < > Arrow's function to save User Data
  $scope.saveSetUp = function(stripeToken) {
    // Get User / Cart
    var aUser = $scope.user;
    // Save User / Cart
    dataService.updateCart(aUser, function(response) {});
    // Pass CC info to next State
    var token = stripeToken;
    $state.go('cart.checkout', token);
  }
// Sub Total Calculation Function for Checkout (pages)
  var sub = function (cart, user, sub) {
    var total = 0;
    var len = 0;
    for (var x = 0; x < cart.length; x++) {
            var price = cart[x].product.subTotal;
            var quantity = cart[x].quantity;
            cart[x].total = price * quantity;
            total += price * quantity;
            len += quantity;
          }
    sub(total, user, len);
  }
//Total Calculation Function for Checkout (pages)
  var cartTotal = function(cart, user) {
    var tax = 0;
    var total = 0;
    var shipping = 0;
    sub(cart, user, function(aSubTotal, user, len) {
      var newSubtotal = aSubTotal
      newSubtotal = Number(newSubtotal.toFixed(2));
      var tax = newSubtotal * .1;
      tax = Number(tax.toFixed(2));
      var total = newSubtotal + tax;
      total = Number(total.toFixed(2));
      user.data.cart.subTotal = newSubtotal;
      user.data.cart.tax = tax;
      user.data.cart.total = total;
      user.data.cart.shipping = shipping;
      user.data.cart.len = len;
      dataService.updateCart(user, function(response) {
        $scope.cartA.total = response.data.user.data.cart.total;
      });
    })
  }
// Quanity Plus and Minus Functions for Cart Page
$scope.quantityTotalAddition = function(index) {
  if ($scope.UserWithCart.data.cart.items[index].product.quantity > $scope.UserWithCart.data.cart.items[index].quantity) {
    $scope.UserWithCart.data.cart.items[index].quantity += 1;
    var userWithCart = $scope.UserWithCart
    dataService.updateCart(userWithCart, function(response) {});
    dataService.getCart(function(response) {
      $scope.cartA = response.data.cart.data.cart;
      var cart = $scope.cartA.items;
      $scope.UserWithCart = response.data.cart;
      var user = $scope.UserWithCart;
      cartTotal(cart, user)
    });
  }
}
$scope.quantityTotalMinus = function(index) {
  if ($scope.UserWithCart.data.cart.items[index].quantity > 1) {
    $scope.UserWithCart.data.cart.items[index].quantity -= 1;
    var userWithCart = $scope.UserWithCart;
    dataService.updateCart(userWithCart, function(response) {});
    dataService.getCart(function(response) {
      $scope.cartA = response.data.cart.data.cart;
      var cart = $scope.cartA.items;
      $scope.UserWithCart = response.data.cart;
      var user = $scope.UserWithCart;
      cartTotal(cart, user)
    });
  }
}
});
