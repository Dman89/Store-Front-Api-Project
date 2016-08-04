'use strict';
var express = require('express');
var Carousel = require('../models/carousel');
var carouselRouter = express.Router();
//Carousels
//Create Carousel
carouselRouter.post('/carousel', function(req, res) {
  var carousel = req.body;
  if (!req.body) {
    res.send({message: 'Nothing Sent to Server'})
    console.log('Nothing Sent to Server')
  }
  else {
    Carousel.create(carousel, function(err, carousel) {
      if (err) {
        return res.status(500).json({err: err.message});
      }
      res.send({'carousel': carousel, message: 'Carousel Created'})
      console.log('Carousel Created!')
    })
  }
})
// // Update Carousel
carouselRouter.put('/carousel/id/:id', function (req, res) {
  var id = req.params.id;
  var carousel = req.body;
  if (carousel && carousel._id !== id) {
    return res.status(500).json({err: carousel});
  }
  Carousel.findByIdAndUpdate(id, carousel, {new: true}, function(err, carousel) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    //TODO: Remove or only return profile
    res.send({'carousel': carousel, 'message':'Carousel Updated'});
    console.log('Your carousel has been edited!')
  })
})
// Delete Carousel
carouselRouter.delete('/carousel/id/:id', function (req, res) {
  var id = req.params.id
  Carousel.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({message: err.message})
    } else {
      res.json({message: 'Deleted Carousel'});
      console.log('Deleted Carousel');
    }
  })
})
// // Get Carousel By ID
carouselRouter.get('/carousel/id/:id', function(req, res) {
  var id = req.params.id;
  Carousel.find({_id: id}, function(err, carousel) {
    if (err) {
      console.log('Oh Shucks!');
      return res.status(500).json({message: err.message});
    }
    if (carousel == undefined) {
      res.status(404).json({"message": "Not a Carousel Item"})
    } else {
      //TODO: return only profiles
    res.json({"carousel":carousel});
  }
  })
});
//List Carousels
var tempUsers = {};
carouselRouter.get('/carousel', function(req, res) {
  Carousel.find({}, function(err, carousel) {
    if (err) {
      console.error('Oh Shucks!');
      return res.status(500).json({message: err.message});
    } else {
      res.json({"carousel":carousel});
    }
  })
})

module.exports = carouselRouter;
