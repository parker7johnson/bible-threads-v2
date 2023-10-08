import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router : Router,
              private afAuth : AngularFireAuth,
              private fireStore : AngularFirestore) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Handle form submission and authentication
  onSubmit() {
    const email = this.loginForm.get('email');
    const password = this.loginForm.get('password');
    if (this.loginForm.valid && email && password) {
      let emailValue : string = email.value;
      let pwValue = password.value;
      this.afAuth.signInWithEmailAndPassword(emailValue, pwValue)
        .then(resp => {
          localStorage.setItem('userId', resp.user?.uid as string);
          localStorage.setItem("userName", resp.user?.displayName as string);
          this.router.navigateByUrl('/landing/home');
        })
        .catch(error => alert(`There was a log in error ${error}`))
    }
  }

  navigateToRegisterPage() {
   return '/register';
  }
}
