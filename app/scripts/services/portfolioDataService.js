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
  }); // FIN
