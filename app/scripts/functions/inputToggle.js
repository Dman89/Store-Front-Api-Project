'use strict'
var inputToggle = function(val, callback) {
  var maxVal = 20;
      if (val < maxVal) {
        callback(true);
      } else {
        callback(false);
      }
    }
module.exports = inputToggle;
