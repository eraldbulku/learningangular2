import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-app',
  template: `<h1>Random Company</h1>
  			<nav>
  				<a routerLink="/departments" routerLinkActive="active">Departments</a>
  				<a routerLink="/employees" routerLinkActive="active">Employees</a>
  			</nav>
  			<router-outlet></router-outlet>
  			`,
  providers: [EmployeeService]
})

export class AppComponent {}
