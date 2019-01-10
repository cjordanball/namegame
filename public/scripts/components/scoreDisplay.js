import { setupEl, removeNode } from '../helpers.js';

export const ScoreDisplay = {

	keepScore: false,
	scoreData: {
		total: 0,
		current: 0
	},
	allowScore: true,
	// a method to take the two score values and update the display;
	updateScoreDisplay() {
		if (this.keepScore) {
			document.getElementById('currentScore').innerText = this.scoreData.current;
			document.getElementById('totalScore').innerText = this.scoreData.total;
		}
	},
	// returns the empty display element for the score
	getScoreDisplay() {
		const scoreDisplay = setupEl('div', 'scoreDisplay');
		const currentScore = setupEl('div', null, 'scoreSections');
		const totalScore = setupEl('div', null, 'scoreSections');
		const currentScoreHeading = setupEl('p', null, 'scoreHeading', 'Points Remaining This Game');
		const totalScoreHeading = setupEl('p', null, 'scoreHeading', 'Cumulative Score');
		const currentScoreBox = setupEl('div', 'currentScore', 'scoreBox', this.scoreData.current);
		const totalScoreBox = setupEl('div', 'totalScore', 'totalScoreBox', this.scoreData.total);

		currentScore.appendChild(currentScoreHeading);
		currentScore.appendChild(currentScoreBox);
		totalScore.appendChild(totalScoreHeading);
		totalScore.appendChild(totalScoreBox);
		scoreDisplay.appendChild(currentScore);
		scoreDisplay.appendChild(totalScore);

		return scoreDisplay;
	},

	//
	toggleScoreKeeping() {
		this.keepScore = !this.keepScore;
	}
};

export const tallySuccess = () => {
	if (ScoreDisplay.keepScore) {
		console.log('tallyHo');
		ScoreDisplay.scoreData.total += ScoreDisplay.scoreData.current;
		ScoreDisplay.scoreData.current = 0;
		ScoreDisplay.updateScoreDisplay();
	}
};

export const tallyFailure = () => {
	if (ScoreDisplay.keepScore && ScoreDisplay.scoreData.current > 0) {
		ScoreDisplay.scoreData.current--;
	}
};


export const removeScoreDisplay = () => {
	const scoreDisplay = document.getElementById('scoreDisplay');
	removeNode(scoreDisplay);
};

export const toggleScore = () => {
	console.log('toggleScore!');
	if (!ScoreDisplay.allowScore) {
		return;
	}
	const scoreButton = document.getElementById('toggleScoreButton');
	const container = document.getElementById('container');
	ScoreDisplay.keepScore = !ScoreDisplay.keepScore;
	if (ScoreDisplay.keepScore) {
		scoreButton.innerText = 'Turn Off Score';
		container.appendChild(ScoreDisplay.getScoreDisplay());
	} else {
		const scoreDisplay = document.getElementById('scoreDisplay');
		scoreButton.innerText = 'Keep Score';
		container.removeChild(scoreDisplay);
		Object.assign(ScoreDisplay.scoreData, {
			total: 0,
			current: 0
		});
	}
};
