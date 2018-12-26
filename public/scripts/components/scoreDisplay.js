import { scoreData } from '../../services/employeeService.js';

const ScoreDisplay = () => {
	const scoreDisplay = document.createElement('div');
	const currentScore = document.createElement('div');
	const totalScore = document.createElement('div');
	const currentScoreHeading = document.createElement('p');
	const totalScoreHeading = document.createElement('p');
	const currentScoreBox = document.createElement('div');
	const totalScoreBox = document.createElement('div');

	scoreDisplay.id = 'scoreDisplay';

	currentScore.classList.add('scoreSections');
	totalScore.classList.add('scoreSections');

	currentScoreHeading.classList.add('scoreHeading');
	totalScoreHeading.classList.add('scoreHeading');
	totalScoreHeading.innerText = 'Cumulative Score';
	currentScoreHeading.innerText = 'Points Remaining This Game';

	currentScoreBox.classList.add('scoreBox');
	currentScoreBox.id = 'currentScore';
	currentScoreBox.innerText = scoreData.current;
	totalScoreBox.classList.add('totalScoreBox');
	totalScoreBox.id = 'totalScore';
	totalScoreBox.innerText = scoreData.total;

	currentScore.appendChild(currentScoreHeading);
	currentScore.appendChild(currentScoreBox);
	totalScore.appendChild(totalScoreHeading);
	totalScore.appendChild(totalScoreBox);
	scoreDisplay.appendChild(currentScore);
	scoreDisplay.appendChild(totalScore);

	return scoreDisplay;
};

export default ScoreDisplay();
