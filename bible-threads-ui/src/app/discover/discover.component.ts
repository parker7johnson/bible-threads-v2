import { Component, OnDestroy, OnInit } from '@angular/core';
import { BibleService } from '../common/services/bible.service';
import { Constants } from '../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnDestroy{
  sortOptions : string[] = ['relevance', 'canonical', 'reverse-canonical']
  searchText = '';
  searchResults: any[] = [];
  selectedSort : string = this.sortOptions[0];
  bookMap : any = Constants.BIBLE.bibleBooks
  firstSearch : boolean = false;
  reverseBookMap : any = Constants.BIBLE.REVERSED_BOOK_IDS;

  constructor(private bible : BibleService,
              private router : Router) {

  }

  ngOnInit() {
    this.firstSearch = false
  }

  ngOnDestroy(): void {
    this.firstSearch = false;
  }



  search() {
    this.firstSearch = true;
    this.bible.searchBible(this.searchText, this.selectedSort).subscribe((response : any) => {
      this.searchResults = response.data.verses
    });
  }

  goToChapter(book : any) {
    console.log(book)
    let bookRef  : any = book.reference.split(' ');
    this.bible.setIds(this.bookMap[this.parseRef(bookRef)].number, book.chapterId.charAt(4))
    // this.router.navigateByUrl('/landing/read');
  }

  private parseRef(bookRef : any) {
    if (bookRef[0].length == 1) {
      console.log(bookRef[0] + ' ' + bookRef[1]);
      return bookRef[0] + ' ' + bookRef[1];
    } else {
      console.log(bookRef[0]);
      return bookRef[0];
    }
  }

  getDestinationLink(verse : any) {
    let bookRef : any = verse.reference.split(' ');
    return `/landing/read/${this.bookMap[this.parseRef(bookRef)].name}/${this.bookMap[this.parseRef(bookRef)].number}/${verse.chapterId.charAt(4)}`
  }
}
