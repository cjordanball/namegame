import configObj from './config.js';
import employees from '../services/employeeService.js';
import data from '../data.js';

const getEmployeeData = () => {
	employees.push(...data.people);
	// fetch(configObj.willowTreeURL)
	// 	.then(res => res.json())
	// 	.then((jsonRes) => {
	// 		employees.push(...jsonRes);
	// 	});
};

export const choose10 = (arrLength) => {
	const resArray = [];
	while (resArray.length < 10) {
		const newEntry = Math.floor(Math.random() * arrLength);
		if (!resArray.includes(newEntry)) {
			resArray.push(newEntry);
		}
	}
	return resArray;
};

export default getEmployeeData;
