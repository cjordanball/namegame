export const employees = [];

// uncomment the following line if using local JSON data
import data from '../data.js';

const willowTreeURL = 'https://willowtreeapps.com/api/v1.0/profiles/';

const getEmployeeData = () => {
	// the following can be uncommented to use the JSON data from a local file
	employees.push(...data.people);
	// fetch(willowTreeURL)
	// 	.then(res => res.json())
	// 	.then((jsonRes) => {
	// 		employees.push(...jsonRes);
	// 	})
	// 	.catch((err) => {
	// 		console.log('ERR: ', err);
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
