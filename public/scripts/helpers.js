export const employees = [];
// uncomment the following line if using local JSON data
import data from '../data.js';

const willowTreeURL = 'https://willowtreeapps.com/api/v1.0/profiles/';

const getEmployeeData = () => {
	// the following can be uncommented to use the JSON data from a local file
	employees.push(...data.people);
	// uncomment the following lines to hit WillowTree for employee data
	// fetch(willowTreeURL)
	// 	.then(res => res.json())
	// 	.then((jsonRes) => {
	// 		employees.push(...jsonRes);
	// 	})
	// 	.catch((err) => {
	// 		console.log('ERR: ', err);
	// 	});
};

export const setupEl = (type = 'div', id, classes, content = '', event, cb) => {
	const element = document.createElement(type);
	const classArr = classes && (Array.isArray(classes) ? classes : [classes]);
	if (id) {
		element.id = id;
	}
	if (classArr) {
		classArr.forEach((className) => {
			element.classList.add(className);
		});
	}
	element.innerText = content;
	if (event) {
		element.addEventListener(event, cb);
	}
	return element;
};

export const choose5 = (arrLength) => {
	const resArray = [];
	while (resArray.length < 5) {
		const newEntry = Math.floor(Math.random() * arrLength);
		if (!resArray.includes(newEntry)
			&& employees[newEntry].firstName
			&& employees[newEntry].lastName
			&& employees[newEntry].slug
			&& employees[newEntry].headshot.alt !== 'Logo'
			&& employees[newEntry].headshot.url
			&& employees[newEntry].headshot.alt.slice(0, 6) !== 'Willow'
		) {
			resArray.push(employees[newEntry]);
		}
	}
	return resArray;
};

export const removeNode = (node) => {
	if (node) {
		const parent = node.parentNode;
		parent.removeChild(node);
	}
};

export default getEmployeeData;
