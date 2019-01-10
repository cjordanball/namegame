import Button from './button.js';
import { employees } from '../helpers.js';
// import EmployeeContainer from './employeeContainer.js';
import { getChosen } from './employee.js';
// import { employeeData } from '../../services/employeeService.js';
// import InputForm from './inputForm.js';
import { ScoreDisplay, toggleScore } from './scoreDisplay.js';
import Farewell from './farewell.js';
import FacesGameBoard from './facesGameBoard.js';
import NamesGameBoard from './namesGameBoard.js';
// import { gameData, gameFunctions } from './gameHelpers.js';

let employeeSelectedList;
const gameData = {
	mode: 'faces',
	gameStarted: false,
	allEmployees: true,
	gameCompleted: false
};

const toggleMode = () => {
	const modeButton = document.getElementById('playModeButton');
	const scoreButton = document.getElementById('toggleScoreButton');
	if (gameData.mode === 'faces') {
		gameData.mode = 'names';
		ScoreDisplay.allowScore = false;
		scoreButton.classList.add('faded');
		modeButton.innerText = 'Names to Face';
	} else {
		gameData.mode = 'faces';
		modeButton.innerText = 'Faces to Names';
		scoreButton.classList.remove('faded');
		ScoreDisplay.allowScore = true;
	}
};

const toggleEmployeeList = () => {
	if (gameData.gameStarted) {
		return;
	}
	const allEmplButton = document.getElementById('currentOnlyButton');
	gameData.allEmployees = !gameData.allEmployees;
	allEmplButton.innerText = gameData.allEmployees ? 'Switch to Current Staff Only' : 'Switch to All Staff';
	employeeSelectedList = gameData.allEmployees ? employees : employees.filter(employee => employee.jobTitle);
	console.log('esl: ', employeeSelectedList);
};

const quitGame = () => {
	const playButton = document.getElementById('togglePlayButton');
	const gameDiv = document.getElementById('gameDivID');
	playButton.innerText = 'Play Again';
	gameDiv.replaceChild(Farewell(), gameDiv.children[0]);
	console.log('duck');
};

const facesCallBack = (selectedEmployee, e) => {
	const chosenData = JSON.parse(e.target.dataset.info);
	console.log('e: ', chosenData);
	console.log('selEmp: ', selectedEmployee);
	if (chosenData.id === selectedEmployee.id) {
		console.log('hit');
		Array.from(document.querySelectorAll('img'))
			.forEach(pic => pic.classList.add('clickedFail'));
	// 					e.target.classList.remove('clickedFail');
	// 					if (ScoreDisplay.keepScore) {
	// 						ScoreDisplay.scoreData.total += ScoreDisplay.scoreData.current;
	// 						ScoreDisplay.scoreData.current = 0;
	// 						ScoreDisplay.updateScoreDisplay()
	// 					}
	// 					const hintInputForm = InputForm('hintInputForm', chosenData.hint, hintSubmit);
	// 					el.appendChild(hintInputForm);
	} else {
		console.log('missed!');
		e.target.classList.add('clickedFail');
	// 					if (ScoreDisplay.keepScore) {
	// 						ScoreDisplay.scoreData.current = Math.max(0, --ScoreDisplay.scoreData.current);
	// 						ScoreDisplay.updateScoreDisplay();
	// 					}
	}
				// });
};

const togglePlay = () => {
	console.log('begin');
	gameData.gameStarted = !gameData.gameStarted;
	const playButton = document.getElementById('togglePlayButton');
	const gameDiv = document.getElementById('gameDivID');
	document.getElementById('playModeButton').classList.toggle('faded');
	document.getElementById('currentOnlyButton').classList.toggle('faded');
	if (gameData.gameStarted) {
		const chosen = getChosen();
		playButton.innerText = 'Quit';
		const gameBoard = gameData.mode === 'faces' ? FacesGameBoard(chosen, facesCallBack) : NamesGameBoard(chosen);
		// gameBoard.id = 'gameBoard';
		if (gameDiv.children.length) {
			gameDiv.replaceChild(gameBoard, gameDiv.children[0]);
		} else {
			gameDiv.appendChild(gameBoard);
		}
	} else {
		quitGame();
	}


	// 	if (gameDiv.children.length) {
	// 		gameDiv.replaceChild(faceBoard, gameDiv.children[0]);
	// 	} else {
	// 		gameDiv.appendChild(gameBoard);
	// 	}
	// 	playButton.innerText = 'Quit';
	// } else {
	// 	console.log('id: ', gameDiv.children);
	// 	playButton.innerText = 'Begin';
	// 	gameDiv.replaceChild(Farewell(), gameDiv.children[0]);
	// }
	// gameHelpers.toggleOnOff();
	// const chosenFew = getChosen();
	// const gameBoard = document.getElementById('gameDivID');
	// if (gameData.mode === 'faces') {
	// 	gameBoard.appendChild(FacesGameBoard(chosenFew));
	// } else if (gameData.mode === 'names') {
	// 	document.getElementById('keepScoreButton').classList.add('faded');
	// 	gameBoard.appendChild(NamesGameBoard(chosenFew));
};





