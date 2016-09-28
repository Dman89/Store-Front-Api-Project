'use strict';
var express = require('express');
var googleRouter = express.Router();
//products
googleRouter.get('/env', function (req, res) {
  res.send("https://www.googleapis.com/calendar/v3/calendars/"+process.env.googleCalApiUSEREMAIL + "/events?key=" + process.env.googleCalApiAPIKEY);
})
module.exports = googleRouter;
