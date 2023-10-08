import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../common/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router : Router,
              private authService : AuthService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email : ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Handle form submission and authentication
  onSubmit() {
    const userBody = {
      userName : this.registerForm.get('username'),
      email : this.registerForm.get('email'),
      password : this.registerForm.get('password')
    }
    if (this.registerForm.valid && userBody.email && userBody.password && userBody.userName) {
      const user = {
        userName : userBody.userName.value,
        email : userBody.email.value,
        password : userBody.password.value
      };
      console.log(user);

      this.authService.register(user).subscribe(
        success => {
          localStorage.setItem("userName", user.userName);
          this.router.navigateByUrl('/landing/home');
        },
        error => {
          alert(`There was an error during registration : ${error}`);
        }
      )

    }
  }
}
