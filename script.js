function getComputerChoice() {
	const arr = ['rock', 'paper', 'scissors'];
	return arr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	const computer = computerSelection();
	const player = playerSelection.toLowerCase();
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
	let playerWins = 0;
	let computerWins = 0;
	let draws = 0;

	while (true) {
		let round = playRound(prompt('Rock or Paper or Scissors?'), getComputerChoice);

		if (round.includes('win')) playerWins++;
		else if (round.includes('lose')) computerWins++;
		else if (round.includes('Draw')) draws++;

		console.log(`Player: ${playerWins}, Computer: ${computerWins}, Draws: ${draws}`);

		if (playerWins === roundsToWin) return alert('Player won the game!');
		if (computerWins === roundsToWin) return alert('Computer won the game!');
	}
}

game(2);
