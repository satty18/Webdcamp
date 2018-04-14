//This line only works for the existing elements of our list
   //$("li").click(function(){
//What we do now for future coming elements is
/* global $ */

$("ul").on("click" ,"li", function(){
if($(this).css("color")==="rgb(0, 255, 255)"){
	$(this).css({
            color:"black",
            textDecoration: "none"
               });

  }else{
	$(this).css({
            color:"cyan",
            textDecoration: "line-through"
               });
}
 
});
//same this line wont work for upcoming todos list
//$("span").click(function(event){

	//What we do is
	$("ul").on("click" ,"span", function(event){
$(this).parent().fadeOut(500, function(){
	$(this).remove();
});   
event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which===13){

		//grabbing text from the input:
		var todotext= $(this).val();
		 $(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>"); 

	}
});
$(".fa-arrows").click(function(){
	$("input[type='text']").fadeToggle();
})

//OR Instaed of the above code we can just write:
// $("li").click(function(){
// $(this).toggleClass("completed");
// });
