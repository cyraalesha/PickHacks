const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var path = require('path');
let port = process.env.PORT || 3000

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(express.static("public"));

app.get("/",function(req,res){
   res.render("index");
});


app.listen(port,function(){
  console.log("running on 3000");
});
