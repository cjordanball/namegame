const Employee = (employee) => {
	const photo = document.createElement('img');
	photo.src = employee.headshot.url;
	photo.dataset.info = JSON.stringify(employee);
	photo.classList.add('photo');
	return photo;
};

export default Employee;
