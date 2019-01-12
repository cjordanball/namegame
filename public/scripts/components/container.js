import { employees, setupEl, removeNode, choose5 } from '../helpers.js';
import InputForm from './inputForm.js';
import { ScoreDisplay, toggleScore, tallySuccess, tallyFailure, removeScoreDisplay } from './scoreDisplay.js';
import Farewell from './farewell.js';
import FacesGameBoard from './facesGameBoard.js';
import NamesGameBoard from './namesGameBoard.js';

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
};

const quitGame = () => {
	const playButton = document.getElementById('togglePlayButton');
	const inputField = document.querySelector('input');
	const gameDiv = document.getElementById('gameDivID');
	playButton.innerText = 'Play Again';
	removeScoreDisplay();
	if (inputField) {
		removeNode(inputField.parentNode);
	}
	gameDiv.replaceChild(Farewell(), gameDiv.children[0]);
};

const facesCallBack = (selectedEmployee, e) => {
	if (!e.target.dataset.info) {
		return;
	}
	const chosenData = JSON.parse(e.target.dataset.info);
	if (chosenData.id === selectedEmployee.id) {
		Array.from(document.querySelectorAll('img'))
			.forEach((node) => {
				if (node !== e.target) {
					node.classList.add('clickedFail');
				}
			});
		tallySuccess();
		const hintInputForm = InputForm('hintInputForm', chosenData.hint, hintSubmit.bind(this, selectedEmployee));
		document.getElementById('container').appendChild(hintInputForm);
	} else {
		e.target.classList.add('clickedFail');
		tallyFailure();
		ScoreDisplay.updateScoreDisplay();
	}
};

const namesCallBack = (selectedEmployee, e) => {
	const chosenData = JSON.parse(e.target.dataset.info);
	if (chosenData.id === selectedEmployee.id) {
		continuePlay();
	} else {
		e.target.classList.add('red');
	}
};

const togglePlay = () => {
	employeeSelectedList = Array.from(employees);
	gameData.gameStarted = !gameData.gameStarted;
	const playButton = document.getElementById('togglePlayButton');
	const gameDiv = document.getElementById('gameDivID');
	document.getElementById('playModeButton').classList.toggle('faded');
	document.getElementById('currentOnlyButton').classList.toggle('faded');
	if (gameData.gameStarted) {
		const chosen = choose5(employeeSelectedList.length);
		playButton.innerText = 'Quit This Game';
		const gameBoard = gameData.mode === 'faces' ? FacesGameBoard(chosen, facesCallBack) : NamesGameBoard(chosen, namesCallBack);
		if (gameDiv.children.length) {
			gameDiv.replaceChild(gameBoard, gameDiv.children[0]);
		} else {
			gameDiv.appendChild(gameBoard);
		}
	} else {
		quitGame();
	}
};

const continuePlay = () => {
	const gameDiv = document.getElementById('gameDivID');
	const chosen = choose5(employeeSelectedList.length);
	const gameBoard = gameData.mode === 'faces'
		? FacesGameBoard(chosen, facesCallBack)
		: NamesGameBoard(chosen, namesCallBack);
	gameDiv.replaceChild(gameBoard, gameDiv.children[0]);
	ScoreDisplay.scoreData.current = 5;
	ScoreDisplay.updateScoreDisplay();
};

// hintSubmit checks the string typed in by the user into the mnemonic hint input box
const hintSubmit = (selectedEmployee) => {
	const inputField = document.querySelector('input');
	const pattern = /[^\w'.,?!\x20]/;
	if (pattern.test(inputField.value)) {
		inputField.value = '';
		window.alert('Sorry, the hint may contain only letters, numbers, commas, apostrophes and ending punctuation.  Please enter a new hint.');
		return;
	}
	selectedEmployee.hint = inputField.value;
	inputField.value = '';
	removeNode(inputField.parentNode);
	continuePlay();
};

const Container = () => {
	const containerElement = setupEl('div', 'container');
	const headline = setupEl('h1', null, 'headline', 'What Was Your Name? Wait, Wait, Don\'t Tell Me!');
	const featureRow = setupEl('div', null, 'featureBar');
	const toggleOnOffButton = setupEl('button', 'togglePlayButton', 'button', 'Begin', 'click', togglePlay);
	const toggleCurrentEmpButton = setupEl('button', 'currentOnlyButton', 'button', 'Current Staff Only', 'click', toggleEmployeeList);
	const toggleModeButton = setupEl('button', 'playModeButton', 'button', 'Faces to Name', 'click', toggleMode);
	const toggleScoreButton = setupEl('button', 'toggleScoreButton', 'button', 'Keep Score', 'click', toggleScore);
	const gameSpace = setupEl('div', 'gameDivID');
	const scoreSpace = setupEl('scoreDivID');

	containerElement.appendChild(headline);
	containerElement.appendChild(featureRow);
	containerElement.appendChild(toggleOnOffButton);
	containerElement.appendChild(gameSpace);
	containerElement.appendChild(scoreSpace);
	featureRow.appendChild(toggleCurrentEmpButton);
	featureRow.appendChild(toggleModeButton);
	featureRow.appendChild(toggleScoreButton);

	return containerElement;
};
export default Container;
