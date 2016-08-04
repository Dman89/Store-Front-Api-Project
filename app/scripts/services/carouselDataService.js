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
