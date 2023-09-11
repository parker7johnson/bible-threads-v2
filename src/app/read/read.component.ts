import { Component } from '@angular/core';
import { BibleService } from '../common/services/bible.service';
import { Constants } from '../constants';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent {
  bookMap : any = Constants.BIBLE.bibleBooks;
  chapterText : string = '';
  selectedBook : any = '';
  selectedChapter : any = 1;
  chapters : any[] = [];
  books : any[] = Object.keys(this.bookMap);


  constructor(private bible : BibleService) {
    this.getChapter(Constants.BIBLE.bibleBooks['James'], 1, 'kjv')
  }


  getChapter(bookId : any, chapterId : any, versionId : any) {
    // this.bible.getChapter(bookId, chapterId, versionId).subscribe((response : any) => {
    //   console.log(response)
    //   response.forEach((verse : any) => {
    //     this.chapterText += `${verse.v} ${verse.t}`;
    //   });
    // });
  }

  generateChapterList(book : any) {
    this.selectedBook = book
    this.selectedChapter = 1;
    this.chapters = [];
    let numChapters = this.bookMap[book].chapters;
    for (let i = 0; i < numChapters; i++) {
      this.chapters.push(i+1);
    }
  }

  loadChapter(chapter : any) {
    this.chapterText = `Now in chapter ${chapter} of book ${this.selectedBook}`
    this.getChapter(this.bookMap[this.selectedBook], chapter, 'kjv');
  }

  loadBook(book : any) {
    this.selectedChapter = 1;
    this.chapterText = `Now in chapter ${this.selectedChapter} of book ${book}`
    this.getChapter(this.bookMap[book], this.selectedChapter, 'kjv');
  }

  loadPreviousChapter(){
    if (this.selectedChapter - 1 > 0) {
      this.selectedChapter--;
      this.getChapter(this.bookMap[this.selectedBook], this.selectedChapter, 'kjv');  
    }
  }

  loadNextChapter() {
    const maxChapters = this.bookMap[this.selectedBook].chapters;
    console.log(maxChapters)
    if (this.selectedChapter < maxChapters) {
      this.selectedChapter++;
      this.loadChapter(this.selectedChapter);
    } else {
      const bookNumber = this.chapters[this.books.indexOf(this.selectedBook)];
      this.selectedBook = this.books[bookNumber+1];
      this.loadBook(this.selectedBook)
    }
  }
}
