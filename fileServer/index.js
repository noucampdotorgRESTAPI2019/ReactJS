var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());
app.use(express.static('public'));

var myServer = app.listen(5000, function() {
  console.log("File Server listening on port 5000");
});