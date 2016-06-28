'use strict';
angular.module("lionHeart")
.controller("cartCtrl", function($scope, dataService) {
  dataService.getCart(function(response) {
  if (response.data.cart.items == null) {
    $scope.cart = {"items": [{ "product": {
      "name": "Find Your Art",
      "pictures": ["http://www.stopaddiction.ca/wp-content/uploads/2016/02/tumblr_o33tcjbPZ41rrjjxto1_500.jpg", "https://www.happybrainscience.com/wp-content/uploads/2014/06/BEST-POSSIBLE-FUTURE-300-FIXED.png", "https://papercallio-production.s3.amazonaws.com/uploads/event/logo/2/mid_300_rsz_happy_face.png"],
      "price": {
        "amount":"50",
        "currency": "USD"
      },
      "displayPrice": "$0.00",
      "category": {
        "_id": "Elephant",
        "parent": "Paintings",
        "ancestors": ["canvas"]
      }},
      "quantity": 1
    }]}
  } else {
    $scope.cart = response.data.cart;
  }
  });
dataService.getUser(function(response) {
  $scope.user = response.data.user;
});
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
// $scope.getTotal = function() {
//   var total = 0;
//   for (var x = 0; x < $scope.cart.items.length; x++) {
//     var subTotal = $scope.cart.items[x];
//     var a = math.round(subTotal.displayPrice);
//     total += (a * subTotal.quantity);
//   }
//   return total;
// }
});
