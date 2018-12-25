import Button from './button.js';
import EmployeeContainer from './employeeContainer.js';
import Employee from './employee.js';
import employees from '../../services/employeeService.js';
import { choose10 } from '../helpers.js';

const el = document.createElement('div');

const buttonFunc = () => {
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
	const needle = chosenFew[Math.floor(Math.random() * 5)];
	const inquiry = document.createElement('h2');
	inquiry.innerText = `Who is ${needle.firstName} ${needle.lastName}?`;
	gameDiv.appendChild(inquiry);
	gameDiv.addEventListener('click', (e) => {
		const chosenData = JSON.parse(e.target.dataset.info);
		if (chosenData.id === needle.id) {
			console.log('Hurray!');
		} else {
			console.log('Sorry!');
		}
	});


	if (el.contains(gameDiv)) {
		console.log('child');
	} else {
		el.appendChild(gameDiv);
	}
};

const Container = () => {
	const headline = document.createElement('h1');
	headline.innerText = 'What Was Your Name? Wait, Wait, Don\'t Tell Me!';
	headline.classList.add('headline');
	el.id = 'container';
	el.appendChild(headline);
	const button1 = Button('Choose', buttonFunc);
	el.appendChild(button1);
	return el;
};

export default Container();
