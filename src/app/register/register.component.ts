import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RegisterService} from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submit: boolean;
  errorMsg: string;
  successMsg: string;


  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private registerService: RegisterService) { }

  
	register()
	{
		    this.submit = true;

		this.registerService.register(this.registerForm.value).subscribe(
      data => {
        if (data) {
			this.successMsg = data['message'];
          //this.router.navigate(['/home']);
        } else {
          this.errorMsg = 'Invalid Email/password';
          this.submit = false;
        }
      },
      error => {
	    console.log(error)
        this.errorMsg = error;
        this.submit = false;
      }
    );
	};
	
	
    
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      name: ['', [Validators.required]],
	  account_type: ['', [Validators.required]],
	  password: ['', [Validators.required]]
    });
  }

}
