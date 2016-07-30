'use strict';
angular.module("lionHeart")
.service("functionService", function(dataService) {
this.isProductAvailable = function(product, cart, callback) {
                            // Checking Product Availability
// Get Products
// Get Users Cart
      grabIDAndQuantity(product, cart, function(file, text, saveItems) {
        var checkForTrue = "";
        var isItTrue = 0;
        var saveItems = [];
// Make Object of ID and Quantity
        for (var x = 0; x < text.length; x++) {
          var aQuantity = text[x].quantity;
          var id = text[x].id;
// Make Object of ID and Quantity
          for (var y = 0; y < file.length; y++) {
// Search Products with Users Cart
            if (file[y].id.search(id) == 0) {
              if (file[y].quantity >= text[x].quantity) {
                isItTrue += 1;
                file[y].quantity = file[y].quantity - text[x].quantity;
                //Make Product Inactive
                  if (file[y].quantity == 0) {
                    file[y].active = false;
                  saveItems.push(file[y]);
                } else {
                saveItems.push(file[y]);
                }
              }
            }
          }
        }
        if (isItTrue == (text.length)) {
          checkForTrue = true;
        }
        else if (isItTrue < (text.length)) {
          checkForTrue = false;
        }
        // Return Truthy or Falsey
          callback(file, checkForTrue, saveItems);
      })
    }

  var grabIDAndQuantity = function(product, cart, callback) {
        var doSearchThisData = [];
        var useThisDataToSearch = [];
    var waypointOne = false, waypointTwo = false;
    for (var x = 0; x < product.length; x++) {
      var quantity = product[x].quantity;
      var id = product[x].id;
      var urlCode = product[x].urlCode;
      doSearchThisData.push({"id": id, "quantity": quantity, "urlCode": urlCode});
      if (x < product.length) {
        waypointOne = true;
      }
    }
    for (var x = 0; x < cart.items.length; x++) {
      var quantity = cart.items[x].quantity;
      var id2 = cart.items[x].product.id;
      useThisDataToSearch.push({"id": id2, "quantity": quantity});
      if (x < cart.items.length) {
        waypointTwo = true;
      }
    }
    if (waypointOne == true && waypointTwo == true) {
      callback(doSearchThisData, useThisDataToSearch);
    }
  }

//Add To Cart
this.addToCart = function(id, quantity, user, cart, product) {
  var item = {"_id": product._id, "id": product._id, "name": product.name, "urlCode": product.urlCode, "internal": product.internal, "product": id, "quantity": quantity};
if (user == undefined) {
  alert("Please Log In");
}
else if (!user == undefined) {
cartSearch(cart, function(response) {
  if (response == false) {
  // Run Code or Not
console.log("false");
  }
  else {
console.log("true");
    var items = [];
    if (cart !== null) {
      items = cart.items;
      items.push(item);
    }
    else {
      items = item;
    }
    user.data.cart = {"items" : items};
    dataService.updateCart(user, function(response) {
      $scope.cart = response.data.user.data.cart;
    });
    items = [];
  }
})
    }
}


  var cartSearch = function(cart, cb) { // Get Cart
  // Get ID's
  var tempCheck = [];
    for (var x = 0; x < cart.items.length; x++) {
      if (!cart.items[x].id) {
        cart.items[x].id = cart.items[x].product.id;
      }
      tempCheck.push(cart.items[x].id);
    }
    // Check ID to Cart
    var checkResult = false;
    var tempVar = -1;
    var tempNumber = tempCheck.length - 1;
    for (var x = 0; x < tempCheck.length; x++) {
      tempVar = tempCheck[x].search(id);
      if (!tempVar == -1) {
        checkResult = true;
      }
      if (tempCheck[x] == tempNumber) {
        cb(checkResult);
      } else {
        cb(checkResult);
      }
    }
  }



});
