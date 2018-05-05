<% include partials/header %>
<div class= "container">
    <div class= "row">
        
           <h1 class= "text-center">Create a new Campground</h1>
           <div style= "width: 30%; margin: 25px auto;">
          <form action = "/campgrounds" method = "POST">
              <div class= "form-group">
                 <input class= "form-control" type= "text" placeholder= "name" name= "name">
              </div>
               <div class= "form-group">
                 <input class= "form-control" type= "text" placeholder= "img url" image="image">
               </div>
               <div class= "form-group">
                 <input class= "form-control" type= "text" placeholder= "description" name="description">
               </div>
                <div class= "form-group">
                 <button class="btn btn-lg btn-primary btn-block" >Submit!!</button>
               </div>
          </form>
          <a href= "/campgrounds">Go Back</a>
          </div>
         
    </div>
</div>

<% include partials/footer %>
