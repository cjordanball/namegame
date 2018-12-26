import Button from './button.js';
import EmployeeContainer from './employeeContainer.js';
import Employee from './employee.js';
import employees, { gameData, employeeData, scoreData } from '../../services/employeeService.js';
import { choose10 } from '../helpers.js';
import InputForm from './inputForm.js';
import ScoreDisplay from './scoreDisplay.js';
import Farewell from './farewell.js';

const el = document.createElement('div');
let currentList;

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
	buttonFunc(null, true);
};

function buttonFunc(e, proceed = false) {
	gameData.gameCompleted = false;
	if (!gameData.gameStarted || proceed) {
		if (gameData.keepScore === true) {
			document.getElementById('keepScoreButton').classList.add('faded');
		}
		Array.from(document.querySelectorAll('#hintInputForm')).forEach(input => el.removeChild(input));
		const farewellSection = document.getElementById('farewellDiv');
		if (farewellSection) {
			el.removeChild(farewellSection);
		}
		gameData.gameStarted = true;
		document.getElementById('currentOnlyButton').classList.add('faded');
		if (gameData.keepScore) {
			scoreData.current = 5;
			document.getElementById('currentScore').innerText = scoreData.current;
		}
		const button = document.getElementById('beginPlayButton');

		button.innerText = 'Stop Playing';
		const preGameDiv = document.getElementById('gameDivID');
		if (preGameDiv) {
			el.removeChild(preGameDiv);
		}
		const gameDiv = document.createElement('div');
		gameDiv.id = 'gameDivID';
		const employeeCont = EmployeeContainer();
		const chosenFew = choose10(employees.length)
			.map(num => employees[num])
			.filter(employee => (employee.firstName && employee.lastName && employee.slug
			&& employee.headshot.url))
			.slice(0, 5);
		chosenFew.forEach((employee) => {
			employeeCont.appendChild(Employee(employee));
		});
		gameDiv.appendChild(employeeCont);
		// const needle = chosenFew[Math.floor(Math.random() * 5)];
		employeeData.selectedEmployee = chosenFew[Math.floor(Math.random() * 5)];
		const inquiry = document.createElement('h2');
		inquiry.innerText = `Who is ${employeeData.selectedEmployee.firstName} ${employeeData.selectedEmployee.lastName}?`;
		gameDiv.appendChild(inquiry);
		gameDiv.addEventListener('click', (e) => {
			const chosenData = JSON.parse(e.target.dataset.info);
			if (chosenData.id === employeeData.selectedEmployee.id) {
				Array.from(document.querySelectorAll('img'))
					.forEach(pic => pic.classList.add('clickedFail'));
				e.target.classList.remove('clickedFail');
				if (gameData.keepScore) {
					scoreData.total += scoreData.current;
					scoreData.current = 0;
					document.getElementById('currentScore').innerText = scoreData.current;
					document.getElementById('totalScore').innerText = scoreData.total;
				}
				const hintInputForm = InputForm('hintInputForm', chosenData.hint, hintSubmit);
				el.appendChild(hintInputForm);
			} else {
				e.target.classList.add('clickedFail');
				if (gameData.keepScore) {
					scoreData.current = Math.max(0, --scoreData.current);
					document.getElementById('currentScore').innerText = scoreData.current;
				}
			}
		});

		// el.replaceChild(ScoreDisplay, document.getElementById('scoreDisplay'));
		if (el.contains(gameDiv)) {
		} else {
			el.insertBefore(gameDiv, document.getElementById('scoreDisplay'));
		}
	} else {
		gameData.gameCompleted = true;
		const gamePlay = document.getElementById('gameDivID');
		const hintForm = document.getElementById('hintInputForm');
		const endButton = document.getElementById('beginPlayButton');
		const pointsForm = document.getElementById('scoreDisplay');
		const scoreButton = document.getElementById('keepScoreButton');
		endButton.innerText = 'Begin';
		gameData.gameStarted = false;
		gameData.keepScore = false;
		scoreButton.classList.remove('faded');
		document.getElementById('currentOnlyButton').classList.remove('faded');
		el.removeChild(gamePlay);
		if (hintForm) {
			el.removeChild(hintForm);
		}
		if (pointsForm) {
			el.removeChild(pointsForm);
		}
		el.appendChild(Farewell());
	}
}


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
		buttonFunc(null, false);
	}
};

const scoreKeeper = () => {
	if (gameData.gameCompleted) {
		return;
	}
	const hotNode = document.getElementById('scoreDisplay');
	const hotButton = document.getElementById('keepScoreButton');
	if (gameData.keepScore && gameData.gameStarted) {
		hotButton.classList.add('faded');
		window.alert('Once started, scorekeeping cannot be discontinued during game.');
		return;
	}
	if (gameData.keepScore) {
		el.removeChild(hotNode);
	} else if (!gameData.keepScore) {
		el.appendChild(ScoreDisplay);
		if (gameData.gameStarted) {
			hotButton.classList.add('faded');
		}
	} else {
		el.appendChild(ScoreDisplay);
	}
	gameData.toggleScoreKeeping();
	hotButton.innerText = gameData.keepScore || gameData.gameStarted ? 'Turn off Score' : 'Keep Score';
	if (gameData.gameCompleted) {
		hotButton.innerText = 'Keep Score';
	}
};

const Container = () => {
	const headline = document.createElement('h1');
	const buttonDiv = document.createElement('div');
	buttonDiv.classList.add('topBar');
	const button1 = Button('Begin', 'beginPlayButton', buttonFunc);
	const button2 = Button('Current Staff Only', 'currentOnlyButton', removeOld);
	const button3 = Button('Faces to Name', 'playModeButton', gameData.toggleMode);
	const button4 = Button('Keep Score', 'keepScoreButton', scoreKeeper);

	el.id = 'container';

	headline.innerText = 'What Was Your Name? Wait, Wait, Don\'t Tell Me!';
	headline.classList.add('headline');

	el.appendChild(headline);
	buttonDiv.appendChild(button2);
	buttonDiv.appendChild(button3);
	buttonDiv.appendChild(button4);
	el.appendChild(buttonDiv);
	el.appendChild(button1);
	// el.appendChild(InputForm);
	if (gameData.keepScore) {
		el.appendChild(ScoreDisplay);
	}
	return el;
};

export default Container();
