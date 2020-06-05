import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submit: boolean;
  errorMsg: string;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private loginService: LoginService) { }

  login() {
    this.submit = true;
    this.loginService.login(this.loginForm.value).subscribe(
      data => {
        console.log(data)
        if (data) {
          localStorage.setItem('username', this.loginForm.value.email);
          this.router.navigate(['/home']);
        } else {
          this.errorMsg = 'Invalid Email/password';
          this.submit = false;
        }
      },
      error => {
        this.errorMsg = error;
        this.submit = false;
      }
    );
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
  }

}
