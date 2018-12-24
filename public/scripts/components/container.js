import Button from './button.js';
import EmployeeContainer from './employeeContainer.js';
import employees from '../../services/employeeService.js';

const el = document.createElement('div');

const buttonFunc = () => {
	console.log('employees: ', employees);
	const employeeCont = EmployeeContainer();
	el.appendChild(employeeCont);
	console.log('Button!!: ', el);
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
