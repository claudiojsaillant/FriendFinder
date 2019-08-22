var express = require('express');
var friendsFile = require('../data/friends');
var data = friendsFile.friends;
console.log('connected')

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/friends", function (req, res) {
    res.json(data);
});

app.post("/api/friends", function(req, res) {
    
    
  });

  console.log('end')


