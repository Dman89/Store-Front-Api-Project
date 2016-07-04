'use strict'
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
    dataService.updateCart(user, function(response) {});
    $scope.cartA.subTotal = sub;
    $scope.cartA.tax = tax;
    $scope.cartA.total = total;
    $scope.cartA.shipping = shipping;
  })
}
module.exports = cartTotal;
