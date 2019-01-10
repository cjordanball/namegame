import { setupEl } from '../helpers.js';
import Employee from './employee.js';
import EmployeeContainer from './employeeContainer.js';


const FacesGameBoard = (chosen, cb) => {
	const selectedEmployee = chosen[Math.floor(Math.random() * 5)];
	const facesGameDiv = setupEl('div', 'facesGameDiv');
	const employeeContainer = EmployeeContainer();
	chosen.forEach((employee) => {
		employeeContainer.appendChild(Employee(employee));
	});

	const inquiry = setupEl('h2', null, null, `Who is ${selectedEmployee.firstName} ${selectedEmployee.lastName}?`);
	facesGameDiv.appendChild(employeeContainer);
	facesGameDiv.appendChild(inquiry);
	facesGameDiv.addEventListener('click', cb.bind(this, selectedEmployee));

	return facesGameDiv;
};

export default FacesGameBoard;
