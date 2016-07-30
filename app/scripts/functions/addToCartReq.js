'use strict'
var addToCartReq = function(id, quantity, user, cart, product, functionService, $scope, finalCB) {
  console.log("*!*!*!*!*!*!*!*!Running Code:!*!*!*!*!*!*!*!*!*");
  var returnVal;
  if (!user) {
    console.log("Please Log In");
  }
  else {
    functionService.addToCart(id, quantity, user, cart, product, function(response) {
      if (response == "nothing") {
        console.log("!*^^*!NO ACTION NESSECARY!*^^*!");
        returnVal = cart;
      } else {
        returnVal = response;
      }
      console.log("Saving Cart...");
      finalCB(returnVal);
    });
  }
}
module.exports = addToCartReq;
