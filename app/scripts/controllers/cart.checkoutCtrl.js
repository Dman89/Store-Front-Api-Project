'use strict';
angular.module("lionHeart")
.controller("cart.checkoutCtrl", function($scope, dataService, functionService, eraseCartService, $location) {
  // Get Cart/User/Product
  dataService.getCart(function(response) {
    console.log(response, "cart");
        $scope.cart = response.data.cart.data;
        $scope.cartA = response.data.cart.data;
        });
      dataService.getUser(function(response) {
        $scope.userCheckout = response.data.user;
      });
      dataService.getProducts(function(response) {
        $scope.productCheck = response.data.products;
});

// Checkout With Stripe
  $scope.checkoutStripe = function(callback) {
    var stripeToken = $scope.stripeToken;
    var tempLength = $scope.stripeToken.stripeToken.number.length;
    // Save Billing As Shipping For Sale; Save order is Automatic in a checkout API call (src/api/cart)
    dataService.checkout(stripeToken, function(response) {
      $location.path('/cart/confirmation');
      if (response.data.charge.paid == true) {
        callback(true);
      } else {
        callback(false);
      }
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
      functionService.isProductAvailable(productCheck, cart, function(response, saveItems) {
        if (response == true) {
          cb(true)
        }
        else {
          cb(false)
        }
      });
    });
  });
};


//  Checks Carts Items for Availability and Sets Quantity for the Product in Database
$scope.changeProductAvailablity = function(cb) {
dataService.getCart(function(response) {
  var cart = response.data.cart.data.cart;
  dataService.getProducts(function(response) {
    var productCheck = response.data.products;
    functionService.isProductAvailable(productCheck, cart, function(response, saveItems) {
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
            dataService.saveItem(temp._id, temp, function(response) {
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
    $scope.checkoutStripe(function(data) {
      if (data == true) {
      $scope.changeProductAvailablity(function(response) {
        eraseCartService.eraseCart();
        $scope.cartA = null;
      })
    }
      else if (data == false) {
      alert("Error During Transaction")
    }

    });
  }
  else {
  alert("Some items in your cart are no longer available. Sorry for any inconvenience")
    $location.path('/cart/view')
  }
}) //isProductAvailable function end
}
}); // End of Controller
