let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;
let results;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

const resultText = document.querySelector('.result-text');
const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');

rockBtn.addEventListener('click', (e) => {
	playerChoice = 'rock';
	computerChoice = getComputerChoice();
	results = playRound(playerChoice, computerChoice);
	resultText.textContent = results;
	playerScoreDiv.textContent = playerScore;
	computerScoreDiv.textContent = computerScore;

	if (playerScore === 5) {
		resultText.textContent = 'You reached 5 points!! You win!!!';
		playerScore = 0;
		computerScore = 0;
	}

	if (computerScore === 5) {
		resultText.textContent = 'Computer reached 5 points!! You Lose!!!';
		playerScore = 0;
		computerScore = 0;
	}
});

paperBtn.addEventListener('click', (e) => {
	playerChoice = 'paper';
	computerChoice = getComputerChoice();
	results = playRound(playerChoice, computerChoice);
	resultText.textContent = results;
	playerScoreDiv.textContent = playerScore;
	computerScoreDiv.textContent = computerScore;

	if (playerScore === 5) {
		resultText.textContent = 'You reached 5 points!! You win!!!';
		playerScore = 0;
		computerScore = 0;
	}

	if (computerScore === 5) {
		resultText.textContent = 'Computer reached 5 points!! You Lose!!!';
		playerScore = 0;
		computerScore = 0;
	}
});

scissorsBtn.addEventListener('click', (e) => {
	playerChoice = 'scissors';
	computerChoice = getComputerChoice();
	results = playRound(playerChoice, computerChoice);
	resultText.textContent = results;
	playerScoreDiv.textContent = playerScore;
	computerScoreDiv.textContent = computerScore;

	if (playerScore === 5) {
		resultText.textContent = 'You reached 5 points!! You win!!!';
		playerScore = 0;
		computerScore = 0;
	}

	if (computerScore === 5) {
		resultText.textContent = 'Computer reached 5 points!! You Lose!!!';
		playerScore = 0;
		computerScore = 0;
	}
});

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

function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'rock' && computerSelection === 'scissors') {
		playerScore += 1;
		return 'You Win! Rock beats Scissors';
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		computerScore += 1;
		return 'You Lose! Rock beats Paper';
	} else if (playerSelection === 'rock' && computerSelection === 'rock') {
		return 'Even! Rock evens Rock';
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		playerScore += 1;
		return 'You Win! Paper beats Rock';
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		computerScore += 1;
		return 'You Lose! Paper beats Scissors';
	} else if (playerSelection === 'paper' && computerSelection === 'paper') {
		return 'Even! Paper evens Paper';
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		playerScore += 1;
		return 'You Win! Scissors beats Paper';
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		computerScore += 1;
		return 'You Lose! Scissors beats Rock';
	} else if (
		playerSelection === 'scissors' &&
		computerSelection === 'scissors'
	) {
		return 'Even! Scissors evens Scissors';
	} else {
		return;
	}
}
