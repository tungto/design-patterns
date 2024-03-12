/**
 * A class should responsible for only 1 activity and only have one cause to change (includes modules and function )
 */

class BadStudent {
	public createStudentAccount() {
		//
	}

	public calculateStudentGrade() {
		//
	}

	public generateStudentData() {
		//
	}
}

/**
 * Each responsible above should separate into
 * different class
 */

class StudentAccount {
	public createStudentAccount() {
		//
	}
}

class StudentGrade {
	public calculateStudentGrade() {
		//
	}
}

class StudentData {
	public generateStudentData() {
		//
	}
}
