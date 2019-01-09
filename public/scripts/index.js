import Container from './components/container.js';
import getEmployeeData from './helpers.js';

window.addEventListener('load', getEmployeeData());
const container = Container();
document.addEventListener('load', document.body.appendChild(container));
