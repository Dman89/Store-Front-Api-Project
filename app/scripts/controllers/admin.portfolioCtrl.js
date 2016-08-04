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
          $scope.editPortfolio.show = true;
          $scope.portfolioImages.push(newPortfolio);
          $scope.portfolioDisplayEdit = newPortfolio;
          $scope.portfolioDisplayEdit.id = res.data.portfolios._id;
          $scope.portfolioDisplayEdit._id = res.data.portfolios._id;
        } else {
          alert("Error Creating Portfolio")
        }
      });

  }
});
