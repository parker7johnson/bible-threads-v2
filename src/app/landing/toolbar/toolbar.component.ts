import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {


  constructor(private router : Router) {

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
    this.router.navigateByUrl('landing/read');
  }
}