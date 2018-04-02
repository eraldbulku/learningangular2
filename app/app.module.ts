import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list.component';
import { DepartmentListComponent } from './department-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ 
  	BrowserModule, 
  	HttpModule, 
  	RouterModule.forRoot([
  		{path: 'departments', component: DepartmentListComponent},
  		{path: 'employees', component: EmployeeListComponent}
  	]) 
  ],
  declarations: [ AppComponent, EmployeeListComponent, EmployeeDetailComponent, DepartmentListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
