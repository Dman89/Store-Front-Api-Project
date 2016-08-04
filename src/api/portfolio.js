'use strict';
var express = require('express');
var Portfolio = require('../models/portfolio');
var portfolioRouter = express.Router();
//Portfolios
//Create Portfolio
portfolioRouter.post('/portfolio', function(req, res) {
  var portfolio = req.body;
  if (!req.body) {
    res.send({message: 'Nothing Sent to Server'})
    console.log('Nothing Sent to Server')
  }
  else {
    Portfolio.create(portfolio, function(err, portfolio) {
      if (err) {
        return res.status(500).json({err: err.message});
      }
      res.send({message: 'Portfolio Created'})
      console.log('Portfolio Created!')
    })
  }
})
// // Update Portfolio
portfolioRouter.put('/portfolio/id/:id', function (req, res) {
  var id = req.params.id;
  var portfolio = req.body;
  if (portfolio && portfolio._id !== id) {
    return res.status(500).json({err: portfolio});
  }
  Portfolio.findByIdAndUpdate(id, portfolio, {new: true}, function(err, portfolio) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    //TODO: Remove or only return profile
    res.send({'portfolio': portfolio, 'message':'Portfolio Updated'});
    console.log('Your portfolio has been edited!')
  })
})
// Delete Portfolio
portfolioRouter.delete('/portfolio/id/:id', function (req, res) {
  var id = req.params.id
  Portfolio.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({message: err.message})
    } else {
      res.json({message: 'Deleted Portfolio'});
      console.log('Deleted Portfolio');
    }
  })
})
// // Get Portfolio By ID
portfolioRouter.get('/portfolio/id/:id', function(req, res) {
  var id = req.params.id;
  Portfolio.find({_id: id}, function(err, portfolios) {
    if (err) {
      console.log('Oh Shucks!');
      return res.status(500).json({message: err.message});
    }
    if (portfolios == undefined) {
      res.status(404).json({"message": "Not a Portfolio"})
    } else {
      //TODO: return only profiles
    res.json({"portfolios":portfolios});
  }
  })
});
//List Portfolios
var tempUsers = {};
portfolioRouter.get('/portfolio', function(req, res) {
  Portfolio.find({}, function(err, portfolios) {
    if (err) {
      console.error('Oh Shucks!');
      return res.status(500).json({message: err.message});
    } else {
      res.json({"portfolios":portfolios});
    }
  })
})

module.exports = portfolioRouter;
