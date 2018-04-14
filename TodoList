var express = require("express");
var app = express();
var $ = require("jquery");
var req = require("request");
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/views"));
//app.use(express.static(__dirname + "/views"));

app.get("/" , function(req , res) {
    res.render("home");
});
app.get("/mytodo" , function(req , res ){
    res.render("todo");
})
 app.delete("/delete" , function(req, res) {
     res.send(req.body.data);
 });
app.listen(process.env.PORT , process.env.IP , function(){
    console.log("Your server has started");
});
