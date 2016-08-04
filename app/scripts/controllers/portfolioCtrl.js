'use strict';
angular.module("lionHeart")
  .controller("portfolioCtrl", function($scope, portfolioDataService) {
      portfolioDataService.getPortfolio(function(res) {
        if (res.data.portfolios.length == 0) {
          $scope.portfolioImages = [{
            "url": "https://newevolutiondesigns.com/images/freebies/colorful-background-14.jpg"
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

  });
