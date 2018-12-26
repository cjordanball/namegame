const Button = (text, id, cb) => {
	const button = document.createElement('button');
	button.innerText = text;
	button.id = id;
	button.classList.add('button');
	button.addEventListener('click', cb);
	return button;
};

export default Button;
