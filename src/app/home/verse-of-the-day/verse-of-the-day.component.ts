import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verse-of-the-day',
  templateUrl: './verse-of-the-day.component.html',
  styleUrls: ['./verse-of-the-day.component.scss']
})
export class VerseOfTheDayComponent {
  @Input() verseText: string = 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.';
  @Input() verseReference: string = 'John 3:16';
}
