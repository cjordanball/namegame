import Button from './button.js';
import EmployeeContainer from './employeeContainer.js';
import Employee from './employee.js';
import { employeeData } from '../../services/employeeService.js';
import { employees, choose10 } from '../helpers.js';
import InputForm from './inputForm.js';
import { ScoreDisplay } from './scoreDisplay.js';
import Farewell from './farewell.js';
import FacesGameBoard from './facesGameBoard.js';

const el = document.createElement('div');
let currentList;
const gameData = {
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
// hintSubmit checks the string typed in by the user into the mnemonic hint input box
const hintSubmit = () => {
	const inputField = document.querySelector('input');
	const pattern = /[^\w'.,?!\x20]/;
	if (pattern.test(inputField.value)) {
		inputField.value = '';
		window.alert('Sorry, the hint may contain only letters, numbers, commas, apostrophes and ending punctuation.  Please enter a new hint.');
		return;
	}
	employeeData.selectedEmployee.hint = inputField.value;
	inputField.value = '';
	beginPlay(true);
};

// this function sets up the game, and defines what happens when the play button is pressed.
const beginPlay = (proceed = false) => {
	const chosenFew = getChosen();
	gameData.gameStarted = true;
	if (gameData.mode === 'faces') {
		document.getElementById('gameDivID').appendChild(FacesGameBoard(chosenFew));
		console.log('faces!');
	}

};

const getChosen = () => {
	return choose10(employees.length)
		.map(num => employees[num])
		.filter(employee => (employee.firstName && employee.lastName && employee.slug && employee.headshot.url))
		.slice(0, 5);
}
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
// 		const button = document.getElementById('beginPlayButton');
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
// 		const endButton = document.getElementById('beginPlayButton');
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


const removeOld = () => {
	if (gameData.gameStarted) {
		return;
	}
	if (!currentList) {
		currentList = employees.filter(employee => employee.jobTitle);
	}
	const hotButton = document.getElementById('currentOnlyButton');
	gameData.toggleEmployeeList();
	hotButton.innerText = gameData.allEmployees ? 'Current Staff Only' : 'All Staff';
	if (gameData.gameStarted) {
		beginPlay(null, false);
	}
};

const scoreKeeper = () => {
	console.log('scoreKeeper');
	if (gameData.gameCompleted || gameData.mode === 'names') {
		return;
	}
	const hotNode = document.getElementById('scoreDisplay');
	const hotButton = document.getElementById('keepScoreButton');
	if (ScoreDisplay.keepScore && gameData.gameStarted) {
		hotButton.classList.add('faded');
		window.alert('Once started, scorekeeping cannot be discontinued during game.');
		return;
	}
	if (ScoreDisplay.keepScore) {
		el.removeChild(hotNode);
	} else if (!ScoreDisplay.keepScore) {
		el.appendChild(ScoreDisplay.getScoreDisplay());
		if (gameData.gameStarted) {
			hotButton.classList.add('faded');
		}
	} else {
		el.appendChild(ScoreDisplay);
	}
	ScoreDisplay.toggleScoreKeeping();
	hotButton.innerText = ScoreDisplay.keepScore || gameData.gameStarted ? 'Turn off Score' : 'Keep Score';
	if (gameData.gameCompleted) {
		hotButton.innerText = 'Keep Score';
	}
};

const playModeChanger = () => {
	if (gameData.gameStarted) {
		return;
	}
	gameData.toggleMode();
	document.getElementById('playModeButton').innerText = gameData.mode === 'faces' ? 'Faces to Name' : 'Names to Face';
};

const Container = () => {
	const headline = document.createElement('h1');
	const buttonDiv = document.createElement('div');
	buttonDiv.classList.add('topBar');
	const button1 = Button('Begin', 'beginPlayButton', beginPlay);
	const button2 = Button('Current Staff Only', 'currentOnlyButton', removeOld);
	const button3 = Button('Faces to Name', 'playModeButton', playModeChanger);
	const button4 = Button('Keep Score', 'keepScoreButton', scoreKeeper);
	const gameDiv = document.createElement('div');
	gameDiv.id = 'gameDivID';

	el.id = 'container';

	headline.innerText = 'What Was Your Name? Wait, Wait, Don\'t Tell Me!';
	headline.classList.add('headline');

	el.appendChild(headline);
	buttonDiv.appendChild(button2);
	buttonDiv.appendChild(button3);
	buttonDiv.appendChild(button4);
	el.appendChild(buttonDiv);
	el.appendChild(button1);
	el.appendChild(gameDiv);
	if (ScoreDisplay.keepScore) {
		el.appendChild(ScoreDisplay.getScoreDisplay());
	}
	return el;
};
export default Container();
