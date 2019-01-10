import { setupEl } from '../helpers.js';

const Employee = (employee) => {
	const containDiv = setupEl('div', null, ['toolTip', 'photoContainer']);
	const tipSpan = setupEl('span', null, 'toolTipText', employee.hint ? employee.hint : 'No hint available.');
	const photo = setupEl('img', null, 'photo');

	photo.src = employee.headshot.url;
	photo.dataset.info = JSON.stringify(employee);
	containDiv.appendChild(tipSpan);
	containDiv.appendChild(photo);

	return containDiv;
};

export default Employee;
