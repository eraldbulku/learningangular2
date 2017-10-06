import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
  		     <h4>Header 4 from App Component</h4>
  			 <my-tutorials></my-tutorials>`,
  styles: [`h4 {
  	color: blue;
  }`],
  directives: [TutorialsComponent]
})
export class AppComponent { }
