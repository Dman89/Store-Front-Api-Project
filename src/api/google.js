'use strict';
var express = require('express');
var googleRouter = express.Router();
//products
googleRouter.get("https://www.googleapis.com/calendar/v3/calendars/"+process.env.googleCalApiUSEREMAIL + "/events?key=" + process.env.googleCalApiAPIKEY, function (req, res) {
  console.log(res);
})
module.exports = googleRouter;
