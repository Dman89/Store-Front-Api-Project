var mongoose = require('mongoose');
var configAuth = require('../config/auth');
var fileClientID = process.env.stripeID || configAuth.stripeAuth.clientID
var stripe = require('stripe')(configAuth.stripeAuth.clientID);
module.exports = stripe;
