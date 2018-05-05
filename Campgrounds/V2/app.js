var express= require("express");
var app= express();
var bodyparser= require("body-parser");
var mongoose= require("mongoose");
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine" , "ejs");

//Schema setup
var campgroundschema= new mongoose.Schema({
    name: String,
    image: String,
    description: String
    
});
var Campground= mongoose.model("Campground" , campgroundschema);
// Campground.create(
//     {
//     name : "Satty" ,
//     image: "https://farm9.staticflickr.com/8289/7818411896_b941f8d959.jpg",
//     description : "Satty's campground, Beautiful...Isn't it?"
//     }, function(err , campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Newly created");
//             console.log(campground);
//         }
//     });


//  var campgrounds= [
//         {name : "Satty" , image: "https://farm9.staticflickr.com/8289/7818411896_b941f8d959.jpg"},
//         {name : "Punni" , image: "https://farm8.staticflickr.com/7115/7626381768_e49ff2fbba.jpg"},
//         {name : "Aman" , image: "https://farm2.staticflickr.com/1018/1293305907_b3c3e3a391.jpg"},
//         {name : "Sid" , image: "https://farm5.staticflickr.com/4033/4306518513_f35ecd90b5.jpg"},
//         {name : "Shubham" , image: "https://farm9.staticflickr.com/8289/7818411896_b941f8d959.jpg"},
//         {name : "Punit" , image: "https://farm8.staticflickr.com/7115/7626381768_e49ff2fbba.jpg"},
//         {name : "Tota" , image: "https://farm2.staticflickr.com/1018/1293305907_b3c3e3a391.jpg"},
//         {name : "Hawa" , image: "https://farm5.staticflickr.com/4033/4306518513_f35ecd90b5.jpg"}
    
//         ];
app.get("/" , function(req, res){
    res.render("landing");
});
    //INDEX : Show all campgrounds
        app.get("/campgrounds" , function(req ,res){
   //Get all campgrounds from DB
        Campground.find({} , function(err ,allcampgrounds){
       if(err){
           console.log(err);
       }  else{
           res.render("index" , {campgrounds:allcampgrounds});
       }      
    });
   
        // res.render("campgrounds" , {campgrounds:campgrounds});
});
    //NEW : show form to create new campgrouds
        app.get("/campgrounds/new" , function(req, res) {
         res.render("new.ejs");
});
    //CREATE : Add new campground to our pages
        app.post("/campgrounds" , function(req , res){
   //get data from form and add it to the array
     var name= req.body.name;
     var image= req.body.image;
     var desc= req.body.description;
     var newcampground= {name: name , image: image , description: desc};
    
   //Create a new campground and add it to DB..
     Campground.create(newcampground , function(err , newlycreated){
         if(err){
             console.log(err);
         }else{
             
              res.redirect("/campgrounds");
         }
    });
    
//campgrounds.push(newcampground);
    
    //redirect back to campgrounds page..
    // As there are two routes with same name.. so default /campgrounds goes to "get" route..
   // res.redirect("/campgrounds");
  
});
app.get("/campgrounds/:id" , function(req, res) {
    //Find the campground by id..
    Campground.findById(req.params.id , function(err , foundcampground){
        if(err){
            console.log(err);
        } else{
            //render show template with that campground
        res.render("show" , {campground : foundcampground});
        }
    });
  
});

app.listen(process.env.PORT , process.env.IP, function(){
    console.log("Yelp Camp server has started!");
});
