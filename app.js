const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["buy food", "cook food"];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req,res){
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  if (currentDay === 0 || currentDay === 6 ){
    day= "Weekend";
  } else {
    day = "Weekday";
  }
  res.render("list",{kindOfDay: day, newListItems: items });
});


app.post("/", function(req,res){
  var item=req.body.newItem;
  items.push(item);
  res.redirect("/");
});




app.listen(3000, function (){
  console.log("Server is running on port 3000");
});
