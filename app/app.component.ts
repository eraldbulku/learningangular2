import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html'
})
export class AppComponent {
	myName = "Kobi";
	myEmail = "Kobi@gmail.com";
	onSubmit(value:any) {
		console.log(value);
	}
}
