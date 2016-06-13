var mongoose = require('mongoose');
var configAuth = require('../config/auth');
var stripe = require('stripe')(configAuth.stripeAuth.clientID);
module.exports = stripe;
