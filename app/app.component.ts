import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
  			  <h2>Parent App Component</h2>
  			  <label>Enter Parent AppComponent Value</label>
  			  <input type="text" #ptext (keyup)="0">
  			  <p>Value from Child TutorialsComponent is {{childData}}</p>
  			 <my-tutorials [parentData]="ptext.value" (childEvent)="childData=$event"></my-tutorials>`,
  directives: [TutorialsComponent]
})
export class AppComponent { 
	public childData:string;
}
