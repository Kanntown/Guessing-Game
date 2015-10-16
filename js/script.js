//start with asking the user if they want to play a game
// document.getElementById("form").addEventListener("click", function() {

//how to generate a secret number
var answer = 23;

//var secret = Math.floor[100 * Math.random()] + 1;

var guess = prompt("Guess a number 1-100");

for (i=0; i < 100; i ++) {
  if (answer == guess) {
    alert("You guessed right!");
    break;
  } else {
      guess = prompt("Try again");

  }
}





//prompt user to guess a number, write it in a general function that can be repeated through the code
//prompt the user if their guess is too high or too low
//let user know which numbers they have previously guessed
