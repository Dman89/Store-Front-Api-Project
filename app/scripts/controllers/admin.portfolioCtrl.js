'use strict';
angular.module("lionHeart")
.controller("admin.portfolioCtrl", function($scope, portfolioDataService, $location, $timeout) {
  portfolioDataService.getPortfolio(function(res) {
    $scope.portfolioImages = res.data.portfolios;
  })

  $scope.editPortfolio = {show: false};
  var portfolioBeingEditedIndex;
  $scope.portfolioEdit = function(portfolio, index) {
    portfolioBeingEditedIndex = index;
    if (!portfolio.quantity) {
      portfolio.quantity = 0;
    }
    $scope.portfolioDisplayEdit = portfolio;
    $scope.editPortfolio = {show: true};
  }
  $scope.deleteItem = function(id) {
    portfolioDataService.deleteItem(id, function(response) {
      if (response.status == 200) {
      $scope.portfolios.splice(portfolioBeingEditedIndex, 1);
      $scope.editPortfolio.show = false;
    } else {
      console.log('Error Deleteing Item?');
      alert('Error Deleteing Item?');
    }
    })
  }
    $scope.successMessageDisplayTopPortfolio = false;
  $scope.savePortfolio = function(id, portfolio) {
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
  $scope.newItemStart = function() {
    var newPortfolio = {
      "url": "https://",
      "urlBig": "https://"
    };
      portfolioDataService.newItem(newPortfolio, function(res) {
        if (res.status == 200) {
          $scope.editPortfolio.show = true;
          $scope.portfolios.push(newPortfolio);
          $scope.portfolioDisplayEdit = newPortfolio;
          $scope.portfolioDisplayEdit.id = res.data.portfolios._id;
          $scope.portfolioDisplayEdit._id = res.data.portfolios._id;
        } else {
          alert("Error Creating Portfolio")
        }
      });

  }
});
