"use strict";
angular.module("lionHeart")
.service("googleCalendarGetRequest", function($http) {
  // Disable "configAuth" to turn off test mode


  //
  // var configAuth = require('../config/auth');
  //
  //
  //
  // // If else statment for test mode or normal mode
  // if (configAuth) {
  //   key = configAuth.googleCalApi.apiKey;
  //   userEmail = configAuth.googleCalApi.userEmail;
  // } else {
  // }
  // Google API Info
  // var key = 'XXXXXXVT-f9r284Ziqt4uE' || process.env.googleCalApiAPIKEY;
  // var userEmail = "artbycaleXXX@gmail.com" || process.env.googleCalApiUSEREMAIL;
  // $Get REQUEST
  function dateCheck(data, success) {
    let todaysDate = new Date();
    let m = (Math.round(todaysDate.getMonth().toString()) + 1);
    let yearB = todaysDate.getYear().toString();
    let y = yearB.slice(1,3);
    let d = todaysDate.getDate().toString();
    var list = data.data.items;
    for (var x = 0; x < list.length; x++) {
      let dateToCheck = list[x].end.dateTime;
      let year = dateToCheck.slice(2, 4);
      let month = Math.round(dateToCheck.slice(5, 7));
      let day = dateToCheck.slice(8, 10);
      if (y >= year) {
        if (year == y && m > month) {
          // No need to do anythin
        }
        else if (year == y && m == month && d >= day) {
          // No need to do anythin
        }
        else if (y > year) {
          // No need to do anythin
        }
        else {
          list = list.splice(x, y);
        }
      }
      else {
        list = list.splice(x, y);
      }
    }
    data.data.items = list;
    success(data)
  }
var events = []
this.calendar = function(callback) {
      $http.get(env.API_URL)
      .then(function(sendData) {
        dateCheck(sendData, function(res) {
      // Call of FUNCTION ($GET REQUEST)
        var res = res.data.items;
        for (var x = 0; x < res.length; x++) {
          let eventItem = {};
          if (res[x].status == "confirmed") {
            var summary = res[x].summary;
          if (!res[x].description) {
            var description = "No Description Available";
          } else {
            var description = res[x].description;
          }
          if (!res[x].location) {
            var location = "To Be Decided";
          } else {
            var location = res[x].location;
          }
      // Date Conversion
            dateConversionForComputerCodePurposes(res[x].start.dateTime, res[x].end.dateTime, function(start, end) {
              dateConversionForHumanBrainPurposes(start, end, function(start, end) {
                if (x == 0) {
                  events = [{"summary": "", "start": "", "end": ""}]
                }
              events[x] = {"summary": summary,"description": description, "location": location, "start": start, "end": end};

                dateConversionForWebsite(events[x], function(eventOutput) {
                  events[x] = eventOutput;
                })
              })
            })
            }
          }
          callback(events);

        })
      })
};


var dateConversionForWebsite = function(events, callback) {
  events.end[3] = events.end[3].split(":").splice(0,2).join(":");
  events.start[3] = events.start[3].split(":").splice(0,2).join(":");
  if (events.start[2] == events.end[2]) {
    events.sameDay = true;
    events.range = events.start[1] + " " + events.start[2] + " " + events.start[0] + " at " + events.start[3] + " to " + events.end[3];
  } else {
  events.range = events.start[1] + " " + events.start[2] + " " + events.start[0] + " at " + events.start[3] + " to " + events.end[3] + " (" + events.end[1] + " " + events.end[2]+")";
  }
  callback(events);
}
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
    // Convert Time
    var startTime;
    var endTime;
    var saveStartTemp = start[1];
    var saveEndTemp = end[1];
    var startArrRange = saveStartTemp.split(":");
    var endArrRange = saveEndTemp.split(":");
    var dateArrStart = start[0].split("-");
    var dateArrEnd = end[0].split("-");
    startArrRange.splice(2, 1);
    endArrRange.splice(2, 1);
    timeConvertFunction(startArrRange, function(res) {
      startArrRange = res[0]+":"+res[1]+" "+res[2];
      timeConvertFunction(endArrRange, function(res) {
        endArrRange = res[0]+":"+res[1]+" "+res[2];
          //Convert To Legable Days
        dateArrStart.push(startArrRange);
        dateArrEnd.push(endArrRange);
        conversionHappensHere(dateArrStart, function(res) {
          dateArrStart = res;
          conversionHappensHere(dateArrEnd, function(res) {
            dateArrEnd = res;
          });
        });
      });
    });
callback(dateArrStart, dateArrEnd);
  }
  var timeConvertFunction = function (input, output) {
    if (input[0] == 0) {
      input[0] = 12;
        input.push("am");
    }
    else if (input[0] >= 13) {
      input[0] -= 12;
        input.push("pm");
    }
    else if (input[0] === "12") {
      input.push("pm");
    } else {
      input.push("am");
    }
    output(input);
  }
  var conversionHappensHere = function(dateArray, callback) {
    switch (dateArray[1]) {
      case "01":
          dateArray[1] = "January"
        break;
        case "02":
            dateArray[1] = "February"
          break;
          case "03":
              dateArray[1] = "March"
            break;
            case "04":
                dateArray[1] = "April"
              break;
              case "05":
                  dateArray[1] = "May"
                break;
                case "06":
                    dateArray[1] = "June"
                  break;
                  case "07":
                      dateArray[1] = "July"
                    break;
                    case "08":
                        dateArray[1] = "August"
                      break;
                      case "09":
                          dateArray[1] = "September"
                        break;
                        case "10":
                            dateArray[1] = "October"
                          break;
                          case "11":
                              dateArray[1] = "November"
                            break;
                            case "12":
                                dateArray[1] = "December"
                              break;
    }

    if (dateArray[2] == "01" || dateArray[2] == "21" || dateArray[2] == "31") {
      if (dateArray[2] == "01") {
        dateArray[2] = "1";
      }
      dateArray[2] = dateArray[2] +"st"
    }
    else if (dateArray[2] == "02" || dateArray[2] == "22") {
      if (dateArray[2] == "02") {
        dateArray[2] = "2";
      }
      dateArray[2] = dateArray[2] +"nd"
    }
    else if (dateArray[2] == "03" || dateArray[2] == "23") {
      if (dateArray[2] == "03") {
        dateArray[2] = "3";
      }
      dateArray[2] = dateArray[2] +"rd"
    }
    else if (dateArray[2] >= 4 && dateArray[2] <= 30) {
      if (dateArray[2] >= 4 && dateArray[2] <= 9) {
        dateArray[2] = dateArray[2].split("");
        dateArray[2] = dateArray[2][1];
      }
      dateArray[2] = dateArray[2] +"th"
    }


    callback(dateArray);
  }
})
