import Employee from './employee.js';
import EmployeeContainer from './employeeContainer.js';
import { ScoreDisplay } from './scoreDisplay.js';



const FacesGameBoard = (chosen) => {
	const selectedEmployee = chosen[Math.floor(Math.random() * 5)]
	const facesGameDiv = document.createElement('div');
	facesGameDiv.id = 'facesGameDiv';
	const employeeContainer = EmployeeContainer();
	chosen.forEach((employee) => {
		employeeContainer.appendChild(Employee(employee));
	});

	const inquiry = document.createElement('h2');
	inquiry.innerText = `Who is ${selectedEmployee.firstName} ${selectedEmployee.lastName}?`;

	facesGameDiv.appendChild(employeeContainer);
	facesGameDiv.appendChild(inquiry);

	facesGameDiv.addEventListener('click', (e) => {
		const chosenData = JSON.parse(e.target.dataset.info);
		if (chosenData.id === selectedEmployee.id) {
			console.log('hit!');
			Array.from(document.querySelectorAll('img'))
				.forEach(pic => pic.classList.add('clickedFail'));
			e.target.classList.remove('clickedFail');
			if (ScoreDisplay.keepScore) {
				ScoreDisplay.scoreData.total += ScoreDisplay.scoreData.current;
				ScoreDisplay.scoreData.current = 0;
				ScoreDisplay.updateScoreDisplay()
			}
			const hintInputForm = InputForm('hintInputForm', chosenData.hint, hintSubmit);
			el.appendChild(hintInputForm);
		} else {
			e.target.classList.add('clickedFail');
			if (ScoreDisplay.keepScore) {
				ScoreDisplay.scoreData.current = Math.max(0, --ScoreDisplay.scoreData.current);
				ScoreDisplay.updateScoreDisplay();
			}
		}
	});

	return facesGameDiv;
}

export default FacesGameBoard;

	// chosenFew.forEach((employee) => {
	// 	employeeCont.appendChild(Employee(employee));
	// });
	// gameDiv.appendChild(employeeCont);
	// employeeData.selectedEmployee = chosenFew[Math.floor(Math.random() * 5)];
	//
	//
	// });
