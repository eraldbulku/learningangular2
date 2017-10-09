import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'my-tutorials',
	template: `<h2>Child Turorials Component</h2>
				<label>Enter Child TutorialsComponent Value</label>
				<input type="text" #childtext (keyup)="onChange(childtext.value)">
  			    <p>Value from Parent AppComponent is </p>
  			    {{parentData}}`,
  	inputs: ['parentData'],
  	outputs: ['childEvent']

})
export class TutorialsComponent{
	public parentData: string;
	childEvent = new EventEmitter<string>();
	onChange(value:string){
		this.childEvent.emit(value);
	}
}
