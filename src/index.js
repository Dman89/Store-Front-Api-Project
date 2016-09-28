'use strict';
var cookieParser = require('cookie-parser');
var express = require('express');
var expressSession = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var parser = require('body-parser');
var passportFB = require('passport-facebook');
var adminRouter = require('./api/admin');
var blogRouter = require('./api/posts');
var cartRouter = require('./api/cart');
var categoryRouter = require('./api/category');
var productRouter = require('./api/products');
var orderHistoryRouter = require('./api/orderHistory');
var userRouter = require('./api/user');
var portfolioRouter = require('./api/portfolio');
var carouselRouter = require('./api/carousel');
var password = process.env.secret || 'keyboardWarriors'
var app = express();
var portReplace = process.env.PORT || 3000;
require('./config/passport.js')(passport);
require('./database.js');
// require('./seed.js');
// Creates a new Product in database~: require('./functions/newProduct.js');
//require('./functions/newUser.js');
app.use('/', express.static('public'));
app.use(cookieParser(password));
app.use(parser.json());
app.use(flash());
app.use(expressSession({ secret: password,
  resave: false,
  saveUninitialized: true,
  cookie: { expires: false }
 }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', userRouter);
app.use('/api', blogRouter);
app.use('/api', adminRouter);
app.use('/api', productRouter);
app.use('/api', categoryRouter);
app.use('/api', cartRouter);
app.use('/api', orderHistoryRouter);
app.use('/api', portfolioRouter);
app.use('/api', carouselRouter);
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'}));
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/#/store',
        failureRedirect : '/#/login',
        successFlash: 'Welcome!'
    }));
app.get('/env', function(res) {
   res({'API_URL': "https://www.googleapis.com/calendar/v3/calendars/"+process.env.googleCalApiUSEREMAIL + "/events?key=" + process.env.googleCalApiAPIKEY})
})
// route for logging out
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
app.listen(portReplace, function() {
  console.log("Express Server is Running on Port " + portReplace)
});
