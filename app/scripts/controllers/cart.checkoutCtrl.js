'use strict';
angular.module("lionHeart")
.controller("cart.checkoutCtrl", function($scope, dataService, functionService, $location) {
  // Get Cart/User/Product
  dataService.getCart(function(response) {
        $scope.cart = response.data.cart;
        });
      dataService.getUser(function(response) {
        $scope.userCheckout = response.data.user;
      });
      dataService.getProducts(function(response) {
        $scope.productCheck = response.data.products;
});
// Fake Stripe Card
  // $scope.stripeToken = {stripeToken: {
  //   number: '4242424242424242',
  //   cvc: '123',
  //   exp_month: '12',
  //   exp_year: '2016'
  //   }
  //   };
// Checkout With Stripe
  $scope.checkoutStripe = function(stripeToken) {
    var stripeToken = $scope.stripeToken;
    var tempLength = $scope.stripeToken.stripeToken.number.length;
    // Save Billing As Shipping For Sale; Save order is Automatic in a checkout API call (src/api/cart)
    dataService.checkout(stripeToken, function(response) {
      $location.path('/cart/confirmation');
    });
    // Reset Token
    $scope.stripeToken =
    {
      stripeToken:
        {
        number: '',
        cvc: '',
        exp_month: '',
        exp_year: ''
        }
    }
  }
//  Checks Carts Items for Availability and Sets Quantity for the Product in Database
$scope.isProductAvailable = function(cb) {
  dataService.getCart(function(response) {
    var cart = response.data.cart.data.cart;
    dataService.getProducts(function(response) {
      var productCheck = response.data.products;
      functionService.isProductAvailable(productCheck, cart, function(mustSaveInventory, response, saveItems) {
        if (response == true) {
          //save inventory
          for (var x = 0; x < saveItems.length; x++) {
            var lookUp = saveItems[x].urlCode;
            var tempQuantity = saveItems[x].quantity;
            var tempActive = saveItems[x].active;
            dataService.getSingleItem(lookUp, function(item) {
            var temp = item.data.products;
            temp.quantity = tempQuantity;
            temp.active = tempActive;
              //save product
              dataService.saveItem(temp.id, temp, function(response) {
                cb(true)
              })
            })
          }
        }
        else {
          cb(false)
        }
      });
    });
  });
};



//Checkout Process
$scope.checkout = function() {
$scope.isProductAvailable(function(status) {
  if (status == true) {
    $scope.checkoutStripe();
  }
  else {
  alert("Some items in your cart are no longer available. Sorry for any inconvenience")
    $location.path('/cart/view')
  }
}) //isProductAvailable function end
}
}); // End of Controller
