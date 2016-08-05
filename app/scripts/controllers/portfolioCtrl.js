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
            $scope.singlePiece = res.data.portfolios;
          })
        } else {
          console.log("Blank ID");
          $scope.singlePiece = {"urlBig": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmdc3NsMT3Fe7s7IbFv74Hzx66R1GZAUeTYv3LmIydpjrhKRxC"}
        }
      }

  });
