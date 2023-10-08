import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {


  constructor(private router : Router,
              private afAuth : AngularFireAuth) {

  }

  navigateToLanding() {
    this.router.navigateByUrl('landing/home');
  }

  navigateToDiscover() {
    this.router.navigateByUrl('landing/discover');
  }

  navigateToChat() {
    this.router.navigateByUrl('landing/chat');
  }

  navigateToLearn() {
    this.router.navigateByUrl('landing/learn');
  }

  navigateToRead() {
    this.router.navigateByUrl('landing/read/Genesis/1/1');
  }

  onLogout() {
    this.afAuth.signOut()
      .then(() => {
        console.log('localStorage before logout : ' + Object.keys(localStorage));
        localStorage.clear();
        console.log('localStorage after logout : ' + Object.keys(localStorage));

        this.router.navigateByUrl('/login');
      })
      .catch(error => alert(error));
  }
}