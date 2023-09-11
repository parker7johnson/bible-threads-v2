import { Component } from '@angular/core';

@Component({
  selector: 'app-verses',
  templateUrl: './verses.component.html',
  styleUrls: ['./verses.component.scss']
})
export class VersesComponent {
  favoriteVerses: string[] = [
    'James 1:10-12',
    'John 10:10',
    'John 3:16'
  ];
}

