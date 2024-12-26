// Create web server

// Importing required modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./comments');

// Create an Express web server
var app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/comments');

// Use the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Define the routes
app.get('/', function(req, res) {
  res.send('Hello, World!');
});

// Create a new comment
app.post('/comment', function(req, res) {
  var comment = new Comment(req.body);
  comment.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: 'Comment added!' })
    }
    }
    );
}
);
