import configObj from './config.js';
import employees from '../services/employeeService.js';

console.log('config: ', configObj.willowTreeURL);


const getEmployeeData = () => {
	fetch(configObj.willowTreeURL)
		.then((res) => {
			return res.json();
		})
		.then((jsonRes) => {
			employees.push(...jsonRes);
		});
};


export {
	getEmployeeData
}
