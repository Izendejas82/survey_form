
var express = require("express");
var path = require("path");



var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({}));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views",path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

app.post('/result', function(req, res) {

  console.log(req.body);


  // submitted_info = {
  //   name: req.body.name,
  //   dojo_location: req.body.dojo_location,
  //   favorite_language: req.body.favorite_language,
  //   comment: req.body.comment
  // };
  res.render("result",{user_data: req.body});
})


app.listen(8000, function() {
 console.log("listening on port 8000");
});
