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
});

paperBtn.addEventListener('click', (e) => {
	playerChoice = 'paper';
	computerChoice = getComputerChoice();
	results = playRound(playerChoice, computerChoice);
	resultText.textContent = results;
	playerScoreDiv.textContent = playerScore;
	computerScoreDiv.textContent = computerScore;
});

scissorsBtn.addEventListener('click', (e) => {
	playerChoice = 'scissors';
	computerChoice = getComputerChoice();
	results = playRound(playerChoice, computerChoice);
	resultText.textContent = results;
	playerScoreDiv.textContent = playerScore;
	computerScoreDiv.textContent = computerScore;;
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

function getPlayerChoice(playerChoice) {
	return playerChoice;
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

// function game() {
// 	for (let i = 1; i <= 5; i++) {
// 		const playerSelection = getPlayerChoice();
// 		const computerSelection = getComputerChoice();

// 		if (playerSelection === undefined) {
// 			return;
// 		}
// 		console.log(playerSelection, computerSelection);
// 		console.log(playRound(playerSelection, computerSelection));
// 		console.log(playerScore, computerScore);
// 	}

// 	if (playerScore > computerScore) {
// 		return `You Win! You're score: ${playerScore}. Computer score: ${computerScore}`;
// 	} else if (playerScore < computerScore) {
// 		return `You Lose! You're score: ${playerScore}. Computer score: ${computerScore}`;
// 	} else {
// 		return `Even! You're score: ${playerScore}. Computer score: ${computerScore}`;
// 	}
// }

// game();
