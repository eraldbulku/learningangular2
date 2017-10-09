import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'my-tutorials',
	template: `<h2>{{name}}</h2>
				<h2>{{name | uppercase}}</h2>
				<h2>{{name | lowercase}}</h2>
				<h2>{{name | slice:'2':'4'}}</h2>
				<h2>{{name | replace:'The':'Hello'}}</h2>

				<h2>{{8.567}}</h2>
				<h2>{{8.567 | number:'1.2-3'}}</h2>
				<h2>{{8.567 | number:'2.2-3'}}</h2>
				<h2>{{8.567 | number:'2.4-4'}}</h2>
				<h2>{{8.567 | number:'2.2-2'}}</h2>
				<h2>{{8.99 | currency:'EUR':true}}</h2>

				<h2>{{date}}</h2>
				<h2>{{date | date:'fullDate'}}</h2>
				<h2>{{date | date:'shortDate'}}</h2>
				<h2>{{date | date:'mediumTime'}}</h2>
				<h2>{{date | date:'shortTime'}}</h2>
				`,
  	
})
export class TutorialsComponent{
	name = 'TheKobi';
	date = new Date();
}
