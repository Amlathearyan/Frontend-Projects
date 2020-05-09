/*
// Check off specific todos by clicking
$("li").click(function(){
	// if li is grey
	if($(this).css("color")=== "rgb(128, 128, 128)"){
		// turn it black
		$(this).css({
			color: "black" ,
			textDecoration: "none"
		});
	}
	

	// else
	else{
		// turn it grey
		$(this).css({
			color: "grey" ,
			textDecoration: "line-through"
		});
	}
	

});

*/

// Check off specific todos by clicking
$("ul").on("click", "li" , function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todos
$("ul").on("click", "span" , function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		// Grabbing new todo text from input
		var todoText = $(this).val();
		// To get an empty value after adding in the list
		$(this).val("");
		// Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}

});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});