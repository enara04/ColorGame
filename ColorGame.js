var colors = generateRandomColors(6);
/* ["rgb(255, 0, 0)",
			"rgb(255, 255, 0)",
			"rgb(0, 255, 0)",
			"rgb(0, 255, 255)",
			"rgb(0, 0, 255)",
			"rgb(255, 0, 255)",
	]
	*/
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var numSquares = 6;

	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			//figure out how many squares to show
			//this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			if (this.textContent === "Easy"){
			numSquares = 3;
			} else {
				numSquares = 6;
			}
			//pick new colors
			//pick a newPickedColor
			reset();
		});
	}

function reset(){
//generate all new colors
colors = generateRandomColors(numSquares);
//pick a new random color
pickedColor = pickColor();
//change color display to match picked color
colorDisplay.textContent = pickedColor;
resetButton.textContent = "New Colors";
messageDisplay.textContent = "";
//change colors of squares
	for (var i = 0; i < squares.length; i++){
		//add initial colors to squares
		if(colors[i]){
			//add initial colors to squares
			squares[i].style.backgroundColor = colors[i];
			}	else {
				squares[i].style.backgroundColor = "lightblue";	
			}
		}
	h1.style.backgroundColor ="steelblue";

	}

//var numSquares = 6;
/* ez is egy módszer, de egyszerűbb megadni class-t adni a két buttonnak
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	messageDisplay.textContent = "";
	//generate all new colors
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		}	else {
			squares[i].style.backgroundColor = "lightblue";	
		}
	}
	h1.style.backgroundColor ="steelblue";
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	messageDisplay.textContent = "";
	//generate all new colors
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	h1.style.backgroundColor ="steelblue";
});

*/

resetButton.addEventListener("click", reset);
/* reset funkció nélküli verzió
//generate all new colors
colors = generateRandomColors(numSquares);
//pick a new random color
pickedColor = pickColor();
//change color display to match picked color
colorDisplay.textContent = pickedColor;
//change colors of squares
for (var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	}
h1.style.backgroundColor ="steelblue";
resetButton.textContent = "New Colors";
messageDisplay.textContent = "";
});
*/

colorDisplay.textContent = pickedColor ;

for (var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = pickedColor;
			changeColors(pickedColor);
			resetButton.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "lightblue";
				messageDisplay.textContent = "Try Again";
			}		
	});
}

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < colors.length; i++){
//change each color to correct one
	squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//Math.floor - decimal véget levágja
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to array
	for (var i = num - 1; i >= 0; i--) {
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b + ")";
}

