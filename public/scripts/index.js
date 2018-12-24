import Container from './components/container.js';
import getEmployeeData from './helpers.js';
import employees from '../services/employeeService.js';

window.addEventListener('load', getEmployeeData());
const test = () => {
	document.body.appendChild(Container)
};
document.addEventListener('load', test());
console.log('employs: ', employees);
