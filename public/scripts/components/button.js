const Button = (text, cb) => {
	const button = document.createElement('button');
	button.innerText = text;
	button.classList.add('button');
	button.addEventListener('click', cb);
	return button;
};

export default Button;
