import { Component } from '@angular/core';

@Component({
  selector: 'app-next-read',
  templateUrl: './next-read.component.html',
  styleUrls: ['./next-read.component.scss']
})
export class NextReadComponent {
  notes: string[] = [];
  newNote: string = '';

  addNote() {
    if (this.newNote.trim()) {
      this.notes.push(this.newNote);
      this.newNote = '';
    }
    console.log(this.notes)
  }

  deleteItem(index : any) {
    this.notes.splice(index, 1);
  }
}
