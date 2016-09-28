webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	angular.module("lionHeart", []);
	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(44);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var lionHeart = angular.module("lionHeart", [__webpack_require__(4)])
	lionHeart.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	  $urlRouterProvider.when('/store', '/store/categories/all').when('/cart', '/cart/view').when('/profile', '/profile/dashboard').when('/admin', '/admin/products').when('/portfolio', '/portfolio/gallery').when('/blog', '/blog/').otherwise('/');
	  $stateProvider
	    .state('home', {
	      url: '/',
	      templateUrl: 'templates/index.html',
	      controller: 'indexHomeCtrl'
	    })
	      .state('quickstart', {
	        url: '/quickstart',
	        templateUrl: 'templates/quickstart.html'
	      })
	    .state('login', {
	    url: '/login',
	    templateUrl: 'templates/login.html',
	    controller: 'loginCtrl'
	    })
	    .state('profile', {
	    url: '/profile',
	    templateUrl: 'templates/profile.html',
	    controller: 'profileCtrl'
	    })
	      .state('profile.orderHistory', {
	      url: '/orderHistory',
	      templateUrl: 'templates/orderHistory.html',
	      controller: 'orderHistoryCtrl'
	      })
	      .state('profile.dashboard', {
	      url: '/dashboard',
	      templateUrl: 'templates/profile/dashboard.html',
	      controller: 'profile.dashboardCtrl'
	      })
	      .state('profile.edit', {
	      url: '/edit',
	      templateUrl: 'templates/profile/edit.html',
	      controller: 'profile.dashboard.editCtrl'
	      })
	    .state('store', {
	    url: '/store',
	    templateUrl: 'templates/category.html'
	    })
	      .state('store.search', {
	      url: '/search',
	      templateUrl: 'templates/products.html',
	      controller: 'category.searchCtrl'
	      })
	      .state('store.product', {
	      url: '/products/:urlCode',
	      templateUrl: 'templates/singleItem.html',
	      controller: 'singleItemCtrl'
	      })
	      .state('store.categories', {
	      url: '/categories',
	      templateUrl: 'templates/category/categories.html',
	      controller: 'categoryCtrl'
	      })
	        .state('store.categories.all', {
	        url: '/all',
	        templateUrl: 'templates/products.html',
	        controller: 'productCtrl'
	        })
	      .state('store.stickers', {
	      url: '/stickers',
	      templateUrl: 'templates/products.html',
	      controller: 'productCtrl'
	      })
	      .state('store.paintings', {
	      url: '/paintings',
	      templateUrl: 'templates/products.html',
	      controller: 'productCtrl'
	      })
	      .state('store.prints', {
	      url: '/prints',
	      templateUrl: 'templates/products.html',
	      controller: 'productCtrl'
	      })
	      .state('store.upcycle', {
	      url: '/upcycle',
	      templateUrl: 'templates/products.html',
	      controller: 'productCtrl'
	      })
	      .state('store.graphics', {
	      url: '/graphics',
	      templateUrl: 'templates/products.html',
	      controller: 'productCtrl'
	      })
	      .state('store.skateboards', {
	      url: '/skateboards',
	      templateUrl: 'templates/products.html',
	      controller: 'productCtrl'
	      })
	    .state('bio', {
	    url: '/bio',
	    templateUrl: 'templates/bio.html',
	    controller: 'bioCtrl'
	    })
	  .state('portfolio', {
	  url: '/portfolio',
	  templateUrl: 'templates/portfolio.html',
	  controller: 'portfolioCtrl'
	  })
	.state('portfolio.gallery', {
	url: '/gallery',
	templateUrl: 'templates/portfolioGallery.html',
	controller: 'portfolioCtrl'
	})
	.state('portfolio.singlePiece', {
	url: '/id/:id',
	templateUrl: 'templates/singlePiece.html',
	controller: 'portfolioCtrl'
	})
	    .state('cart', {
	    url: '/cart',
	    templateUrl: 'templates/cart.html',
	    controller: 'cartCtrl'
	    })
	      .state('cart.review', {
	      url: '/review',
	      templateUrl: 'templates/checkout/review.html',
	      })
	      .state('cart.view', {
	      url: '/view',
	      templateUrl: 'templates/checkout/cart.html'
	      })
	      .state('cart.checkout', {
	      url: '/checkout',
	      templateUrl: 'templates/checkout/checkout.html',
	      controller: 'cart.checkoutCtrl'
	      })
	      .state('cart.confirmation', {
	      url: '/confirmation',
	      templateUrl: 'templates/checkout/confirmation.html',
	      controller: 'cart.confirmationCtrl'
	      })
	    .state('admin', {
	    url: '/admin',
	    templateUrl: 'templates/admin.html',
	    controller: 'adminCtrl'
	    })
	      .state('admin.posts', {
	      url: '/posts',
	      templateUrl: 'templates/admin/posts.html',
	      controller: 'admin.postsCtrl'
	      })
	        .state('admin.portfolio', {
	        url: '/portfolio',
	        templateUrl: 'templates/admin/portfolio.html',
	        controller: 'admin.portfolioCtrl'
	        })
	      .state('admin.users', {
	      url: '/users',
	      templateUrl: 'templates/admin/users.html',
	      controller: 'admin.usersCtrl'
	      })
	      .state('admin.products', {
	      url: '/products',
	      templateUrl: 'templates/admin/products.html',
	      controller: 'admin.productsCtrl'
	      })
	      .state('blog', {
	      url: '/blog',
	      templateUrl: 'templates/blog.html',
	      controller: 'blogCtrl'
	      })
	      .state('blog.blog', {
	      url: '/',
	      templateUrl: 'templates/blog/blog.html'
	      })
	      .state('blog.item', {
	      url: '/id/:id',
	      templateUrl: 'templates/blog/item.html',
	      controller: 'blogCtrl'
	      })
	}])
	lionHeart.run(['$state', function($state){}]);


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * State-based routing for AngularJS
	 * @version v0.3.1
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	/* commonjs package manager support (eg componentjs) */
	if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
	  module.exports = 'ui.router';
	}

	(function (window, angular, undefined) {
	/*jshint globalstrict:true*/
	/*global angular:false*/
	'use strict';

	var isDefined = angular.isDefined,
	    isFunction = angular.isFunction,
	    isString = angular.isString,
	    isObject = angular.isObject,
	    isArray = angular.isArray,
	    forEach = angular.forEach,
	    extend = angular.extend,
	    copy = angular.copy,
	    toJson = angular.toJson;

	function inherit(parent, extra) {
	  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
	}

	function merge(dst) {
	  forEach(arguments, function(obj) {
	    if (obj !== dst) {
	      forEach(obj, function(value, key) {
	        if (!dst.hasOwnProperty(key)) dst[key] = value;
	      });
	    }
	  });
	  return dst;
	}

	/**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */
	function ancestors(first, second) {
	  var path = [];

	  for (var n in first.path) {
	    if (first.path[n] !== second.path[n]) break;
	    path.push(first.path[n]);
	  }
	  return path;
	}

	/**
	 * IE8-safe wrapper for `Object.keys()`.
	 *
	 * @param {Object} object A JavaScript object.
	 * @return {Array} Returns the keys of the object as an array.
	 */
	function objectKeys(object) {
	  if (Object.keys) {
	    return Object.keys(object);
	  }
	  var result = [];

	  forEach(object, function(val, key) {
	    result.push(key);
	  });
	  return result;
	}

	/**
	 * IE8-safe wrapper for `Array.prototype.indexOf()`.
	 *
	 * @param {Array} array A JavaScript array.
	 * @param {*} value A value to search the array for.
	 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
	 */
	function indexOf(array, value) {
	  if (Array.prototype.indexOf) {
	    return array.indexOf(value, Number(arguments[2]) || 0);
	  }
	  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
	  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

	  if (from < 0) from += len;

	  for (; from < len; from++) {
	    if (from in array && array[from] === value) return from;
	  }
	  return -1;
	}

	/**
	 * Merges a set of parameters with all parameters inherited between the common parents of the
	 * current state and a given destination state.
	 *
	 * @param {Object} currentParams The value of the current state parameters ($stateParams).
	 * @param {Object} newParams The set of parameters which will be composited with inherited params.
	 * @param {Object} $current Internal definition of object representing the current state.
	 * @param {Object} $to Internal definition of object representing state to transition to.
	 */
	function inheritParams(currentParams, newParams, $current, $to) {
	  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

	  for (var i in parents) {
	    if (!parents[i] || !parents[i].params) continue;
	    parentParams = objectKeys(parents[i].params);
	    if (!parentParams.length) continue;

	    for (var j in parentParams) {
	      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
	      inheritList.push(parentParams[j]);
	      inherited[parentParams[j]] = currentParams[parentParams[j]];
	    }
	  }
	  return extend({}, inherited, newParams);
	}

	/**
	 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
	 *
	 * @param {Object} a The first object.
	 * @param {Object} b The second object.
	 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
	 *                     it defaults to the list of keys in `a`.
	 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
	 */
	function equalForKeys(a, b, keys) {
	  if (!keys) {
	    keys = [];
	    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
	  }

	  for (var i=0; i<keys.length; i++) {
	    var k = keys[i];
	    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
	  }
	  return true;
	}

	/**
	 * Returns the subset of an object, based on a list of keys.
	 *
	 * @param {Array} keys
	 * @param {Object} values
	 * @return {Boolean} Returns a subset of `values`.
	 */
	function filterByKeys(keys, values) {
	  var filtered = {};

	  forEach(keys, function (name) {
	    filtered[name] = values[name];
	  });
	  return filtered;
	}

	// like _.indexBy
	// when you know that your index values will be unique, or you want last-one-in to win
	function indexBy(array, propName) {
	  var result = {};
	  forEach(array, function(item) {
	    result[item[propName]] = item;
	  });
	  return result;
	}

	// extracted from underscore.js
	// Return a copy of the object only containing the whitelisted properties.
	function pick(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  forEach(keys, function(key) {
	    if (key in obj) copy[key] = obj[key];
	  });
	  return copy;
	}

	// extracted from underscore.js
	// Return a copy of the object omitting the blacklisted properties.
	function omit(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  for (var key in obj) {
	    if (indexOf(keys, key) == -1) copy[key] = obj[key];
	  }
	  return copy;
	}

	function pluck(collection, key) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = isFunction(key) ? key(val) : val[key];
	  });
	  return result;
	}

	function filter(collection, callback) {
	  var array = isArray(collection);
	  var result = array ? [] : {};
	  forEach(collection, function(val, i) {
	    if (callback(val, i)) {
	      result[array ? result.length : i] = val;
	    }
	  });
	  return result;
	}

	function map(collection, callback) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = callback(val, i);
	  });
	  return result;
	}

	/**
	 * @ngdoc overview
	 * @name ui.router.util
	 *
	 * @description
	 * # ui.router.util sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.util', ['ng']);

	/**
	 * @ngdoc overview
	 * @name ui.router.router
	 * 
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.router sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 */
	angular.module('ui.router.router', ['ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router.state
	 * 
	 * @requires ui.router.router
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.state sub-module
	 *
	 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 * 
	 */
	angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router
	 *
	 * @requires ui.router.state
	 *
	 * @description
	 * # ui.router
	 * 
	 * ## The main module for ui.router 
	 * There are several sub-modules included with the ui.router module, however only this module is needed
	 * as a dependency within your angular app. The other modules are for organization purposes. 
	 *
	 * The modules are:
	 * * ui.router - the main "umbrella" module
	 * * ui.router.router - 
	 * 
	 * *You'll need to include **only** this module as the dependency within your angular app.*
	 * 
	 * <pre>
	 * <!doctype html>
	 * <html ng-app="myApp">
	 * <head>
	 *   <script src="js/angular.js"></script>
	 *   <!-- Include the ui-router script -->
	 *   <script src="js/angular-ui-router.min.js"></script>
	 *   <script>
	 *     // ...and add 'ui.router' as a dependency
	 *     var myApp = angular.module('myApp', ['ui.router']);
	 *   </script>
	 * </head>
	 * <body>
	 * </body>
	 * </html>
	 * </pre>
	 */
	angular.module('ui.router', ['ui.router.state']);

	angular.module('ui.router.compat', ['ui.router']);

	/**
	 * @ngdoc object
	 * @name ui.router.util.$resolve
	 *
	 * @requires $q
	 * @requires $injector
	 *
	 * @description
	 * Manages resolution of (acyclic) graphs of promises.
	 */
	$Resolve.$inject = ['$q', '$injector'];
	function $Resolve(  $q,    $injector) {
	  
	  var VISIT_IN_PROGRESS = 1,
	      VISIT_DONE = 2,
	      NOTHING = {},
	      NO_DEPENDENCIES = [],
	      NO_LOCALS = NOTHING,
	      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
	  

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#study
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Studies a set of invocables that are likely to be used multiple times.
	   * <pre>
	   * $resolve.study(invocables)(locals, parent, self)
	   * </pre>
	   * is equivalent to
	   * <pre>
	   * $resolve.resolve(invocables, locals, parent, self)
	   * </pre>
	   * but the former is more efficient (in fact `resolve` just calls `study` 
	   * internally).
	   *
	   * @param {object} invocables Invocable objects
	   * @return {function} a function to pass in locals, parent and self
	   */
	  this.study = function (invocables) {
	    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
	    var invocableKeys = objectKeys(invocables || {});
	    
	    // Perform a topological sort of invocables to build an ordered plan
	    var plan = [], cycle = [], visited = {};
	    function visit(value, key) {
	      if (visited[key] === VISIT_DONE) return;
	      
	      cycle.push(key);
	      if (visited[key] === VISIT_IN_PROGRESS) {
	        cycle.splice(0, indexOf(cycle, key));
	        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
	      }
	      visited[key] = VISIT_IN_PROGRESS;
	      
	      if (isString(value)) {
	        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
	      } else {
	        var params = $injector.annotate(value);
	        forEach(params, function (param) {
	          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
	        });
	        plan.push(key, value, params);
	      }
	      
	      cycle.pop();
	      visited[key] = VISIT_DONE;
	    }
	    forEach(invocables, visit);
	    invocables = cycle = visited = null; // plan is all that's required
	    
	    function isResolve(value) {
	      return isObject(value) && value.then && value.$$promises;
	    }
	    
	    return function (locals, parent, self) {
	      if (isResolve(locals) && self === undefined) {
	        self = parent; parent = locals; locals = null;
	      }
	      if (!locals) locals = NO_LOCALS;
	      else if (!isObject(locals)) {
	        throw new Error("'locals' must be an object");
	      }       
	      if (!parent) parent = NO_PARENT;
	      else if (!isResolve(parent)) {
	        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
	      }
	      
	      // To complete the overall resolution, we have to wait for the parent
	      // promise and for the promise for each invokable in our plan.
	      var resolution = $q.defer(),
	          result = resolution.promise,
	          promises = result.$$promises = {},
	          values = extend({}, locals),
	          wait = 1 + plan.length/3,
	          merged = false;
	          
	      function done() {
	        // Merge parent values we haven't got yet and publish our own $$values
	        if (!--wait) {
	          if (!merged) merge(values, parent.$$values); 
	          result.$$values = values;
	          result.$$promises = result.$$promises || true; // keep for isResolve()
	          delete result.$$inheritedValues;
	          resolution.resolve(values);
	        }
	      }
	      
	      function fail(reason) {
	        result.$$failure = reason;
	        resolution.reject(reason);
	      }

	      // Short-circuit if parent has already failed
	      if (isDefined(parent.$$failure)) {
	        fail(parent.$$failure);
	        return result;
	      }
	      
	      if (parent.$$inheritedValues) {
	        merge(values, omit(parent.$$inheritedValues, invocableKeys));
	      }

	      // Merge parent values if the parent has already resolved, or merge
	      // parent promises and wait if the parent resolve is still in progress.
	      extend(promises, parent.$$promises);
	      if (parent.$$values) {
	        merged = merge(values, omit(parent.$$values, invocableKeys));
	        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
	        done();
	      } else {
	        if (parent.$$inheritedValues) {
	          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
	        }        
	        parent.then(done, fail);
	      }
	      
	      // Process each invocable in the plan, but ignore any where a local of the same name exists.
	      for (var i=0, ii=plan.length; i<ii; i+=3) {
	        if (locals.hasOwnProperty(plan[i])) done();
	        else invoke(plan[i], plan[i+1], plan[i+2]);
	      }
	      
	      function invoke(key, invocable, params) {
	        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
	        var invocation = $q.defer(), waitParams = 0;
	        function onfailure(reason) {
	          invocation.reject(reason);
	          fail(reason);
	        }
	        // Wait for any parameter that we have a promise for (either from parent or from this
	        // resolve; in that case study() will have made sure it's ordered before us in the plan).
	        forEach(params, function (dep) {
	          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
	            waitParams++;
	            promises[dep].then(function (result) {
	              values[dep] = result;
	              if (!(--waitParams)) proceed();
	            }, onfailure);
	          }
	        });
	        if (!waitParams) proceed();
	        function proceed() {
	          if (isDefined(result.$$failure)) return;
	          try {
	            invocation.resolve($injector.invoke(invocable, self, values));
	            invocation.promise.then(function (result) {
	              values[key] = result;
	              done();
	            }, onfailure);
	          } catch (e) {
	            onfailure(e);
	          }
	        }
	        // Publish promise synchronously; invocations further down in the plan may depend on it.
	        promises[key] = invocation.promise;
	      }
	      
	      return result;
	    };
	  };
	  
	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#resolve
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Resolves a set of invocables. An invocable is a function to be invoked via 
	   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
	   * An invocable can either return a value directly,
	   * or a `$q` promise. If a promise is returned it will be resolved and the 
	   * resulting value will be used instead. Dependencies of invocables are resolved 
	   * (in this order of precedence)
	   *
	   * - from the specified `locals`
	   * - from another invocable that is part of this `$resolve` call
	   * - from an invocable that is inherited from a `parent` call to `$resolve` 
	   *   (or recursively
	   * - from any ancestor `$resolve` of that parent).
	   *
	   * The return value of `$resolve` is a promise for an object that contains 
	   * (in this order of precedence)
	   *
	   * - any `locals` (if specified)
	   * - the resolved return values of all injectables
	   * - any values inherited from a `parent` call to `$resolve` (if specified)
	   *
	   * The promise will resolve after the `parent` promise (if any) and all promises 
	   * returned by injectables have been resolved. If any invocable 
	   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
	   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
	   * same error. A rejection of a `parent` promise (if specified) will likewise be 
	   * propagated immediately. Once the `$resolve` promise has been rejected, no 
	   * further invocables will be called.
	   * 
	   * Cyclic dependencies between invocables are not permitted and will cause `$resolve`
	   * to throw an error. As a special case, an injectable can depend on a parameter 
	   * with the same name as the injectable, which will be fulfilled from the `parent` 
	   * injectable of the same name. This allows inherited values to be decorated. 
	   * Note that in this case any other injectable in the same `$resolve` with the same
	   * dependency would see the decorated value, not the inherited value.
	   *
	   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
	   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
	   * exception.
	   *
	   * Invocables are invoked eagerly as soon as all dependencies are available. 
	   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
	   *
	   * As a special case, an invocable can be a string, in which case it is taken to 
	   * be a service name to be passed to `$injector.get()`. This is supported primarily 
	   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
	   * routes.
	   *
	   * @param {object} invocables functions to invoke or 
	   * `$injector` services to fetch.
	   * @param {object} locals  values to make available to the injectables
	   * @param {object} parent  a promise returned by another call to `$resolve`.
	   * @param {object} self  the `this` for the invoked methods
	   * @return {object} Promise for an object that contains the resolved return value
	   * of all invocables, as well as any inherited and local values.
	   */
	  this.resolve = function (invocables, locals, parent, self) {
	    return this.study(invocables)(locals, parent, self);
	  };
	}

	angular.module('ui.router.util').service('$resolve', $Resolve);


	/**
	 * @ngdoc object
	 * @name ui.router.util.$templateFactory
	 *
	 * @requires $http
	 * @requires $templateCache
	 * @requires $injector
	 *
	 * @description
	 * Service. Manages loading of templates.
	 */
	$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
	function $TemplateFactory(  $http,   $templateCache,   $injector) {

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromConfig
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a configuration object. 
	   *
	   * @param {object} config Configuration object for which to load a template. 
	   * The following properties are search in the specified order, and the first one 
	   * that is defined is used to create the template:
	   *
	   * @param {string|object} config.template html string template or function to 
	   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
	   * @param {string|object} config.templateUrl url to load or a function returning 
	   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
	   * @param {Function} config.templateProvider function to invoke via 
	   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
	   * @param {object} params  Parameters to pass to the template function.
	   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
	   * via a `templateProvider`. Defaults to `{ params: params }`.
	   *
	   * @return {string|object}  The template html as a string, or a promise for 
	   * that string,or `null` if no template is configured.
	   */
	  this.fromConfig = function (config, params, locals) {
	    return (
	      isDefined(config.template) ? this.fromString(config.template, params) :
	      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
	      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
	      null
	    );
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromString
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a string or a function returning a string.
	   *
	   * @param {string|object} template html template as a string or function that 
	   * returns an html template as a string.
	   * @param {object} params Parameters to pass to the template function.
	   *
	   * @return {string|object} The template html as a string, or a promise for that 
	   * string.
	   */
	  this.fromString = function (template, params) {
	    return isFunction(template) ? template(params) : template;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromUrl
	   * @methodOf ui.router.util.$templateFactory
	   * 
	   * @description
	   * Loads a template from the a URL via `$http` and `$templateCache`.
	   *
	   * @param {string|Function} url url of the template to load, or a function 
	   * that returns a url.
	   * @param {Object} params Parameters to pass to the url function.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromUrl = function (url, params) {
	    if (isFunction(url)) url = url(params);
	    if (url == null) return null;
	    else return $http
	        .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
	        .then(function(response) { return response.data; });
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromProvider
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template by invoking an injectable provider function.
	   *
	   * @param {Function} provider Function to invoke via `$injector.invoke`
	   * @param {Object} params Parameters for the template.
	   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
	   * `{ params: params }`.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromProvider = function (provider, params, locals) {
	    return $injector.invoke(provider, null, locals || { params: params });
	  };
	}

	angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

	var $$UMFP; // reference to $UrlMatcherFactoryProvider

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
	 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
	 *
	 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
	 * syntax, which optionally allows a regular expression for the parameter to be specified:
	 *
	 * * `':'` name - colon placeholder
	 * * `'*'` name - catch-all placeholder
	 * * `'{' name '}'` - curly placeholder
	 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
	 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters). For colon
	 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
	 * number of characters other than '/'. For catch-all placeholders the path parameter matches
	 * any number of characters.
	 *
	 * Examples:
	 *
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 * @param {string} pattern  The pattern to compile into a matcher.
	 * @param {Object} config  A configuration object hash:
	 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
	 *   an existing UrlMatcher
	 *
	 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	 *
	 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
	 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
	 *   non-null) will start with this prefix.
	 *
	 * @property {string} source  The pattern that was passed into the constructor
	 *
	 * @property {string} sourcePath  The path portion of the source property
	 *
	 * @property {string} sourceSearch  The search portion of the source property
	 *
	 * @property {string} regex  The constructed regex that will be used to match against the url when
	 *   it is time to determine which url will match.
	 *
	 * @returns {Object}  New `UrlMatcher` object
	 */
	function UrlMatcher(pattern, config, parentMatcher) {
	  config = extend({ params: {} }, isObject(config) ? config : {});

	  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	  //   '*' name
	  //   ':' name
	  //   '{' name '}'
	  //   '{' name ':' regexp '}'
	  // The regular expression is somewhat complicated due to the need to allow curly braces
	  // inside the regular expression. The placeholder regexp breaks down as follows:
	  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	  //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	  //    [^{}\\]+                       - anything other than curly braces or backslash
	  //    \\.                            - a backslash escape
	  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      compiled = '^', last = 0, m,
	      segments = this.segments = [],
	      parentParams = parentMatcher ? parentMatcher.params : {},
	      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
	      paramNames = [];

	  function addParameter(id, type, config, location) {
	    paramNames.push(id);
	    if (parentParams[id]) return parentParams[id];
	    if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
	    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
	    params[id] = new $$UMFP.Param(id, type, config, location);
	    return params[id];
	  }

	  function quoteRegExp(string, pattern, squash, optional) {
	    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	    if (!pattern) return result;
	    switch(squash) {
	      case false: surroundPattern = ['(', ')' + (optional ? "?" : "")]; break;
	      case true:
	        result = result.replace(/\/$/, '');
	        surroundPattern = ['(?:\/(', ')|\/)?'];
	      break;
	      default:    surroundPattern = ['(' + squash + "|", ')?']; break;
	    }
	    return result + surroundPattern[0] + pattern + surroundPattern[1];
	  }

	  this.source = pattern;

	  // Split into static segments separated by path parameter placeholders.
	  // The number of segments is always 1 more than the number of parameters.
	  function matchDetails(m, isSearch) {
	    var id, regexp, segment, type, cfg, arrayMode;
	    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	    cfg         = config.params[id];
	    segment     = pattern.substring(last, m.index);
	    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);

	    if (regexp) {
	      type      = $$UMFP.type(regexp) || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
	    }

	    return {
	      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
	    };
	  }

	  var p, param, segment;
	  while ((m = placeholder.exec(pattern))) {
	    p = matchDetails(m, false);
	    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

	    param = addParameter(p.id, p.type, p.cfg, "path");
	    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
	    segments.push(p.segment);
	    last = placeholder.lastIndex;
	  }
	  segment = pattern.substring(last);

	  // Find any search parameter names and remove them from the last segment
	  var i = segment.indexOf('?');

	  if (i >= 0) {
	    var search = this.sourceSearch = segment.substring(i);
	    segment = segment.substring(0, i);
	    this.sourcePath = pattern.substring(0, last + i);

	    if (search.length > 0) {
	      last = 0;
	      while ((m = searchPlaceholder.exec(search))) {
	        p = matchDetails(m, true);
	        param = addParameter(p.id, p.type, p.cfg, "search");
	        last = placeholder.lastIndex;
	        // check if ?&
	      }
	    }
	  } else {
	    this.sourcePath = pattern;
	    this.sourceSearch = '';
	  }

	  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
	  segments.push(segment);

	  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
	  this.prefix = segments[0];
	  this.$$paramNames = paramNames;
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#concat
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns a new matcher for a pattern constructed by appending the path part and adding the
	 * search parameters of the specified pattern to this pattern. The current pattern is not
	 * modified. This can be understood as creating a pattern for URLs that are relative to (or
	 * suffixes of) the current pattern.
	 *
	 * @example
	 * The following two matchers are equivalent:
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').concat('/details?date');
	 * new UrlMatcher('/user/{id}/details?q&date');
	 * </pre>
	 *
	 * @param {string} pattern  The pattern to append.
	 * @param {Object} config  An object hash of the configuration for the matcher.
	 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
	 */
	UrlMatcher.prototype.concat = function (pattern, config) {
	  // Because order of search parameters is irrelevant, we can add our own search
	  // parameters to the end of the new pattern. Parse the new pattern by itself
	  // and then join the bits together, but it's much easier to do this on a string level.
	  var defaultConfig = {
	    caseInsensitive: $$UMFP.caseInsensitive(),
	    strict: $$UMFP.strictMode(),
	    squash: $$UMFP.defaultSquashPolicy()
	  };
	  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
	};

	UrlMatcher.prototype.toString = function () {
	  return this.source;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#exec
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Tests the specified path against this matcher, and returns an object containing the captured
	 * parameter values, or null if the path does not match. The returned object contains the values
	 * of any search parameters that are mentioned in the pattern, but their value may be null if
	 * they are not present in `searchParams`. This means that search parameters are always treated
	 * as optional.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
	 *   x: '1', q: 'hello'
	 * });
	 * // returns { id: 'bob', q: 'hello', r: null }
	 * </pre>
	 *
	 * @param {string} path  The URL path to match, e.g. `$location.path()`.
	 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
	 * @returns {Object}  The captured parameter values.
	 */
	UrlMatcher.prototype.exec = function (path, searchParams) {
	  var m = this.regexp.exec(path);
	  if (!m) return null;
	  searchParams = searchParams || {};

	  var paramNames = this.parameters(), nTotal = paramNames.length,
	    nPath = this.segments.length - 1,
	    values = {}, i, j, cfg, paramName;

	  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

	  function decodePathArray(string) {
	    function reverseString(str) { return str.split("").reverse().join(""); }
	    function unquoteDashes(str) { return str.replace(/\\-/g, "-"); }

	    var split = reverseString(string).split(/-(?!\\)/);
	    var allReversed = map(split, reverseString);
	    return map(allReversed, unquoteDashes).reverse();
	  }

	  var param, paramVal;
	  for (i = 0; i < nPath; i++) {
	    paramName = paramNames[i];
	    param = this.params[paramName];
	    paramVal = m[i+1];
	    // if the param value matches a pre-replace pair, replace the value before decoding.
	    for (j = 0; j < param.replace.length; j++) {
	      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
	    }
	    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
	    if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
	    values[paramName] = param.value(paramVal);
	  }
	  for (/**/; i < nTotal; i++) {
	    paramName = paramNames[i];
	    values[paramName] = this.params[paramName].value(searchParams[paramName]);
	    param = this.params[paramName];
	    paramVal = searchParams[paramName];
	    for (j = 0; j < param.replace.length; j++) {
	      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
	    }
	    if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
	    values[paramName] = param.value(paramVal);
	  }

	  return values;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#parameters
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns the names of all path and search parameters of this pattern in an unspecified order.
	 *
	 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
	 *    pattern has no parameters, an empty array is returned.
	 */
	UrlMatcher.prototype.parameters = function (param) {
	  if (!isDefined(param)) return this.$$paramNames;
	  return this.params[param] || null;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#validates
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Checks an object hash of parameters to validate their correctness according to the parameter
	 * types of this `UrlMatcher`.
	 *
	 * @param {Object} params The object hash of parameters to validate.
	 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
	 */
	UrlMatcher.prototype.validates = function (params) {
	  return this.params.$$validates(params);
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#format
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Creates a URL that matches this pattern by substituting the specified values
	 * for the path and search parameters. Null values for path parameters are
	 * treated as empty strings.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	 * // returns '/user/bob?q=yes'
	 * </pre>
	 *
	 * @param {Object} values  the values to substitute for the parameters in this pattern.
	 * @returns {string}  the formatted URL (path and optionally search part).
	 */
	UrlMatcher.prototype.format = function (values) {
	  values = values || {};
	  var segments = this.segments, params = this.parameters(), paramset = this.params;
	  if (!this.validates(values)) return null;

	  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

	  function encodeDashes(str) { // Replace dashes with encoded "\-"
	    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
	  }

	  for (i = 0; i < nTotal; i++) {
	    var isPathParam = i < nPath;
	    var name = params[i], param = paramset[name], value = param.value(values[name]);
	    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
	    var squash = isDefaultValue ? param.squash : false;
	    var encoded = param.type.encode(value);

	    if (isPathParam) {
	      var nextSegment = segments[i + 1];
	      var isFinalPathParam = i + 1 === nPath;

	      if (squash === false) {
	        if (encoded != null) {
	          if (isArray(encoded)) {
	            result += map(encoded, encodeDashes).join("-");
	          } else {
	            result += encodeURIComponent(encoded);
	          }
	        }
	        result += nextSegment;
	      } else if (squash === true) {
	        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
	        result += nextSegment.match(capture)[1];
	      } else if (isString(squash)) {
	        result += squash + nextSegment;
	      }

	      if (isFinalPathParam && param.squash === true && result.slice(-1) === '/') result = result.slice(0, -1);
	    } else {
	      if (encoded == null || (isDefaultValue && squash !== false)) continue;
	      if (!isArray(encoded)) encoded = [ encoded ];
	      if (encoded.length === 0) continue;
	      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
	      result += (search ? '&' : '?') + (name + '=' + encoded);
	      search = true;
	    }
	  }

	  return result;
	};

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:Type
	 *
	 * @description
	 * Implements an interface to define custom parameter types that can be decoded from and encoded to
	 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
	 * objects when matching or formatting URLs, or comparing or validating parameter values.
	 *
	 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
	 * information on registering custom types.
	 *
	 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
	 *        properties will override the default methods and/or pattern in `Type`'s public interface.
	 * @example
	 * <pre>
	 * {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val && val.toString(); },
	 *   equals: function(a, b) { return this.is(a) && a === b; },
	 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 * </pre>
	 *
	 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
	 *           coming from a substring of a URL.
	 *
	 * @returns {Object}  Returns a new `Type` object.
	 */
	function Type(config) {
	  extend(this, config);
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#is
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Detects whether a value is of a particular type. Accepts a native (decoded) value
	 * and determines whether it matches the current `Type` object.
	 *
	 * @param {*} val  The value to check.
	 * @param {string} key  Optional. If the type check is happening in the context of a specific
	 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
	 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
	 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
	 */
	Type.prototype.is = function(val, key) {
	  return true;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#encode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
	 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
	 * only needs to be a representation of `val` that has been coerced to a string.
	 *
	 * @param {*} val  The value to encode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
	 */
	Type.prototype.encode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#decode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Converts a parameter value (from URL string or transition param) to a custom/native value.
	 *
	 * @param {string} val  The URL parameter value to decode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {*}  Returns a custom representation of the URL parameter value.
	 */
	Type.prototype.decode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#equals
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Determines whether two decoded values are equivalent.
	 *
	 * @param {*} a  A value to compare against.
	 * @param {*} b  A value to compare against.
	 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
	 */
	Type.prototype.equals = function(a, b) {
	  return a == b;
	};

	Type.prototype.$subPattern = function() {
	  var sub = this.pattern.toString();
	  return sub.substr(1, sub.length - 2);
	};

	Type.prototype.pattern = /.*/;

	Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

	/** Given an encoded string, or a decoded object, returns a decoded object */
	Type.prototype.$normalize = function(val) {
	  return this.is(val) ? val : this.decode(val);
	};

	/*
	 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
	 * e.g.:
	 * - urlmatcher pattern "/path?{queryParam[]:int}"
	 * - url: "/path?queryParam=1&queryParam=2
	 * - $stateParams.queryParam will be [1, 2]
	 * if `mode` is "auto", then
	 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
	 */
	Type.prototype.$asArray = function(mode, isSearch) {
	  if (!mode) return this;
	  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

	  function ArrayType(type, mode) {
	    function bindTo(type, callbackName) {
	      return function() {
	        return type[callbackName].apply(type, arguments);
	      };
	    }

	    // Wrap non-array value as array
	    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
	    // Unwrap array value for "auto" mode. Return undefined for empty array.
	    function arrayUnwrap(val) {
	      switch(val.length) {
	        case 0: return undefined;
	        case 1: return mode === "auto" ? val[0] : val;
	        default: return val;
	      }
	    }
	    function falsey(val) { return !val; }

	    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	    function arrayHandler(callback, allTruthyMode) {
	      return function handleArray(val) {
	        if (isArray(val) && val.length === 0) return val;
	        val = arrayWrap(val);
	        var result = map(val, callback);
	        if (allTruthyMode === true)
	          return filter(result, falsey).length === 0;
	        return arrayUnwrap(result);
	      };
	    }

	    // Wraps type (.equals) functions to operate on each value of an array
	    function arrayEqualsHandler(callback) {
	      return function handleArray(val1, val2) {
	        var left = arrayWrap(val1), right = arrayWrap(val2);
	        if (left.length !== right.length) return false;
	        for (var i = 0; i < left.length; i++) {
	          if (!callback(left[i], right[i])) return false;
	        }
	        return true;
	      };
	    }

	    this.encode = arrayHandler(bindTo(type, 'encode'));
	    this.decode = arrayHandler(bindTo(type, 'decode'));
	    this.is     = arrayHandler(bindTo(type, 'is'), true);
	    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
	    this.pattern = type.pattern;
	    this.$normalize = arrayHandler(bindTo(type, '$normalize'));
	    this.name = type.name;
	    this.$arrayMode = mode;
	  }

	  return new ArrayType(this, mode);
	};



	/**
	 * @ngdoc object
	 * @name ui.router.util.$urlMatcherFactory
	 *
	 * @description
	 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
	 * is also available to providers under the name `$urlMatcherFactoryProvider`.
	 */
	function $UrlMatcherFactory() {
	  $$UMFP = this;

	  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

	  // Use tildes to pre-encode slashes.
	  // If the slashes are simply URLEncoded, the browser can choose to pre-decode them,
	  // and bidirectional encoding/decoding fails.
	  // Tilde was chosen because it's not a RFC 3986 section 2.2 Reserved Character
	  function valToString(val) { return val != null ? val.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : val; }
	  function valFromString(val) { return val != null ? val.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : val; }

	  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
	    "string": {
	      encode: valToString,
	      decode: valFromString,
	      // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
	      // In 0.2.x, string params are optional by default for backwards compat
	      is: function(val) { return val == null || !isDefined(val) || typeof val === "string"; },
	      pattern: /[^/]*/
	    },
	    "int": {
	      encode: valToString,
	      decode: function(val) { return parseInt(val, 10); },
	      is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
	      pattern: /\d+/
	    },
	    "bool": {
	      encode: function(val) { return val ? 1 : 0; },
	      decode: function(val) { return parseInt(val, 10) !== 0; },
	      is: function(val) { return val === true || val === false; },
	      pattern: /0|1/
	    },
	    "date": {
	      encode: function (val) {
	        if (!this.is(val))
	          return undefined;
	        return [ val.getFullYear(),
	          ('0' + (val.getMonth() + 1)).slice(-2),
	          ('0' + val.getDate()).slice(-2)
	        ].join("-");
	      },
	      decode: function (val) {
	        if (this.is(val)) return val;
	        var match = this.capture.exec(val);
	        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
	      },
	      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
	      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
	      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
	      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
	    },
	    "json": {
	      encode: angular.toJson,
	      decode: angular.fromJson,
	      is: angular.isObject,
	      equals: angular.equals,
	      pattern: /[^/]*/
	    },
	    "any": { // does not encode/decode
	      encode: angular.identity,
	      decode: angular.identity,
	      equals: angular.equals,
	      pattern: /.*/
	    }
	  };

	  function getDefaultConfig() {
	    return {
	      strict: isStrictMode,
	      caseInsensitive: isCaseInsensitive
	    };
	  }

	  function isInjectable(value) {
	    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
	  }

	  /**
	   * [Internal] Get the default value of a parameter, which may be an injectable function.
	   */
	  $UrlMatcherFactory.$$getDefaultValue = function(config) {
	    if (!isInjectable(config.value)) return config.value;
	    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	    return injector.invoke(config.value);
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URL matching should be case sensitive (the default behavior), or not.
	   *
	   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
	   * @returns {boolean} the current value of caseInsensitive
	   */
	  this.caseInsensitive = function(value) {
	    if (isDefined(value))
	      isCaseInsensitive = value;
	    return isCaseInsensitive;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#strictMode
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URLs should match trailing slashes, or not (the default behavior).
	   *
	   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
	   * @returns {boolean} the current value of strictMode
	   */
	  this.strictMode = function(value) {
	    if (isDefined(value))
	      isStrictMode = value;
	    return isStrictMode;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Sets the default behavior when generating or matching URLs with default parameter values.
	   *
	   * @param {string} value A string that defines the default parameter URL squashing behavior.
	   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
	   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
	   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
	   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
	   *             the parameter value from the URL and replace it with this string.
	   */
	  this.defaultSquashPolicy = function(value) {
	    if (!isDefined(value)) return defaultSquashPolicy;
	    if (value !== true && value !== false && !isString(value))
	      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
	    defaultSquashPolicy = value;
	    return value;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#compile
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
	   *
	   * @param {string} pattern  The URL pattern.
	   * @param {Object} config  The config object hash.
	   * @returns {UrlMatcher}  The UrlMatcher.
	   */
	  this.compile = function (pattern, config) {
	    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#isMatcher
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
	   *
	   * @param {Object} object  The object to perform the type check against.
	   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
	   *          implementing all the same methods.
	   */
	  this.isMatcher = function (o) {
	    if (!isObject(o)) return false;
	    var result = true;

	    forEach(UrlMatcher.prototype, function(val, name) {
	      if (isFunction(val)) {
	        result = result && (isDefined(o[name]) && isFunction(o[name]));
	      }
	    });
	    return result;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#type
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
	   * generate URLs with typed parameters.
	   *
	   * @param {string} name  The type name.
	   * @param {Object|Function} definition   The type definition. See
	   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
	   *        runtime starts.  The result of this function is merged into the existing `definition`.
	   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   *
	   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
	   *
	   * @example
	   * This is a simple example of a custom type that encodes and decodes items from an
	   * array, using the array index as the URL-encoded value:
	   *
	   * <pre>
	   * var list = ['John', 'Paul', 'George', 'Ringo'];
	   *
	   * $urlMatcherFactoryProvider.type('listItem', {
	   *   encode: function(item) {
	   *     // Represent the list item in the URL using its corresponding index
	   *     return list.indexOf(item);
	   *   },
	   *   decode: function(item) {
	   *     // Look up the list item by index
	   *     return list[parseInt(item, 10)];
	   *   },
	   *   is: function(item) {
	   *     // Ensure the item is valid by checking to see that it appears
	   *     // in the list
	   *     return list.indexOf(item) > -1;
	   *   }
	   * });
	   *
	   * $stateProvider.state('list', {
	   *   url: "/list/{item:listItem}",
	   *   controller: function($scope, $stateParams) {
	   *     console.log($stateParams.item);
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * // Changes URL to '/list/3', logs "Ringo" to the console
	   * $state.go('list', { item: "Ringo" });
	   * </pre>
	   *
	   * This is a more complex example of a type that relies on dependency injection to
	   * interact with services, and uses the parameter name from the URL to infer how to
	   * handle encoding and decoding parameter values:
	   *
	   * <pre>
	   * // Defines a custom type that gets a value from a service,
	   * // where each service gets different types of values from
	   * // a backend API:
	   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
	   *
	   *   // Matches up services to URL parameter names
	   *   var services = {
	   *     user: Users,
	   *     post: Posts
	   *   };
	   *
	   *   return {
	   *     encode: function(object) {
	   *       // Represent the object in the URL using its unique ID
	   *       return object.id;
	   *     },
	   *     decode: function(value, key) {
	   *       // Look up the object by ID, using the parameter
	   *       // name (key) to call the correct service
	   *       return services[key].findById(value);
	   *     },
	   *     is: function(object, key) {
	   *       // Check that object is a valid dbObject
	   *       return angular.isObject(object) && object.id && services[key];
	   *     }
	   *     equals: function(a, b) {
	   *       // Check the equality of decoded objects by comparing
	   *       // their unique IDs
	   *       return a.id === b.id;
	   *     }
	   *   };
	   * });
	   *
	   * // In a config() block, you can then attach URLs with
	   * // type-annotated parameters:
	   * $stateProvider.state('users', {
	   *   url: "/users",
	   *   // ...
	   * }).state('users.item', {
	   *   url: "/{user:dbObject}",
	   *   controller: function($scope, $stateParams) {
	   *     // $stateParams.user will now be an object returned from
	   *     // the Users service
	   *   },
	   *   // ...
	   * });
	   * </pre>
	   */
	  this.type = function (name, definition, definitionFn) {
	    if (!isDefined(definition)) return $types[name];
	    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

	    $types[name] = new Type(extend({ name: name }, definition));
	    if (definitionFn) {
	      typeQueue.push({ name: name, def: definitionFn });
	      if (!enqueue) flushTypeQueue();
	    }
	    return this;
	  };

	  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
	  function flushTypeQueue() {
	    while(typeQueue.length) {
	      var type = typeQueue.shift();
	      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
	      angular.extend($types[type.name], injector.invoke(type.def));
	    }
	  }

	  // Register default types. Store them in the prototype of $types.
	  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
	  $types = inherit($types, {});

	  /* No need to document $get, since it returns this */
	  this.$get = ['$injector', function ($injector) {
	    injector = $injector;
	    enqueue = false;
	    flushTypeQueue();

	    forEach(defaultTypes, function(type, name) {
	      if (!$types[name]) $types[name] = new Type(type);
	    });
	    return this;
	  }];

	  this.Param = function Param(id, type, config, location) {
	    var self = this;
	    config = unwrapShorthand(config);
	    type = getType(config, type, location);
	    var arrayMode = getArrayMode();
	    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
	    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
	      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
	    var isOptional = config.value !== undefined;
	    var squash = getSquashPolicy(config, isOptional);
	    var replace = getReplace(config, arrayMode, isOptional, squash);

	    function unwrapShorthand(config) {
	      var keys = isObject(config) ? objectKeys(config) : [];
	      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
	                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
	      if (isShorthand) config = { value: config };
	      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
	      return config;
	    }

	    function getType(config, urlType, location) {
	      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
	      if (urlType) return urlType;
	      if (!config.type) return (location === "config" ? $types.any : $types.string);

	      if (angular.isString(config.type))
	        return $types[config.type];
	      if (config.type instanceof Type)
	        return config.type;
	      return new Type(config.type);
	    }

	    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	    function getArrayMode() {
	      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
	      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
	      return extend(arrayDefaults, arrayParamNomenclature, config).array;
	    }

	    /**
	     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	     */
	    function getSquashPolicy(config, isOptional) {
	      var squash = config.squash;
	      if (!isOptional || squash === false) return false;
	      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
	      if (squash === true || isString(squash)) return squash;
	      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
	    }

	    function getReplace(config, arrayMode, isOptional, squash) {
	      var replace, configuredKeys, defaultPolicy = [
	        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
	        { from: null, to: (isOptional || arrayMode ? undefined : "") }
	      ];
	      replace = isArray(config.replace) ? config.replace : [];
	      if (isString(squash))
	        replace.push({ from: squash, to: undefined });
	      configuredKeys = map(replace, function(item) { return item.from; } );
	      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
	    }

	    /**
	     * [Internal] Get the default value of a parameter, which may be an injectable function.
	     */
	    function $$getDefaultValue() {
	      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	      var defaultValue = injector.invoke(config.$$fn);
	      if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))
	        throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
	      return defaultValue;
	    }

	    /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */
	    function $value(value) {
	      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
	      function $replace(value) {
	        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
	        return replacement.length ? replacement[0] : value;
	      }
	      value = $replace(value);
	      return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
	    }

	    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

	    extend(this, {
	      id: id,
	      type: type,
	      location: location,
	      array: arrayMode,
	      squash: squash,
	      replace: replace,
	      isOptional: isOptional,
	      value: $value,
	      dynamic: undefined,
	      config: config,
	      toString: toString
	    });
	  };

	  function ParamSet(params) {
	    extend(this, params || {});
	  }

	  ParamSet.prototype = {
	    $$new: function() {
	      return inherit(this, extend(new ParamSet(), { $$parent: this}));
	    },
	    $$keys: function () {
	      var keys = [], chain = [], parent = this,
	        ignore = objectKeys(ParamSet.prototype);
	      while (parent) { chain.push(parent); parent = parent.$$parent; }
	      chain.reverse();
	      forEach(chain, function(paramset) {
	        forEach(objectKeys(paramset), function(key) {
	            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
	        });
	      });
	      return keys;
	    },
	    $$values: function(paramValues) {
	      var values = {}, self = this;
	      forEach(self.$$keys(), function(key) {
	        values[key] = self[key].value(paramValues && paramValues[key]);
	      });
	      return values;
	    },
	    $$equals: function(paramValues1, paramValues2) {
	      var equal = true, self = this;
	      forEach(self.$$keys(), function(key) {
	        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
	        if (!self[key].type.equals(left, right)) equal = false;
	      });
	      return equal;
	    },
	    $$validates: function $$validate(paramValues) {
	      var keys = this.$$keys(), i, param, rawVal, normalized, encoded;
	      for (i = 0; i < keys.length; i++) {
	        param = this[keys[i]];
	        rawVal = paramValues[keys[i]];
	        if ((rawVal === undefined || rawVal === null) && param.isOptional)
	          break; // There was no parameter value, but the param is optional
	        normalized = param.type.$normalize(rawVal);
	        if (!param.type.is(normalized))
	          return false; // The value was not of the correct Type, and could not be decoded to the correct Type
	        encoded = param.type.encode(normalized);
	        if (angular.isString(encoded) && !param.type.pattern.exec(encoded))
	          return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
	      }
	      return true;
	    },
	    $$parent: undefined
	  };

	  this.ParamSet = ParamSet;
	}

	// Register as a provider so it's available to other providers
	angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
	angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

	/**
	 * @ngdoc object
	 * @name ui.router.router.$urlRouterProvider
	 *
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 * @requires $locationProvider
	 *
	 * @description
	 * `$urlRouterProvider` has the responsibility of watching `$location`. 
	 * When `$location` changes it runs through a list of rules one by one until a 
	 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
	 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
	 *
	 * There are several methods on `$urlRouterProvider` that make it useful to use directly
	 * in your module config.
	 */
	$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
	function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
	  var rules = [], otherwise = null, interceptDeferred = false, listener;

	  // Returns a string that is a prefix of all strings matching the RegExp
	  function regExpPrefix(re) {
	    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
	    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
	  }

	  // Interpolates matched values into a String.replace()-style pattern
	  function interpolate(pattern, match) {
	    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
	      return match[what === '$' ? 0 : Number(what)];
	    });
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#rule
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines rules that are used by `$urlRouterProvider` to find matches for
	   * specific URLs.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // Here's an example of how you might allow case insensitive urls
	   *   $urlRouterProvider.rule(function ($injector, $location) {
	   *     var path = $location.path(),
	   *         normalized = path.toLowerCase();
	   *
	   *     if (path !== normalized) {
	   *       return normalized;
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {function} rule Handler function that takes `$injector` and `$location`
	   * services as arguments. You can use them to return a valid path as a string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.rule = function (rule) {
	    if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    rules.push(rule);
	    return this;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouterProvider#otherwise
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines a path that is used when an invalid route is requested.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // if the path doesn't match any of the urls you configured
	   *   // otherwise will take care of routing the user to the
	   *   // specified url
	   *   $urlRouterProvider.otherwise('/index');
	   *
	   *   // Example of using function rule as param
	   *   $urlRouterProvider.otherwise(function ($injector, $location) {
	   *     return '/a/valid/url';
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|function} rule The url path you want to redirect to or a function 
	   * rule that returns the url path. The function version is passed two params: 
	   * `$injector` and `$location` services, and must return a url string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.otherwise = function (rule) {
	    if (isString(rule)) {
	      var redirect = rule;
	      rule = function () { return redirect; };
	    }
	    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    otherwise = rule;
	    return this;
	  };


	  function handleIfMatch($injector, handler, match) {
	    if (!match) return false;
	    var result = $injector.invoke(handler, handler, { $match: match });
	    return isDefined(result) ? result : true;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#when
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Registers a handler for a given url matching. 
	   * 
	   * If the handler is a string, it is
	   * treated as a redirect, and is interpolated according to the syntax of match
	   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
	   *
	   * If the handler is a function, it is injectable. It gets invoked if `$location`
	   * matches. You have the option of inject the match object as `$match`.
	   *
	   * The handler can return
	   *
	   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
	   *   will continue trying to find another one that matches.
	   * - **string** which is treated as a redirect and passed to `$location.url()`
	   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
	   *     if ($state.$current.navigable !== state ||
	   *         !equalForKeys($match, $stateParams) {
	   *      $state.transitionTo(state, $match, false);
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} what The incoming path that you want to redirect.
	   * @param {string|function} handler The path you want to redirect your user to.
	   */
	  this.when = function (what, handler) {
	    var redirect, handlerIsString = isString(handler);
	    if (isString(what)) what = $urlMatcherFactory.compile(what);

	    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
	      throw new Error("invalid 'handler' in when()");

	    var strategies = {
	      matcher: function (what, handler) {
	        if (handlerIsString) {
	          redirect = $urlMatcherFactory.compile(handler);
	          handler = ['$match', function ($match) { return redirect.format($match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
	        }, {
	          prefix: isString(what.prefix) ? what.prefix : ''
	        });
	      },
	      regex: function (what, handler) {
	        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

	        if (handlerIsString) {
	          redirect = handler;
	          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path()));
	        }, {
	          prefix: regExpPrefix(what)
	        });
	      }
	    };

	    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

	    for (var n in check) {
	      if (check[n]) return this.rule(strategies[n](what, handler));
	    }

	    throw new Error("invalid 'what' in when()");
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#deferIntercept
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Disables (or enables) deferring location change interception.
	   *
	   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
	   * defer a transition but maintain the current URL), call this method at configuration time.
	   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
	   * `$locationChangeSuccess` event handler.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *
	   *   // Prevent $urlRouter from automatically intercepting URL changes;
	   *   // this allows you to configure custom behavior in between
	   *   // location changes and route synchronization:
	   *   $urlRouterProvider.deferIntercept();
	   *
	   * }).run(function ($rootScope, $urlRouter, UserService) {
	   *
	   *   $rootScope.$on('$locationChangeSuccess', function(e) {
	   *     // UserService is an example service for managing user state
	   *     if (UserService.isLoggedIn()) return;
	   *
	   *     // Prevent $urlRouter's default handler from firing
	   *     e.preventDefault();
	   *
	   *     UserService.handleLogin().then(function() {
	   *       // Once the user has logged in, sync the current URL
	   *       // to the router:
	   *       $urlRouter.sync();
	   *     });
	   *   });
	   *
	   *   // Configures $urlRouter's listener *after* your custom listener
	   *   $urlRouter.listen();
	   * });
	   * </pre>
	   *
	   * @param {boolean} defer Indicates whether to defer location change interception. Passing
	            no parameter is equivalent to `true`.
	   */
	  this.deferIntercept = function (defer) {
	    if (defer === undefined) defer = true;
	    interceptDeferred = defer;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouter
	   *
	   * @requires $location
	   * @requires $rootScope
	   * @requires $injector
	   * @requires $browser
	   *
	   * @description
	   *
	   */
	  this.$get = $get;
	  $get.$inject = ['$location', '$rootScope', '$injector', '$browser', '$sniffer'];
	  function $get(   $location,   $rootScope,   $injector,   $browser,   $sniffer) {

	    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

	    function appendBasePath(url, isHtml5, absolute) {
	      if (baseHref === '/') return url;
	      if (isHtml5) return baseHref.slice(0, -1) + url;
	      if (absolute) return baseHref.slice(1) + url;
	      return url;
	    }

	    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
	    function update(evt) {
	      if (evt && evt.defaultPrevented) return;
	      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
	      lastPushedUrl = undefined;
	      // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
	      //if (ignoreUpdate) return true;

	      function check(rule) {
	        var handled = rule($injector, $location);

	        if (!handled) return false;
	        if (isString(handled)) $location.replace().url(handled);
	        return true;
	      }
	      var n = rules.length, i;

	      for (i = 0; i < n; i++) {
	        if (check(rules[i])) return;
	      }
	      // always check otherwise last to allow dynamic updates to the set of rules
	      if (otherwise) check(otherwise);
	    }

	    function listen() {
	      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
	      return listener;
	    }

	    if (!interceptDeferred) listen();

	    return {
	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#sync
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
	       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
	       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
	       * with the transition by calling `$urlRouter.sync()`.
	       *
	       * @example
	       * <pre>
	       * angular.module('app', ['ui.router'])
	       *   .run(function($rootScope, $urlRouter) {
	       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
	       *       // Halt state change from even starting
	       *       evt.preventDefault();
	       *       // Perform custom logic
	       *       var meetsRequirement = ...
	       *       // Continue with the update and state transition if logic allows
	       *       if (meetsRequirement) $urlRouter.sync();
	       *     });
	       * });
	       * </pre>
	       */
	      sync: function() {
	        update();
	      },

	      listen: function() {
	        return listen();
	      },

	      update: function(read) {
	        if (read) {
	          location = $location.url();
	          return;
	        }
	        if ($location.url() === location) return;

	        $location.url(location);
	        $location.replace();
	      },

	      push: function(urlMatcher, params, options) {
	         var url = urlMatcher.format(params || {});

	        // Handle the special hash param, if needed
	        if (url !== null && params && params['#']) {
	            url += '#' + params['#'];
	        }

	        $location.url(url);
	        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
	        if (options && options.replace) $location.replace();
	      },

	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#href
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * A URL generation method that returns the compiled URL for a given
	       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
	       *
	       * @example
	       * <pre>
	       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
	       *   person: "bob"
	       * });
	       * // $bob == "/about/bob";
	       * </pre>
	       *
	       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
	       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
	       * @param {object=} options Options object. The options are:
	       *
	       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	       *
	       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	       */
	      href: function(urlMatcher, params, options) {
	        if (!urlMatcher.validates(params)) return null;

	        var isHtml5 = $locationProvider.html5Mode();
	        if (angular.isObject(isHtml5)) {
	          isHtml5 = isHtml5.enabled;
	        }

	        isHtml5 = isHtml5 && $sniffer.history;
	        
	        var url = urlMatcher.format(params);
	        options = options || {};

	        if (!isHtml5 && url !== null) {
	          url = "#" + $locationProvider.hashPrefix() + url;
	        }

	        // Handle special hash param, if needed
	        if (url !== null && params && params['#']) {
	          url += '#' + params['#'];
	        }

	        url = appendBasePath(url, isHtml5, options.absolute);

	        if (!options.absolute || !url) {
	          return url;
	        }

	        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
	        port = (port === 80 || port === 443 ? '' : ':' + port);

	        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
	      }
	    };
	  }
	}

	angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$stateProvider
	 *
	 * @requires ui.router.router.$urlRouterProvider
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 *
	 * @description
	 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
	 * on state.
	 *
	 * A state corresponds to a "place" in the application in terms of the overall UI and
	 * navigation. A state describes (via the controller / template / view properties) what
	 * the UI looks like and does at that place.
	 *
	 * States often have things in common, and the primary way of factoring out these
	 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
	 * nested states.
	 *
	 * The `$stateProvider` provides interfaces to declare these states for your app.
	 */
	$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
	function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

	  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

	  // Builds state properties from definition passed to registerState()
	  var stateBuilder = {

	    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
	    // state.children = [];
	    // if (parent) parent.children.push(state);
	    parent: function(state) {
	      if (isDefined(state.parent) && state.parent) return findState(state.parent);
	      // regex matches any valid composite state name
	      // would match "contact.list" but not "contacts"
	      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
	      return compositeName ? findState(compositeName[1]) : root;
	    },

	    // inherit 'data' from parent and override by own values (if any)
	    data: function(state) {
	      if (state.parent && state.parent.data) {
	        state.data = state.self.data = inherit(state.parent.data, state.data);
	      }
	      return state.data;
	    },

	    // Build a URLMatcher if necessary, either via a relative or absolute URL
	    url: function(state) {
	      var url = state.url, config = { params: state.params || {} };

	      if (isString(url)) {
	        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
	        return (state.parent.navigable || root).url.concat(url, config);
	      }

	      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
	      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
	    },

	    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	    navigable: function(state) {
	      return state.url ? state : (state.parent ? state.parent.navigable : null);
	    },

	    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
	    ownParams: function(state) {
	      var params = state.url && state.url.params || new $$UMFP.ParamSet();
	      forEach(state.params || {}, function(config, id) {
	        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
	      });
	      return params;
	    },

	    // Derive parameters for this state and ensure they're a super-set of parent's parameters
	    params: function(state) {
	      var ownParams = pick(state.ownParams, state.ownParams.$$keys());
	      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), ownParams) : new $$UMFP.ParamSet();
	    },

	    // If there is no explicit multi-view configuration, make one up so we don't have
	    // to handle both cases in the view directive later. Note that having an explicit
	    // 'views' property will mean the default unnamed view properties are ignored. This
	    // is also a good time to resolve view names to absolute names, so everything is a
	    // straight lookup at link time.
	    views: function(state) {
	      var views = {};

	      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
	        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
	        view.resolveAs = view.resolveAs || state.resolveAs || '$resolve';
	        views[name] = view;
	      });
	      return views;
	    },

	    // Keep a full path from the root down to this state as this is needed for state activation.
	    path: function(state) {
	      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
	    },

	    // Speed up $state.contains() as it's used a lot
	    includes: function(state) {
	      var includes = state.parent ? extend({}, state.parent.includes) : {};
	      includes[state.name] = true;
	      return includes;
	    },

	    $delegates: {}
	  };

	  function isRelative(stateName) {
	    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
	  }

	  function findState(stateOrName, base) {
	    if (!stateOrName) return undefined;

	    var isStr = isString(stateOrName),
	        name  = isStr ? stateOrName : stateOrName.name,
	        path  = isRelative(name);

	    if (path) {
	      if (!base) throw new Error("No reference point given for path '"  + name + "'");
	      base = findState(base);
	      
	      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

	      for (; i < pathLength; i++) {
	        if (rel[i] === "" && i === 0) {
	          current = base;
	          continue;
	        }
	        if (rel[i] === "^") {
	          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
	          current = current.parent;
	          continue;
	        }
	        break;
	      }
	      rel = rel.slice(i).join(".");
	      name = current.name + (current.name && rel ? "." : "") + rel;
	    }
	    var state = states[name];

	    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
	      return state;
	    }
	    return undefined;
	  }

	  function queueState(parentName, state) {
	    if (!queue[parentName]) {
	      queue[parentName] = [];
	    }
	    queue[parentName].push(state);
	  }

	  function flushQueuedChildren(parentName) {
	    var queued = queue[parentName] || [];
	    while(queued.length) {
	      registerState(queued.shift());
	    }
	  }

	  function registerState(state) {
	    // Wrap a new object around the state so we can store our private details easily.
	    state = inherit(state, {
	      self: state,
	      resolve: state.resolve || {},
	      toString: function() { return this.name; }
	    });

	    var name = state.name;
	    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
	    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "' is already defined");

	    // Get parent name
	    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
	        : (isString(state.parent)) ? state.parent
	        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
	        : '';

	    // If parent is not registered yet, add state to queue and register later
	    if (parentName && !states[parentName]) {
	      return queueState(parentName, state.self);
	    }

	    for (var key in stateBuilder) {
	      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
	    }
	    states[name] = state;

	    // Register the state in the global state list and with $urlRouter if necessary.
	    if (!state[abstractKey] && state.url) {
	      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
	        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
	          $state.transitionTo(state, $match, { inherit: true, location: false });
	        }
	      }]);
	    }

	    // Register any queued children
	    flushQueuedChildren(name);

	    return state;
	  }

	  // Checks text to see if it looks like a glob.
	  function isGlob (text) {
	    return text.indexOf('*') > -1;
	  }

	  // Returns true if glob matches current $state name.
	  function doesStateMatchGlob (glob) {
	    var globSegments = glob.split('.'),
	        segments = $state.$current.name.split('.');

	    //match single stars
	    for (var i = 0, l = globSegments.length; i < l; i++) {
	      if (globSegments[i] === '*') {
	        segments[i] = '*';
	      }
	    }

	    //match greedy starts
	    if (globSegments[0] === '**') {
	       segments = segments.slice(indexOf(segments, globSegments[1]));
	       segments.unshift('**');
	    }
	    //match greedy ends
	    if (globSegments[globSegments.length - 1] === '**') {
	       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
	       segments.push('**');
	    }

	    if (globSegments.length != segments.length) {
	      return false;
	    }

	    return segments.join('') === globSegments.join('');
	  }


	  // Implicit root state that is always active
	  root = registerState({
	    name: '',
	    url: '^',
	    views: null,
	    'abstract': true
	  });
	  root.navigable = null;


	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#decorator
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Allows you to extend (carefully) or override (at your own peril) the 
	   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
	   * to add custom functionality to ui-router, for example inferring templateUrl 
	   * based on the state name.
	   *
	   * When passing only a name, it returns the current (original or decorated) builder
	   * function that matches `name`.
	   *
	   * The builder functions that can be decorated are listed below. Though not all
	   * necessarily have a good use case for decoration, that is up to you to decide.
	   *
	   * In addition, users can attach custom decorators, which will generate new 
	   * properties within the state's internal definition. There is currently no clear 
	   * use-case for this beyond accessing internal states (i.e. $state.$current), 
	   * however, expect this to become increasingly relevant as we introduce additional 
	   * meta-programming features.
	   *
	   * **Warning**: Decorators should not be interdependent because the order of 
	   * execution of the builder functions in non-deterministic. Builder functions 
	   * should only be dependent on the state definition object and super function.
	   *
	   *
	   * Existing builder functions and current return values:
	   *
	   * - **parent** `{object}` - returns the parent state object.
	   * - **data** `{object}` - returns state data, including any inherited data that is not
	   *   overridden by own values (if any).
	   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
	   *   or `null`.
	   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
	   *   navigable).
	   * - **params** `{object}` - returns an array of state params that are ensured to 
	   *   be a super-set of parent's params.
	   * - **views** `{object}` - returns a views object where each key is an absolute view 
	   *   name (i.e. "viewName@stateName") and each value is the config object 
	   *   (template, controller) for the view. Even when you don't use the views object 
	   *   explicitly on a state config, one is still created for you internally.
	   *   So by decorating this builder function you have access to decorating template 
	   *   and controller properties.
	   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
	   *   not including any params defined by ancestor states.
	   * - **path** `{string}` - returns the full path from the root down to this state. 
	   *   Needed for state activation.
	   * - **includes** `{object}` - returns an object that includes every state that 
	   *   would pass a `$state.includes()` test.
	   *
	   * @example
	   * <pre>
	   * // Override the internal 'views' builder with a function that takes the state
	   * // definition, and a reference to the internal function being overridden:
	   * $stateProvider.decorator('views', function (state, parent) {
	   *   var result = {},
	   *       views = parent(state);
	   *
	   *   angular.forEach(views, function (config, name) {
	   *     var autoName = (state.name + '.' + name).replace('.', '/');
	   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
	   *     result[name] = config;
	   *   });
	   *   return result;
	   * });
	   *
	   * $stateProvider.state('home', {
	   *   views: {
	   *     'contact.list': { controller: 'ListController' },
	   *     'contact.item': { controller: 'ItemController' }
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * $state.go('home');
	   * // Auto-populates list and item views with /partials/home/contact/list.html,
	   * // and /partials/home/contact/item.html, respectively.
	   * </pre>
	   *
	   * @param {string} name The name of the builder function to decorate. 
	   * @param {object} func A function that is responsible for decorating the original 
	   * builder function. The function receives two parameters:
	   *
	   *   - `{object}` - state - The state config object.
	   *   - `{object}` - super - The original builder function.
	   *
	   * @return {object} $stateProvider - $stateProvider instance
	   */
	  this.decorator = decorator;
	  function decorator(name, func) {
	    /*jshint validthis: true */
	    if (isString(name) && !isDefined(func)) {
	      return stateBuilder[name];
	    }
	    if (!isFunction(func) || !isString(name)) {
	      return this;
	    }
	    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
	      stateBuilder.$delegates[name] = stateBuilder[name];
	    }
	    stateBuilder[name] = func;
	    return this;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#state
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Registers a state configuration under a given state name. The stateConfig object
	   * has the following acceptable properties.
	   *
	   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
	   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
	   * @param {object} stateConfig State configuration object.
	   * @param {string|function=} stateConfig.template
	   * <a id='template'></a>
	   *   html template as a string or a function that returns
	   *   an html template as a string which should be used by the uiView directives. This property 
	   *   takes precedence over templateUrl.
	   *   
	   *   If `template` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
	   *     applying the current state
	   *
	   * <pre>template:
	   *   "<h1>inline template definition</h1>" +
	   *   "<div ui-view></div>"</pre>
	   * <pre>template: function(params) {
	   *       return "<h1>generated template</h1>"; }</pre>
	   * </div>
	   *
	   * @param {string|function=} stateConfig.templateUrl
	   * <a id='templateUrl'></a>
	   *
	   *   path or function that returns a path to an html
	   *   template that should be used by uiView.
	   *   
	   *   If `templateUrl` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
	   *     applying the current state
	   *
	   * <pre>templateUrl: "home.html"</pre>
	   * <pre>templateUrl: function(params) {
	   *     return myTemplates[params.pageId]; }</pre>
	   *
	   * @param {function=} stateConfig.templateProvider
	   * <a id='templateProvider'></a>
	   *    Provider function that returns HTML content string.
	   * <pre> templateProvider:
	   *       function(MyTemplateService, params) {
	   *         return MyTemplateService.getTemplate(params.pageId);
	   *       }</pre>
	   *
	   * @param {string|function=} stateConfig.controller
	   * <a id='controller'></a>
	   *
	   *  Controller fn that should be associated with newly
	   *   related scope or the name of a registered controller if passed as a string.
	   *   Optionally, the ControllerAs may be declared here.
	   * <pre>controller: "MyRegisteredController"</pre>
	   * <pre>controller:
	   *     "MyRegisteredController as fooCtrl"}</pre>
	   * <pre>controller: function($scope, MyService) {
	   *     $scope.data = MyService.getData(); }</pre>
	   *
	   * @param {function=} stateConfig.controllerProvider
	   * <a id='controllerProvider'></a>
	   *
	   * Injectable provider function that returns the actual controller or string.
	   * <pre>controllerProvider:
	   *   function(MyResolveData) {
	   *     if (MyResolveData.foo)
	   *       return "FooCtrl"
	   *     else if (MyResolveData.bar)
	   *       return "BarCtrl";
	   *     else return function($scope) {
	   *       $scope.baz = "Qux";
	   *     }
	   *   }</pre>
	   *
	   * @param {string=} stateConfig.controllerAs
	   * <a id='controllerAs'></a>
	   * 
	   * A controller alias name. If present the controller will be
	   *   published to scope under the controllerAs name.
	   * <pre>controllerAs: "myCtrl"</pre>
	   *
	   * @param {string|object=} stateConfig.parent
	   * <a id='parent'></a>
	   * Optionally specifies the parent state of this state.
	   *
	   * <pre>parent: 'parentState'</pre>
	   * <pre>parent: parentState // JS variable</pre>
	   *
	   * @param {object=} stateConfig.resolve
	   * <a id='resolve'></a>
	   *
	   * An optional map&lt;string, function&gt; of dependencies which
	   *   should be injected into the controller. If any of these dependencies are promises, 
	   *   the router will wait for them all to be resolved before the controller is instantiated.
	   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
	   *   and the values of the resolved promises are injected into any controllers that reference them.
	   *   If any  of the promises are rejected the $stateChangeError event is fired.
	   *
	   *   The map object is:
	   *   
	   *   - key - {string}: name of dependency to be injected into controller
	   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
	   *     it is injected and return value it treated as dependency. If result is a promise, it is 
	   *     resolved before its value is injected into controller.
	   *
	   * <pre>resolve: {
	   *     myResolve1:
	   *       function($http, $stateParams) {
	   *         return $http.get("/api/foos/"+stateParams.fooID);
	   *       }
	   *     }</pre>
	   *
	   * @param {string=} stateConfig.url
	   * <a id='url'></a>
	   *
	   *   A url fragment with optional parameters. When a state is navigated or
	   *   transitioned to, the `$stateParams` service will be populated with any 
	   *   parameters that were passed.
	   *
	   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
	   *   more details on acceptable patterns )
	   *
	   * examples:
	   * <pre>url: "/home"
	   * url: "/users/:userid"
	   * url: "/books/{bookid:[a-zA-Z_-]}"
	   * url: "/books/{categoryid:int}"
	   * url: "/books/{publishername:string}/{categoryid:int}"
	   * url: "/messages?before&after"
	   * url: "/messages?{before:date}&{after:date}"
	   * url: "/messages/:mailboxid?{before:date}&{after:date}"
	   * </pre>
	   *
	   * @param {object=} stateConfig.views
	   * <a id='views'></a>
	   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
	   * manually/explicitly.
	   *
	   * Examples:
	   *
	   * Targets three named `ui-view`s in the parent state's template
	   * <pre>views: {
	   *     header: {
	   *       controller: "headerCtrl",
	   *       templateUrl: "header.html"
	   *     }, body: {
	   *       controller: "bodyCtrl",
	   *       templateUrl: "body.html"
	   *     }, footer: {
	   *       controller: "footCtrl",
	   *       templateUrl: "footer.html"
	   *     }
	   *   }</pre>
	   *
	   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
	   * <pre>views: {
	   *     'header@top': {
	   *       controller: "msgHeaderCtrl",
	   *       templateUrl: "msgHeader.html"
	   *     }, 'body': {
	   *       controller: "messagesCtrl",
	   *       templateUrl: "messages.html"
	   *     }
	   *   }</pre>
	   *
	   * @param {boolean=} [stateConfig.abstract=false]
	   * <a id='abstract'></a>
	   * An abstract state will never be directly activated,
	   *   but can provide inherited properties to its common children states.
	   * <pre>abstract: true</pre>
	   *
	   * @param {function=} stateConfig.onEnter
	   * <a id='onEnter'></a>
	   *
	   * Callback function for when a state is entered. Good way
	   *   to trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explicitly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onEnter: function(MyService, $stateParams) {
	   *     MyService.foo($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {function=} stateConfig.onExit
	   * <a id='onExit'></a>
	   *
	   * Callback function for when a state is exited. Good way to
	   *   trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explicitly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onExit: function(MyService, $stateParams) {
	   *     MyService.cleanup($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {boolean=} [stateConfig.reloadOnSearch=true]
	   * <a id='reloadOnSearch'></a>
	   *
	   * If `false`, will not retrigger the same state
	   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
	   *   Useful for when you'd like to modify $location.search() without triggering a reload.
	   * <pre>reloadOnSearch: false</pre>
	   *
	   * @param {object=} stateConfig.data
	   * <a id='data'></a>
	   *
	   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
	   *   prototypally inherited.  In other words, adding a data property to a state adds it to
	   *   the entire subtree via prototypal inheritance.
	   *
	   * <pre>data: {
	   *     requiredRole: 'foo'
	   * } </pre>
	   *
	   * @param {object=} stateConfig.params
	   * <a id='params'></a>
	   *
	   * A map which optionally configures parameters declared in the `url`, or
	   *   defines additional non-url parameters.  For each parameter being
	   *   configured, add a configuration object keyed to the name of the parameter.
	   *
	   *   Each parameter configuration object may contain the following properties:
	   *
	   *   - ** value ** - {object|function=}: specifies the default value for this
	   *     parameter.  This implicitly sets this parameter as optional.
	   *
	   *     When UI-Router routes to a state and no value is
	   *     specified for this parameter in the URL or transition, the
	   *     default value will be used instead.  If `value` is a function,
	   *     it will be injected and invoked, and the return value used.
	   *
	   *     *Note*: `undefined` is treated as "no default value" while `null`
	   *     is treated as "the default value is `null`".
	   *
	   *     *Shorthand*: If you only need to configure the default value of the
	   *     parameter, you may use a shorthand syntax.   In the **`params`**
	   *     map, instead mapping the param name to a full parameter configuration
	   *     object, simply set map it to the default parameter value, e.g.:
	   *
	   * <pre>// define a parameter's default value
	   * params: {
	   *     param1: { value: "defaultValue" }
	   * }
	   * // shorthand default values
	   * params: {
	   *     param1: "defaultValue",
	   *     param2: "param2Default"
	   * }</pre>
	   *
	   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
	   *     treated as an array of values.  If you specified a Type, the value will be
	   *     treated as an array of the specified Type.  Note: query parameter values
	   *     default to a special `"auto"` mode.
	   *
	   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
	   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
	   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
	   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
	   *     value (e.g.: `{ foo: '1' }`).
	   *
	   * <pre>params: {
	   *     param1: { array: true }
	   * }</pre>
	   *
	   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
	   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
	   *     configured default squash policy.
	   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
	   *
	   *   There are three squash settings:
	   *
	   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
	   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
	   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
	   *       This can allow for cleaner looking URLs.
	   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
	   *
	   * <pre>params: {
	   *     param1: {
	   *       value: "defaultId",
	   *       squash: true
	   * } }
	   * // squash "defaultValue" to "~"
	   * params: {
	   *     param1: {
	   *       value: "defaultValue",
	   *       squash: "~"
	   * } }
	   * </pre>
	   *
	   *
	   * @example
	   * <pre>
	   * // Some state name examples
	   *
	   * // stateName can be a single top-level name (must be unique).
	   * $stateProvider.state("home", {});
	   *
	   * // Or it can be a nested state name. This state is a child of the
	   * // above "home" state.
	   * $stateProvider.state("home.newest", {});
	   *
	   * // Nest states as deeply as needed.
	   * $stateProvider.state("home.newest.abc.xyz.inception", {});
	   *
	   * // state() returns $stateProvider, so you can chain state declarations.
	   * $stateProvider
	   *   .state("home", {})
	   *   .state("about", {})
	   *   .state("contacts", {});
	   * </pre>
	   *
	   */
	  this.state = state;
	  function state(name, definition) {
	    /*jshint validthis: true */
	    if (isObject(name)) definition = name;
	    else definition.name = name;
	    registerState(definition);
	    return this;
	  }

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$state
	   *
	   * @requires $rootScope
	   * @requires $q
	   * @requires ui.router.state.$view
	   * @requires $injector
	   * @requires ui.router.util.$resolve
	   * @requires ui.router.state.$stateParams
	   * @requires ui.router.router.$urlRouter
	   *
	   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
	   * you'd like to test against the current active state.
	   * @property {object} current A reference to the state's config object. However 
	   * you passed it in. Useful for accessing custom data.
	   * @property {object} transition Currently pending transition. A promise that'll 
	   * resolve or reject.
	   *
	   * @description
	   * `$state` service is responsible for representing states as well as transitioning
	   * between them. It also provides interfaces to ask for current state or even states
	   * you're coming from.
	   */
	  this.$get = $get;
	  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
	  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

	    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
	    var TransitionPrevented = $q.reject(new Error('transition prevented'));
	    var TransitionAborted = $q.reject(new Error('transition aborted'));
	    var TransitionFailed = $q.reject(new Error('transition failed'));

	    // Handles the case where a state which is the target of a transition is not found, and the user
	    // can optionally retry or defer the transition
	    function handleRedirect(redirect, state, params, options) {
	      /**
	       * @ngdoc event
	       * @name ui.router.state.$state#$stateNotFound
	       * @eventOf ui.router.state.$state
	       * @eventType broadcast on root scope
	       * @description
	       * Fired when a requested state **cannot be found** using the provided state name during transition.
	       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
	       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
	       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
	       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
	       *
	       * @param {Object} event Event object.
	       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
	       * @param {State} fromState Current state object.
	       * @param {Object} fromParams Current state params.
	       *
	       * @example
	       *
	       * <pre>
	       * // somewhere, assume lazy.state has not been defined
	       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
	       *
	       * // somewhere else
	       * $scope.$on('$stateNotFound',
	       * function(event, unfoundState, fromState, fromParams){
	       *     console.log(unfoundState.to); // "lazy.state"
	       *     console.log(unfoundState.toParams); // {a:1, b:2}
	       *     console.log(unfoundState.options); // {inherit:false} + default options
	       * })
	       * </pre>
	       */
	      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

	      if (evt.defaultPrevented) {
	        $urlRouter.update();
	        return TransitionAborted;
	      }

	      if (!evt.retry) {
	        return null;
	      }

	      // Allow the handler to return a promise to defer state lookup retry
	      if (options.$retry) {
	        $urlRouter.update();
	        return TransitionFailed;
	      }
	      var retryTransition = $state.transition = $q.when(evt.retry);

	      retryTransition.then(function() {
	        if (retryTransition !== $state.transition) return TransitionSuperseded;
	        redirect.options.$retry = true;
	        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
	      }, function() {
	        return TransitionAborted;
	      });
	      $urlRouter.update();

	      return retryTransition;
	    }

	    root.locals = { resolve: null, globals: { $stateParams: {} } };

	    $state = {
	      params: {},
	      current: root.self,
	      $current: root,
	      transition: null
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#reload
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method that force reloads the current state. All resolves are re-resolved,
	     * controllers reinstantiated, and events re-fired.
	     *
	     * @example
	     * <pre>
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>
	     *
	     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
	     * @example
	     * <pre>
	     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
	     * //and current state is 'contacts.detail.item'
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     //will reload 'contact.detail' and 'contact.detail.item' states
	     *     $state.reload('contact.detail');
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>

	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.reload = function reload(state) {
	      return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true});
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#go
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Convenience method for transitioning to a new state. `$state.go` calls 
	     * `$state.transitionTo` internally but automatically sets options to 
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
	     * This allows you to easily use an absolute or relative to path and specify 
	     * only the parameters you'd like to update (while letting unspecified parameters 
	     * inherit from the currently active ancestor states).
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * </pre>
	     * <img src='../ngdoc_assets/StateGoExamples.png'/>
	     *
	     * @param {string} to Absolute state name or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param {object=} params A map of the parameters that will be sent to the state, 
	     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
	     * defined parameters. Only parameters specified in the state definition can be overridden, new 
	     * parameters will be ignored. This allows, for example, going to a sibling state that shares parameters
	     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
	     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     * will get you all current parameters, etc.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false|string|object}, If `true` will force transition even if no state or params
	     *    have changed.  It will reload the resolves and views of the current state and parent states.
	     *    If `reload` is a string (or state object), the state object is fetched (by name, or object reference); and \
	     *    the transition reloads the resolves and views for that matched state, and all its children states.
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * Possible success values:
	     *
	     * - $state.current
	     *
	     * <br/>Possible rejection values:
	     *
	     * - 'transition superseded' - when a newer transition has been started after this one
	     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
	     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
	     *   when a `$stateNotFound` `event.retry` promise errors.
	     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
	     * - *resolve error* - when an error has occurred with a `resolve`
	     *
	     */
	    $state.go = function go(to, params, options) {
	      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#transitionTo
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
	     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * </pre>
	     *
	     * @param {string} to State name.
	     * @param {object=} toParams A map of the parameters that will be sent to the state,
	     * will populate $stateParams.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *    if String, then will reload the state with the name given in reload, and any children.
	     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.transitionTo = function transitionTo(to, toParams, options) {
	      toParams = toParams || {};
	      options = extend({
	        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
	      }, options || {});

	      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
	      var evt, toState = findState(to, options.relative);

	      // Store the hash param for later (since it will be stripped out by various methods)
	      var hash = toParams['#'];

	      if (!isDefined(toState)) {
	        var redirect = { to: to, toParams: toParams, options: options };
	        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

	        if (redirectResult) {
	          return redirectResult;
	        }

	        // Always retry once if the $stateNotFound was not prevented
	        // (handles either redirect changed or state lazy-definition)
	        to = redirect.to;
	        toParams = redirect.toParams;
	        options = redirect.options;
	        toState = findState(to, options.relative);

	        if (!isDefined(toState)) {
	          if (!options.relative) throw new Error("No such state '" + to + "'");
	          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
	        }
	      }
	      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
	      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
	      if (!toState.params.$$validates(toParams)) return TransitionFailed;

	      toParams = toState.params.$$values(toParams);
	      to = toState;

	      var toPath = to.path;

	      // Starting from the root of the path, keep all levels that haven't changed
	      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

	      if (!options.reload) {
	        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      } else if (isString(options.reload) || isObject(options.reload)) {
	        if (isObject(options.reload) && !options.reload.name) {
	          throw new Error('Invalid reload state object');
	        }
	        
	        var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
	        if (options.reload && !reloadState) {
	          throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
	        }

	        while (state && state === fromPath[keep] && state !== reloadState) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      }

	      // If we're going to the same state and all locals are kept, we've got nothing to do.
	      // But clear 'transition', as we still want to cancel any other pending transitions.
	      // TODO: We may not want to bump 'transition' if we're called from a location change
	      // that we've initiated ourselves, because we might accidentally abort a legitimate
	      // transition initiated from code?
	      if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
	        if (hash) toParams['#'] = hash;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        copy(filterByKeys(to.params.$$keys(), $stateParams), to.locals.globals.$stateParams);
	        if (options.location && to.navigable && to.navigable.url) {
	          $urlRouter.push(to.navigable.url, toParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	          $urlRouter.update(true);
	        }
	        $state.transition = null;
	        return $q.when($state.current);
	      }

	      // Filter parameters before we pass them to event handlers etc.
	      toParams = filterByKeys(to.params.$$keys(), toParams || {});
	      
	      // Re-add the saved hash before we start returning things or broadcasting $stateChangeStart
	      if (hash) toParams['#'] = hash;
	      
	      // Broadcast start event and cancel the transition if requested
	      if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeStart
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when the state transition **begins**. You can use `event.preventDefault()`
	         * to prevent the transition from happening and then the transition promise will be
	         * rejected with a `'transition prevented'` value.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         *
	         * @example
	         *
	         * <pre>
	         * $rootScope.$on('$stateChangeStart',
	         * function(event, toState, toParams, fromState, fromParams){
	         *     event.preventDefault();
	         *     // transitionTo() promise will be rejected with
	         *     // a 'transition prevented' error
	         * })
	         * </pre>
	         */
	        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams, options).defaultPrevented) {
	          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
	          //Don't update and resync url if there's been a new transition started. see issue #2238, #600
	          if ($state.transition == null) $urlRouter.update();
	          return TransitionPrevented;
	        }
	      }

	      // Resolve locals for the remaining states, but don't update any global state just
	      // yet -- if anything fails to resolve the current state needs to remain untouched.
	      // We also set up an inheritance chain for the locals here. This allows the view directive
	      // to quickly look up the correct definition for each view in the current state. Even
	      // though we create the locals object itself outside resolveState(), it is initially
	      // empty and gets filled asynchronously. We need to keep track of the promise for the
	      // (fully resolved) current locals, and pass this down the chain.
	      var resolved = $q.when(locals);

	      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
	        locals = toLocals[l] = inherit(locals);
	        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
	      }

	      // Once everything is resolved, we are ready to perform the actual transition
	      // and return a promise for the new state. We also keep track of what the
	      // current promise is, so that we can detect overlapping transitions and
	      // keep only the outcome of the last transition.
	      var transition = $state.transition = resolved.then(function () {
	        var l, entering, exiting;

	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Exit 'from' states not kept
	        for (l = fromPath.length - 1; l >= keep; l--) {
	          exiting = fromPath[l];
	          if (exiting.self.onExit) {
	            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
	          }
	          exiting.locals = null;
	        }

	        // Enter 'to' states not kept
	        for (l = keep; l < toPath.length; l++) {
	          entering = toPath[l];
	          entering.locals = toLocals[l];
	          if (entering.self.onEnter) {
	            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
	          }
	        }

	        // Run it again, to catch any transitions in callbacks
	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Update globals in $state
	        $state.$current = to;
	        $state.current = to.self;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        $state.transition = null;

	        if (options.location && to.navigable) {
	          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	        }

	        if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeSuccess
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired once the state transition is **complete**.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         */
	          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
	        }
	        $urlRouter.update(true);

	        return $state.current;
	      }).then(null, function (error) {
	        if ($state.transition !== transition) return TransitionSuperseded;

	        $state.transition = null;
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeError
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when an **error occurs** during transition. It's important to note that if you
	         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
	         * they will not throw traditionally. You must listen for this $stateChangeError event to
	         * catch **ALL** errors.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         * @param {Error} error The resolve error object.
	         */
	        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

	        if (!evt.defaultPrevented) {
	            $urlRouter.update();
	        }

	        return $q.reject(error);
	      });

	      return transition;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#is
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
	     * but only checks for the full state name. If params is supplied then it will be
	     * tested for strict equality against the current active params object, so all params
	     * must match with none missing and no extras.
	     *
	     * @example
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     * test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it is the state.
	     */
	    $state.is = function is(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) { return undefined; }
	      if ($state.$current !== state) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#includes
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * @example
	     * Partial and relative names
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     *
	     * // Using relative names (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
	     * </pre>
	     *
	     * Basic globbing patterns
	     * <pre>
	     * $state.$current.name = 'contacts.details.item.url';
	     *
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * </pre>
	     *
	     * @param {string} stateOrName A partial name, relative name, or glob pattern
	     * to be searched for within the current state name.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
	     * that you'd like to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
	     * .includes will test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */
	    $state.includes = function includes(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      if (isString(stateOrName) && isGlob(stateOrName)) {
	        if (!doesStateMatchGlob(stateOrName)) {
	          return false;
	        }
	        stateOrName = $state.$current.name;
	      }

	      var state = findState(stateOrName, options.relative);
	      if (!isDefined(state)) { return undefined; }
	      if (!isDefined($state.$current.includes[state.name])) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
	    };


	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#href
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A url generation method that returns the compiled url for the given state populated with the given params.
	     *
	     * @example
	     * <pre>
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
	     * @param {object=} params An object of parameter values to fill the state's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     * 
	     * @returns {string} compiled state url
	     */
	    $state.href = function href(stateOrName, params, options) {
	      options = extend({
	        lossy:    true,
	        inherit:  true,
	        absolute: false,
	        relative: $state.$current
	      }, options || {});

	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) return null;
	      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
	      
	      var nav = (state && options.lossy) ? state.navigable : state;

	      if (!nav || nav.url === undefined || nav.url === null) {
	        return null;
	      }
	      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {
	        absolute: options.absolute
	      });
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#get
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Returns the state configuration object for any specific state or all states.
	     *
	     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
	     * the requested state. If not provided, returns an array of ALL state configs.
	     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
	     * @returns {Object|Array} State configuration object or array of all objects.
	     */
	    $state.get = function (stateOrName, context) {
	      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
	      var state = findState(stateOrName, context || $state.$current);
	      return (state && state.self) ? state.self : null;
	    };

	    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
	      // Make a restricted $stateParams with only the parameters that apply to this state if
	      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
	      // we also need $stateParams to be available for any $injector calls we make during the
	      // dependency resolution process.
	      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
	      var locals = { $stateParams: $stateParams };

	      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
	      // We're also including $stateParams in this; that way the parameters are restricted
	      // to the set that should be visible to the state, and are independent of when we update
	      // the global $state and $stateParams values.
	      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
	      var promises = [dst.resolve.then(function (globals) {
	        dst.globals = globals;
	      })];
	      if (inherited) promises.push(inherited);

	      function resolveViews() {
	        var viewsPromises = [];

	        // Resolve template and dependencies for all views.
	        forEach(state.views, function (view, name) {
	          var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
	          injectables.$template = [ function () {
	            return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || '';
	          }];

	          viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
	            // References to the controller (only instantiated at link time)
	            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
	              var injectLocals = angular.extend({}, injectables, dst.globals);
	              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
	            } else {
	              result.$$controller = view.controller;
	            }
	            // Provide access to the state itself for internal use
	            result.$$state = state;
	            result.$$controllerAs = view.controllerAs;
	            result.$$resolveAs = view.resolveAs;
	            dst[name] = result;
	          }));
	        });

	        return $q.all(viewsPromises).then(function(){
	          return dst.globals;
	        });
	      }

	      // Wait for all the promises and then return the activation object
	      return $q.all(promises).then(resolveViews).then(function (values) {
	        return dst;
	      });
	    }

	    return $state;
	  }

	  function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
	    // Return true if there are no differences in non-search (path/object) params, false if there are differences
	    function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
	      // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
	      function notSearchParam(key) {
	        return fromAndToState.params[key].location != "search";
	      }
	      var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
	      var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
	      var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
	      return nonQueryParamSet.$$equals(fromParams, toParams);
	    }

	    // If reload was not explicitly requested
	    // and we're transitioning to the same state we're already in
	    // and    the locals didn't change
	    //     or they changed in a way that doesn't merit reloading
	    //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
	    // Then return true.
	    if (!options.reload && to === from &&
	      (locals === from.locals || (to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams)))) {
	      return true;
	    }
	  }
	}

	angular.module('ui.router.state')
	  .factory('$stateParams', function () { return {}; })
	  .constant("$state.runtime", { autoinject: true })
	  .provider('$state', $StateProvider)
	  // Inject $state to initialize when entering runtime. #2574
	  .run(['$injector', function ($injector) {
	    // Allow tests (stateSpec.js) to turn this off by defining this constant
	    if ($injector.get("$state.runtime").autoinject) {
	      $injector.get('$state');
	    }
	  }]);


	$ViewProvider.$inject = [];
	function $ViewProvider() {

	  this.$get = $get;
	  /**
	   * @ngdoc object
	   * @name ui.router.state.$view
	   *
	   * @requires ui.router.util.$templateFactory
	   * @requires $rootScope
	   *
	   * @description
	   *
	   */
	  $get.$inject = ['$rootScope', '$templateFactory'];
	  function $get(   $rootScope,   $templateFactory) {
	    return {
	      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
	      /**
	       * @ngdoc function
	       * @name ui.router.state.$view#load
	       * @methodOf ui.router.state.$view
	       *
	       * @description
	       *
	       * @param {string} name name
	       * @param {object} options option object.
	       */
	      load: function load(name, options) {
	        var result, defaults = {
	          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
	        };
	        options = extend(defaults, options);

	        if (options.view) {
	          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
	        }
	        return result;
	      }
	    };
	  }
	}

	angular.module('ui.router.state').provider('$view', $ViewProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$uiViewScrollProvider
	 *
	 * @description
	 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
	 */
	function $ViewScrollProvider() {

	  var useAnchorScroll = false;

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
	   * @methodOf ui.router.state.$uiViewScrollProvider
	   *
	   * @description
	   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
	   * scrolling based on the url anchor.
	   */
	  this.useAnchorScroll = function () {
	    useAnchorScroll = true;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$uiViewScroll
	   *
	   * @requires $anchorScroll
	   * @requires $timeout
	   *
	   * @description
	   * When called with a jqLite element, it scrolls the element into view (after a
	   * `$timeout` so the DOM has time to refresh).
	   *
	   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
	   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
	   */
	  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
	    if (useAnchorScroll) {
	      return $anchorScroll;
	    }

	    return function ($element) {
	      return $timeout(function () {
	        $element[0].scrollIntoView();
	      }, 0, false);
	    };
	  }];
	}

	angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-view
	 *
	 * @requires ui.router.state.$state
	 * @requires $compile
	 * @requires $controller
	 * @requires $injector
	 * @requires ui.router.state.$uiViewScroll
	 * @requires $document
	 *
	 * @restrict ECA
	 *
	 * @description
	 * The ui-view directive tells $state where to place your templates.
	 *
	 * @param {string=} name A view name. The name should be unique amongst the other views in the
	 * same state. You can have views of the same name that live in different states.
	 *
	 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
	 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
	 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
	 * scroll ui-view elements into view when they are populated during a state activation.
	 *
	 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
	 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
	 *
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 *
	 * @example
	 * A view can be unnamed or named.
	 * <pre>
	 * <!-- Unnamed -->
	 * <div ui-view></div>
	 *
	 * <!-- Named -->
	 * <div ui-view="viewName"></div>
	 * </pre>
	 *
	 * You can only have one unnamed view within any template (or root html). If you are only using a
	 * single view and it is unnamed then you can populate it like so:
	 * <pre>
	 * <div ui-view></div>
	 * $stateProvider.state("home", {
	 *   template: "<h1>HELLO!</h1>"
	 * })
	 * </pre>
	 *
	 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#methods_state `views`}
	 * config property, by name, in this case an empty name:
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * But typically you'll only use the views property if you name your view or have more than one view
	 * in the same template. There's not really a compelling reason to name a view if its the only one,
	 * but you could if you wanted, like so:
	 * <pre>
	 * <div ui-view="main"></div>
	 * </pre>
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "main": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * Really though, you'll use views to set up multiple views:
	 * <pre>
	 * <div ui-view></div>
	 * <div ui-view="chart"></div>
	 * <div ui-view="data"></div>
	 * </pre>
	 *
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     },
	 *     "chart": {
	 *       template: "<chart_thing/>"
	 *     },
	 *     "data": {
	 *       template: "<data_thing/>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * Examples for `autoscroll`:
	 *
	 * <pre>
	 * <!-- If autoscroll present with no expression,
	 *      then scroll ui-view into view -->
	 * <ui-view autoscroll/>
	 *
	 * <!-- If autoscroll present with valid expression,
	 *      then scroll ui-view into view if expression evaluates to true -->
	 * <ui-view autoscroll='true'/>
	 * <ui-view autoscroll='false'/>
	 * <ui-view autoscroll='scopeVariable'/>
	 * </pre>
	 *
	 * Resolve data:
	 *
	 * The resolved data from the state's `resolve` block is placed on the scope as `$resolve` (this
	 * can be customized using [[ViewDeclaration.resolveAs]]).  This can be then accessed from the template.
	 *
	 * Note that when `controllerAs` is being used, `$resolve` is set on the controller instance *after* the
	 * controller is instantiated.  The `$onInit()` hook can be used to perform initialization code which
	 * depends on `$resolve` data.
	 *
	 * Example usage of $resolve in a view template
	 * <pre>
	 * $stateProvider.state('home', {
	 *   template: '<my-component user="$resolve.user"></my-component>',
	 *   resolve: {
	 *     user: function(UserService) { return UserService.fetchUser(); }
	 *   }
	 * });
	 * </pre>
	 */
	$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate', '$q'];
	function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate,   $q) {

	  function getService() {
	    return ($injector.has) ? function(service) {
	      return $injector.has(service) ? $injector.get(service) : null;
	    } : function(service) {
	      try {
	        return $injector.get(service);
	      } catch (e) {
	        return null;
	      }
	    };
	  }

	  var service = getService(),
	      $animator = service('$animator'),
	      $animate = service('$animate');

	  // Returns a set of DOM manipulation functions based on which Angular version
	  // it should use
	  function getRenderer(attrs, scope) {
	    var statics = function() {
	      return {
	        enter: function (element, target, cb) { target.after(element); cb(); },
	        leave: function (element, cb) { element.remove(); cb(); }
	      };
	    };

	    if ($animate) {
	      return {
	        enter: function(element, target, cb) {
	          if (angular.version.minor > 2) {
	            $animate.enter(element, null, target).then(cb);
	          } else {
	            $animate.enter(element, null, target, cb);
	          }
	        },
	        leave: function(element, cb) {
	          if (angular.version.minor > 2) {
	            $animate.leave(element).then(cb);
	          } else {
	            $animate.leave(element, cb);
	          }
	        }
	      };
	    }

	    if ($animator) {
	      var animate = $animator && $animator(scope, attrs);

	      return {
	        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
	        leave: function(element, cb) { animate.leave(element); cb(); }
	      };
	    }

	    return statics();
	  }

	  var directive = {
	    restrict: 'ECA',
	    terminal: true,
	    priority: 400,
	    transclude: 'element',
	    compile: function (tElement, tAttrs, $transclude) {
	      return function (scope, $element, attrs) {
	        var previousEl, currentEl, currentScope, latestLocals,
	            onloadExp     = attrs.onload || '',
	            autoScrollExp = attrs.autoscroll,
	            renderer      = getRenderer(attrs, scope),
	            inherited     = $element.inheritedData('$uiView');

	        scope.$on('$stateChangeSuccess', function() {
	          updateView(false);
	        });

	        updateView(true);

	        function cleanupLastView() {
	          if (previousEl) {
	            previousEl.remove();
	            previousEl = null;
	          }

	          if (currentScope) {
	            currentScope.$destroy();
	            currentScope = null;
	          }

	          if (currentEl) {
	            var $uiViewData = currentEl.data('$uiViewAnim');
	            renderer.leave(currentEl, function() {
	              $uiViewData.$$animLeave.resolve();
	              previousEl = null;
	            });

	            previousEl = currentEl;
	            currentEl = null;
	          }
	        }

	        function updateView(firstTime) {
	          var newScope,
	              name            = getUiViewName(scope, attrs, $element, $interpolate),
	              previousLocals  = name && $state.$current && $state.$current.locals[name];

	          if (!firstTime && previousLocals === latestLocals) return; // nothing to do
	          newScope = scope.$new();
	          latestLocals = $state.$current.locals[name];

	          /**
	           * @ngdoc event
	           * @name ui.router.state.directive:ui-view#$viewContentLoading
	           * @eventOf ui.router.state.directive:ui-view
	           * @eventType emits on ui-view directive scope
	           * @description
	           *
	           * Fired once the view **begins loading**, *before* the DOM is rendered.
	           *
	           * @param {Object} event Event object.
	           * @param {string} viewName Name of the view.
	           */
	          newScope.$emit('$viewContentLoading', name);

	          var clone = $transclude(newScope, function(clone) {
	            var animEnter = $q.defer(), animLeave = $q.defer();
	            var viewAnimData = {
	              $animEnter: animEnter.promise,
	              $animLeave: animLeave.promise,
	              $$animLeave: animLeave
	            };

	            clone.data('$uiViewAnim', viewAnimData);
	            renderer.enter(clone, $element, function onUiViewEnter() {
	              animEnter.resolve();
	              if(currentScope) {
	                currentScope.$emit('$viewContentAnimationEnded');
	              }

	              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
	                $uiViewScroll(clone);
	              }
	            });
	            cleanupLastView();
	          });

	          currentEl = clone;
	          currentScope = newScope;
	          /**
	           * @ngdoc event
	           * @name ui.router.state.directive:ui-view#$viewContentLoaded
	           * @eventOf ui.router.state.directive:ui-view
	           * @eventType emits on ui-view directive scope
	           * @description
	           * Fired once the view is **loaded**, *after* the DOM is rendered.
	           *
	           * @param {Object} event Event object.
	           * @param {string} viewName Name of the view.
	           */
	          currentScope.$emit('$viewContentLoaded', name);
	          currentScope.$eval(onloadExp);
	        }
	      };
	    }
	  };

	  return directive;
	}

	$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
	function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
	  return {
	    restrict: 'ECA',
	    priority: -400,
	    compile: function (tElement) {
	      var initial = tElement.html();
	      return function (scope, $element, attrs) {
	        var current = $state.$current,
	            name = getUiViewName(scope, attrs, $element, $interpolate),
	            locals  = current && current.locals[name];

	        if (! locals) {
	          return;
	        }

	        $element.data('$uiView', { name: name, state: locals.$$state });
	        $element.html(locals.$template ? locals.$template : initial);

	        var resolveData = angular.extend({}, locals);
	        scope[locals.$$resolveAs] = resolveData;

	        var link = $compile($element.contents());

	        if (locals.$$controller) {
	          locals.$scope = scope;
	          locals.$element = $element;
	          var controller = $controller(locals.$$controller, locals);
	          if (locals.$$controllerAs) {
	            scope[locals.$$controllerAs] = controller;
	            scope[locals.$$controllerAs][locals.$$resolveAs] = resolveData;
	          }
	          if (isFunction(controller.$onInit)) controller.$onInit();
	          $element.data('$ngControllerController', controller);
	          $element.children().data('$ngControllerController', controller);
	        }

	        link(scope);
	      };
	    }
	  };
	}

	/**
	 * Shared ui-view code for both directives:
	 * Given scope, element, and its attributes, return the view's name
	 */
	function getUiViewName(scope, attrs, element, $interpolate) {
	  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
	  var uiViewCreatedBy = element.inheritedData('$uiView');
	  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (uiViewCreatedBy ? uiViewCreatedBy.state.name : ''));
	}

	angular.module('ui.router.state').directive('uiView', $ViewDirective);
	angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

	function parseStateRef(ref, current) {
	  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
	  if (preparsed) ref = current + '(' + preparsed[1] + ')';
	  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
	  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
	  return { state: parsed[1], paramExpr: parsed[3] || null };
	}

	function stateContext(el) {
	  var stateData = el.parent().inheritedData('$uiView');

	  if (stateData && stateData.state && stateData.state.name) {
	    return stateData.state;
	  }
	}

	function getTypeInfo(el) {
	  // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
	  var isSvg = Object.prototype.toString.call(el.prop('href')) === '[object SVGAnimatedString]';
	  var isForm = el[0].nodeName === "FORM";

	  return {
	    attr: isForm ? "action" : (isSvg ? 'xlink:href' : 'href'),
	    isAnchor: el.prop("tagName").toUpperCase() === "A",
	    clickable: !isForm
	  };
	}

	function clickHook(el, $state, $timeout, type, current) {
	  return function(e) {
	    var button = e.which || e.button, target = current();

	    if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || el.attr('target'))) {
	      // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
	      var transition = $timeout(function() {
	        $state.go(target.state, target.params, target.options);
	      });
	      e.preventDefault();

	      // if the state has no URL, ignore one preventDefault from the <a> directive.
	      var ignorePreventDefaultCount = type.isAnchor && !target.href ? 1: 0;

	      e.preventDefault = function() {
	        if (ignorePreventDefaultCount-- <= 0) $timeout.cancel(transition);
	      };
	    }
	  };
	}

	function defaultOpts(el, $state) {
	  return { relative: stateContext(el) || $state.$current, inherit: true };
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref
	 *
	 * @requires ui.router.state.$state
	 * @requires $timeout
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated
	 * URL, the directive will automatically generate & update the `href` attribute via
	 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking
	 * the link will trigger a state transition with optional parameters.
	 *
	 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be
	 * handled natively by the browser.
	 *
	 * You can also use relative state paths within ui-sref, just like the relative
	 * paths passed to `$state.go()`. You just need to be aware that the path is relative
	 * to the state that the link lives in, in other words the state that loaded the
	 * template containing the link.
	 *
	 * You can specify options to pass to {@link ui.router.state.$state#methods_go $state.go()}
	 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
	 * and `reload`.
	 *
	 * @example
	 * Here's an example of how you'd use ui-sref and how it would compile. If you have the
	 * following template:
	 * <pre>
	 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
	 *
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
	 *     </li>
	 * </ul>
	 * </pre>
	 *
	 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
	 * <pre>
	 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
	 *
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
	 *     </li>
	 * </ul>
	 *
	 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
	 * </pre>
	 *
	 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#methods_go $state.go()}
	 */
	$StateRefDirective.$inject = ['$state', '$timeout'];
	function $StateRefDirective($state, $timeout) {
	  return {
	    restrict: 'A',
	    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	    link: function(scope, element, attrs, uiSrefActive) {
	      var ref    = parseStateRef(attrs.uiSref, $state.current.name);
	      var def    = { state: ref.state, href: null, params: null };
	      var type   = getTypeInfo(element);
	      var active = uiSrefActive[1] || uiSrefActive[0];
	      var unlinkInfoFn = null;
	      var hookFn;

	      def.options = extend(defaultOpts(element, $state), attrs.uiSrefOpts ? scope.$eval(attrs.uiSrefOpts) : {});

	      var update = function(val) {
	        if (val) def.params = angular.copy(val);
	        def.href = $state.href(ref.state, def.params, def.options);

	        if (unlinkInfoFn) unlinkInfoFn();
	        if (active) unlinkInfoFn = active.$$addStateInfo(ref.state, def.params);
	        if (def.href !== null) attrs.$set(type.attr, def.href);
	      };

	      if (ref.paramExpr) {
	        scope.$watch(ref.paramExpr, function(val) { if (val !== def.params) update(val); }, true);
	        def.params = angular.copy(scope.$eval(ref.paramExpr));
	      }
	      update();

	      if (!type.clickable) return;
	      hookFn = clickHook(element, $state, $timeout, type, function() { return def; });
	      element.bind("click", hookFn);
	      scope.$on('$destroy', function() {
	        element.unbind("click", hookFn);
	      });
	    }
	  };
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-state
	 *
	 * @requires ui.router.state.uiSref
	 *
	 * @restrict A
	 *
	 * @description
	 * Much like ui-sref, but will accept named $scope properties to evaluate for a state definition,
	 * params and override options.
	 *
	 * @param {string} ui-state 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-state-params params to pass to {@link ui.router.state.$state#methods_href $state.href()}
	 * @param {Object} ui-state-opts options to pass to {@link ui.router.state.$state#methods_go $state.go()}
	 */
	$StateRefDynamicDirective.$inject = ['$state', '$timeout'];
	function $StateRefDynamicDirective($state, $timeout) {
	  return {
	    restrict: 'A',
	    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	    link: function(scope, element, attrs, uiSrefActive) {
	      var type   = getTypeInfo(element);
	      var active = uiSrefActive[1] || uiSrefActive[0];
	      var group  = [attrs.uiState, attrs.uiStateParams || null, attrs.uiStateOpts || null];
	      var watch  = '[' + group.map(function(val) { return val || 'null'; }).join(', ') + ']';
	      var def    = { state: null, params: null, options: null, href: null };
	      var unlinkInfoFn = null;
	      var hookFn;

	      function runStateRefLink (group) {
	        def.state = group[0]; def.params = group[1]; def.options = group[2];
	        def.href = $state.href(def.state, def.params, def.options);

	        if (unlinkInfoFn) unlinkInfoFn();
	        if (active) unlinkInfoFn = active.$$addStateInfo(def.state, def.params);
	        if (def.href) attrs.$set(type.attr, def.href);
	      }

	      scope.$watch(watch, runStateRefLink, true);
	      runStateRefLink(scope.$eval(watch));

	      if (!type.clickable) return;
	      hookFn = clickHook(element, $state, $timeout, type, function() { return def; });
	      element.bind("click", hookFn);
	      scope.$on('$destroy', function() {
	        element.unbind("click", hookFn);
	      });
	    }
	  };
	}


	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive working alongside ui-sref to add classes to an element when the
	 * related ui-sref directive's state is active, and removing them when it is inactive.
	 * The primary use-case is to simplify the special appearance of navigation menus
	 * relying on `ui-sref`, by having the "active" state's menu button appear different,
	 * distinguishing it from the inactive menu items.
	 *
	 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
	 * ui-sref-active found at the same level or above the ui-sref will be used.
	 *
	 * Will activate when the ui-sref's target state or any child state is active. If you
	 * need to activate only when the ui-sref target state is active and *not* any of
	 * it's children, then you will use
	 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
	 *
	 * @example
	 * Given the following template:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item">
	 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 *
	 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
	 * the resulting HTML will appear as (note the 'active' class):
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item active">
	 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 * The class name is interpolated **once** during the directives link time (any further changes to the
	 * interpolated value are ignored).
	 *
	 * Multiple classes may be specified in a space-separated format:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active='class1 class2 class3'>
	 *     <a ui-sref="app.user">link</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 * It is also possible to pass ui-sref-active an expression that evaluates
	 * to an object hash, whose keys represent active class names and whose
	 * values represent the respective state names/globs.
	 * ui-sref-active will match if the current active state **includes** any of
	 * the specified state names/globs, even the abstract ones.
	 *
	 * @Example
	 * Given the following template, with "admin" being an abstract state:
	 * <pre>
	 * <div ui-sref-active="{'active': 'admin.*'}">
	 *   <a ui-sref-active="active" ui-sref="admin.roles">Roles</a>
	 * </div>
	 * </pre>
	 *
	 * When the current state is "admin.roles" the "active" class will be applied
	 * to both the <div> and <a> elements. It is important to note that the state
	 * names/globs passed to ui-sref-active shadow the state provided by ui-sref.
	 */

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active-eq
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
	 * when the exact target state used in the `ui-sref` is active; no child states.
	 *
	 */
	$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
	function $StateRefActiveDirective($state, $stateParams, $interpolate) {
	  return  {
	    restrict: "A",
	    controller: ['$scope', '$element', '$attrs', '$timeout', function ($scope, $element, $attrs, $timeout) {
	      var states = [], activeClasses = {}, activeEqClass, uiSrefActive;

	      // There probably isn't much point in $observing this
	      // uiSrefActive and uiSrefActiveEq share the same directive object with some
	      // slight difference in logic routing
	      activeEqClass = $interpolate($attrs.uiSrefActiveEq || '', false)($scope);

	      try {
	        uiSrefActive = $scope.$eval($attrs.uiSrefActive);
	      } catch (e) {
	        // Do nothing. uiSrefActive is not a valid expression.
	        // Fall back to using $interpolate below
	      }
	      uiSrefActive = uiSrefActive || $interpolate($attrs.uiSrefActive || '', false)($scope);
	      if (isObject(uiSrefActive)) {
	        forEach(uiSrefActive, function(stateOrName, activeClass) {
	          if (isString(stateOrName)) {
	            var ref = parseStateRef(stateOrName, $state.current.name);
	            addState(ref.state, $scope.$eval(ref.paramExpr), activeClass);
	          }
	        });
	      }

	      // Allow uiSref to communicate with uiSrefActive[Equals]
	      this.$$addStateInfo = function (newState, newParams) {
	        // we already got an explicit state provided by ui-sref-active, so we
	        // shadow the one that comes from ui-sref
	        if (isObject(uiSrefActive) && states.length > 0) {
	          return;
	        }
	        var deregister = addState(newState, newParams, uiSrefActive);
	        update();
	        return deregister;
	      };

	      $scope.$on('$stateChangeSuccess', update);

	      function addState(stateName, stateParams, activeClass) {
	        var state = $state.get(stateName, stateContext($element));
	        var stateHash = createStateHash(stateName, stateParams);

	        var stateInfo = {
	          state: state || { name: stateName },
	          params: stateParams,
	          hash: stateHash
	        };

	        states.push(stateInfo);
	        activeClasses[stateHash] = activeClass;

	        return function removeState() {
	          var idx = states.indexOf(stateInfo);
	          if (idx !== -1) states.splice(idx, 1);
	        };
	      }

	      /**
	       * @param {string} state
	       * @param {Object|string} [params]
	       * @return {string}
	       */
	      function createStateHash(state, params) {
	        if (!isString(state)) {
	          throw new Error('state should be a string');
	        }
	        if (isObject(params)) {
	          return state + toJson(params);
	        }
	        params = $scope.$eval(params);
	        if (isObject(params)) {
	          return state + toJson(params);
	        }
	        return state;
	      }

	      // Update route state
	      function update() {
	        for (var i = 0; i < states.length; i++) {
	          if (anyMatch(states[i].state, states[i].params)) {
	            addClass($element, activeClasses[states[i].hash]);
	          } else {
	            removeClass($element, activeClasses[states[i].hash]);
	          }

	          if (exactMatch(states[i].state, states[i].params)) {
	            addClass($element, activeEqClass);
	          } else {
	            removeClass($element, activeEqClass);
	          }
	        }
	      }

	      function addClass(el, className) { $timeout(function () { el.addClass(className); }); }
	      function removeClass(el, className) { el.removeClass(className); }
	      function anyMatch(state, params) { return $state.includes(state.name, params); }
	      function exactMatch(state, params) { return $state.is(state.name, params); }

	      update();
	    }]
	  };
	}

	angular.module('ui.router.state')
	  .directive('uiSref', $StateRefDirective)
	  .directive('uiSrefActive', $StateRefActiveDirective)
	  .directive('uiSrefActiveEq', $StateRefActiveDirective)
	  .directive('uiState', $StateRefDynamicDirective);

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:isState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
	 */
	$IsStateFilter.$inject = ['$state'];
	function $IsStateFilter($state) {
	  var isFilter = function (state, params) {
	    return $state.is(state, params);
	  };
	  isFilter.$stateful = true;
	  return isFilter;
	}

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:includedByState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
	 */
	$IncludedByStateFilter.$inject = ['$state'];
	function $IncludedByStateFilter($state) {
	  var includesFilter = function (state, params, options) {
	    return $state.includes(state, params, options);
	  };
	  includesFilter.$stateful = true;
	  return  includesFilter;
	}

	angular.module('ui.router.state')
	  .filter('isState', $IsStateFilter)
	  .filter('includedByState', $IncludedByStateFilter);
	})(window, window.angular);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("blogCtrl", function($scope, dataService, $location) {
	  dataService.getBlog(function(res) {
	    $scope.blogItemsToDisplay = res.data.posts;
	  })

	  let tempSearchItem = $location.path();
	  if (tempSearchItem.search("/blog/id/") >= 0) {
	    let tempItem = tempSearchItem.split("/");
	    let tempID = tempItem[3];
	    if (tempItem[3] != "") {
	      dataService.getBlogById(tempID, function(res) {
	        console.log(res.data.posts._id);
	        $scope.blogItem = res.data.posts;
	      })
	    }
	  }



	});


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("mainCtrl", function($scope, dataService) {
	});


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	angular.module("lionHeart")
	.controller("productCtrl", function($scope, dataService, functionService, $location) {
	  var addToCartReq = __webpack_require__(8);
	  var cart;
	  var user;
	  var list = [];
	  var tempEdit = $location.path();
	  dataService.getProducts(function(response) {
	  var varTemp = response.data.products.length;
	  if (response.data.products[0].id == null) {
	      for (var x = 0; x < varTemp; x++) {
	        response.data.products[x].id = response.data.products[x]._id;
	      }
	  }
	    if (tempEdit.search("/store/") > -1 && tempEdit.search("all") == -1) {
	      var check;
	      tempEdit = tempEdit.slice(7, tempEdit.length);
	      for (var x = 0; x < varTemp; x++) {
	        if (response.data.products[x].category["parent"]) {
	          check = response.data.products[x].category["parent"];
	          check = check.toLowerCase();
	            if (check == "graphic design") {
	              check = "graphics";
	            }
	          console.log(check + tempEdit);
	          if (check.search(tempEdit) > -1) {
	            list.push(response.data.products[x]);
	            console.log(list);
	          }
	          if (x == varTemp - 1) {
	          $scope.products = list;
	          }
	          if (check.search("tempEdit") > -1) {
	            list.push(response.data.products[x]);
	            console.log(list);
	          }
	          if (x == varTemp - 1) {
	            $scope.products = list;
	          }
	        }
	        }
	      }
	    else {
	    $scope.products = response.data.products;
	    }
	  })
	  dataService.getCart(function(response) {
	    $scope.cart = response.data.cart.data.cart;
	    cart = $scope.cart
	  })
	  dataService.getUser(function(response) {
	    $scope.user = response.data.user;
	    user = $scope.user;
	  })
	    $scope.addToCart = function(id, quantity, product) {
	    var id = id;
	      addToCartReq(id, quantity, user, cart, product, functionService, $scope, function(res) {
	        console.log("Cart Saved");
	        $scope.cart = res;
	        cart = $scope.cart
	        console.log("Completed!");
	      });
	    }
	});


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict'
	var addToCartReq = function(id, quantity, user, cart, product, functionService, $scope, finalCB) {
	  // console.log("\n\n\n\n\n*!*!*!*!*!*!*!*!Running Code:!*!*!*!*!*!*!*!*!*\n\n\n\n\n");
	  var returnVal;
	  if (!user) {
	    // console.log("Please Log In");
	  }
	  else {
	    functionService.addToCart(id, quantity, user, cart, product, function(response) {
	      if (response == "nothing") {
	        // console.log("!*^^*!NO ACTION NESSECARY!*^^*!");
	        returnVal = cart;
	      } else {
	        returnVal = response;
	      }
	      // console.log("Saving Cart...");
	      finalCB(returnVal);
	    });
	  }
	}
	module.exports = addToCartReq;


/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("signupform", function() {
	  return {
	    templateUrl: 'templates/signUpForm.html',
	    controller: 'signUpFormCtrl',
	    replace: true
	  }
	})


/***/ },
/* 11 */
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
/* 12 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("loginCtrl", function($scope, dataService) {
	  
	});


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("login", function() {
	  return {
	    templateUrl: 'templates/login.html',
	    controller: 'loginCtrl',
	    replace: true
	  }
	})


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("purchaseConfirmationCtrl", function($scope, dataService) {
	dataService.getUser(function(response) {
	  $scope.user = response.data.user;
	  var temp = response.data.user.data.cart.items
	  $scope.cartLength = temp.length;
	});
	});


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("purchaseconfirmation", function() {
	  return {
	    templateUrl: 'templates/purchaseConfirmation.html',
	    controller: 'purchaseConfirmationCtrl',
	    replace: true
	  }
	})


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("confirmationPageCtrl", function($scope, dataService) {

	});


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("confirmationpage", function() {
	  return {
	    templateUrl: 'templates/confirmationPage.html',
	    controller: 'confirmationPageCtrl',
	    replace: true
	  }
	})


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	angular.module("lionHeart")
	.controller("cartCtrl", function($scope, dataService, $timeout, $state) {
	  var inputToggle = __webpack_require__(44);
	  $scope.edit = {};
	  // Blank Stripe Card
	    $scope.stripeToken = {stripeToken: {
	      number: '',
	      cvc: '',
	      exp_month: '',
	      exp_year: ''
	      }
	      };
	  // Get User/Cart/UserWithCart
	  dataService.getCart(function(response) {
	    $scope.cartA = response.data.cart.data.cart;
	    var cart = $scope.cartA.items;
	    $scope.UserWithCart = response.data.cart;
	    var user = $scope.UserWithCart;
	    $scope.user = $scope.UserWithCart;
	    cartTotal(cart, user)
	  });
	  // Delete Items out of Cart
	$scope.deleteCartItem = function(abe) {
	      var dog = abe;
	        $timeout(function() {
	          $scope.deletey(abe);
	        }, 1001);
	    }
	    $scope.deletey = function(abe) {
	    $scope.UserWithCart.data.cart.items.splice(abe, 1);
	    var user = $scope.UserWithCart;
	    dataService.updateCart(user, function(response) {
	      $scope.cartA = response.data.cart.data.cart;
	      var cart = $scope.cartA.items;
	      $scope.UserWithCart = response.data.cart;
	      var user = $scope.UserWithCart;
	      cartTotal(cart, user)});
	}

	// Review Page: < > Arrow's function to save User Data
	  $scope.saveSetUp = function(stripeToken) {
	    $scope.errPayment = false;
	    // Get User / Cart
	    var aUser = $scope.user;
	    // Save User / Cart
	    dataService.updateCart(aUser, function(response) {
	      $scope.cartA = response.data.cart.data.cart;
	      var cart = $scope.cartA.items;
	      $scope.UserWithCart = response.data.cart;
	      var user = $scope.UserWithCart;
	      cartTotal(cart, user)
	      });
	    // Pass CC info to next State
	    if (stripeToken) {
	      if (stripeToken.stripeToken.number.length == 16 && stripeToken.stripeToken.cvc.length == 3 && stripeToken.stripeToken.exp_month.length == 2 && stripeToken.stripeToken.exp_year.length == 4) {
	        var token = stripeToken;
	        $state.go('cart.checkout', token);
	      } else {
	        $scope.errPayment = true;
	      }
	    }
	  }
	// Sub Total Calculation Function for Checkout (pages)
	  var sub = function (cart, user, sub) {
	    var total = 0;
	    var len = 0;
	    for (var x = 0; x < cart.length; x++) {
	            var price = Number(cart[x].product.subTotal);
	            var quantity = Number(cart[x].quantity);
	            cart[x].total = price * quantity;
	            total += price * quantity;
	            len += quantity;
	          }
	    sub(total, user, len);
	  }
	//Total Calculation Function for Checkout (pages)
	  var cartTotal = function(cart, user) {
	    var tax = 0;
	    var total = 0;
	    var shipping = 0;
	    sub(cart, user, function(aSubTotal, user, len) {
	      var newSubtotal = aSubTotal
	      newSubtotal = Number(newSubtotal.toFixed(2));
	      var tax = newSubtotal * .1;
	      tax = Number(tax.toFixed(2));
	      var total = newSubtotal + tax;
	      total = Number(total.toFixed(2));
	      user.data.cart.subTotal = newSubtotal;
	      user.data.cart.tax = tax;
	      user.data.cart.total = total;
	      user.data.cart.shipping = shipping;
	      user.data.cart.len = len;
	      dataService.updateCart(user, function(response) {
	        $scope.cartA.total = response.data.user.data.cart.total;
	      });
	    })
	  }
	// Quanity Plus and Minus Functions for Cart Page
	$scope.quantityTotalAddition = function(index) {
	  if ($scope.UserWithCart.data.cart.items[index].product.quantity > $scope.UserWithCart.data.cart.items[index].quantity) {
	    $scope.UserWithCart.data.cart.items[index].quantity += 1;
	    var userWithCart = $scope.UserWithCart
	    dataService.updateCart2(userWithCart, function(response) {
	        $scope.cartA = response.data.user.data.cart;
	        var cart = $scope.cartA.items;
	        $scope.UserWithCart = response.data.user;
	        var user = $scope.UserWithCart;
	        cartTotal(cart, user)
	    dataService.getCart(function(response) {
	      // $scope.cartA = response.data.cart.data.cart;
	      // var cart = $scope.cartA.items;
	      // $scope.UserWithCart = response.data.cart;
	      // var user = $scope.UserWithCart;
	      // cartTotal(cart, user)
	    });
	  });
	  }
	}
	$scope.quantityTotalMinus = function(index) {
	  if ($scope.UserWithCart.data.cart.items[index].quantity > 1) {
	    $scope.UserWithCart.data.cart.items[index].quantity -= 1;
	    var userWithCart = $scope.UserWithCart;
	    dataService.updateCart2(userWithCart, function(response) {
	        $scope.cartA = response.data.user.data.cart;
	        var cart = $scope.cartA.items;
	        $scope.UserWithCart = response.data.user;
	        var user = $scope.UserWithCart;
	        cartTotal(cart, user)
	  });
	  }
	}

	$scope.checkValForMaxInCart = function(index) {
	  if ($scope.cartA.items[index].quantity > $scope.cartA.items[index].product.quantity) {
	    $scope.cartA.items[index].quantity = $scope.cartA.items[index].product.quantity;
	  } else if ($scope.cartA.items[index].quantity < 1) {
	    $scope.cartA.items[index].quantity = 1;
	  }
	  $scope.edit[index] = false;
	}
	$scope.justGot = function(val) {
	    if (val == 1) {
	      return true;
	    } else {
	      return false
	    }
	}
	//Check Quantity
	$scope.quantityCheck = function(val) {
	  inputToggle(val, function(res) {
	    if (res == true) {
	      return true;
	    } else {
	      return false;
	    }
	  })
	}
	});


/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("cart", function() {
	  return {
	    templateUrl: 'templates/cart.html',
	    controller: 'cartCtrl',
	    replace: true
	  }
	})


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("profileCtrl", function($scope, dataService, $location) {
	  dataService.getUser(function(response) {
	    $scope.user = response.data.user;
	  });
	  //save user on btn click
	  $scope.saveUser = function(user) {
	    dataService.saveUser(user, function(response) {
	      $scope.successDisplaySaveUser = response.data.user.message;
	    })
	  }
	  $scope.isActiveProfile = function (viewLocation) {
	        if (viewLocation == $location.path()) {
	        return viewLocation === $location.path();
	      }
	    };

	});


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("profile", function() {
	  return {
	    templateUrl: 'templates/profile.html',
	    controller: 'profileCtrl',
	    replace: true
	  }
	})


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("orderHistoryCtrl", function($scope, dataService) {
	dataService.getOrderHistory(function(response) {
	  var aday, year, month, date, chargeId, chargeIdA, chargeIdB, chargeIdC, chargeIdD;
	  $scope.orderHistory = response.data.orders;
	  for (var x = 0; x < response.data.orders.length; x++) {
	    chargeId = response.data.orders[x].charge.id;
	    chargeId.toString(chargeId)
	    var tempNum = chargeId.length;
	    chargeIdD = chargeId.slice(21, tempNum);
	    chargeIdC = chargeId.slice(14, 21);
	    chargeIdB = chargeId.slice(7, 14);
	    chargeIdA = chargeId.slice(0, 7);
	    var pushArr = [];
	    pushArr.push(chargeIdA);
	    pushArr.push(chargeIdB);
	    pushArr.push(chargeIdC);
	    pushArr.push(chargeIdD);
	    date = response.data.orders[x].date.split("T");
	    date.splice(1, 1);
	    date = date[0].split("-");
	    month = date[1];
	    year = date[0];
	    aday = date[2];
	    switch(month) {
	      case "01":
	        month = "January";
	        break;
	      case "02":
	        month = "February";
	        break;
	      case "03":
	        month = "March";
	        break;
	      case "04":
	        month = "April";
	        break;
	      case "05":
	        month = "May";
	        break;
	      case "06":
	        month = "Jun";
	        break;
	      case "07":
	        month = "July";
	        break;
	      case "08":
	        month = "August";
	        break;
	      case "09":
	        month = "September";
	        break;
	      case "10":
	        month = "October";
	        break;
	      case "11":
	        month = "November";
	        break;
	      case "12":
	        month = "December";
	        break;
	}
	date = month + " " + aday + ", " + year;
	    $scope.orderHistory[x].date = date;
	    $scope.orderHistory[x].charge.displayId = pushArr;
	  }
	});
	});


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("orderhistory", function() {
	  return {
	    templateUrl: 'templates/orderHistory.html',
	    controller: 'orderHistoryCtrl',
	    replace: true
	  }
	})


/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("categoryCtrl", function($scope, dataService) {
	  $("#owlCategory").owlCarousel({

	        navigation : false, // Show next and prev buttons
	        slideSpeed : 200,
	        paginationSpeed : 800,
	        singleItem:true,
	        autoPlay: true

	        // "singleItem:true" is a shortcut for:
	        // items : 1,
	        // itemsDesktop : false,
	        // itemsDesktopSmall : false,
	        // itemsTablet: false,
	        // itemsMobile : false

	    });
	});


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("category", function() {
	  return {
	    templateUrl: 'templates/category.html',
	    controller: 'categoryCtrl',
	    replace: true
	  }
	})


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	  angular.module("lionHeart")
	    .controller("menuCtrl", function($scope, dataService, $location) {

	      $(function(){
	      var navMain = $("#myNavbar");
	      var menuBar = $(".menuBar");
	      menuBar.on("click", "a", null, function () {
	          navMain.collapse('hide');
	      });
	  });
	      dataService.getUser(function(response) {
	        $scope.user = response.data.user;
	      });
	      $scope.isActive = function (viewLocation) {
	            if (viewLocation === $location.path()) {
	              // if ($location.path() == '/') {
	              //     document.getElementById("body").style.backgroundColor='rgb(6,17,21)';
	              //     document.getElementById("body").style.backgroundImage='url("/img/actionshots/actionshot0.jpg")';
	              //     document.getElementById("body").style.backgroundPosition='center top';
	              //     document.getElementById("body").style.backgroundRepeat='no-repeat';
	              // }
	              // else {
	                  document.getElementById("body").style.backgroundColor='rgb(67,132,183)';
	                  document.getElementById("body").style.backgroundImage='none';
	              // }
	            return viewLocation === $location.path();
	          }
	          else if (viewLocation == '/') {
	            return false;
	          }
	          else if (viewLocation == '/bio') {
	            return false;
	          }
	          else {
	            var temp = $location.path();
	            var x = viewLocation;
	            var profileCheck = x.search('/profile');
	            var storeCheck = x.search('/store');
	            var profile = temp.search('/profile');
	            var store = temp.search('/store');
	            var cartCheck = x.search('/cart');
	            var cart = temp.search('/cart');
	            var adminCheck = x.search('/admin');
	            var admin = temp.search('/admin');
	            var blogCheck = x.search('/blog');
	            var blog = temp.search('/blog');
	            var portfolioCheck = x.search('/portfolio');
	            var portfolio = temp.search('/portfolio');
	             if (store > -1 && storeCheck > -1) {
	              return true;
	            }
	            else if (profile > -1 && profileCheck > -1) {
	              return true;
	            }
	            else if (cart > -1 && cartCheck > -1) {
	              return true;
	            }
	             else if (admin > -1 && adminCheck > -1) {
	              return true;
	            }
	             else if (blog > -1 && blogCheck > -1) {
	              return true;
	            }
	             else if (portfolio > -1 && portfolioCheck > -1) {
	              return true;
	            }
	          }
	        };
	    }



	  );


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("menu", function() {
	  return {
	    templateUrl: 'templates/menu.html',
	    controller: 'menuCtrl',
	    replace: true
	  }
	})


/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("bioCtrl", function($scope, dataService) {
	function pushOut(card) {
	  if (card == 1) {
	    var card = one;
	  }
	  else if (card == 2) {
	      var card = two;
	  }
	  else if (card == 3) {
	        var card = three;
	  }
	  $("#"+card).addClass("out");
	}
	function pushIn(card) {
	  if (card == 1) {
	    var card = one;
	  }
	  else if (card == 2) {
	      var card = two;
	  }
	  else if (card == 3) {
	        var card = three;
	  }
	  $("#"+card).removeClass("out");
	}
	$scope.cardShuffle = function(card) {
	  if (card == 1) {
	    if ($('#bio #onea').hasClass('move')) {
	      $('#bio #onea').removeClass('move');
	      $('#bio #onea').addClass('out');
	    } else if ($('#bio #onea').hasClass('out')) {
	      $('#bio #onea').removeClass('out');
	      $('#bio #onea').addClass('move');
	    } else {
	      $('#bio #onea').addClass('move');
	    }
	  }
	  else if (card == 2) {
	        if ($('#bio #two').hasClass('move')) {
	          $('#bio #two').removeClass('move');
	          $('#bio #two').addClass('out');
	        } else if ($('#bio #two').hasClass('out')) {
	          $('#bio #two').removeClass('out');
	          $('#bio #two').addClass('move');
	        } else {
	          $('#bio #two').addClass('move');
	        }
	      }
	  else if (card == 3) {
	            if ($('#bio #three').hasClass('move')) {
	              $('#bio #three').removeClass('move');
	              $('#bio #three').addClass('out');
	            } else if ($('#bio #three').hasClass('out')) {
	              $('#bio #three').removeClass('out');
	              $('#bio #three').addClass('move');
	            } else {
	              $('#bio #three').addClass('move');
	            }
	          }
	}
	var oneIndex = 1,
	  twoIndex = 2,
	  threeIndex = 3;
	$scope.zIndex = function(card) {
	var zIndex = "";
	  if (card == 1) {
	    if (!$("#one").hasClass("zIndex4")) {
	          var tempNum = oneIndex;
	          setTimeout(function() {
	              $("#one").addClass("out");
	              $("#one").css( "zIndex", tempNum );
	          }, 1)
	          if (oneIndex > twoIndex && oneIndex > threeIndex) {
	            if (twoIndex < threeIndex) {
	              twoIndex = 3,
	              threeIndex = 4;
	              zIndex = "zIndex" + twoIndex;
	              document.getElementById("two").className = "card-container " + zIndex;
	              zIndex = "zIndex" + threeIndex;
	              document.getElementById("three").className = "card-container " + zIndex;
	            }
	            else {
	              twoIndex = 4,
	              threeIndex = 3;
	              zIndex = "zIndex" + twoIndex;
	              document.getElementById("two").className = "card-container " + zIndex;
	              zIndex = "zIndex" + threeIndex;
	              document.getElementById("three").className = "card-container " + zIndex;
	            }
	            oneIndex = 1;
	            zIndex = "zIndex" + oneIndex;
	            document.getElementById("one").className = "card-container " + zIndex;
	            }
	      else {
	        if (twoIndex < threeIndex) {
	          twoIndex = 2,
	          threeIndex = 3;
	          zIndex = "zIndex" + twoIndex;
	          document.getElementById("two").className = "card-container " + zIndex;
	          zIndex = "zIndex" + threeIndex;
	          document.getElementById("three").className = "card-container " + zIndex;
	        }
	      else {
	          twoIndex = 3,
	          threeIndex = 2;
	          zIndex = "zIndex" + twoIndex;
	          document.getElementById("two").className = "card-container " + zIndex;
	          zIndex = "zIndex" + threeIndex;
	          document.getElementById("three").className = "card-container " + zIndex;
	          }
	        oneIndex = 4;
	        zIndex = "zIndex" + oneIndex;
	        document.getElementById("one").className = "card-container " + zIndex;
	        }
	      setTimeout(function() {
	          $("#one").css( "zIndex", oneIndex );
	          $("#two").css( "zIndex", twoIndex );
	          $("#three").css( "zIndex", threeIndex );
	      }, 601);
	      setTimeout(function pushIn() {
	        $("#one").removeClass("out");
	        $("#one").css( "zIndex", oneIndex );
	      }, 1000);
	    }
	    else if ($("#one").hasClass("zIndex4")) {
	        if (twoIndex < threeIndex) {
	          twoIndex = 3,
	          threeIndex = 4;
	          zIndex = "zIndex" + threeIndex;
	          document.getElementById("three").className = "card-container " + zIndex;
	          zIndex = "zIndex" + twoIndex;
	          document.getElementById("two").className = "card-container " + zIndex;
	        }
	        else {
	          twoIndex = 4,
	          threeIndex = 3;
	          zIndex = "zIndex" + threeIndex;
	          document.getElementById("three").className = "card-container " + zIndex;
	          zIndex = "zIndex" + twoIndex;
	          document.getElementById("two").className = "card-container " + zIndex;
	        }
	        oneIndex = 1;
	        setTimeout(function pushOut() {
	          $("#one").addClass("out");
	            $("#one").css( "zIndex", 4 );
	        }, 1);
	        setTimeout(function() {
	            $("#one").css( "zIndex", 1 );
	            $("#two").css( "zIndex", twoIndex );
	            $("#three").css( "zIndex", threeIndex );
	        }, 601);
	        setTimeout(function pushIn() {
	          $("#one").removeClass("out");
	            $("#one").removeClass("zIndex4");
	            $("#one").addClass("zIndex1");
	        }, 1001);
	        }
	    }

	  else if (card == 2) {
	      if (!$("#two").hasClass("zIndex4")) {
	          var tempNum = twoIndex;
	          setTimeout(function() {
	              $("#two").addClass("out");
	              $("#two").css( "zIndex", tempNum );
	          }, 1)
	          if (twoIndex > oneIndex && twoIndex > threeIndex) {
	          twoIndex = 1;
	              if (oneIndex < threeIndex) {
	                oneIndex = 3,
	                threeIndex = 4;
	              } else {
	                oneIndex = 4,
	                threeIndex = 3;
	              }
	              zIndex = "zIndex" + oneIndex;
	              document.getElementById("one").className = "card-container " + zIndex;
	              zIndex = "zIndex" + twoIndex;
	              document.getElementById("two").className = "card-container " + zIndex;
	              zIndex = "zIndex" + threeIndex;
	              document.getElementById("three").className = "card-container " + zIndex;
	        } else {
	          twoIndex = 4;
	              if (oneIndex < threeIndex) {
	                oneIndex = 2,
	                threeIndex = 3;
	              } else {
	                oneIndex = 3,
	                threeIndex = 2;
	              }
	              zIndex = "zIndex" + oneIndex;
	              document.getElementById("one").className = "card-container " + zIndex;
	              zIndex = "zIndex" + twoIndex;
	              document.getElementById("two").className = "card-container " + zIndex;
	              zIndex = "zIndex" + threeIndex;
	              document.getElementById("three").className = "card-container " + zIndex;
	        }
	        setTimeout(function() {
	            $("#two").css( "zIndex", twoIndex );
	            $("#one").css( "zIndex", oneIndex );
	            $("#three").css( "zIndex", threeIndex );
	        }, 500);
	        setTimeout(function pushIn() {
	          $("#two").removeClass("out");
	            $("#two").css( "zIndex", twoIndex );
	        }, 1000);
	        }
	    else if ($("#two").hasClass("zIndex4")) {
	        if (oneIndex < threeIndex) {
	          oneIndex = 3,
	          threeIndex = 4;
	          zIndex = "zIndex" + oneIndex;
	          document.getElementById("one").className = "card-container " + zIndex;
	          zIndex = "zIndex" + threeIndex;
	          document.getElementById("three").className = "card-container " + zIndex;
	        }
	        else {
	          oneIndex = 4,
	          threeIndex = 3;
	          zIndex = "zIndex" + oneIndex;
	          document.getElementById("one").className = "card-container " + zIndex;
	          zIndex = "zIndex" + twoIndex;
	          document.getElementById("two").className = "card-container " + zIndex;
	        }
	      twoIndex = 1;
	      setTimeout(function pushOut() {
	        $("#two").addClass("out");
	          $("#two").css( "zIndex", 4 );
	      }, 1);
	      setTimeout(function() {
	          $("#two").css( "zIndex", 1 );
	          $("#one").css( "zIndex", oneIndex );
	          $("#three").css( "zIndex", threeIndex );
	      }, 501);
	      setTimeout(function pushIn() {
	        $("#two").removeClass("out");
	          $("#two").removeClass("zIndex4");
	          $("#two").addClass("zIndex1");
	      }, 1001);
	      }
	    }

	  else if (card == 3) {
	      if (!$("#three").hasClass("zIndex4")) {
	            var tempNum = threeIndex;
	            setTimeout(function() {
	                $("#three").addClass("out");
	                $("#three").css( "zIndex", tempNum );
	            }, 1)
	            if (threeIndex > twoIndex && threeIndex > oneIndex) {
	              threeIndex = 1;
	                  if (oneIndex < twoIndex) {
	                    oneIndex = 3,
	                    twoIndex = 4;
	                    document.getElementById("two").className = "card-container " + zIndex;
	                    zIndex = "zIndex" + threeIndex;
	                    document.getElementById("three").className = "card-container " + zIndex;
	                  } else {
	                    oneIndex = 4,
	                    twoIndex = 3;
	                    document.getElementById("two").className = "card-container " + zIndex;
	                    zIndex = "zIndex" + threeIndex;
	                    document.getElementById("three").className = "card-container " + zIndex;
	                  }
	                  zIndex = "zIndex" + oneIndex;
	                  document.getElementById("one").className = "card-container " + zIndex;
	                  zIndex = "zIndex" + twoIndex;
	          }
	          else {
	            threeIndex = 4;
	                  if (oneIndex < twoIndex) {
	                    oneIndex = 2,
	                    twoIndex = 3;
	                    zIndex = "zIndex" + oneIndex;
	                    document.getElementById("one").className = "card-container " + zIndex;
	                    zIndex = "zIndex" + twoIndex;
	                    document.getElementById("two").className = "card-container " + zIndex;
	                  } else {
	                    oneIndex = 3,
	                    twoIndex = 2;
	                    zIndex = "zIndex" + oneIndex;
	                    document.getElementById("one").className = "card-container " + zIndex;
	                    zIndex = "zIndex" + twoIndex;
	                    document.getElementById("two").className = "card-container " + zIndex;
	                  }
	                  zIndex = "zIndex" + threeIndex;
	                  document.getElementById("three").className = "card-container " + zIndex;
	          }
	          setTimeout(function() {
	              $("#three").css( "zIndex", threeIndex );
	              $("#one").css( "zIndex", oneIndex );
	              $("#two").css( "zIndex", twoIndex );
	          }, 601);
	          setTimeout(function pushIn() {
	            $("#three").removeClass("out");
	              $("#three").css( "zIndex", threeIndex );
	          }, 1000);
	        }
	      else if ($("#three").hasClass("zIndex4")) {
	          if (oneIndex < twoIndex) {
	            oneIndex = 3,
	            twoIndex = 4;
	            zIndex = "zIndex" + oneIndex;
	            document.getElementById("one").className = "card-container " + zIndex;
	            zIndex = "zIndex" + twoIndex;
	            document.getElementById("two").className = "card-container " + zIndex;
	          }
	          else {
	            oneIndex = 4,
	            twoIndex = 3;
	            zIndex = "zIndex" + oneIndex;
	            document.getElementById("one").className = "card-container " + zIndex;
	            zIndex = "zIndex" + twoIndex;
	            document.getElementById("two").className = "card-container " + zIndex;
	          }
	          threeIndex = 1;
	        setTimeout(function pushOut() {
	          $("#three").addClass("out");
	            $("#three").css( "zIndex", 4 );
	        }, 1);
	        setTimeout(function() {
	            $("#three").css( "zIndex", 1 );
	            $("#one").css( "zIndex", oneIndex );
	            $("#two").css( "zIndex", twoIndex );
	        }, 601);
	        setTimeout(function pushIn() {
	          $("#three").removeClass("out");
	            $("#three").removeClass("zIndex4");
	            $("#three").addClass("zIndex1");
	        }, 1001);
	        }
	      }
	// var zIndex = "";
	//   if (!$("#one").hasClass("zIndex4")) {
	//     if
	//   twoIndex -= 1;
	//   threeIndex -= 1;
	//   oneIndex -= 1;
	//   zIndex = "zIndex" + oneIndex;
	//   document.getElementById("one").className = "card-container " + zIndex;
	//   zIndex = "zIndex" + twoIndex;
	//   document.getElementById("two").className = "card-container " + zIndex;
	//   zIndex = "zIndex" + threeIndex;
	//   document.getElementById("three").className = "card-container " + zIndex;
	//   document.getElementById(card).className = "card-container zIndex4";
	//   }
	}
	});


/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("bio", function() {
	  return {
	    templateUrl: 'templates/bio.html',
	    controller: 'bioCtrl',
	    replace: true
	  }
	})


/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("category.searchCtrl", function($scope, dataService, $stateParams) {
	var searchText = $scope.searchText;
	dataService.searchText(searchText, function(response) {
	  console.log($scope.searchText)
	  $scope.products = response.data.products;
	});
	});


/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("category.categoriesCtrl", function($scope, dataService) {
	});


/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	angular.module('lionHeart')
	.directive("category.categories", function() {
	  return {
	    templateUrl: 'templates/category/categories.html',
	    controller: 'category.categoriesCtrl',
	    replace: true
	  }
	})


/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("category.paintingsCtrl", function($scope, dataService) {
	  dataService.getCategoryPaintings(function(response) {
	    $scope.products = response.data.products;
	  });
	});


/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("category.printsCtrl", function($scope, dataService) {
	  dataService.getCategoryPrints(function(response) {
	    $scope.products = response.data.products;
	  });
	});


/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("category.graphicsCtrl", function($scope, dataService) {
	  dataService.getCategoryGraphics(function(response) {
	    $scope.products = response.data.products;
	  });
	});


/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("category.upcycleCtrl", function($scope, dataService) {
	  dataService.getCategoryUpcycle(function(response) {
	    $scope.products = response.data.products;
	  });
	});


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("category.skateboardsCtrl", function($scope, dataService) {
	  dataService.getCategorySkateboards(function(response) {
	    $scope.products = response.data.products;
	  });
	});


/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("category.stickersCtrl", function($scope, dataService) {
	  dataService.getCategoryStickers(function(response) {
	    $scope.products = response.data.products;
	  });
	});


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	angular.module("lionHeart")
	.service("googleCalendarGetRequest", function($http) {
	  // Disable "configAuth" to turn off test mode


	  //
	  // var configAuth = require('../config/auth');
	  //
	  //
	  //
	  // // If else statment for test mode or normal mode
	  // if (configAuth) {
	  //   key = configAuth.googleCalApi.apiKey;
	  //   userEmail = configAuth.googleCalApi.userEmail;
	  // } else {
	  // }
	  // Google API Info
	  // var key = 'XXXXXXVT-f9r284Ziqt4uE' || process.env.googleCalApiAPIKEY;
	  // var userEmail = "artbycaleXXX@gmail.com" || process.env.googleCalApiUSEREMAIL;
	  // $Get REQUEST
	  function dateCheck(data, success) {
	    let todaysDate = new Date();
	    let m = (Math.round(todaysDate.getMonth().toString()) + 1);
	    let yearB = todaysDate.getYear().toString();
	    let y = yearB.slice(1,3);
	    let d = todaysDate.getDate().toString();
	    var list = data.data.items;
	    for (var x = 0; x < list.length; x++) {
	      let dateToCheck = list[x].end.dateTime;
	      let year = dateToCheck.slice(2, 4);
	      let month = Math.round(dateToCheck.slice(5, 7));
	      let day = dateToCheck.slice(8, 10);
	      if (y >= year) {
	        if (year == y && m > month) {
	          // No need to do anythin
	        }
	        else if (year == y && m == month && d >= day) {
	          // No need to do anythin
	        }
	        else if (y > year) {
	          // No need to do anythin
	        }
	        else {
	          list = list.splice(x, y);
	        }
	      }
	      else {
	        list = list.splice(x, y);
	      }
	    }
	    data.data.items = list;
	    success(data)
	  }
	var events = []
	this.calendar = function(callback) {
	      $http.get("/api/env")
	      .then(function(sendDataA) {
	        $http.get(sendDataA.data)
	          .then(function (sendData) {
	            dateCheck(sendData, function(res) {
	          // Call of FUNCTION ($GET REQUEST)
	            var res = res.data.items;
	            for (var x = 0; x < res.length; x++) {
	              let eventItem = {};
	              if (res[x].status == "confirmed") {
	                var summary = res[x].summary;
	              if (!res[x].description) {
	                var description = "No Description Available";
	              } else {
	                var description = res[x].description;
	              }
	              if (!res[x].location) {
	                var location = "To Be Decided";
	              } else {
	                var location = res[x].location;
	              }
	          // Date Conversion
	                dateConversionForComputerCodePurposes(res[x].start.dateTime, res[x].end.dateTime, function(start, end) {
	                  dateConversionForHumanBrainPurposes(start, end, function(start, end) {
	                    if (x == 0) {
	                      events = [{"summary": "", "start": "", "end": ""}]
	                    }
	                  events[x] = {"summary": summary,"description": description, "location": location, "start": start, "end": end};

	                    dateConversionForWebsite(events[x], function(eventOutput) {
	                      events[x] = eventOutput;
	                    })
	                  })
	                })
	                }
	              }
	              callback(events);

	            })
	          })
	      })
	};


	var dateConversionForWebsite = function(events, callback) {
	  events.end[3] = events.end[3].split(":").splice(0,2).join(":");
	  events.start[3] = events.start[3].split(":").splice(0,2).join(":");
	  if (events.start[2] == events.end[2]) {
	    events.sameDay = true;
	    events.range = events.start[1] + " " + events.start[2] + " " + events.start[0] + " at " + events.start[3] + " to " + events.end[3];
	  } else {
	  events.range = events.start[1] + " " + events.start[2] + " " + events.start[0] + " at " + events.start[3] + " to " + events.end[3] + " (" + events.end[1] + " " + events.end[2]+")";
	  }
	  callback(events);
	}
	var dateConversionForComputerCodePurposes = function(start, end, callback) {
	    // Split the Code from Time and Date
	    start = start.split("T");
	    end = end.split("T");
	    //Remove the Timezone at the end and resave it as an array
	    var start2 = start[1].split("-");
	    start[1] = start2.splice(0, 1);
	    start[1] = start[1][0];
	    var end2 = end[1].split("-");
	    end[1] = end2.splice(0, 1);
	    end[1] = end[1][0];
	    callback(start, end);
	  };
	  var dateConversionForHumanBrainPurposes = function(start, end, callback) {
	    // Convert Time
	    var startTime;
	    var endTime;
	    var saveStartTemp = start[1];
	    var saveEndTemp = end[1];
	    var startArrRange = saveStartTemp.split(":");
	    var endArrRange = saveEndTemp.split(":");
	    var dateArrStart = start[0].split("-");
	    var dateArrEnd = end[0].split("-");
	    startArrRange.splice(2, 1);
	    endArrRange.splice(2, 1);
	    timeConvertFunction(startArrRange, function(res) {
	      startArrRange = res[0]+":"+res[1]+" "+res[2];
	      timeConvertFunction(endArrRange, function(res) {
	        endArrRange = res[0]+":"+res[1]+" "+res[2];
	          //Convert To Legable Days
	        dateArrStart.push(startArrRange);
	        dateArrEnd.push(endArrRange);
	        conversionHappensHere(dateArrStart, function(res) {
	          dateArrStart = res;
	          conversionHappensHere(dateArrEnd, function(res) {
	            dateArrEnd = res;
	          });
	        });
	      });
	    });
	callback(dateArrStart, dateArrEnd);
	  }
	  var timeConvertFunction = function (input, output) {
	    if (input[0] == 0) {
	      input[0] = 12;
	        input.push("am");
	    }
	    else if (input[0] >= 13) {
	      input[0] -= 12;
	        input.push("pm");
	    }
	    else if (input[0] === "12") {
	      input.push("pm");
	    } else {
	      input.push("am");
	    }
	    output(input);
	  }
	  var conversionHappensHere = function(dateArray, callback) {
	    switch (dateArray[1]) {
	      case "01":
	          dateArray[1] = "January"
	        break;
	        case "02":
	            dateArray[1] = "February"
	          break;
	          case "03":
	              dateArray[1] = "March"
	            break;
	            case "04":
	                dateArray[1] = "April"
	              break;
	              case "05":
	                  dateArray[1] = "May"
	                break;
	                case "06":
	                    dateArray[1] = "June"
	                  break;
	                  case "07":
	                      dateArray[1] = "July"
	                    break;
	                    case "08":
	                        dateArray[1] = "August"
	                      break;
	                      case "09":
	                          dateArray[1] = "September"
	                        break;
	                        case "10":
	                            dateArray[1] = "October"
	                          break;
	                          case "11":
	                              dateArray[1] = "November"
	                            break;
	                            case "12":
	                                dateArray[1] = "December"
	                              break;
	    }

	    if (dateArray[2] == "01" || dateArray[2] == "21" || dateArray[2] == "31") {
	      if (dateArray[2] == "01") {
	        dateArray[2] = "1";
	      }
	      dateArray[2] = dateArray[2] +"st"
	    }
	    else if (dateArray[2] == "02" || dateArray[2] == "22") {
	      if (dateArray[2] == "02") {
	        dateArray[2] = "2";
	      }
	      dateArray[2] = dateArray[2] +"nd"
	    }
	    else if (dateArray[2] == "03" || dateArray[2] == "23") {
	      if (dateArray[2] == "03") {
	        dateArray[2] = "3";
	      }
	      dateArray[2] = dateArray[2] +"rd"
	    }
	    else if (dateArray[2] >= 4 && dateArray[2] <= 30) {
	      if (dateArray[2] >= 4 && dateArray[2] <= 9) {
	        dateArray[2] = dateArray[2].split("");
	        dateArray[2] = dateArray[2][1];
	      }
	      dateArray[2] = dateArray[2] +"th"
	    }


	    callback(dateArray);
	  }
	})


/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("indexHomeCtrl", function($scope, carouselDataService, $http, googleCalendarGetRequest, dataService) {
	  googleCalendarGetRequest.calendar(function(events) {
	    $scope.threeEvents = false;
	    $scope.twoEvents = false;
	    if (events.length > 3) {
	      var temp = events.length - 3;
	      events.splice(3, temp)
	      $scope.threeEvents = true;
	    }
	    else if (events.length == 2) {
	      $scope.twoEvents = true;
	    }
	    $scope.googleEvents = events;
	  });


	    carouselDataService.getCarousel(function(res) {
	      $scope.carouselImages = res.data.carousel;
	    })



	  $("#owl").owlCarousel({

	        navigation : false, // Show next and prev buttons
	        slideSpeed : 200,
	        paginationSpeed : 800,
	        singleItem:true,
	        autoPlay: true

	        // "singleItem:true" is a shortcut for:
	        // items : 1,
	        // itemsDesktop : false,
	        // itemsDesktopSmall : false,
	        // itemsTablet: false,
	        // itemsMobile : false

	    });

	    dataService.getBlog(function(res) {
	      sortPosts(res, 'main', function(res) {
	        $scope.posts = res;
	      })
	      sortPosts(res, 'subA', function(res) {
	        $scope.postsA = res;
	      })
	      sortPosts(res, 'subB', function(res) {
	        $scope.postsB = res;
	      })
	      sortPosts(res, 'subC', function(res) {
	        $scope.postsC = res;
	      })
	    })

	    var sortPosts = function(input, filter, success) {
	      let posts = [];
	      let mainPost = input.data.posts;
	      for (var x = 0; x < mainPost.length; x++) {
	        if (mainPost[x].loc == filter) {
	          posts.push(mainPost[x])
	        }
	      }
	      if (posts.length > 1) {
	        let minusNum = (posts.length - 1)
	        posts.splice(1, minusNum)
	      }
	      success(posts);
	    }
	});


/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("profile.dashboardCtrl", function($scope, dataService) {
	});


/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("profile.dashboard.editCtrl", function($scope, dataService) {
	});


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	angular.module("lionHeart")
	.controller("singleItemCtrl", function($scope, dataService, $stateParams, functionService) {
	var inputToggle = __webpack_require__(44);
	var user, cart;
	var addToCartReq = __webpack_require__(8);
	$scope.urlCode = $stateParams.urlCode;
	var urlCode = $scope.urlCode
	dataService.getSingleItem(urlCode, function(response) {
	  $scope.singleItem = response.data.products;
	});
	dataService.getUser(function(response) {
	  $scope.user = response.data.user;
	  user = $scope.user
	})
	dataService.getCart(function(response) {
	  $scope.cart = response.data.cart.data.cart;
	  cart = $scope.cart
	})
	$scope.addToCart = function(id, quantity, product) {
	var id = id;
	  addToCartReq(id, quantity, user, cart, product, functionService, $scope, function(res) {
	    console.log("Cart Saved");
	    $scope.cart = res;
	    cart = $scope.cart
	  });
	  console.log("Completed!");
	}
	$scope.quantity = {val: 1};

	//Check Quantity
	$scope.quantityCheck = function(val) {
	  inputToggle(val, function(res) {
	    if (res == true) {
	      return true;
	    } else {
	      return false;
	    }
	  })
	}

	$scope.quantityChange = function(val) {
	  if (val == 1) {
	    $scope.quantity.val += 1;
	  } else {
	    $scope.quantity.val -= 1;
	  }
	}
	$scope.checkValForMax = function() {
	  if ($scope.quantity.val > $scope.singleItem.quantity) {
	    $scope.quantity.val = $scope.singleItem.quantity;
	  } else if ($scope.quantity.val < 1) {
	    $scope.quantity.val = 1;
	  }
	  $scope.edit = false;
	}


	// get products for random display (3)
	// create array with digits = to array.length
	// run a random number
	// get number from array (NOT INDEX)
	// splice out [x] from array
	// repeat three times
	// save related items to $scope
	// Display in angular
	// prevent duplicates
	dataService.getProducts(function(response) {
	  var productsRes = response.data.products;
	  var productLength = productsRes.length;
	  var tempArr = []
	  var items = [];

	  var searchForItem = function(callback) {
	  var removeItem = []
	    for (var x = 0; x < productLength; x++) {
	      removeItem.push(productsRes[x].urlCode);
	    }
	    var removeNum = removeItem.indexOf(urlCode);
	    var templength = urlCode.length;
	    productsRes.splice(removeNum, 1);
	    callback();
	  }

	  var lengthBuild = function(productLength, callback) {
	    for (var x = 0; x < productLength; x++) {
	      tempArr.push(x);
	      productLength = productLength - 1;
	    }
	    callback();
	  }

	  var rnd = function (tempArr, callback) {
	    var tempNum = Math.floor(Math.random() * tempArr.length);
	    callback(tempNum);
	  }
	searchForItem(function() {
	  lengthBuild(productLength, function() {
	    for (var x = 0; x < 3; x++) {
	      rnd(tempArr, function (rndNum) {
	        var tempItem = productsRes[rndNum];
	        productsRes.splice(rndNum, 1);
	        items.push(tempItem);
	      });
	    }
	    var submit = {"related": items};
	    $scope.relatedItems = submit;
	  });
	});
	});



	});


/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict'
	var inputToggle = function(val, callback) {
	  var maxVal = 20;
	      if (val < maxVal) {
	        callback(true);
	      } else {
	        callback(false);
	      }
	    }
	module.exports = inputToggle;


/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("cart.checkoutCtrl", function($scope, dataService, functionService, eraseCartService, $location) {
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
	      functionService.isProductAvailable(productCheck, cart, function(mustSaveInventory, response, saveItems) {
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


/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("admin.productsCtrl", function($scope, dataService, $location, $timeout) {
	  dataService.getProducts(function(response) {
	    $scope.products = response.data.products
	  })
	  $scope.editProduct = {show: false};
	  var productBeingEditedIndex;
	  $scope.productEdit = function(product, index) {
	    productBeingEditedIndex = index;
	    if (!product.quantity) {
	      product.quantity = 0;
	    }
	    $scope.productDisplayEdit = product;
	    $scope.editProduct = {show: true};
	  }
	  $scope.deleteItem = function(id) {
	    dataService.deleteItem(id, function(response) {
	      if (response.status == 200) {
	      $scope.products.splice(productBeingEditedIndex, 1);
	      $scope.editProduct.show = false;
	    } else {
	      console.log('Error Deleteing Item?');
	      alert('Error Deleteing Item?');
	    }
	    })
	  }
	    $scope.successMessageDisplayTop = false;
	  $scope.saveItem = function(id, product) {
	    dataService.saveItem(id, product, function(res) {
	      if (res.status == 200) {
	        $scope.successMessageDisplayTop = true;
	        $timeout(function() {
	          $scope.successMessageDisplayTop = false;
	        }, 3075)
	      } else {
	        console.log('Error Saving Item?');
	        alert('Error Saving Item?');
	      }
	    })
	  }
	  $scope.newItemStart = function() {
	    var newProduct = {
	      "name": "New Item",
	      "active": true,
	      "pictures": ["http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"],
	      "price": {
	        "amount": 100,
	        "currency": 'USD'
	      },
	      "category": {"parent": "Paintings"},
	      "urlCode": new Date().getTime(),
	      "sku": new Date().getTime(),
	      "quantity": 1
	    };
	      dataService.newItem(newProduct, function(res) {
	        if (res.status == 200) {
	          $scope.editProduct.show = true;
	          $scope.products.push(newProduct);
	          $scope.productDisplayEdit = newProduct;
	          $scope.productDisplayEdit.id = res.data.products._id;
	          $scope.productDisplayEdit._id = res.data.products._id;
	        } else {
	          alert("Error Creating Product")
	        }
	      });

	  }
	});


/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("admin.postsCtrl", function($scope, dataService, $timeout) {
	  dataService.getBlog(function(response) {
	    $scope.blog = response.data.posts;
	  })
	  $scope.newPost = function() {
	    var date = new Date;
	        var month = (date.getUTCMonth()+1);
	        var day = date.getDate();
	        var year = date.getFullYear();
	        var hour = date.getHours();
	        if (hour >= 13) {
	          hour -= 12;
	        }
	        var minutes = date.getMinutes();
	        var time = hour+":"+minutes;
	    var newPost = {
	      "title": "Add Title",
	      "description": "Add Description",
	      "body": "Add Body",
	      "urlCode": new Date().getTime(),
	      "img": "https://tctechcrunch2011.files.wordpress.com/2015/08/clouds.jpg",
	      "live": 'false',
	      "date": {"month": month, "day": day, "year": year, "time": time},
	      "loc": "main",
	      "category": {"parent": "Homepage"}
	    };
	    dataService.newPost(newPost, function(res) {
	      if (res.status == 200) {
	        newPost._id = res.data.post._id;
	        newPost.id = res.data.post._id;
	      $scope.blog.push(newPost);
	    } else {
	      return res.status(500).json(res)
	    }
	    })
	  }
	  $scope.deletePost = function(id, post, index) {
	    dataService.deletePost(id, post, function(res) {
	        if (res.status == 200) {
	          $scope.blog.splice(index, 1);
	      } else {
	        return res.status(500).json(res)
	      }
	    })
	  }
	  $scope.openBlog = {show : false};
	    $scope.successMessageDisplayTopPost = false;
	  $scope.savePost = function(id, post) {
	    dataService.savePost(id, post, function(res) {
	        if (res.status == 200) {
	        $scope.openBlog.show = false;
	          $scope.successMessageDisplayTopPost = true;
	          $timeout(function() {
	            $scope.successMessageDisplayTopPost = false;
	          }, 3075)
	      } else {
	        console.log('Error Saving Post?');
	        alert('Error Saving Post?');
	        return res.status(500).json(res)
	      }
	    })
	  }
	});


/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("admin.usersCtrl", function($scope, dataService, $timeout) {
	  dataService.getUsers(function(response) {
	    $scope.users = response.data.users;
	  });
	  //Save User Function
	  $scope.successMessageDisplayTopUser = false;
	  $scope.saveUserAdmin = function(id, user) {
	    dataService.saveUserAdmin(id, user, function(res) {
	      if (res.status == 200) {
	        $scope.successMessageDisplayTopUser = true;
	        $timeout(function() {
	          $scope.successMessageDisplayTopUser = false;
	        }, 3000)
	      }
	      else {
	        console.log('Error Saving User?');
	        alert('Error Saving User?');
	      }
	    })
	  }
	});


/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("admin.portfolioCtrl", function($scope, portfolioDataService, $location, $timeout) {
	  portfolioDataService.getPortfolio(function(res) {
	    $scope.portfolioImages = res.data.portfolios;
	  })
	  $scope.deleteIndex = 0;
	  $scope.saveIndex = 0;
	  $scope.editPortfolio = {show: false};
	  $scope.portfolioEdit = function(portfolio, index) {
	    $scope.deleteIndex = index;
	    $scope.saveIndex = index;
	    if (portfolio.url == "") {
	      portfolio.url = "http://";
	    }
	    if (portfolio.urlBig == "") {
	      portfolio.urlBig = "http://";
	    }
	    $scope.portfolioDisplayEdit = portfolio;
	    $scope.editPortfolio = {show: true};
	  }
	  $scope.deletePortfolio = function(id, index) {
	  $scope.deleteIndex;
	    $scope.portfolioImages.splice(index, 1);
	    portfolioDataService.deletePortfolio(id, function(response) {
	      if (response.status == 200) {
	      $scope.editPortfolio.show = false;
	    } else {
	      console.log('Error Deleteing Item?');
	      alert('Error Deleteing Item?');
	    }
	    })
	  }
	    $scope.successMessageDisplayTopPortfolio = false;
	  $scope.savePortfolio = function(id, portfolio, index) {
	  $scope.saveIndex = 0;
	    portfolioDataService.savePortfolio(id, portfolio, function(res) {
	      if (res.status == 200) {
	        $scope.successMessageDisplayTopPortfolio = true;
	        $timeout(function() {
	          $scope.successMessageDisplayTopPortfolio = false;
	        }, 3075)
	      } else {
	        console.log('Error Saving Portfolio?');
	        alert('Error Saving Portfolio?');
	      }
	    })
	  }
	  $scope.newPiece = function() {
	    var newPortfolio = {
	      "url": "https://",
	      "urlBig": "https://"
	    };
	      portfolioDataService.newPortfolio(newPortfolio, function(res) {
	        if (res.status == 200) {
	          newPortfolio._id = res.data.portfolio._id;
	          newPortfolio.id = res.data.portfolio._id;
	          $scope.editPortfolio.show = true;
	          $scope.portfolioImages.push(newPortfolio);
	          $scope.portfolioDisplayEdit = newPortfolio;
	          $scope.portfolioDisplayEdit.id = res.data.portfolio._id;
	          $scope.portfolioDisplayEdit._id = res.data.portfolio._id;
	        } else {
	          alert("Error Creating Portfolio")
	        }
	      });

	  }
	});


/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("adminCtrl", function($scope, dataService) {

	});


/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	  .controller("portfolioCtrl", function($scope, portfolioDataService, $location) {
	      portfolioDataService.getPortfolio(function(res) {
	        if (res.data.portfolios.length == 0) {
	          $scope.portfolioImages = [{
	            "url": "https://newevolutiondesigns.com/images/freebies/colorful-background-14.jpg", "urlBig": "https://newevolutiondesigns.com/images/freebies/colorful-background-14.jpg"
	          }, {
	            "url": "http://www.pixelstalk.net/wp-content/uploads/2016/03/Colorful-Wallpaper-Full-HD-620x388.jpg"
	          }, {
	            "url": "http://www.pixelstalk.net/wp-content/uploads/2016/03/Colorful-wallpaper-HD-desktop-620x349.jpg"
	          }, {
	            "url": "http://www.pixelstalk.net/wp-content/uploads/2016/03/Abstract-rainbows-vortex-colorful-wallpaper-HD-620x388.jpg"
	          }, {
	            "url": "http://www.pixelstalk.net/wp-content/uploads/2016/03/Colorful-Wallpaper-HD-Pictures-620x388.jpg"
	          }, {
	            "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTc_qWblhfr11zCkbxdZycggUaotcT4yMyYqHtDZnW7M2BYHsyPaw"
	          }, {
	            "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSOlbBCB_NXkXQtty0VS0OugvCEMBWpSNdn72S7-LyRqtH570LWcA"
	          }, {
	            "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfCwSkXBZjqLb2kApOYM0r8RjPqjGQTQZZDRMhSkOd5KLpoDvdTg"
	          }, {
	            "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmdc3NsMT3Fe7s7IbFv74Hzx66R1GZAUeTYv3LmIydpjrhKRxC"
	          }]
	        } else {
	          $scope.portfolioImages = res.data.portfolios;
	        }
	      });
	      var tempSearchItem = $location.path();
	      if (tempSearchItem.search("/portfolio/id/") >= 0) {
	        var tempItem = tempSearchItem.split("/");
	        var tempID = tempItem[3];
	        if (tempItem[3] != "") {
	          portfolioDataService.getSinglePiece(tempID, function(res) {
	            $scope.singlePiece = res.data.portfolios[0];
	          })
	        } else {
	          console.log("Blank ID");
	          $scope.singlePiece = {"urlBig": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmdc3NsMT3Fe7s7IbFv74Hzx66R1GZAUeTYv3LmIydpjrhKRxC"}
	        }
	      }

	  });


/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.controller("cart.confirmationCtrl", function($scope, dataService) {
	dataService.getCart(function(response) {
	  var tempObject = response.data.cart.data.orderHistory;
	  var tempLength = tempObject.length - 1;
	  var order = tempObject[tempLength].charge.status;
	  if ( order == "succeeded" ) {
	    $scope.statusCharge = true;
	  }
	  else {
	    $scope.statusCharge = false;
	  }

	  //Set Notation for Order History
	  $scope.orderPlaced = tempObject[tempLength];
	});
	});


/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	angular.module("lionHeart")
	  .service("carouselDataService", function($http) {
	    this.getCarousel = function(callback) {
	      $http.get("/api/carousel")
	      .then(callback)
	    };
	    this.saveCarousel = function(id, carousel, callback) {
	    $http.put('/api/carousel/id/' + id, carousel)
	    .then(callback)
	    };
	    this.deleteCarousel = function(id, callback) {
	      var tempUrl = '/api/carousel/id/' + id;
	      $http.delete(tempUrl)
	      .then(callback);
	    }
	    this.newCarousel = function(carousel, callback) {
	      var tempUrl = '/api/carousel';
	      $http.post(tempUrl, carousel)
	      .then(callback);
	    }
	  }); // FIN


/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	angular.module("lionHeart")
	  .service("portfolioDataService", function($http) {
	    this.getPortfolio = function(callback) {
	      $http.get("/api/portfolio")
	      .then(callback)
	    };
	    this.getSinglePiece = function(id, callback) {
	      var tempUrl = '/api/portfolio/id/' + id;
	      $http.get(tempUrl)
	      .then(callback)
	    }
	    this.savePortfolio = function(id, portfolio, callback) {
	    $http.put('/api/portfolio/id/' + id, portfolio)
	    .then(callback)
	    };
	    this.deletePortfolio = function(id, callback) {
	      var tempUrl = '/api/portfolio/id/' + id;
	      $http.delete(tempUrl)
	      .then(callback);
	    }
	    this.newPortfolio = function(portfolio, callback) {
	      var tempUrl = '/api/portfolio';
	      $http.post(tempUrl, portfolio)
	      .then(callback);
	    }
	  }); // FIN


/***/ },
/* 55 */
/***/ function(module, exports) {

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
	  this.getBlogById = function(id, callback) {
	    $http.get("/api/blog/" + id)
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


/***/ },
/* 56 */
/***/ function(module, exports) {

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
	          callback(checkForTrue);
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
	    // console.log("***Logging*** ***Response*** ***Below***");
	    if (response == "true") {
	      // console.log("Already Added! : D");
	      //False Code Here if needed
	      cba("nothing");
	    }
	    else if (response == "false") {
	      // console.log("Adding.");
	      var items = [];
	      if (cart == null || cart.items == 0) {
	        // console.log("Adding..(to a empty cart)");
	        items = item;
	      }
	      else {
	        // console.log("Adding..(to a cart with items)");
	        items = cart.items;
	        items.push(item);
	      }
	      user.data.cart = {"items" : items};
	      dataService.updateCart(user, function(response) {
	        items = [];
	        // console.log("Adding...(saved cart)");
	        newCart = response.data.user.data.cart;
	        cba(newCart);
	      });
	    }
	  })
	}


	  var cartSearch = function(cart, id, cbb) { // Get Cart
	    // console.log("Cart Found\n\nBegin searching...");
	    if (cart == null) {
	      // console.log("(Empty Cart)");
	      cbb("false");
	    }
	    else if (!cart.items.length == 0) {
	      // console.log("Checking Cart...");
	      // Get ID's
	      cartCheck(cart, id, function(tempCheck) {

	        // Check ID to Cart
	        searchResponse(tempCheck, id, function(res) {

	          if (res == true) {
	            // console.log("Checking Cart...(found ITEM in cart)");
	            cbb("true");
	          } else {
	            // console.log("Checking Cart...(ITEM is not in cart)");
	            cbb("false");
	          }
	        })
	      });
	    }
	    else {
	      // console.log("(Empty Cart)");
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
	        // console.log("searchResponse: It is in the cart ( " + checkResult + " )!");
	        cbd(checkResult);
	      }
	    }
	  }

	});


/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	angular.module("lionHeart")
	.service("eraseCartService", function(dataService) {
	  this.eraseCart = function() {
	    dataService.eraseCart(
	      function(response) {
	      }
	    )
	  }
	});


/***/ }
]);