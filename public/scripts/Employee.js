const Employee = (name, imgURL) => {
	const photo = document.createElement('img');
	photo.src = imgURL;
	return photo;
};

export default Employee();
