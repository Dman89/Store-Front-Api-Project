'use strict';
angular.module("lionHeart")
.controller("profile.dashboard.editCtrl", function($scope, dataService) {

  var saveButtonScrollEvent = function () {
    let thisDiv = document.getElementById("scrollBTN");
    let location = thisDiv.offsetTop;
    let currentWidth = window.innerWidth;
    let bigger = "";
    let smaller = "";
    let spacerPX = document.getElementById("menu").offsetHeight;
    let scrollBackPosition = document.getElementById("scrollBack").offsetHeight + document.getElementById("scrollBack").offsetTop;
    let windowLocation = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
    let checkLocation = windowLocation + spacerPX;
    if (window.location.href.search('edit') < 0) {
      window.removeEventListener('scroll', saveButtonScrollEvent);
    }
    else {
      if (location > 0) {
        if (location <= checkLocation) {

          document.getElementById('dashboardSave').className = "mobileFloatSave show-xs";
          document.getElementById('menu').className = "saveButtonTopMobile navbar-fixed-top navbar navbar-default ng-scope";
        }
        if (scrollBackPosition >= checkLocation) {
          document.getElementById('dashboardSave').className = "saveSpacer show-xs";
          document.getElementById('menu').className = "navbar-fixed-top navbar navbar-default ng-scope";
        }
      }
    }
  }
  window.addEventListener('scroll', saveButtonScrollEvent);
});
