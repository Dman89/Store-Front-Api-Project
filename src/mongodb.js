'use strict';
var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/goals';
mongodb.MongoClient.connect(uri, function(error, db) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  var doc = {"title":"File Added Goal",
  "catagory":"Spiritual",
  "achievements":
  [
    {"item":"Achievement"},
    {"item":"Achievement"},
    {"item":"Achievement"}
  ]};
    db.collection('goals').find().toArray(function(error, docs) {
        if (error) {
          console.log(error);
          process.exit(1);
        }
        console.log("Found Docs");
        docs.forEach(function(doc) {
          console.log(JSON.stringify(doc));
        });
    })
  })
