'use strict';
angular.module("lionHeart")
.service("functionService", function(dataService) {
this.isProductAvailable = function(product, cart, callback) {
                            // Checking Product Availability
// Get Products
// Get Users Cart
      grabIDAndQuantity(product, cart, function(file, text) {
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
              if (file[y].quantity == 0) {
                isItTrue == text.length - 1;
              }
              else if (file[y].quantity >= text[x].quantity) {
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
          callback(checkForTrue, saveItems);
      })
    }

  var grabIDAndQuantity = function(product, cart, callback) {
        var doSearchThisData = [];
        var useThisDataToSearch = [];
    var waypointOne = false, waypointTwo = false;
    for (var x = 0; x < product.length; x++) {
      var quantity = product[x].quantity;
      var id = product[x]._id;
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
this.addToCart = function(id, quantity, user, cart, product, cba) {

  var id = id, quantity = quantity, user = user, cart = cart, product = product;
  var newCart;
  var item = {"_id": id, "id": id, "name": product.name, "urlCode": product.urlCode, "internal": product.internal, "product": id, "quantity": quantity};

  cartSearch(cart, id, function(response) {
    console.log("***Logging*** ***Response*** ***Below***");
    if (response == "true") {
      console.log("Already Added! : D");
      //False Code Here if needed
      cba("nothing");
    }
    else if (response == "false") {
      console.log("Adding.");
      var items = [];
      if (cart == null || cart.items == 0) {
        console.log("Adding..(to a empty cart)");
        items = item;
      }
      else {
        console.log("Adding..(to a cart with items)");
        items = cart.items;
        items.push(item);
      }
      user.data.cart = {"items" : items};
      dataService.updateCart(user, function(response) {
        items = [];
        console.log("Adding...(saved cart)");
        newCart = response.data.user.data.cart;
        cba(newCart);
      });
    }
  })
}


  var cartSearch = function(cart, id, cbb) { // Get Cart
    console.log("Cart Found\n\nBegin searching...");
    if (cart == null) {
      console.log("(Empty Cart)");
      cbb("false");
    }
    else if (!cart.items.length == 0) {
      console.log("Checking Cart...");
      // Get ID's
      cartCheck(cart, id, function(tempCheck) {

        // Check ID to Cart
        searchResponse(tempCheck, id, function(res) {

          if (res == true) {
            console.log("Checking Cart...(found ITEM in cart)");
            cbb("true");
          } else {
            console.log("Checking Cart...(ITEM is not in cart)");
            cbb("false");
          }
        })
      });
    }
    else {
      console.log("(Empty Cart)");
      cbb("false");
    }
  }

  var cartCheck = function(cart, id, cbc) {

    // Get ID's
    var tempCheck = [];
    var tempCheckTwo = cart.items.length - 1;
    for (var x = 0; x < cart.items.length; x++) {
        if (!cart.items[x].id) {
          cart.items[x].id = cart.items[x].product.id;
        }
        tempCheck.push(cart.items[x].id);
        if (x == tempCheckTwo) {
          cbc(tempCheck);
        }
    }
  }

  var searchResponse = function(tempCheck, id, cbd) {
    // Check ID to Cart
    var checkResult;
    var tempVar = -1;
    var tempNumber = tempCheck.length - 1;
    for (var x = 0; x < tempCheck.length; x++) {
      tempVar = tempCheck[x].search(id);
      if (tempVar > -1) {
        checkResult = true;
      }
      if (x == tempNumber) {
        console.log("searchResponse: It is in the cart ( " + checkResult + " )!");
        cbd(checkResult);
      }
    }
  }

});
