'use strict';
angular.module("lionHeart")
.controller("bioCtrl", function($scope, dataService) {
function pushOut(card) {
  if (card == 1) {
    var card = one;
  }
  else if (card == 2) {
      var card = two;
  }
  else if (card == 3) {
        var card = three;
  }
  $("#"+card).addClass("out");
}
function pushIn(card) {
  if (card == 1) {
    var card = one;
  }
  else if (card == 2) {
      var card = two;
  }
  else if (card == 3) {
        var card = three;
  }
  $("#"+card).removeClass("out");
}
$scope.cardShuffle = function(card) {
  if (card == 1) {
    if ($('#bio #onea').hasClass('move')) {
      $('#bio #onea').removeClass('move');
      $('#bio #onea').addClass('out');
    } else if ($('#bio #onea').hasClass('out')) {
      $('#bio #onea').removeClass('out');
      $('#bio #onea').addClass('move');
    } else {
      $('#bio #onea').addClass('move');
    }
  }
  else if (card == 2) {
        if ($('#bio #two').hasClass('move')) {
          $('#bio #two').removeClass('move');
          $('#bio #two').addClass('out');
        } else if ($('#bio #two').hasClass('out')) {
          $('#bio #two').removeClass('out');
          $('#bio #two').addClass('move');
        } else {
          $('#bio #two').addClass('move');
        }
      }
  else if (card == 3) {
            if ($('#bio #three').hasClass('move')) {
              $('#bio #three').removeClass('move');
              $('#bio #three').addClass('out');
            } else if ($('#bio #three').hasClass('out')) {
              $('#bio #three').removeClass('out');
              $('#bio #three').addClass('move');
            } else {
              $('#bio #three').addClass('move');
            }
          }
}
var oneIndex = 1,
  twoIndex = 2,
  threeIndex = 3;
$scope.zIndex = function(card) {
var zIndex = "";
  if (card == 1) {
    if (!$("#one").hasClass("zIndex4")) {
          var tempNum = oneIndex;
          setTimeout(function() {
              $("#one").addClass("out");
              $("#one").css( "zIndex", tempNum );
          }, 1)
          if (oneIndex > twoIndex && oneIndex > threeIndex) {
            if (twoIndex < threeIndex) {
              twoIndex = 3,
              threeIndex = 4;
              zIndex = "zIndex" + twoIndex;
              document.getElementById("two").className = "card-container " + zIndex;
              zIndex = "zIndex" + threeIndex;
              document.getElementById("three").className = "card-container " + zIndex;
            }
            else {
              twoIndex = 4,
              threeIndex = 3;
              zIndex = "zIndex" + twoIndex;
              document.getElementById("two").className = "card-container " + zIndex;
              zIndex = "zIndex" + threeIndex;
              document.getElementById("three").className = "card-container " + zIndex;
            }
            oneIndex = 1;
            zIndex = "zIndex" + oneIndex;
            document.getElementById("one").className = "card-container " + zIndex;
            }
      else {
        if (twoIndex < threeIndex) {
          twoIndex = 2,
          threeIndex = 3;
          zIndex = "zIndex" + twoIndex;
          document.getElementById("two").className = "card-container " + zIndex;
          zIndex = "zIndex" + threeIndex;
          document.getElementById("three").className = "card-container " + zIndex;
        }
      else {
          twoIndex = 3,
          threeIndex = 2;
          zIndex = "zIndex" + twoIndex;
          document.getElementById("two").className = "card-container " + zIndex;
          zIndex = "zIndex" + threeIndex;
          document.getElementById("three").className = "card-container " + zIndex;
          }
        oneIndex = 4;
        zIndex = "zIndex" + oneIndex;
        document.getElementById("one").className = "card-container " + zIndex;
        }
      setTimeout(function() {
          $("#one").css( "zIndex", oneIndex );
          $("#two").css( "zIndex", twoIndex );
          $("#three").css( "zIndex", threeIndex );
      }, 601);
      setTimeout(function pushIn() {
        $("#one").removeClass("out");
        $("#one").css( "zIndex", oneIndex );
      }, 1000);
    }
    else if ($("#one").hasClass("zIndex4")) {
        if (twoIndex < threeIndex) {
          twoIndex = 3,
          threeIndex = 4;
          zIndex = "zIndex" + threeIndex;
          document.getElementById("three").className = "card-container " + zIndex;
          zIndex = "zIndex" + twoIndex;
          document.getElementById("two").className = "card-container " + zIndex;
        }
        else {
          twoIndex = 4,
          threeIndex = 3;
          zIndex = "zIndex" + threeIndex;
          document.getElementById("three").className = "card-container " + zIndex;
          zIndex = "zIndex" + twoIndex;
          document.getElementById("two").className = "card-container " + zIndex;
        }
        oneIndex = 1;
        setTimeout(function pushOut() {
          $("#one").addClass("out");
            $("#one").css( "zIndex", 4 );
        }, 1);
        setTimeout(function() {
            $("#one").css( "zIndex", 1 );
            $("#two").css( "zIndex", twoIndex );
            $("#three").css( "zIndex", threeIndex );
        }, 601);
        setTimeout(function pushIn() {
          $("#one").removeClass("out");
            $("#one").removeClass("zIndex4");
            $("#one").addClass("zIndex1");
        }, 1001);
        }
    }

  else if (card == 2) {
      if (!$("#two").hasClass("zIndex4")) {
          var tempNum = twoIndex;
          setTimeout(function() {
              $("#two").addClass("out");
              $("#two").css( "zIndex", tempNum );
          }, 1)
          if (twoIndex > oneIndex && twoIndex > threeIndex) {
          twoIndex = 1;
              if (oneIndex < threeIndex) {
                oneIndex = 3,
                threeIndex = 4;
              } else {
                oneIndex = 4,
                threeIndex = 3;
              }
              zIndex = "zIndex" + oneIndex;
              document.getElementById("one").className = "card-container " + zIndex;
              zIndex = "zIndex" + twoIndex;
              document.getElementById("two").className = "card-container " + zIndex;
              zIndex = "zIndex" + threeIndex;
              document.getElementById("three").className = "card-container " + zIndex;
        } else {
          twoIndex = 4;
              if (oneIndex < threeIndex) {
                oneIndex = 2,
                threeIndex = 3;
              } else {
                oneIndex = 3,
                threeIndex = 2;
              }
              zIndex = "zIndex" + oneIndex;
              document.getElementById("one").className = "card-container " + zIndex;
              zIndex = "zIndex" + twoIndex;
              document.getElementById("two").className = "card-container " + zIndex;
              zIndex = "zIndex" + threeIndex;
              document.getElementById("three").className = "card-container " + zIndex;
        }
        setTimeout(function() {
            $("#two").css( "zIndex", twoIndex );
            $("#one").css( "zIndex", oneIndex );
            $("#three").css( "zIndex", threeIndex );
        }, 500);
        setTimeout(function pushIn() {
          $("#two").removeClass("out");
            $("#two").css( "zIndex", twoIndex );
        }, 1000);
        }
    else if ($("#two").hasClass("zIndex4")) {
        if (oneIndex < threeIndex) {
          oneIndex = 3,
          threeIndex = 4;
          zIndex = "zIndex" + oneIndex;
          document.getElementById("one").className = "card-container " + zIndex;
          zIndex = "zIndex" + threeIndex;
          document.getElementById("three").className = "card-container " + zIndex;
        }
        else {
          oneIndex = 4,
          threeIndex = 3;
          zIndex = "zIndex" + oneIndex;
          document.getElementById("one").className = "card-container " + zIndex;
          zIndex = "zIndex" + twoIndex;
          document.getElementById("two").className = "card-container " + zIndex;
        }
      twoIndex = 1;
      setTimeout(function pushOut() {
        $("#two").addClass("out");
          $("#two").css( "zIndex", 4 );
      }, 1);
      setTimeout(function() {
          $("#two").css( "zIndex", 1 );
          $("#one").css( "zIndex", oneIndex );
          $("#three").css( "zIndex", threeIndex );
      }, 501);
      setTimeout(function pushIn() {
        $("#two").removeClass("out");
          $("#two").removeClass("zIndex4");
          $("#two").addClass("zIndex1");
      }, 1001);
      }
    }

  else if (card == 3) {
      if (!$("#three").hasClass("zIndex4")) {
            var tempNum = threeIndex;
            setTimeout(function() {
                $("#three").addClass("out");
                $("#three").css( "zIndex", tempNum );
            }, 1)
            if (threeIndex > twoIndex && threeIndex > oneIndex) {
              threeIndex = 1;
                  if (oneIndex < twoIndex) {
                    oneIndex = 3,
                    twoIndex = 4;
                    document.getElementById("two").className = "card-container " + zIndex;
                    zIndex = "zIndex" + threeIndex;
                    document.getElementById("three").className = "card-container " + zIndex;
                  } else {
                    oneIndex = 4,
                    twoIndex = 3;
                    document.getElementById("two").className = "card-container " + zIndex;
                    zIndex = "zIndex" + threeIndex;
                    document.getElementById("three").className = "card-container " + zIndex;
                  }
                  zIndex = "zIndex" + oneIndex;
                  document.getElementById("one").className = "card-container " + zIndex;
                  zIndex = "zIndex" + twoIndex;
          }
          else {
            threeIndex = 4;
                  if (oneIndex < twoIndex) {
                    oneIndex = 2,
                    twoIndex = 3;
                    zIndex = "zIndex" + oneIndex;
                    document.getElementById("one").className = "card-container " + zIndex;
                    zIndex = "zIndex" + twoIndex;
                    document.getElementById("two").className = "card-container " + zIndex;
                  } else {
                    oneIndex = 3,
                    twoIndex = 2;
                    zIndex = "zIndex" + oneIndex;
                    document.getElementById("one").className = "card-container " + zIndex;
                    zIndex = "zIndex" + twoIndex;
                    document.getElementById("two").className = "card-container " + zIndex;
                  }
                  zIndex = "zIndex" + threeIndex;
                  document.getElementById("three").className = "card-container " + zIndex;
          }
          setTimeout(function() {
              $("#three").css( "zIndex", threeIndex );
              $("#one").css( "zIndex", oneIndex );
              $("#two").css( "zIndex", twoIndex );
          }, 601);
          setTimeout(function pushIn() {
            $("#three").removeClass("out");
              $("#three").css( "zIndex", threeIndex );
          }, 1000);
        }
      else if ($("#three").hasClass("zIndex4")) {
          if (oneIndex < twoIndex) {
            oneIndex = 3,
            twoIndex = 4;
            zIndex = "zIndex" + oneIndex;
            document.getElementById("one").className = "card-container " + zIndex;
            zIndex = "zIndex" + twoIndex;
            document.getElementById("two").className = "card-container " + zIndex;
          }
          else {
            oneIndex = 4,
            twoIndex = 3;
            zIndex = "zIndex" + oneIndex;
            document.getElementById("one").className = "card-container " + zIndex;
            zIndex = "zIndex" + twoIndex;
            document.getElementById("two").className = "card-container " + zIndex;
          }
          threeIndex = 1;
        setTimeout(function pushOut() {
          $("#three").addClass("out");
            $("#three").css( "zIndex", 4 );
        }, 1);
        setTimeout(function() {
            $("#three").css( "zIndex", 1 );
            $("#one").css( "zIndex", oneIndex );
            $("#two").css( "zIndex", twoIndex );
        }, 601);
        setTimeout(function pushIn() {
          $("#three").removeClass("out");
            $("#three").removeClass("zIndex4");
            $("#three").addClass("zIndex1");
        }, 1001);
        }
      }
// var zIndex = "";
//   if (!$("#one").hasClass("zIndex4")) {
//     if
//   twoIndex -= 1;
//   threeIndex -= 1;
//   oneIndex -= 1;
//   zIndex = "zIndex" + oneIndex;
//   document.getElementById("one").className = "card-container " + zIndex;
//   zIndex = "zIndex" + twoIndex;
//   document.getElementById("two").className = "card-container " + zIndex;
//   zIndex = "zIndex" + threeIndex;
//   document.getElementById("three").className = "card-container " + zIndex;
//   document.getElementById(card).className = "card-container zIndex4";
//   }
}
});
