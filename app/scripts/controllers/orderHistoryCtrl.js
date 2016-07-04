'use strict';
angular.module("lionHeart")
.controller("orderHistoryCtrl", function($scope, dataService) {
dataService.getOrderHistory(function(response) {
  var aday, year, month, date, chargeId, chargeIdA, chargeIdB, chargeIdC, chargeIdD;
  $scope.orderHistory = response.data.orders;
  for (var x = 0; x < response.data.orders.length; x++) {
    chargeId = response.data.orders[x].charge.id;
    chargeId.toString(chargeId)
    var tempNum = chargeId.length;
    chargeIdD = chargeId.slice(21, tempNum);
    chargeIdC = chargeId.slice(14, 21);
    chargeIdB = chargeId.slice(7, 14);
    chargeIdA = chargeId.slice(0, 7);
    var pushArr = [];
    pushArr.push(chargeIdA);
    pushArr.push(chargeIdB);
    pushArr.push(chargeIdC);
    pushArr.push(chargeIdD);
    date = response.data.orders[x].date.split("T");
    date.splice(1, 1);
    date = date[0].split("-");
    month = date[1];
    year = date[0];
    aday = date[2];
    switch(month) {
      case "01":
        month = "January";
        break;
      case "02":
        month = "February";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "Jun";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "August";
        break;
      case "09":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "December";
        break;
}
date = month + " " + aday + ", " + year;
    $scope.orderHistory[x].date = date;
    $scope.orderHistory[x].charge.displayId = pushArr;
  }
});
});
