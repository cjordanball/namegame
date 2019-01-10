import Employee from './employee.js';
import EmployeeContainer from './employeeContainer.js';
// import { ScoreDisplay } from './scoreDisplay.js';
// import InputForm from './inputForm.js';
// import { employees } from '../helpers.js';


const FacesGameBoard = (chosen, cb) => {
	const selectedEmployee = chosen[Math.floor(Math.random() * 5)];
	const facesGameDiv = document.createElement('div');
	facesGameDiv.id = 'facesGameDiv';
	const employeeContainer = EmployeeContainer();
	chosen.forEach((employee) => {
		employeeContainer.appendChild(Employee(employee));
	});

	const inquiry = document.createElement('h2');
	inquiry.innerText = `Who is ${selectedEmployee.firstName} ${selectedEmployee.lastName}?`;

	facesGameDiv.appendChild(employeeContainer);
	facesGameDiv.appendChild(inquiry);
	facesGameDiv.addEventListener('click', cb);

	return facesGameDiv;
};

export default FacesGameBoard;
