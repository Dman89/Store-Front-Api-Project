// Disable "configAuth" to turn off test mode


// var configAuth = require('../config/auth');


// If else statment for test mode
var id;
// if (configAuth) {
//   id = configAuth.openExchangeRates.clientID;
// } else {
//  id = process.env.openExchange;
// }






// EDX MEAN STACK CLASS BY MONGODB : https://courses.edx.org/courses/course-v1:MongoDBx+M101x+2T2016/courseware/b98ea9e664a6497eade777b9a21b330c/818c678064a141f4ab71522449beb61c/
var superagent = require('superagent');
var _ = require('underscore');





module.exports = function(Config) {
  var url = 'http://openexchangerates.org/api/latest.json?app_id=' +
    id;
  var rates = {
    USD: 1,
    EUR: 1.1,
    GBP: 1.5
  };

  var ping = function(callback) {
    superagent.get(url, function(error, res) {
      // If error happens, ignore it because we'll try again in an hour
      if (error) {
        if (callback) {
          callback(error);
        }
        return;
      }

      var results;
      try {
        var results = JSON.parse(res.text);
        _.each(results.rates || {}, function(value, key) {
          rates[key] = value;
        });
        if (callback) {
          callback(null, rates);
        }
      } catch (e) {
        if (callback) {
          callback(e);
        }
      }
    });
  };

    setInterval(ping, 60 * 60 * 1000); // Repeat every hour

    // Return the current state of the exchange rates
    var ret = function() {
      return rates;
    };
    ret.ping = ping;
    return ret;
  };
