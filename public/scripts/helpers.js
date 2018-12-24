import configObj from './config.js';
import employees from '../services/employeeService.js';

const getEmployeeData = () => {
	fetch(configObj.willowTreeURL)
		.then(res => res.json())
		.then((jsonRes) => {
			employees.push(...jsonRes);
		});
};

export default getEmployeeData;
