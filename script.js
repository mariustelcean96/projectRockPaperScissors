    
    /* The task is to create a (simple) Rock Paper Scissors game
    -> The GUI for the moment is not to be considered relevant.
    -> The script will prompt the user to input one choice (rock, paper or scissors) 
and store it in a variable called userChoice
    -> The script will compute a random value between 1 and 3 and will match the value to a predefined choice (e.g. 1 is for rock, etc.)
storing the choice in a variable called pcChoice
    -> By this time the script should contain the 2 variables pcChoice and userChoice. Time to compare them.
    -> Once the comparison is made the output should be: *You/The PC won this game* or *The game is a tie*.
Maybe keep a track of the score with two variables that are incremented each time someone wins.
*/

function computerPlay() {

/*-> The script will prompt the user to input one choice (rock, paper or scissors) 
and store it in a variable called userChoice*/

let userChoice = prompt("Please choose one of the following: rock, paper or scissors", "rock");
console.log("The player chose: " + userChoice);

// Teach the PC to randomly make one 
// of the 3 possible choices and store it in a variable called pcChoice
const possibleChoices = ["rock", "paper", "scissors"];

let randomNumber = Math.floor(Math.random() * 3) + 1;

console.log("The current randomly generated number between 1 and 3 is: " + randomNumber);

    //However, array indexes start with 0 and in order to access indexes 0, 1 and 2:

    /*let forArrayRandomNumber = randomNumber - 1;
    console.log(forArrayRandomNumber);*/

let pcChoice = possibleChoices[randomNumber - 1];

console.log("The PC chose: " + pcChoice);

//By this time the script should contain the 2 variables pcChoice and userChoice. Time to compare them.

if(userChoice === "rock") {
    if(pcChoice === "paper") {
        console.info("You Lose! Paper beats Rock.");
    } else if(pcChoice === "scissors") {
        console.info("You won! Rock beats Scissors.")
    } else {
        console.info("The game is a tie.")
    }
}

}