import Container from './Container.js';
import { getEmployeeData } from './helpers.js';
import employees from '../services/employeeService.js';

window.addEventListener('load', getEmployeeData());
const test = function() {document.body.appendChild(Container)};
console.log('torst: ', employees);
document.addEventListener('load', test());
