var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

   // load up the user model and auth variables
   var User       = require('../models/user');
   var configAuth = require('./auth');

   module.exports = function(passport) {

        passport.serializeUser(function(user, done) {
            done(null, user.id);
        });

        passport.deserializeUser(function(id, done) {
            User.findById(id, function(err, user) {
               done(err, user);
           });
        });

       // Facebook Strategy
        passport.use(new FacebookStrategy({

            // pull app id and secret from our auth.js file
            clientID        : configAuth.facebookAuth.clientID,
            clientSecret    : configAuth.facebookAuth.clientSecret,
            callbackURL     : configAuth.facebookAuth.callbackURL

        },

          // facebook will send back the token and profile
        function(token, refreshToken, profile, done) {

              process.nextTick(function() {
                var newOne = '';
                var num = 0;
                  User.find({}, function(err, list) {
                    if (err) {
                      return json(err).status(500);
                    }
                    else {
                          var num = Math.round(list.length + 2);
                          var tempUsername = profile.displayName.replace(/[^a-z ]/gi, '');
                          var temp = tempUsername.split(' ');
                          newOne = temp.join("_");
                          newOne = newOne + num;
                    }
                    });
                    // find the user in the database based on their facebook id
                    User.findOne({ 'data._id' : profile.id }, function(err, user) {

                      if (err) {
                        return done(err);
                      }
                      // if the user is found, then log them in
                      if (user) {
                        return done(null, user);
                      }
                      else {
                        var newUser = new User();
                          newUser.profile.username = newOne;
                          newUser.data._id    = profile.id;
                          newUser.data.oauth = token;
                          newUser.data.displayName  = profile.displayName;
                          newUser.save(function(err) {
                            if (err) {
                              return err.json(err.status(500));
                             }
                              // if successful, return the new user
                              return done(null, newUser);
                            });

                          }

                    });



              });
        }));

      };
