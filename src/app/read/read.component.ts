import { Component, OnInit } from '@angular/core';
import { BibleService } from '../common/services/bible.service';
import { Constants } from '../constants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit{
  bookMap : any = Constants.BIBLE.bibleBooks;
  reverseBookMap : any = Constants.BIBLE.REVERSED_BOOK_IDS;
  books : any[] = Object.keys(this.bookMap);
  chapterText : string = '';
  currentBookIndex : number = 0;
  selectedBook : any = this.bookMap[this.books[0]].number;
  selectedChapter : any = 1;
  chapters : any[] = [];
  clickableVerses: string[] = [];
  bibleVersion : string = 'kjv'
  bookName : string = ''

  constructor(private bible : BibleService, 
              private http : HttpClient,
              private route : ActivatedRoute) {
    

  }

  ngOnInit(): void {
    if (this.route.params) {
      this.route.params.subscribe((params : any) => {
        this.selectedBook = params['bookId'];
        this.selectedChapter = params['chapterId'];
        this.bookName = params['bookName']
      });
    } else {
      this.bookName = 'Genesis';
      this.selectedBook = '1';
    }
    this.loadBook(this.selectedBook)
  }

  getChapter(bookId : any, chapterId : any, versionId : any) {
    this.clickableVerses = [];
    this.chapterText = "";
    this.bible.getChapter(String (bookId), String (chapterId), String (versionId)).subscribe((response : any) => {
      console.log(response)
      response.forEach((verse : any) => {
        const clickableVerse = `<span class="clickable-verse" data-verse="${verse.v}"><a>${verse.v} ${verse.t}</a> </span> `;
        this.clickableVerses.push(clickableVerse);
      });
      this.chapterText = this.clickableVerses.join('');
    });
  }

  generateChapterList(book : any) {
    console.log(book)
    this.selectedBook = book
    this.selectedChapter = 1;
    this.chapters = [];
    console.log(this.bookMap[this.bookName])
    let numChapters = this.bookMap[this.bookName].chapters;
    for (let i = 0; i < numChapters; i++) {
      this.chapters.push(i+1);
    }
  }

  loadChapter(chapter : any) {
    this.getChapter(this.bookMap[this.bookName].number, chapter, this.bibleVersion);
  }

  loadBook(book : any) {
    this.generateChapterList(book);
    this.selectedChapter = 1;
    this.getChapter(this.bookMap[this.bookName].number, this.selectedChapter, this.bibleVersion);
  }

  loadPreviousChapter(){
    if (this.selectedChapter - 1 > 0) {
      this.selectedChapter--;
      this.getChapter(this.bookMap[this.bookName].number, this.selectedChapter, this.bibleVersion);  
    }
  }

  loadNextChapter() {
    this.currentBookIndex = this.books.indexOf(this.selectedBook);
    const maxChapters = this.bookMap[this.bookName].chapters;
    console.log(maxChapters)
    if (this.selectedChapter < maxChapters) {
      this.selectedChapter++;
      this.loadChapter(this.selectedChapter);
    } else {
      console.log(this.books.indexOf(this.selectedBook))
      this.selectedBook = this.books[++this.currentBookIndex];
      this.loadBook(this.selectedBook)
    }
  }
}
