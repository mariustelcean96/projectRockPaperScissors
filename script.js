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

const infoDiv = document.querySelector('.info');
const para = document.createElement('p');
infoDiv.appendChild(para);

function showIntro() {
  para.textContent = 'Hi! Welcome to my game.';
}
showIntro();
//let timeoutID = setTimeout(showIntro, 5000);
const score = document.querySelector('.score');
const paraScore = document.createElement('p');
score.appendChild(paraScore);
const paraWinner = document.createElement('p');
score.appendChild(paraWinner);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    para.textContent = '';
    const computerSelection = computerPlay();
    if (e.target.value === "rock") {
        if (computerSelection === "rock") {
            para.textContent = 'The game is a tie.';
            tieScore++;
        } else if (computerSelection === "paper") {
            para.textContent = 'You lose. Paper beats rock.' ;
            computerScore++;
        } else {
            para.textContent = 'You won. Rock beats scissors.';
            playerScore++;
        }
    } else if (e.target.value === "paper") {
      if (computerSelection === "rock") {
        para.textContent = 'You won. Paper beats Rock.';
        playerScore++;
      } else if (computerSelection === "scissors") {
        para.textContent = 'You lose. Scissors beat Paper.';
        computerScore++;
      } else {
        tieScore++;
        para.textContent = 'The game is a tie.';
      }
    } else if (e.target.value === 'scissors') {
      if (computerSelection === "paper") {
        para.textContent = 'You won. Scissors beat Paper.';
        playerScore++;
      } else if (computerSelection === "rock") {
        para.textContent = 'You lose. Rock beats Scissors.';
        computerScore++;
      } else {
        tieScore++;
        para.textContent = 'The game is a tie.';
      }
    }
paraScore.textContent = 'PC:' + computerScore + ' ' + 'User:' + playerScore + ' ' + 'Tie:' + tieScore;
if(computerScore === 5 || playerScore === 5 || tieScore === 5) {
  if (computerScore > playerScore && computerScore > tieScore) {
    paraWinner.textContent = 'The winner is the PC. Computer supremacy! 1010101...';
  } else if (playerScore > computerScore && playerScore > tieScore) {
    paraWinner.textContent = 'You are the winner. Congratulations! User supremacy. ATGCTGCCATTTAT...';
  } else {
    paraWinner.textContent = 'Nobody wins. The game is a tie.';
  }
}
  });
});

/* The task is to create a (simple) Rock Paper Scissors game 

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
console.log("Player final score is: " + playerScore); */
