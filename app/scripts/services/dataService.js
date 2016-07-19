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
  this.newUser = function(user) {
    $http.post('/api/users', user)
  };
  this.saveUser = function(user, callback) {
  $http.put('/api/profile', user)
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
  this.newGoal = function(goal) {
    $http.post("/api/goals", goal);
  }
  this.deleteGoal = function(goal) {
  if (!goal._id) {
    return $q.resolve();
  }
  return $http.delete('/api/goals/' + goal._id).then(function () {
    console.log('The "' + goal.title + '" goal has been deleted!')
  })
  };
  this.saveGoals = function(goals) {
  var que = [];
  goals.forEach(function(goal) {
    var request;
    if(!goal._id) {
      request = $http.post('/api/goals', goal);
    } else {
      request = $http.put('/api/goals/' + goal._id, goal).then(function(result) {
        goal = result.data.goal;
        return goal;
      })
    };
    que.push(request);
  });
  return $q.all(que).then(function(results) {
    console.log("Saved " + goals.length + ' goals!');
  })
  };
});
