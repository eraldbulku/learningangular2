import { Component } from '@angular/core';

@Component({
	selector: 'my-tutorials',
	template: `<h2>{{title}}</h2>
				<button (click)="onClick(demoInput.value, $event)">Click Me</button>
				<input type="text" #demoInput>`
})
export class TutorialsComponent{
	public title = "Tutorials";

	onClick(value, e) {
		console.log(value, e);
	}
}
