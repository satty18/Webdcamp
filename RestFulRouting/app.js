var express= require("express"),
app= express(),
methodOverride= require("method-override"),
expressSanitizer= require("express-sanitizer"),
bodyparser= require("body-parser"),
mongoose = require("mongoose");

//App config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine" , "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(methodOverride(" _method"));
var blogschema= new mongoose.Schema({
    title: String,
    image : String,
    body : String,
    created : {type : Date , default: Date.now}
    
});

var Blog= mongoose.model("Blog" , blogschema);

// Blog.create({
//     title: "Test Blog",
//     image: "http://r.ddmcdn.com/w_830/s_f/o_1/cx_20/cy_1463/cw_2528/ch_1422/APL/uploads/2014/11/puppy-cam-veer-2893191.jpg",
//     body: "This is awesome!!"
// })

//Restful Routes

app.get("/" , function(req, res) {
    res.redirect("/blogs");
});


app.get("/blogs" , function(req , res){
    Blog.find({} , function(err , blogs){
        if(err){
            console.log(err);
            
            }else{
              res.render("index" , {blogs : blogs});  
            }
    })
    //res.render("index");
    
})
//New route
app.get("/blogs/new" , function(req, res) {
    res.render("new");
});

//Create route
app.post("/blogs" , function(req , res){
    
    //sanitize takes place here...we sanitize things so that malacious codes are not written when code runs
   // req.body.blog.body= req.sanitize(req.body.blog.body);

    //     console.log(req.body);

    //create blog
    Blog.create(req.body.blog , function(err , newblog){
        if(err){
             res.render("new");
        }else{
            //redirect to index
            res.redirect("/blogs");
        }
    });
});

//Show route
app.get("/blogs/:id" , function(req, res) {
   //Find blogs by id
   Blog.findById(req.params.id , function(err , foundblog){
     if(err){
         
     }  else{
         res.render("show" , {blog: foundblog});
     }
   });
});
//Edit Route
app.get("/blogs/:id/edit" , function(req, res) {
     Blog.findById(req.params.id , function(err , foundblog){
     if(err){
         res.redirect("/blogs");
     }  else{
          res.render("edit" , {blog: foundblog});    
          }
    
});
});

//Update Route....edit route goes here
app.put("/blogs/:id" , function(req, res){
        req.body.blog.body= req.sanitize(req.body.blog.body);

Blog.findByIdAndUpdate(req.params.id , req.body.blog , function(err , updatedblog){
    if(err){
        res.redirect("/blogs");
    } else{
        res.redirect("/blogs/" + req.params.id);
    }
});
});

//Delete Route
app.delete("/blogs/:id" , function(req , res){
    //destroy blog
    Blog.findByIdAndRemove(req.params.id , function(err){
        if(err){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs");

        }
    })
})


app.listen(process.env.PORT , process.env.IP, function(){
    console.log("Server is running");
});
