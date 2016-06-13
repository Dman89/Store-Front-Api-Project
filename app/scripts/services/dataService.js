'use strict';
angular.module("lionHeart")
.service("dataService", function($http, $q) {
  this.getProducts = function(callback) {
    $http.get("/api/products")
    .then(callback)
  };
  this.newUser = function(user) {
    $http.post('/api/users', user)
  }
  this.checkout = function(user) {
    $http.post('/user/'+req.user._id+'/checkout', user)
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
