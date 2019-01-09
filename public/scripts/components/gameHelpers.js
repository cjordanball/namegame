import Button from './button.js';

export const gameData = {
	mode: 'faces',
	gameStarted: false,
	allEmployees: true,
	gameCompleted: false,
	toggleMode() {
		if (this.mode === 'faces') {
			this.mode = 'names';
		} else {
			this.mode = 'faces';
		}
	},
	toggleEmployeeList() {
		this.allEmployees = !this.allEmployees;
	}
};

export const gameFunctions = {
	beginPlay(proceed = false) {
		gameData.gameStarted = true;
		// document.getElementById('playModeButton').classList.add('faded');
		// document.getElementById('currentOnlyButton').classList.add('faded');
		this.toggleOnOff();
		const chosenFew = getChosen();
		const gameBoard = document.getElementById('gameDivID');
		if (gameData.mode === 'faces') {
			gameBoard.appendChild(FacesGameBoard(chosenFew));
		} else if (gameData.mode === 'names') {
			document.getElementById('keepScoreButton').classList.add('faded');
			gameBoard.appendChild(NamesGameBoard(chosenFew));
		}
	},
	quitPlay() {
		console.log('QUIT!');
	},
	toggleOnOff() {
		const el = document.getElementById('container');
		let replacementButton;
		console.log('toggling');
		if (gameData.gameStarted) {
			el.replaceChild(buttonOff, document.getElementById('beginPlayButton'));
		} else {
			el.replaceChild(buttonOn, document.getElementById('quitButton'));
		}
	}
}


// 	removeOld() {
// 		if (gameData.gameStarted) {
// 			return;
// 		}
// 		if (!currentList) {
// 			currentList = employees.filter(employee => employee.jobTitle);
// 		}
// 		const hotButton = document.getElementById('currentOnlyButton');
// 		gameData.toggleEmployeeList();
// 		hotButton.innerText = gameData.allEmployees ? 'Current Staff Only' : 'All Staff';
// 		if (gameData.gameStarted) {
// 			beginPlay(null, false);
// 		}
// 	},
// 	playModeChanger() {
// 		if (gameData.gameStarted) {
// 			return;
// 		}
// 		gameData.toggleMode();
// 		document.getElementById('playModeButton').innerText = gameData.mode === 'faces' ? 'Faces to Name' : 'Names to Face';
// 	},
// 	scoreKeeper() {
// 		console.log('scoreKeeper');
// 		if (gameData.gameCompleted || gameData.mode === 'names') {
// 			return;
// 		}
// 		const hotNode = document.getElementById('scoreDisplay');
// 		const hotButton = document.getElementById('keepScoreButton');
// 		if (ScoreDisplay.keepScore && gameData.gameStarted) {
// 			hotButton.classList.add('faded');
// 			window.alert('Once started, scorekeeping cannot be discontinued during game.');
// 			return;
// 		}
// 		if (ScoreDisplay.keepScore) {
// 			el.removeChild(hotNode);
// 		} else if (!ScoreDisplay.keepScore) {
// 			el.appendChild(ScoreDisplay.getScoreDisplay());
// 			if (gameData.gameStarted) {
// 				hotButton.classList.add('faded');
// 			}
// 		} else {
// 			el.appendChild(ScoreDisplay);
// 		}
// 		ScoreDisplay.toggleScoreKeeping();
// 		hotButton.innerText = ScoreDisplay.keepScore || gameData.gameStarted ? 'Turn off Score' : 'Keep Score';
// 		if (gameData.gameCompleted) {
// 			hotButton.innerText = 'Keep Score';
// 		}
// 	}
// }