// Object.assign(gameHelpers, {
// 	// this function sets up the game, and defines what happens when the play button is pressed.
// 	beginPlay(proceed = false) {
// 		console.log('begin');
// 		gameData.gameStarted = true;
// 		document.getElementById('playModeButton').classList.add('faded');
// 		document.getElementById('currentOnlyButton').classList.add('faded');
// 		gameHelpers.toggleOnOff();
// 		const chosenFew = getChosen();
// 		const gameBoard = document.getElementById('gameDivID');
// 		if (gameData.mode === 'faces') {
// 			gameBoard.appendChild(FacesGameBoard(chosenFew));
// 		} else if (gameData.mode === 'names') {
// 			document.getElementById('keepScoreButton').classList.add('faded');
// 			gameBoard.appendChild(NamesGameBoard(chosenFew));
// 		}

	// },
	// quitPlay() {
	// 	console.log('QUIT!');
	// },
	// toggleOnOff() {
	// 	console.log('toggling');
	// 	if (gameData.gameStarted) {
	// 		el.replaceChild(document.getElementById('togglePlayButton'), buttonOff);
	// 	} else {
	// 		el.replaceChild(document.getElementById('quitButton'), buttonOn);
	// 	}
	// },
	//
	// playModeChanger() {
	// 	if (gameData.gameStarted) {
	// 		return;
	// 	}
	// 	gameData.toggleMode();
	// 	document.getElementById('playModeButton').innerText = gameData.mode === 'faces' ? 'Faces to Name' : 'Names to Face';
	// },
	// scoreKeeper() {
	// 	console.log('scoreKeeper');
	// 	if (gameData.gameCompleted || gameData.mode === 'names') {
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
// });







// hintSubmit checks the string typed in by the user into the mnemonic hint input box
// const hintSubmit = (selectedEmployee) => {
// 	console.log(employees);
// 	console.log('SE: ', selectedEmployee);
// 	const inputField = document.querySelector('input');
// 	const pattern = /[^\w'.,?!\x20]/;
// 	if (pattern.test(inputField.value)) {
// 		inputField.value = '';
// 		window.alert('Sorry, the hint may contain only letters, numbers, commas, apostrophes and ending punctuation.  Please enter a new hint.');
// 		return;
// 	}
// 	selectedEmployee.hint = inputField.value;
// 	inputField.value = '';
// 	beginPlay(true);
// };




