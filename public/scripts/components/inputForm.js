import { employeeData } from '../../services/employeeService.js';

const InputForm = () => {
	const form = document.createElement('div');
	const hintInput = document.createElement('input');
	const submitInput = document.createElement('button');

	hintInput.type = 'text';
	hintInput.classList.add('hintInput');
	hintInput.placeholder = 'Enter a mnemonic phrase to help remember';

	const hintSubmit = () => {
		employeeData.selectedEmployee.hint = hintInput.value;
		console.log('Hint Submitted: ', hintInput.value);
		console.log('sE: ', employeeData.selectedEmployee);
	};

	submitInput.innerText = 'Save Hint';
	submitInput.addEventListener('click', hintSubmit);

	form.appendChild(hintInput);
	form.appendChild(submitInput);

	return form;
};

export default InputForm();
