////Welcome page. to make sure the js file is linked
alert("Hello. Welcome to Psyhic game");
// Creates an array that lists out all of the alphabet optiom
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Creating variables to hold the number of wins, losses, and # of guess left 
var userWins = 0;
var userLosses = 0;
var guessLeft = 9;
var allUserGuess = [];
var allComputerGuess = [];



function resetGame() {
    if (guessLeft === 0) {
        alert("Game Over");
        userWins = 0;
        userLosses = 0;
        guessLeft = 9;
    } else {
        console.log("Keep playing");
    }
};
// Computer pick alphabet randomly from the array
//create function when user press the key
document.onkeyup = function (event) {
    //define letter which user is picked
    var userPick = event.key;
    // computer randomly pick
    var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (userPick === computerRandom) {
        userWins++;
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
        "<p>Your guess left: " + guessLeft + "</p>";
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
};


// // Various Arrays
//      var brands = ["Acer", "Apple", "Sony", "Samsung"];
//      var heroes = ["Black Panther", "Cyborg", "Black Canary", "Donna Troy", "Huntress", "Blue Beetle", "Captain Atom"];
//      var booksOnMyShelf = ["Calculus Early Transcendentals", "Ravens", "The Self Illusion", "Harry Potter"];
//      var thingsInFrontOfMe = ["Laptop", "Beanbag", "Cats", "Slippers"];
//      var howIFeel = ["Sleep Deprived", "Wired on Coffee", "Excited"];
//
//      // FUNCTIONS
//      // ========================================================================================
//
//      // Here we create a "Function" that allows us to "call" (run) the loop for any array we wish.
//      // We pass in an array as an "argument".
//      function consoleInside(arr) {
//
//        // We then loop through the selected array.
//        for (var i = 0; i < arr.length; i++) {
//
//          // Each time we print the value inside the array.
//          console.log(arr[i]);
//        }
//        console.log("---------");
//      }