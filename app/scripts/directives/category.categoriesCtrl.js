'use strict';
angular.module('lionHeart')
.directive("category.categories", function() {
  return {
    templateUrl: 'templates/category/categories.html',
    controller: 'category.categoriesCtrl',
    replace: true
  }
})
