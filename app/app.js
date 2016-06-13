'use strict';
var angular = require('angular');
angular.module("lionHeart", []);
require('./scripts/controllers/mainCtrl.js');
require('./scripts/controllers/productCtrl.js');
require('./scripts/controllers/signUpFormCtrl.js');
require('./scripts/directives/signup.js');
require('./scripts/directives/products.js');
require('./scripts/services/dataService.js');
