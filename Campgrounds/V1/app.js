var express= require("express");
var app= express();
var bodyparser= require("body-parser");
var mongoose= require("mongoose");


app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine" , "ejs");
 var campgrounds= [
        {name : "Satty" , image: "https://farm9.staticflickr.com/8289/7818411896_b941f8d959.jpg"},
        {name : "Punni" , image: "https://farm8.staticflickr.com/7115/7626381768_e49ff2fbba.jpg"},
        {name : "Aman" , image: "https://farm2.staticflickr.com/1018/1293305907_b3c3e3a391.jpg"},
        {name : "Sid" , image: "https://farm5.staticflickr.com/4033/4306518513_f35ecd90b5.jpg"},
        {name : "Shubham" , image: "https://farm9.staticflickr.com/8289/7818411896_b941f8d959.jpg"},
        {name : "Punit" , image: "https://farm8.staticflickr.com/7115/7626381768_e49ff2fbba.jpg"},
        {name : "Tota" , image: "https://farm2.staticflickr.com/1018/1293305907_b3c3e3a391.jpg"},
        {name : "Hawa" , image: "https://farm5.staticflickr.com/4033/4306518513_f35ecd90b5.jpg"}
    
        ];
app.get("/" , function(req, res){
    res.render("landing");
});
app.get("/campgrounds" , function(req ,res){
   
         res.render("campgrounds" , {campgrounds:campgrounds});
});
app.get("/campgrounds/new" , function(req, res) {
    res.render("new.ejs");
});
app.post("/campgrounds" , function(req , res){
    //get data from form and add it to the array
    var name= req.body.name;
    var image= req.body.image;
    var newcampground= {name: name , image: image};
    campgrounds.push(newcampground);
    
    //redirect back to campgrounds page..
    // As there are two routes with same name.. so default /campgrounds goes to "get" route..
    res.redirect("/campgrounds");
  
});

app.listen(process.env.PORT , process.env.IP, function(){
    console.log("Yelp Camp server has started!");
});
