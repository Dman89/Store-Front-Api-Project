'use strict';
var express = require('express');
var parser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var passportFB = require('passport-facebook');
var app = express();
var productRouter = require('./api/products');
var categoryRouter = require('./api/category');
var cartRouter = require('./api/cart');
var userRouter = require('./api/user');
require('./config/passport.js')(passport);
require('./database.js');
// Creates a new Product in database~: require('./functions/newProduct.js');
//require('./functions/newUser.js');
app.use('/', express.static('public'));
app.use(parser.json());
app.use(flash());
  app.use(require('express-session')({ secret: 'keyboardWarriors',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
 }));
 app.use(passport.initialize());
 app.use(passport.session());
app.use('/api', userRouter);
app.use('/api', productRouter);
app.use('/api', categoryRouter);
app.use('/api', cartRouter);
app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email'] }));
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/api/profile',
        failureRedirect : '/fail',
        successFlash: 'Welcome!'
    }));

// route for logging out
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
app.get('/profile', function(req, res) {
  // User.find({_id: id}, function(err, users) {
  //   if (err) {
  //     console.log('Oh Shucks!');
  //     return res.status(500).json({message: err.message});
  //   }
  //   if (users == undefined) {
  //     res.status(404).json({"message": "Not a User"})
  //   } else {
  //   var tempUsers = users;
  //   var users = users.profile;
  //   res.json({"users":tempUsers});
  // }
  // })
})
app.listen(3000, function() {
  console.log("Express Server is Running on Port 3000")
});
