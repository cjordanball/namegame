import { employees, choose5 } from '../helpers.js';

const Employee = (employee) => {
	const containDiv = document.createElement('div');
	const tipSpan = document.createElement('span');
	const photo = document.createElement('img');

	containDiv.classList.add('toolTip', 'photoContainer');

	photo.src = employee.headshot.url;
	photo.dataset.info = JSON.stringify(employee);
	photo.classList.add('photo');

	tipSpan.innerText = employee.hint ? employee.hint : 'No hint available.';
	tipSpan.classList.add('toolTipText');

	containDiv.appendChild(tipSpan);
	containDiv.appendChild(photo);

	return containDiv;
};

export const getChosen = () => choose5(employees.length)
	.map(num => employees[num])
	.filter(employee => (employee.firstName && employee.lastName && employee.slug && employee.headshot.url));

export default Employee;
