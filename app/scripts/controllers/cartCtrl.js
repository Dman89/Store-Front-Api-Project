'use strict';
angular.module("lionHeart")
.controller("cartCtrl", function($scope, dataService) {
  dataService.getCart(function(response) {
    $scope.cartA = response.data.cart.data.cart;
    var cart = $scope.cartA.items;
    var user = $scope.user;
    cartTotal(cart, user)
  });
dataService.getUser(function(response) {
  $scope.user = response.data.user;
});
$scope.deleteCartItem = function(index) {
  $scope.user.data.cart.items.splice(index, 1);
  var user = $scope.user;
  dataService.updateCart(user, function(response) {});
  dataService.getCart(function(response) {
    $scope.cartA = response.data.cart.data.cart;
    var cart = $scope.cartA.items;
    var user = $scope.user;
    cartTotal(cart, user)
  });
}
$scope.stripeToken = {stripeToken: {
  number: '4242424242424242',
  cvc: '123',
  exp_month: '12',
  exp_year: '2016'
}
};
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
  $scope.stripeToken = {stripeToken: {
    number: '',
    cvc: '',
    exp_month: '',
    exp_year: ''
  }}
}
var sub = function (cart, user, sub) {
  var total = 0;
  for (var x = 0; x < cart.length; x++) {
          total += cart[x].product.subTotal;
        }
  sub(total, user);
}
var cartTotal = function(cart, user) {
  var tax = 0;
  var total = 0;
  var shipping = 0;
  sub(cart, user, function(sub, user) {
    var tax = sub * .1;
    var total = sub + tax;
    user.data.cart.subTotal = sub;
    user.data.cart.tax = tax;
    user.data.cart.total = total;
    user.data.cart.shipping = shipping;
    user.data.cart.len = cart.length;
    dataService.updateCart(user, function(response) {});
    $scope.cartA.subTotal = sub;
    $scope.cartA.tax = tax;
    $scope.cartA.total = total;
    $scope.cartA.shipping = shipping;
  })
}
});
