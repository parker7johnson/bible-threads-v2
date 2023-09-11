import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router : Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Handle form submission and authentication
  onSubmit() {
    const username = this.loginForm.get('username');
    const password = this.loginForm.get('password');
    if (this.loginForm.valid && username && password) {
      let un = username.value;
      localStorage.setItem("username", un);
      let pw = password.value;
      console.log(un, pw);
      this.router.navigateByUrl('/landing/home');
    }
  }
}
