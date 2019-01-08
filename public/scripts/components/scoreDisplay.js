export const ScoreDisplay = {

	keepScore: false,
	scoreData: {
		total: 0,
		current: 0
	},
	// a method to take the two score values and update the display;
	updateScoreDisplay() {
		document.getElementById('currentScore').innerText = this.scoreData.current;
		document.getElementById('totalScore').innerText = this.scoreData.total;
	},
	// returns the empty display element for the score
	getScoreDisplay() {
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
		currentScoreBox.innerText = this.scoreData.current;
		totalScoreBox.classList.add('totalScoreBox');
		totalScoreBox.id = 'totalScore';
		totalScoreBox.innerText = this.scoreData.total;

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
}
