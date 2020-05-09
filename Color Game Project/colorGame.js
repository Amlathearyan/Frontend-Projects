var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
		
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		
		squares[i].style.backgroundColor = colors[i];
		
		squares[i].style.display = "block";
		
	}
});


resetButton.addEventListener("click", function(){

	// generate random colors
	colors = generateRandomColors(6);
	// pick a new random color from an array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});


colorDisplay.textContent = pickedColor ;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to the squares
	squares[i].style.backgroundColor = colors[i] ;

	// add click listeners to the square
	squares[i].addEventListener("click", function(){

		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to picked square
		if (clickedColor === pickedColor) 
		{
			messageDisplay.textContent = " Correct ";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else
			{ 
				this.style.backgroundColor = "#232323" ;
				messageDisplay.textContent = " Try Again";
		    }
	});
}

function changeColors(color){

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color ;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num colors to an array
	for (var i = 0; i < num; i++) 
	{
		arr.push(randomColors());
	}
	// return the array
	return arr;
}

function randomColors(){
	// pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	// return the random color
	return "rgb(" + r + ", " + g + ", " + b + ")"
}