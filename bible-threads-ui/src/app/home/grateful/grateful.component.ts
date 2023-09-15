import { Component } from '@angular/core';

@Component({
  selector: 'app-grateful',
  templateUrl: './grateful.component.html',
  styleUrls: ['./grateful.component.scss']
})
export class GratefulComponent {
  notes: string[] = [];
  newNote: string = '';

  addNote() {
    if (this.newNote.trim()) {
      this.notes.push(this.newNote);
      this.newNote = '';
    }
    console.log(this.notes)
  }
}
