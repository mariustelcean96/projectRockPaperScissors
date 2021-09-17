    
    /* The task is to create a (simple) Rock Paper Scissors game

    -> The GUI for the moment is not to be considered relevant.

    -> The script will compute a random value between 1 and 3 and will match the value to a predefined choice (e.g. 1 is for rock, etc.)
storing the choice in a variable called pcChoice

    -> The script will prompt the user to input one choice (rock, paper or scissors) 
and store it in a variable called userChoice (must be case-insensitive!)

    -> By this time the script should contain the 2 variables pcChoice and userChoice. Time to compare them.

    -> Once the comparison is made the output should be: *You/The PC won this game* or *The game is a tie*.

    -> Maybe keep a track of the score with two variables that are incremented each time someone wins.
*/


function computerPlay() {

// Teach the PC to randomly make one 
// of the 3 possible choices and store it in a variable called computerSelection and return it

const possibleChoices = ["rock", "paper", "scissors"];

let randomNumber = Math.floor(Math.random() * 3) + 1;

console.log("The current randomly generated number between 1 and 3 is: " + randomNumber);

    //However, array indexes start with 0 and in order to access indexes 0, 1 and 2:

    /*let forArrayRandomNumber = randomNumber - 1;
    console.log(forArrayRandomNumber);*/

let computerSelection = possibleChoices[randomNumber - 1];

console.log("The PC chose: " + computerSelection);
return computerSelection;
}

function userPlay() {
    /*-> The script will prompt the user to input one choice (rock, paper or scissors) 
and store it in a variable called playerSelection and return it */

let playerSelection = prompt("Please choose one of the following: rock, paper or scissors", "rock");
console.log("The player chose: " + playerSelection);
return playerSelection;
}

// Declare the 2 global constants that can be used by the 3rd function, playRound()
const playerSelection = userPlay();
const computerSelection = computerPlay();

//By this time the script should contain the 2 variables computerSelection and playerSelection. Time to compare them.
function playRound(playerSelection, computerSelection) {

if(playerSelection === "rock") {
    if(computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock.");
    } else if(computerSelection === "scissors") {
        console.log("You won! Rock beats Scissors.")
    } else {
        console.log("The game is a tie.")
    }
}
}
// Display the output of the 3rd function
console.log(playRound(playerSelection, computerSelection));
