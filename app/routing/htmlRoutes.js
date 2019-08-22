var express = require('express');
var path = require('path');
var apiRout = require('../routing/apiRoutes');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/css", express.static(__dirname + 'app/'));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
