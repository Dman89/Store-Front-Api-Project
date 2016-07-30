var mongoose = require('mongoose');
// var configAuth = require('../config/auth'); || configAuth.stripeAuth.clientID
var fileClientID = process.env.stripeID;
var stripe = require('stripe')(fileClientID);
module.exports = stripe;
