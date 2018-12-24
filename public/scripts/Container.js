import Button from './components/button.js';

const buttonFunc = () => {
	console.log('Button!!');
};

const Container = () => {
	const el = document.createElement('div');
	el.classList.add('container');
	el.innerText = 'Excuse me, what are you?';
	const button1 = Button('Push', buttonFunc);
	el.appendChild(button1);
	return el;
};

export default Container();
