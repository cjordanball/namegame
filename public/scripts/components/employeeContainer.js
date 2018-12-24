import Employee from './employee.js';
import employees from '../../services/employeeService.js';


const EmployeeContainer = () => {
	const el = document.createElement('div');
	const employee1 = Employee('Bob', 'https:wwww.zzzzz');
	el.appendChild(employee1);
	return el;
};

export default EmployeeContainer;
