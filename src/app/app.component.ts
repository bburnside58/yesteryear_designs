import { Component } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators,
	AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	myForm: FormGroup;
	sku: any;
	
	constructor(fb: FormBuilder) { 
		this.myForm = fb.group({
      	'sku':  ['sku', Validators.required]
    	});
	
		this.sku = this.myForm.controls['sku']; 

	}
	
	onSubmit(value: string): void { 
		console.log('you submitted value: ', value);
	} 
}
