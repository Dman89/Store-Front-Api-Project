"use strict";
angular.module("lionHeart")
  .service("storeCategoryService", function($http) {
    this.whatCategoryIsIt = function(cb) {
      let urlCheck = window.location.hash;
      let check = urlCheck.search('all');
      if (check == '-1') {
        let subcategory = urlCheck.slice(8, urlCheck.length)
        cb(subcategory)
      }
      else {
        cb(false)
      }
    }
  });
