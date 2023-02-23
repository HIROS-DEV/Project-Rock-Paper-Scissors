// Create getRandomNumber function that will randomly return "0" "1" "2".

function getRandomNumber() {
	return Math.floor(Math.random() * 3);
}

// Create getComputerChoice function that will randomly return either "Rock", "Paper", "Scissors"
// If the random number will return 0, getComputerChoice will return "Rock"...

function getComputerChoice() {
	const computerShapes = getRandomNumber();
	switch (computerShapes) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
		default:
			break;
	}
}

// Create getPlayerChoice function that will return user's input(use prompt function)
function getPlayerChoice() {
	const playerShapes = prompt('Rock! Paper! Scissors!');

	if (playerShapes === null) return;

	switch (playerShapes.toLowerCase()) {
		case 'rock':
			return 'rock';
		case 'paper':
			return 'paper';
		case 'scissors':
			return 'scissors';
		default:
			return getPlayerChoice();
	}
}

const computerSelection = getComputerChoice();

// Create single playRound function. The function should take two parameters - playerSelection and computerSelection
// This function returns a string  ex:"You Lose! Paper beats Rock"

// Write a game function. Call the playRound function inside of this one to play a 5 round game.
// Show the score and reports a winner or loser at the end..
