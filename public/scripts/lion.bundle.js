webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	angular.module("lionHeart", []);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("mainCtrl", function($scope, dataService) {

	});


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("productCtrl", function($scope, dataService) {
	  dataService.getProducts(function(response) {
	    $scope.products = response.data.products
	  })
	  $scope.checkout = function() {
	    var user = {
	      "_id": "575b3533ad679e741c73eee0",
	      "__v": 0,
	      "data": {
	        "firstName": "Tupac3",
	        "email": "KingD@Tupac.com",
	        "password": "catmouse",
	        "lastName": "King",
	        "location": "At the Top",
	        "emailMailingList": true,
	        "researchAndDevelopment": true,
	        "oauth": "123",
	        "cart": [
	          {
	            "product": "5759c172532990e03b37d9b2",
	            "_id": "575b3533ad679e741c73ded3",
	            "quantity": 1
	          },
	          {
	            "product": "5759c172532990e03b37d9b2",
	            "_id": "575b3533ad679e741c73ded2",
	            "quantity": 1
	          },
	          {
	            "product": "5759c1c59e38917831d9efa7",
	            "_id": "575b3533ad679e741c73ded1",
	            "quantity": 1
	          }
	        ]
	      },
	      "profile": {
	        "username": "anewnameqwe",
	        "picture": "http://www.google.com"
	      }
	    }
	    dataService.checkout(user);
	  }
	});


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("signUpForm", function($scope, dataService) {
	$scope.addUser = function(user) {
	  // var user = {
	  //   profile: {
	  //     username: 'King D',
	  //     picture: "http://www.google.com",
	  //     website: 'http://www.website.com',
	  //     signUpDate: "2016-06-08",
	  //   },
	  //   data: {
	  //     firstName: 'Tupac',
	  //     email: 'KingD@Tupac.com',
	  //     password: 'catmouse',
	  //     lastName: 'King',
	  //     location: 'At the Top',
	  //     emailMailingList: true,
	  //     researchAndDevelopment: true
	  //   }
	  // };
	  dataService.newUser(user);
	}

	});


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("signup", function() {
	  return {
	    templateUrl: 'templates/signupform.html',
	    controller: 'signUpForm',
	    replace: true
	  }
	})


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("products", function() {
	  return {
	    templateUrl: 'templates/products.html',
	    controller: 'productCtrl',
	    replace: true
	  }
	})


/***/ },
/* 8 */
/***/ function(module, exports) {

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


/***/ }
]);