"use strict";
angular.module("lionHeart")
.service("googleCalendarGetRequest", function($http) {
  // Google API Info
  var apiKey = 'xxx' || process.env.googleCalApiAPIKEY;
  var userEmail = "artbycalexxx@gmail.com";
  var url = "https://www.googleapis.com/calendar/v3/calendars/"+userEmail+"/events?key="+apiKey;
  // $Get REQUEST
this.calendar = function(callback) {
      $http.get(url)
      .then(function(res) {
      // Call of FUNCTION ($GET REQUEST)
        var res = res.data.items;
        for (var x = 0; x < res.length; x++) {
        dateConversionForComputerCodePurposes(res[x].start.dateTime, res[x].end.dateTime, function(start, end) {
          dateConversionForHumanBrainPurposes(start, end, function(start, end) {
          var arr = [start, end]
          callback(arr);
          })
        })
        }
      // Date Conversion
      })
};

var dateConversionForComputerCodePurposes = function(start, end, callback) {
    // Split the Code from Time and Date
    start = start.split("T");
    end = end.split("T");
    //Remove the Timezone at the end and resave it as an array
    var start2 = start[1].split("-");
    start[1] = start2.splice(0, 1);
    start[1] = start[1][0];
    var end2 = end[1].split("-");
    end[1] = end2.splice(0, 1);
    end[1] = end[1][0];
    callback(start, end);
  };
  var dateConversionForHumanBrainPurposes = function(start, end, callback) {

  }
})
