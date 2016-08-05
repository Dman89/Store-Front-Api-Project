'use strict';
angular.module("lionHeart")
.service("dataService", function($http, $q) {
  this.getProducts = function(callback) {
    $http.get("/api/products")
    .then(callback)
  };
  this.getSingleItem = function(params, callback) {
    var tempUrl = '/api/products/' + params;
    $http.get(tempUrl)
    .then(callback)
  }
  this.saveItem = function(id, product, callback) {
  $http.put('/api/products/id/' + id, product)
  .then(callback)
  };
  this.deleteItem = function(id, callback) {
    var tempUrl = '/api/products/id/' + id;
    $http.delete(tempUrl)
    .then(callback);
  }
  this.getCategoryGraphics = function(callback) {
    $http.get("/api/category/Graphic%20Design")
    .then(callback)
  };
  this.getCategoryPaintings = function(callback) {
    $http.get("/api/category/Paintings")
    .then(callback)
  };
  this.getCategoryPrints = function(callback) {
    $http.get("/api/category/Prints")
    .then(callback)
  };
  this.getCategoryUpcycle = function(callback) {
    $http.get("/api/category/Upcycle")
    .then(callback)
  };
  this.getCategorySkateboards = function(callback) {
    $http.get("/api/category/Skateboard")
    .then(callback)
  };
  this.getCategoryStickers = function(callback) {
    $http.get("/api/category/Stickers")
    .then(callback)
  };
    this.getAdmin = function(url, input, callback) {
      var tempUrl = '/api/admin/' + url;
      $http.post(tempUrl, input)
      .then(callback)
    };
      this.getUser = function(callback) {
        $http.get("/api/profile")
        .then(callback)
      };
      this.getUsers = function(callback) {
        $http.get("/api/users")
        .then(callback)
      };
  this.newItem = function(item, callback) {
    $http.post('/api/products', item).then(callback)
  };
  this.newUser = function(user) {
    $http.post('/api/users', user)
  };
  this.newPost = function(post, callback) {
    $http.post('/api/blog', post)
    .then(callback);
  };
  this.deletePost = function(id, post, callback) {
    var tempUrl = '/api/blog/post/id/' + id;
    $http.delete(tempUrl, post)
    .then(callback);
  };
  this.saveUser = function(user, callback) {
  $http.put('/api/profile', user)
  .then(callback)
  };
  this.saveUserAdmin = function(id, user, callback) {
  $http.put('/api/admin/user/id/'+id, user)
  .then(callback)
  };
    this.getOrderHistory = function(callback) {
      $http.get("/api/cart/history")
      .then(callback)
    };
    this.getCategory = function(callback) {
      $http.get("/api/category")
      .then(callback)
    };
    this.getCart = function(callback) {
      $http.get("/api/cart")
      .then(callback)
    };
    this.updateCart = function(a, b) {
      $http.put("/api/user/cart", a)
      .then(b)
    };
    this.updateCart2 = function(a, b) {
      $http.put("/api/user/cart2", a)
      .then(b)
    };
  this.checkout = function(token, callback) {
    $http.post('/api/user/checkout', token)
    .then(callback)
  }
  this.searchText = function(input, callback) {
    var search = "/api/products/search/" + input;
    $http.get(search)
    .then(callback)
  };
  this.getBlog = function(callback) {
    $http.get("/api/blog")
    .then(callback);
  }
  this.savePost = function(id, product, callback) {
  $http.put('/api/blog/post/id/' + id, product)
  .then(callback)
  };
  this.eraseCart = function(callback) {
    $http.post("/api/user/cart/erase")
    .then(callback);
  }
});
