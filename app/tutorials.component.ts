import { Component } from '@angular/core';

@Component({
	selector: 'my-tutorials',
	template: `<h2>{{title}}</h2>
				<div [class.myclass]="applyclass">Apply Class</div>
				<div [style.color]="applyblue? 'blue' : 'orange'">This is style binding<div>`,
	styles: [`.myClass{
		color: red;
	}`]
})
export class TutorialsComponent{
	public title = "Tutorials";
	public applyclass = true;
	public applyblue = true;
}
