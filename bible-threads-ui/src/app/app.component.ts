import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app'
import { fireBaseConfig } from 'firebaseconfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bible-threads';


  constructor() {}

  ngOnInit(): void {
    initializeApp(fireBaseConfig);
  }
  
}
