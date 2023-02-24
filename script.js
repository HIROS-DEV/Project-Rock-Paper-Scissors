function getRandomNumber() {
	return Math.floor(Math.random() * 3);
}

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

function getPlayerChoice() {
	const playerChoice = prompt('Rock! Paper! Scissors!');

	if (playerChoice === null) {
		return;
	}

	switch (playerChoice.toLowerCase()) {
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

function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'rock' && computerSelection === 'scissors') {
		return 'You Win! Rock beats Scissors';
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		return 'You Lose! Rock beats Paper';
	} else if (playerSelection === 'rock' && computerSelection === 'rock') {
		return 'Even! Rock evens Rock';
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		return 'You Win! Paper beats Rock';
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		return 'You Lose! Paper beats Scissors';
	} else if (playerSelection === 'paper' && computerSelection === 'paper') {
		return 'Even! Paper evens Paper';
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		return 'You Win! Scissors beats Paper';
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		return 'You Lose! Scissors beats Rock';
	} else if (
		playerSelection === 'scissors' &&
		computerSelection === 'scissors'
	) {
		return 'Even! Scissors evens Scissors';
	} else {
		return 'Error! Sorry, something happens';
	}
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

// Create single playRound function. The function should take two parameters - playerSelection and computerSelection
// This function returns a string  ex:"You Lose! Paper beats Rock"

// Write a game function. Call the playRound function inside of this one to play a 5 round game.
// Show the score and reports a winner or loser at the end..
