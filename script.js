function getComputerChoice() {
	const arr = ['rock', 'paper', 'scissors'];
	return arr[Math.floor(Math.random() * 3)];
}

const scoreboard = document.querySelector('#scoreboard');
scoreboard.textContent = `Player: 0, Computer: 0, Draw: 0`;

const buttons = document.querySelectorAll('.rps-button');
buttons.forEach((button) =>
	button.addEventListener('click', (e) => {
		let round = playRound(e.target.textContent.toLowerCase(), getComputerChoice());
		updateScoreboard(round);
	})
);

function playRound(playerSelection, computerSelection) {
	const computer = computerSelection;
	const player = playerSelection;
	console.log(`player: ${player}, computer: ${computer}`);
	if (player === computer) return 'Draw!';

	switch (player) {
		case 'rock':
			if (computer === 'paper') return 'You lose! Paper beats rock!';
			else if (computer === 'scissors') return 'You win! Rock beats scissors!';
			break;
		case 'paper':
			if (computer === 'rock') return 'You win! Paper beats rock!';
			else if (computer === 'scissors') return 'You lose! Scissors beats paper!';
			break;
		case 'scissors':
			if (computer === 'rock') return 'You lose! Rock beats scissors!';
			else if (computer === 'paper') return 'You win! Scissors beats paper!';
			break;
		default:
			return 'Invalid input';
	}
}

function game(roundsToWin) {
	let round = '';

	if (playerWins === roundsToWin) return alert('Player won the game!');
	if (computerWins === roundsToWin) return alert('Computer won the game!');
}

// const gameBtn = document.querySelector('#game-btn');
// gameBtn.addEventListener('click', (e) => {
// 	game(5);
// });

let playerWins = 0;
let computerWins = 0;
let draws = 0;

function updateScoreboard(round) {
	if (round.includes('win')) playerWins++;
	else if (round.includes('lose')) computerWins++;
	else if (round.includes('Draw')) draws++;

	scoreboard.textContent = `Player: ${playerWins}, Computer: ${computerWins}, Draws: ${draws}`;
}

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', (e) => {
	playerWins = 0;
	computerWins = 0;
	draws = 0;
	scoreboard.textContent = `Player: ${playerWins}, Computer: ${computerWins}, Draws: ${draws}`;
});
