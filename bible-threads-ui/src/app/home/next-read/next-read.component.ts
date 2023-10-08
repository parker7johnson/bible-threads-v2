import { Component } from '@angular/core';

@Component({
  selector: 'app-next-read',
  templateUrl: './next-read.component.html',
  styleUrls: ['./next-read.component.scss']
})
export class NextReadComponent {
  readingList: string[] = [];
  nextRead: string = '';

  addReadingItem() {
    if (this.nextRead.trim()) {
      this.readingList.push(this.nextRead);
      this.nextRead = '';
    }
    console.log(this.readingList)
  }

  deleteItem(index : any) {
    this.readingList.splice(index, 1);
  }
}
