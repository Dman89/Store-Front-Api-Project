'use strict';
angular.module("lionHeart")
.controller("cartCtrl", function($scope, dataService) {
  dataService.getCart(function(response) {
    $scope.cartA = response.data.cart.data.cart;
    var cart = $scope.cartA.items;
    $scope.UserWithCart = response.data.cart;
    var user = $scope.UserWithCart;
    $scope.user = $scope.UserWithCart;
    cartTotal(cart, user)
  });
$scope.deleteCartItem = function(index) {
  setTimeout(function(index) {
  $scope.UserWithCart.data.cart.items.splice(index, 1);
  var user = $scope.UserWithCart;
  dataService.updateCart(user, function(response) {});
  dataService.getCart(function(response) {
    $scope.cartA = response.data.cart.data.cart;
    var cart = $scope.cartA.items;
    $scope.UserWithCart = response.data.cart;
    var user = $scope.UserWithCart;
    cartTotal(cart, user)
  })
}, 1001);
}
$scope.stripeToken = {stripeToken: {
  number: '4242424242424242',
  cvc: '123',
  exp_month: '12',
  exp_year: '2016'
}
};
// Review Page: < > Arrow's function to save User Data
$scope.saveSetUp = function() {
  // Get User / Cart
  var aUser = $scope.user;
  // Save User / Cart
  dataService.updateCart(aUser, function(response) {});
}
$scope.checkout = function() {
  var stripeToken = $scope.stripeToken;
  var tempLength = $scope.stripeToken.stripeToken.number.length;
  $scope.lastFourDigits = $scope.stripeToken.stripeToken.number.slice(-4, tempLength);
  dataService.checkout(stripeToken, function(response) {
    if (response.data.charge.status == 'succeeded') {
    $scope.statusCharge = response.data.charge.status;
  } else {
    $scope.statusCharge = false;
  }
  });
  // Reset Token
  $scope.stripeToken = {stripeToken: {
    number: '',
    cvc: '',
    exp_month: '',
    exp_year: ''
  }}
}
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
