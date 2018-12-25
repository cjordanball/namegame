import Button from './button.js';
import EmployeeContainer from './employeeContainer.js';
import Employee from './employee.js';
import employees, { employeeData, scoreData } from '../../services/employeeService.js';
import { choose10 } from '../helpers.js';
import InputForm from './inputForm.js';
import ScoreDisplay from './scoreDisplay.js';

const el = document.createElement('div');

const buttonFunc = () => {
	scoreData.current = 5;
	document.getElementById('currentScore').innerText = scoreData.current;
	const button = el.querySelector('button');

	button.innerText = 'Play Again!';
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
			scoreData.total += scoreData.current;
			scoreData.current = 0;
			document.getElementById('currentScore').innerText = scoreData.current;
			document.getElementById('totalScore').innerText = scoreData.total;
			buttonFunc();
			console.log('Hurray!');
		} else {
			scoreData.current = Math.max(0, --scoreData.current);
			document.getElementById('currentScore').innerText = scoreData.current;
			console.log('Sorry!');
		}
	});

	el.replaceChild(ScoreDisplay, document.getElementById('scoreDisplay'));
	if (el.contains(gameDiv)) {
		console.log('child');
	} else {
		el.insertBefore(gameDiv, document.getElementById('scoreDisplay'));
	}
};

const removeOld = () => {
	employees = employees.filter(employee => employee.jobTitle);
};

const Container = () => {
	const headline = document.createElement('h1');
	const button1 = Button('Choose', buttonFunc);
	const button2 = Button('Current Only', removeOld);

	el.id = 'container';

	headline.innerText = 'What Was Your Name? Wait, Wait, Don\'t Tell Me!';
	headline.classList.add('headline');

	el.appendChild(headline);
	el.appendChild(button1);
	el.appendChild(button2);
	el.appendChild(InputForm);
	el.appendChild(ScoreDisplay);
	return el;
};

export default Container();
