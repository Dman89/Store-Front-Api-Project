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
    var hoverOfStoresLiInMenu = function(data) {
      let hoveredDiv = document.getElementById('storeLiInMenu');
      let classNameToAdd = ' open';
      if (data == "hover") {
        hoveredDiv.className += classNameToAdd;
      }
      else {
        checkLiForActive(function(res) {
          if (res >= 1) {
            hoveredDiv.className = "dropdown";
          }
          else {
            hoveredDiv.className = "dropdown active";
          }
        })
      }
    };
    var checkLiForActive = function(cb) {
      let hasActiveOrNot = 0;
       let forLoopVarToCheck = document.getElementsByClassName('checkStateOfMenu');
       for (var x = 0; x < forLoopVarToCheck.length; x++) {
         let checkActiveState = forLoopVarToCheck[x].className;
         let answer = checkActiveState.search('active');
         if (answer >= 0) {
           hasActiveOrNot += 1;
         }
       }
       cb(hasActiveOrNot);
    };
    document.getElementById('storeLiInMenu').addEventListener('mouseenter', function() {hoverOfStoresLiInMenu('hover')});
    document.getElementById('storeLiInMenu').addEventListener('mouseleave', function() {hoverOfStoresLiInMenu('notHover')});

  });
