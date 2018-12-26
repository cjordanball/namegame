const employees = [];

export const employeeData = {
	selectedEmployee: undefined
};

export const scoreData = {
	total: 0,
	current: 0
};

export const gameData = {
	mode: 'nameToFaces',
	keepScore: false,
	allEmployees: true,
	gameStarted: false,
	toggleMode() {
		if (this.mode === 'nameToFaces') {
			this.mode = 'faceToNames';
		} else {
			this.mode = 'nameToFaces';
		}
		console.log('mode: ', this.mode);
	},
	toggleScoreKeeping() {
		this.keepScore = !this.keepScore;
		console.log('keepscore: ', this.keepScore);
	},
	toggleEmployeeList() {
		this.allEmployees = !this.allEmployees;
	}
};

export default employees;
