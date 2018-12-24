const Employee = (name, imgURL) => {
	const photo = document.createElement('img');
	photo.src = imgURL;
	photo.classList.add('photo');
	return photo;
};

export default Employee;
