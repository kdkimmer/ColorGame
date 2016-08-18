	var correct = false;
	var guesses = 0;
	var guess_input;

function doGame(){
	
	var colors = ["aqua", "blue", "cadetblue", "darkgreen", "gainsboro", "indigo", "lawngreen", "orchid", "papayawhip", "rosybrown"];
	colors.sort();
	var randomColor = colors[math.floor(math.random() * colors.length)];

	while !correct{
		guess_input = prompt("Let's play the Color Guessing Game!  I have choosen a color and now you guess it.  Please enter your color of choice from this list: " + colors.join(","));
		guesses += 1;
		correct = check_guess();
	}
	
}
	
function check_guess(){
	if (colors.indexOf(guess_input) === -1){
		alert("That color is not in the list.  Please try again.");
		return false;
	}		
	if(guess_input > randomColor){
		alert("Your color is past the color alphabetically, choose a color lower in the alphabet" );
		return false;
	}
	if(guess_input < randomColor){
		alert("Your color is below the color alphabetically, choose a color higher in the alphabet" );
		return false;
	}
	if(guess_input == randomColor){
	alert("You got it, the color was " + randomColor + ". /n/nIt took you " + guesses + " guesses to get the color!");
	return true;
	}
}	
