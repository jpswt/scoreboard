const playerOneBtn = document.getElementById('player-one-btn');
const playerTwoBtn = document.getElementById('player-two-btn');
const resetBtn = document.getElementById('reset');

const p1score = document.getElementById('score1');
const p2score = document.getElementById('score2');

const winnerText = document.getElementById('winner');

let score1 = 0;
let score2 = 0;

playerOneBtn.addEventListener('click', () => {
	let limit = document.getElementById('limit').value;

	score1++;

	p1score.textContent = score1;

	if (score1 == limit || (score1 > score2 && score1 > limit)) {
		winner();
		playerOneBtn.setAttribute('disabled', 'true');
		playerTwoBtn.setAttribute('disabled', 'true');
	}
});

playerTwoBtn.addEventListener('click', () => {
	let limit = document.getElementById('limit').value;

	score2++;

	p2score.textContent = score2;

	if (score2 == limit || (score2 > score1 && score2 > limit)) {
		winner();
		playerOneBtn.setAttribute('disabled', 'true');
		playerTwoBtn.setAttribute('disabled', 'true');
	}
});

resetBtn.addEventListener('click', () => {
	score1 = 0;
	score2 = 0;
	p1score.textContent = score1;
	p2score.textContent = score2;
	winnerText.textContent = '';
	document.getElementById('limit').value = 5;
	playerOneBtn.removeAttribute('disabled');
	playerTwoBtn.removeAttribute('disabled');
});

const winner = () => {
	if (score1 > score2) {
		winnerText.textContent = 'The winner is Player One';
	} else {
		winnerText.textContent = 'The winner is Player Two';
	}
};
