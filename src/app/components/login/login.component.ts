import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;


  constructor(
      public fb: FormBuilder
  ) { }

  ngOnInit() {
	this.loginForm = this.createForm();
  }


  public createForm() {
    return this.fb.group({
		firstName: new FormControl('', [Validators.required]),
		lastName: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required]),
		phone: new FormControl('', []),
		message: new FormControl('', []),
	 });
  }


     onSubmit() {
         console.log(this.loginForm);
	 }

}
