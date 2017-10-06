import { Component } from '@angular/core';

@Component({
	selector: 'my-tutorials',
	template: `<h2>{{title}}</h2>
				<img [src]="imgLink"><br><br>
				<input type="text" value="Angular">`
})
export class TutorialsComponent{
	public title = "Tutorials";
	public imgLink = "http://lorempixel.com/400/200";
}
