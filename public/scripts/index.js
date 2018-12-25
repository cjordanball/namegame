import Container from './components/container.js';
import getEmployeeData from './helpers.js';

window.addEventListener('load', getEmployeeData());
const test = () => {
	document.body.appendChild(Container);
};
document.addEventListener('load', test());
