import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
	getEmployees(){
		return [
			{"id": 1, "name": "Andi", "gender": "Male"},
			{"id": 2, "name": "Kobi", "gender": "Male"},
			{"id": 3, "name": "Christina", "gender": "Female"},
			{"id": 4, "name": "Elena", "gender": "Female"}
		]
	}
}