import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.scss']
})
export class VerseComponent {
  @Input() verse : any = '';
  showComment : boolean = false;

  toggleComment() {
    this.showComment = !this.showComment;
  }

}
