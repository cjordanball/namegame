const employees = [];

export const employeeData = {
	selectedEmployee: undefined
};

export const scoreData = {
	total: 0,
	current: 0
};

export const gameData = {
	mode: 'faces',
	keepScore: false,
	allEmployees: true,
	gameStarted: false,
	gameCompleted: false,
	toggleMode() {
		if (this.mode === 'faces') {
			this.mode = 'names';
		} else {
			this.mode = 'faces';
		}
	},
	toggleScoreKeeping() {
		this.keepScore = !this.keepScore;
	},
	toggleEmployeeList() {
		this.allEmployees = !this.allEmployees;
	}
};

export default employees;
