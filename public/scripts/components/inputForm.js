import { setupEl } from '../helpers.js';

const InputForm = (id, value, cb) => {
	const form = setupEl('div', id);
	const hintInput = setupEl('input', null, 'hintInput');
	const submitInput = setupEl('button', null, 'button', 'Save & Continue', 'click', cb);

	hintInput.type = 'text';
	hintInput.placeholder = 'Enter a mnemonic phrase to help remember';
	hintInput.value = value === undefined ? null : value;

	form.appendChild(hintInput);
	form.appendChild(submitInput);

	return form;
};

export default InputForm;
