import { Component } from '@angular/core';

@Component({
	selector: 'my-tutorials',
	template: `<h2>Tuts</h2>
			   <h4>Header 4 from Tuts</h4>`,
	styles: [`h4 {
		color: red;
	}`]
})
export class TutorialsComponent{}
