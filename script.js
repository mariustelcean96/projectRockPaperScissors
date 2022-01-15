/* The task is to create a (simple) Rock Paper Scissors game */

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function computerPlay() {
  const possibleChoices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerSelection = possibleChoices[randomNumber - 1];
  console.log("The PC chose: " + computerSelection);
  return computerSelection;
}

function userPlay(playerSelection) {
  return playerSelection;
}

const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
  userPlay(e.target.value);
  });
});

// Declare the 2 constants that can be used by the 3rd function, playRound()
const playerSelection = userPlay();
const computerSelection = computerPlay();      
// 2 variables, computerSelection and playerSelection. Time to compare them.
function playRound(playerSelection, computerSelection) {
  if(playerSelection === "rock") {
    if(computerSelection === "paper") {
      computerScore++;
      console.log("You Lose! Paper beats Rock. Computer score is: " + computerScore);
    } else if(computerSelection === "scissors") {
      playerScore++;
      console.log("You won! Rock beats Scissors. Player score is: " + playerScore);
    } else {
      console.log("The game is a tie."); 
      tieScore++; 
    }
} else if(playerSelection === "paper") {
    if(computerSelection === "rock") {
      playerScore++;
      console.log("You won! Paper beats Rock. Player score is: " + playerScore);
    } else if(computerSelection === "scissors") {
      computerScore++;
      console.log("You Lose! Scissors beat Paper. Computer score is: " + computerScore);
    } else {
      console.log("The game is a tie.");
      tieScore++;
    }
} else if(playerSelection === "scissors") {
    if(computerSelection === "paper") {
      playerScore++;
      console.log("You won! Scissors beat Paper. Player score is: " + playerScore);
    } else if(computerSelection === "rock") {
      computerScore++;
      console.log("You Lose! Rock beats Scissors. Computer score is: " + computerScore);
    } else {
      console.log("The game is a tie.");
      tieScore++;  
    }
}
}

// Display the output of the 3rd function
 // console.log(playRound(playerSelection, computerSelection));

// Display final results:
const para = document.querySelector('p');
para.textContent = "Computer: " + computerScore + '. ' + "Player: " + playerScore + '. ' + "Tie: " + tieScore;
console.log("Computer final score is: " + computerScore);
console.log("Player final score is: " + playerScore);
