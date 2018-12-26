const InputForm = (id, value, cb) => {
	const form = document.createElement('div');
	const hintInput = document.createElement('input');
	const submitInput = document.createElement('button');

	form.id = id;

	hintInput.type = 'text';
	hintInput.classList.add('hintInput');
	hintInput.placeholder = 'Enter a mnemonic phrase to help remember';
	hintInput.value = value === undefined ? null : value;

	submitInput.innerText = 'Save & Continue';
	submitInput.classList.add('button');
	submitInput.addEventListener('click', cb);

	form.appendChild(hintInput);
	form.appendChild(submitInput);

	return form;
};

export default InputForm;
