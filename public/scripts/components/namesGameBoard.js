import Employee from './employee.js';
import EmployeeContainer from './employeeContainer.js';
import { setupEl } from '../helpers.js';


const NamesGameBoard = (chosen, cb) => {
	const selectedEmployee = chosen[Math.floor(Math.random() * 5)];
	const namesGameDiv = setupEl('div', 'namesGameDiv');
	const employeeContainer = EmployeeContainer();
	namesGameDiv.appendChild(Employee(selectedEmployee));

	const inquiry = document.createElement('h2');
	inquiry.innerText = 'Whose mug is this?';

	namesGameDiv.appendChild(employeeContainer);
	namesGameDiv.appendChild(inquiry);

	const nameContainer = setupEl('div', null, 'nameList');
	chosen.forEach((employee) => {
		const textSpan = setupEl('span', null, 'nameEntry');
		textSpan.dataset.info = JSON.stringify(employee);
		const textNode = document.createTextNode(`${employee.firstName} ${employee.lastName}`);
		textSpan.appendChild(textNode);
		nameContainer.appendChild(textSpan);
	});
	namesGameDiv.appendChild(nameContainer);
	namesGameDiv.addEventListener('click', cb.bind(null, selectedEmployee));

	return namesGameDiv;
};

export default NamesGameBoard;
