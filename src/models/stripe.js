// Disable "configAuth" to turn off test mode


// var configAuth = require('../config/auth');


// If else statment for test mode
var fileClientID;
// if (configAuth) {
// fileClientID = process.env.stripeID || configAuth.stripeAuth.clientID;
// } else {
fileClientID = process.env.stripeID || "sk_test_mCQOaAhCGPojcTfzHH3jN78O";
// }


var mongoose = require('mongoose');
var stripe = require('stripe')(fileClientID);
module.exports = stripe;
