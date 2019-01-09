import Employee from './employee.js';
import EmployeeContainer from './employeeContainer.js';
import { ScoreDisplay } from './scoreDisplay.js';
import InputForm from './inputForm.js';
import { employees } from '../helpers.js';


const NamesGameBoard = (chosen) => {
	const selectedEmployee = chosen[Math.floor(Math.random() * 5)]
	const namesGameDiv = document.createElement('div');
	namesGameDiv.id = 'namesGameDiv';
	const employeeContainer = EmployeeContainer();
	namesGameDiv.appendChild(Employee(selectedEmployee));

	const inquiry = document.createElement('h2');
	inquiry.innerText = 'Whose mug is this?';

	namesGameDiv.appendChild(employeeContainer);
	namesGameDiv.appendChild(inquiry);

	const nameContainer = document.createElement('div');
	nameContainer.classList.add('nameList');
	chosen.forEach((employee) => {
		const textSpan = document.createElement('span');
		textSpan.dataset.info = JSON.stringify(employee);
		textSpan.classList.add('nameEntry');
		const textNode = document.createTextNode(`${employee.firstName} ${employee.lastName}`);
		textSpan.appendChild(textNode);
		nameContainer.appendChild(textSpan);
	});
	namesGameDiv.appendChild(nameContainer);

	// facesGameDiv.addEventListener('click', (e) => {
	// 	console.log('e.', e.target.dataset.info);
	// 	const chosenData = JSON.parse(e.target.dataset.info);
	// 	if (chosenData.id === selectedEmployee.id) {
	// 		console.log('hit!');
	// 		Array.from(document.querySelectorAll('img'))
	// 			.forEach(pic => pic.classList.add('clickedFail'));
	// 		e.target.classList.remove('clickedFail');
	// 		if (ScoreDisplay.keepScore) {
	// 			ScoreDisplay.scoreData.total += ScoreDisplay.scoreData.current;
	// 			ScoreDisplay.scoreData.current = 0;
	// 			ScoreDisplay.updateScoreDisplay()
	// 		}
	// 		const hintInputForm = InputForm('hintInputForm', chosenData.hint, hintSubmit);
	// 		console.log('hintInputform: ', hintInputForm);
	// 			facesGameDiv.appendChild(hintInputForm);
	// 	} else {
	// 		e.target.classList.add('clickedFail');
	// 		if (ScoreDisplay.keepScore) {
	// 			ScoreDisplay.scoreData.current = Math.max(0, --ScoreDisplay.scoreData.current);
	// 			ScoreDisplay.updateScoreDisplay();
	// 		}
	// 	}
	// });

	return namesGameDiv;
}

export default NamesGameBoard;





// 			employeeCont.appendChild(Employee(employeeData.selectedEmployee));
// 			gameDiv.appendChild(employeeCont);
// 			gameDiv.appendChild(inquiry);
//
//
