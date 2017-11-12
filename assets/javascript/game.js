////Welcome page. to make sure the js file is linked
alert("Hello. Welcome to Psychic game");
// Creates an array that lists out all of the alphabet optiom
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Creating variables to hold the number of wins, losses, and # of guess left 
var userWins = 0;
var userLosses = 0;
var guessLeft = 10;
var allUserGuess = [];

 
function resetGame() {
    if (guessLeft === 0) {
        alert("Game Over");
        userWins = 0;
        userLosses = 0;
        guessLeft = 10;
        allUserGuess = "";
        
    } else {
        console.log("Keep playing");
    }
};

function userWinner() {
    if (userWins === 1) {
        alert("Winner");
        resetGame();
     
    } else {
        console.log("Keep playing");
    }
};
// Computer pick alphabet randomly from the array
//create function when user press the key
document.onkeyup = function (event) {
    //define letter which user is picked
    var userPick = event.key;
    allUserGuess.push(userPick);
    // computer randomly pick
    var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (userPick === computerRandom) {
        userWins++;
        userWinner();
        resetGame(); 
    } else {
        userLosses++;
        guessLeft--;
    }
    // check if the guess left = 0 then system will show alert to reset the new
    resetGame()
    // replace the element tag with different html print out
    var html =
        "<p>You chose: " + userPick + "</p>" +
      
        "<p>The computer chose: " + computerRandom + "</p>" +
        "<p>You wins: " + userWins + "</p>" +
        "<p>You losses: " + userLosses + "</p>" +
        "<p>Your guess left: " + guessLeft + "</p>" +
       "<p>Letter you chose so far: " + allUserGuess + "</p>";
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
};