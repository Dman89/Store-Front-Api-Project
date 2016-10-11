'use strict';
angular.module("lionHeart")
.controller("admin.portfolioCtrl", function($state, $scope, portfolioDataService, $location, $timeout) {
  portfolioDataService.getPortfolio(function(res) {
    for(var x = 0; x < res.data.portfolios.length; x++) {
      let portfolioCheck = res.data.portfolios[x]
      setBlankText(portfolioCheck, function(port) {
        res.data.portfolios[x] = port;
        if (x < res.data.portfolios.length - 1) {
          $scope.portfolioImages = res.data.portfolios;
        }
      })
    }
  })
  $scope.deleteIndex = 0;
  $scope.saveIndex = 0;
  $scope.editPortfolio = {show: false};
  $scope.portfolioEdit = function(portfolio, index) {
    $scope.deleteIndex = index;
    $scope.saveIndex = index;
    setBlankText(portfolio, function(port) {
      $scope.portfolioDisplayEdit = port;
      $scope.editPortfolio = {show: true};
    })
  }
  var setBlankText = function(portfolio, out) {
    if (portfolio.url == "") {
      portfolio.url = "http://";
    }
    if (portfolio.urlBig == "") {
      portfolio.urlBig = "http://";
    }
    if (portfolio.text == "" || portfolio.text == null || portfolio.text == undefined) {
      portfolio.text = "Enter Text"
    }
    out(portfolio);
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
        $scope.editPortfolio = {show: false}
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
