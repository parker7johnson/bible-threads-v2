import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bible-threads';

  private baseUrl = 'https://iq-bible.p.rapidapi.com/GetChapter';
  private apiKey = '9c73945e73mshd8f2a1405bab1c0p1ec095jsn37547d41e941';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }
  
}
