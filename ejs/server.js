const express = require("express");
const app = express();

//Set view engine to ejs-first
app.set("view engine", "ejs");

//index.page
app.get("/", function(req, res){
  const drinks = [
    { name: "Bloody Mary", drunkeness: 3 },
    { name: "Martini", drunkeness: 5 },
    { name: "Scotch", drunkeness: 10 },
  ];

  const tagLine = "We have any code that no one has looked at for ages...";

  res.render("pages/index", {
    drinks: drinks,
    tagLine: tagLine
  });
});

app.get("/about", function(req, res){
  res.render("pages/about");
});

app.listen(8080, function(){
  console.log("Serving ejs magick on 8080!");
});
