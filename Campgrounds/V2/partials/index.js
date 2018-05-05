<% include partials/header %>


<div class= "container">
    

<header class= "jumbotron">
   <h1>Welcome to YelpCamp!</h1> 
   <p>View our hand-picked campgrounds from all over the world!</p>
   <p>
      <a class= "btn btn-primary btn-large" href= "/campgrounds/new">Add a new Campground</a> 
   </p>
</header>
<div class= "row text-center" style="display : flex; flex-wrap : wrap;">
   <% campgrounds.forEach(function(campground){ %>
<div class= "col-md-3 col-sm-6">
    <div class= "thumbnail">
         <img src= "<%= campground.image %>">
        <div class = "caption">
          <h4> <%= campground.name %></h4>
        </div>    
        <a href= "/campgrounds/<%= campground._id %>" class= "btn btn-primary" >More info</a>
    </div>
</div>


<% }); %>
</div>
</div>
<% include partials/footer %>