// 	gameData.gameCompleted = false;
// 	// the second evaluation is necessary for when the game is started and the user hits the go-on button
// 	// if this is false, it means the user has clicked on the button to quit the game.
// 	if (!gameData.gameStarted || proceed) {
// 		if (ScoreDisplay.keepScore === true) {
// 			document.getElementById('keepScoreButton').classList.add('faded');
// 		}
// 		Array.from(document.querySelectorAll('#hintInputForm')).forEach(input => el.removeChild(input));
// 		const farewellSection = document.getElementById('farewellDiv');
// 		if (farewellSection) {
// 			el.removeChild(farewellSection);
// 		}
// 		gameData.gameStarted = true;
// 		document.getElementById('playModeButton').classList.add('faded');
// 		document.getElementById('currentOnlyButton').classList.add('faded');
// 		if (ScoreDisplay.keepScore) {
// 			ScoreDisplay.scoreData.current = 5;
// 			ScoreDisplay.updateScoreDisplay();
// 		}
// 		const button = document.getElementById('togglePlayButton');
//
// 		button.innerText = 'Stop Playing';
// 		const preGameDiv = document.getElementById('gameDivID');
// 		if (preGameDiv) {
// 			el.removeChild(preGameDiv);
// 		}
//
// 		const employeeCont = EmployeeContainer();
// 		const chosenFew = choose10(employees.length)
// 			.map(num => employees[num])
// 			.filter(employee => (employee.firstName && employee.lastName && employee.slug
// 			&& employee.headshot.url))
// 			.slice(0, 5);
// 		if (gameData.mode === 'faces') {
// 			chosenFew.forEach((employee) => {
// 				employeeCont.appendChild(Employee(employee));
// 			});
// 			gameDiv.appendChild(employeeCont);
// 			employeeData.selectedEmployee = chosenFew[Math.floor(Math.random() * 5)];
// 			const inquiry = document.createElement('h2');
// 			inquiry.innerText = `Who is ${employeeData.selectedEmployee.firstName} ${employeeData.selectedEmployee.lastName}?`;
// 			gameDiv.appendChild(inquiry);
// 			gameDiv.addEventListener('click', (e) => {
// 				const chosenData = JSON.parse(e.target.dataset.info);
// 				if (chosenData.id === employeeData.selectedEmployee.id) {
// 					Array.from(document.querySelectorAll('img'))
// 						.forEach(pic => pic.classList.add('clickedFail'));
// 					e.target.classList.remove('clickedFail');
// 					if (ScoreDisplay.keepScore) {
// 						ScoreDisplay.scoreData.total += ScoreDisplay.scoreData.current;
// 						ScoreDisplay.scoreData.current = 0;
// 						ScoreDisplay.updateScoreDisplay()
// 					}
// 					const hintInputForm = InputForm('hintInputForm', chosenData.hint, hintSubmit);
// 					el.appendChild(hintInputForm);
// 				} else {
// 					e.target.classList.add('clickedFail');
// 					if (ScoreDisplay.keepScore) {
// 						ScoreDisplay.scoreData.current = Math.max(0, --ScoreDisplay.scoreData.current);
// 						ScoreDisplay.updateScoreDisplay();
// 					}
// 				}
// 			});
// 		} else if (gameData.mode === 'names') {
// 			document.getElementById('keepScoreButton').classList.add('faded');
// 			employeeData.selectedEmployee = chosenFew[Math.floor(Math.random() * 5)];
// 			const inquiry = document.createElement('h2');
// 			inquiry.innerText = 'Whose mug is this?';
// 			employeeCont.appendChild(Employee(employeeData.selectedEmployee));
// 			gameDiv.appendChild(employeeCont);
// 			gameDiv.appendChild(inquiry);
//
// 			const nameContainer = document.createElement('div');
// 			nameContainer.classList.add('nameList');
// 			chosenFew.forEach((employee) => {
// 				const textSpan = document.createElement('span');
// 				textSpan.dataset.info = JSON.stringify(employee);
// 				textSpan.classList.add('nameEntry');
// 				const textNode = document.createTextNode(`${employee.firstName} ${employee.lastName}`);
// 				textSpan.appendChild(textNode);
// 				nameContainer.appendChild(textSpan);
// 			});
// 			gameDiv.appendChild(nameContainer);
// 			gameDiv.addEventListener('click', (e) => {
// 				const chosenData = JSON.parse(e.target.dataset.info);
// 				if (chosenData.id === employeeData.selectedEmployee.id) {
// 					beginPlay(null, true);
// 				} else {
// 					e.target.classList.add('red');
// 				}
// 			});
// 		}
//
// 		if (!el.contains(gameDiv)) {
// 			el.insertBefore(gameDiv, document.getElementById('scoreDisplay'));
// 		}
// 	} else {
// 		el.appendChild(Farewell());
// 		gameData.gameCompleted = true;
// 		const gamePlay = document.getElementById('gameDivID');
// 		const hintForm = document.getElementById('hintInputForm');
// 		const endButton = document.getElementById('togglePlayButton');
// 		const pointsForm = document.getElementById('scoreDisplay');
// 		const scoreButton = document.getElementById('keepScoreButton');
// 		endButton.innerText = 'Play Again';
// 		gameData.gameStarted = false;
// 		ScoreDisplay.keepScore = false;
// 		scoreButton.classList.remove('faded');
// 		scoreButton.innerText = 'Keep Score';
// 		ScoreDisplay.scoreData.current = 0;
// 		ScoreDisplay.scoreData.total = 0;
// 		ScoreDisplay.updateScoreDisplay();
// 		// const crrtScore = document.getElementById('currentScore');
// 		// const ttlScore = document.getElementById('totalScore');
// 		// if (crrtScore && ttlScore) {
// 		// 	crrtScore.innerText = 0;
// 		// 	ttlScore.innerText = 0;
// 		// }
// 		document.getElementById('playModeButton').classList.remove('faded');
// 		document.getElementById('currentOnlyButton').classList.remove('faded');
// 		el.removeChild(gamePlay);
// 		if (hintForm) {
// 			el.removeChild(hintForm);
// 		}
// 		if (pointsForm) {
// 			el.removeChild(pointsForm);
// 		}
// 	}
// }


const Container = () => {
	const containerElement = document.createElement('div');
	const headline = document.createElement('h1');
	const featureRow = document.createElement('div');
	const toggleOnOffButton = Button('Begin', 'togglePlayButton', togglePlay);
	const toggleCurrentEmpButton = Button('Current Staff Only', 'currentOnlyButton', toggleEmployeeList);
	const toggleModeButton = Button('Faces to Name', 'playModeButton', toggleMode);
	const toggleScoreButton = Button('Keep Score', 'toggleScoreButton', toggleScore);
	const gameSpace = document.createElement('div');
	const scoreSpace = document.createElement('div');

	containerElement.id = 'container';
	headline.classList.add('headline');
	headline.innerText = 'What Was Your Name? Wait, Wait, Don\'t Tell Me!';
	featureRow.classList.add('featureBar');
	gameSpace.id = 'gameDivID';
	scoreSpace.id = 'scoreDivID';


	containerElement.appendChild(headline);
	featureRow.appendChild(toggleCurrentEmpButton);
	featureRow.appendChild(toggleModeButton);
	featureRow.appendChild(toggleScoreButton);
	containerElement.appendChild(featureRow);
	containerElement.appendChild(toggleOnOffButton);
	containerElement.appendChild(gameSpace);
	containerElement.appendChild(scoreSpace);
	return containerElement;
};
export default Container;
