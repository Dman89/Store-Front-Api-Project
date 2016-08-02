'use strict';
var express = require('express');
var Blog = require('../models/blog');
var blogRouter = express.Router();
//products
blogRouter.get('/blog', function (req, res) {
  Blog.find({}, function(err, posts) {
    if (err) {
      console.log('Oh Shucks!');
      return res.status(500).json({message: err.message});
    }
    res.json({posts:posts});
  }).sort({date: -1})
})
blogRouter.get('/blog/:id', function(req, res) {
  var id = req.params.id.toLowerCase();
  Blog.findOne({ _id: id }, function(err, posts) {
    if (err) {
      console.error("Oh Shucks!");
    }
    if (products == undefined) {
      res.status(404).json({"message": "Not a Post"})
    } else {
      res.json({posts: posts});
  }
  })
})
blogRouter.get('/blog/main/main', function(req, res) {
  var searchTerm = 'main';
  Blog.find({ loc: searchTerm }, function(err, posts) {
    if (err) {
      console.error("Oh Shucks!");
    }
    if (products == undefined) {
      res.status(404).json({"message": "Not a Post"})
    } else {
      res.json({posts: posts});
  }
  }).sort({date: -1})
})
blogRouter.get('/blog/main/subA', function(req, res) {
  var searchTerm = 'subA';
  Blog.find({ loc: searchTerm }, function(err, posts) {
    if (err) {
      console.error("Oh Shucks!");
    }
    if (products == undefined) {
      res.status(404).json({"message": "Not a Post"})
    } else {
      res.json({posts: posts});
  }
  }).sort({date: -1})
})
blogRouter.get('/blog/main/subB', function(req, res) {
  var searchTerm = 'subB';
  Blog.find({ loc: searchTerm }, function(err, posts) {
    if (err) {
      console.error("Oh Shucks!");
    }
    if (products == undefined) {
      res.status(404).json({"message": "Not a Post"})
    } else {
      res.json({posts: posts});
  }
  }).sort({date: -1})
})
blogRouter.get('/blog/main/subC', function(req, res) {
  var searchTerm = 'subC';
  Blog.find({ loc: searchTerm }, function(err, posts) {
    if (err) {
      console.error("Oh Shucks!");
    }
    if (products == undefined) {
      res.status(404).json({"message": "Not a Post"})
    } else {
      res.json({posts: posts});
  }
  }).sort({date: -1})
})
blogRouter.put('/blog/post/id/:id', function (req, res) {
  var id = req.params.id;
  Blog.findByIdAndUpdate(id, req.body, {new: true}, function(err, response) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.send({'blog': response});
  })
})
blogRouter.post('/blog', function(req, res) {
  var postData = req.body;
  Blog.create(postData, function(err, post) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.send({'post': post, message: "Post Added"});
  })
})
blogRouter.delete('/blog/post/id/:id', function (req, res) {
  var id = req.params.id
  Blog.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({message: err.message})
    } else {
      res.json({message: 'Deleted Post'});
      console.log('Post Added')
    }
  })
})
// Search name
blogRouter.get('/blog/search/:query', function (req, res) {
  Blog.find({ $text: { $search : req.params.query } },
                { score : { $meta : 'textScore' } } )
                .sort({ score : { $meta : 'textScore' } })
                .limit(10)
                .exec(handleMany.bind(null, 'posts', res))
})
function handleMany(property, res, error, result) {
  if (error) {
    console.log(error);
    return res.
      status(status.INTERNAL_SERVER_ERROR).
      json({ error: error.toString() });
  }

  var json = {};
  json[property] = result;
  res.json(json);
}
module.exports = blogRouter;
