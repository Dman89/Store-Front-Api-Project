'use strict'
var addToCartReq = function(id, quantity, user, cart, product, functionService, $scope, finalCB) {
  console.log("\n\n\n\n\n*!*!*!*!*!*!*!*!Running Code:!*!*!*!*!*!*!*!*!*\n\n\n\n\n");
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
